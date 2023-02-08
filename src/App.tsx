import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';


const App:FC = ():ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <h1>Chizaa</h1>
    </ThemeProvider>
  );
};

export default App;
