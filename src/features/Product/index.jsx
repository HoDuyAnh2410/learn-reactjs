import { Box } from '@material-ui/core';
import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch;

  return (
    <div>
      <Box pt={4}>
        <Route path={match.url} exact component={ListPage} />
      </Box>
    </div>
  );
}

export default ProductFeature;
