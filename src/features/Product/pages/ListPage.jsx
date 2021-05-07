import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductSkeletonList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });

        setProductList(data);
      } catch (error) {
        console.log('Fail to fetch product list: ', error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>Left column</Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                {loading ? (
                  <ProductSkeletonList />
                ) : (
                  <ProductList data={productList} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
