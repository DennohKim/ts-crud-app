import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Taskarea } from '../components/taskarea/Taskarea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0} >
      <Taskarea/>
      <Sidebar/>
    </Grid>
  );
};

export default Dashboard;
