import React from 'react';
import GlobalStyle from '../assets/styles/globalStyle';
import Navigation from '../components/Navigation/Navigation';


const MainLayout = ({children}) => (
  <>
  <GlobalStyle />
    <Navigation />
    {children}
  </>
);

export default MainLayout;
