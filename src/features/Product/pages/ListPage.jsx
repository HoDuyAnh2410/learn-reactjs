import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
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
  pagination: {
    display: 'flex',
    flexFlow: 'row-nowrap',
    justifyContent: 'center',

    marginTop: '20px',
    paddingBottom: '10px',
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    litmit: 9,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setProductList(pagination);

        console.log({ data, pagination });
      } catch (error) {
        console.log('Fail to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
  };

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
                  <ProductSkeletonList length={9} />
                ) : (
                  <ProductList data={productList} />
                )}
                <Box className={classes.pagination}>
                  <Pagination
                    color="primary"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                  ></Pagination>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
