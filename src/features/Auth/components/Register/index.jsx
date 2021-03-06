import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    //console.log('Form submit: ', values);
    try {
      //Auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      //console.log('New user: ', user);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('Register successfully.', { variant: 'success' });
    } catch (error) {
      console.log('Fail to register: ', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
