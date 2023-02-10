import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes  from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = ({description=`Lorem ipsum dolor sit, amet consectetur adipisicing
elit. Non, impedit. Modi, alias earum ad, neque
doloribus sed at optio cupiditate iusto nostrum,
culpa voluptates enim! Deleniti cum quasi dolor
porro.`}): ReactElement => {
  return (
    <Box>
      <Typography>
        {description}
      </Typography>
    </Box>
  );
};


TaskDescription.propTypes = {
    description: PropTypes.string,
}