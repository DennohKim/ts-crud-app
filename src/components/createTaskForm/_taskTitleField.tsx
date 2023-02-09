import React, { FC, ReactElement } from 'react';
import {  TextField} from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskTitleField: FC<ITextField> = (props): ReactElement => {

    const { disabled=false, onChange = ((e) => console.log(e))} = props
    return (
        
            <TextField 
            id="title"
            label="Task Title"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
             disabled={disabled}
             onChange={onChange}
             />

        
    )


}