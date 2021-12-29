import React from 'react';
import logo from './logo.svg';
import { AppContainer, AppLogo, AppHeader, DivContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <DivContainer>
          <AppLogo src={logo} alt="logo" />
          <p> Blank React </p>
        </DivContainer>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
