import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { INDIA_STATE_UT_LIST } from '../constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
}));

export default function Dropdown(props) {
  const {
    label,
    value,
    required,
    onChange,
    error
  } = props;
  const classes = useStyles();

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="dropdown-select" required={required}>{label}</InputLabel>
        <Select
          labelId="dropdown-select"
          id="dropdown-select-autowidth"
          value={value}
          onChange={onChange}
          error={error}
          autoComplete="state"
          autoWidth
        >
        { INDIA_STATE_UT_LIST.map((state, index) =>
          <MenuItem key={index} value={state}>
            {state}
          </MenuItem>
        )}
        </Select>
      </FormControl>
      </div>
  );
}
