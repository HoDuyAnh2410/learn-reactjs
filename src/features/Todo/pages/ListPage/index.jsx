import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useState, useEffect, useMemo } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',

      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);

    //clone current array to new one
    const newTodoList = [...todoList];

    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    //newTodoList[idx] = newTodoList;

    //update status
    setTodoList(newTodoList);
  };

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);
  const handleShowAllClick = () => {
    //setFilteredStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    //setFilteredStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    //setFilteredStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === 'all' || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  //console.log(renderedTodoList);

  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}

export default ListPage;
