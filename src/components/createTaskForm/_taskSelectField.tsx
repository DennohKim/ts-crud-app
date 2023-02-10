import React, { FC, ReactElement } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Select Box',
  name = 'selectBox',
  items = [{ value: '', label: 'Add Items' }],
  disabled = false,
  onChange = (e: SelectChangeEvent) => console.log(e),
}): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.value + index}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,

    }).isRequired,
  ),
};
