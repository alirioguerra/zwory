import React from 'react';
import { View } from 'react-native';
import Button from './components/Button';

// import { Container } from './styles';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button />
    <Button />
    <Button />
  </View>
);

export default App;
