import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    maxWidth: '200px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
}));
QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disable } = props;
  const { errors, setValue } = form;
  const classes = useStyles();
  return (
    <FormControl fullWidth margin="normal" variant="outlined" size="small">
      <InputLabel htmlFor={name}>{}</InputLabel>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, error },
        }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              value={value}
              type="number"
              error={invalid}
              onChange={onChange}
              onBlur={onBlur}
              disabled={disable}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      {/* <FormHelperText error={invalid}>{error?.message}</FormHelperText> */}
    </FormControl>
  );
}

export default QuantityField;
