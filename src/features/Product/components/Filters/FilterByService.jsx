import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `2px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2),
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& >li': {
      margin: 0,
    },
  },
}));
FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (!onChange) return;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch vụ</Typography>
      <Box>
        <ul className={classes.list}>
          {[
            { key: 'isPromotion', label: 'Có khuyến mãi' },
            { key: 'isFreeShip', label: 'Vận chuyển miễn phí' },
          ].map((service) => (
            <li key={service.key}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service.key])}
                    onChange={handleChange}
                    name={service.key}
                    color="primary"
                  />
                }
                label={service.label}
              />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default FilterByService;
