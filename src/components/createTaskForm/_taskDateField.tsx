import React, { FC, ReactElement } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import  PropTypes  from 'prop-types';


export const TaskDateField: FC<IDateField> = (
  props
): ReactElement => {
    const {disabled=false, value= new Date(), onChange = (date) => console.log(date) } = props

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker disabled={disabled} label="Task Date" inputFormat="dd/mm/yyyy" value={value} onChange={onChange} renderInput={(params) => <TextField {...params} />} />
        </LocalizationProvider>
        </>
    )
  
};

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

