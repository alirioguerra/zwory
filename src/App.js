import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Container } from './styles';
import Navigation from './Navigation';
import { colors } from './constants/colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.dark,
  },
};

const App = () => (
  <NavigationContainer theme={MyTheme}>
    <Container>
      <Navigation />
    </Container>
  </NavigationContainer>
);

export default App;
