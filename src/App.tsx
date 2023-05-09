import React from 'react';
import './App.css';
import Router from "./pages/Router";
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from './context/Theme/Theme';
import ThemeProvider from './context/Theme/Provider';
import { ThemeSelectors, changeTheme } from './redux/reducers/themeSlice';


function App() {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getThemeValue);
  const onChangeTheme = (value: Theme) => {
    dispatch(changeTheme(value));
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;