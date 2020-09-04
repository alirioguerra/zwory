import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';
const Button = () => {
  const [state, setState] = useState('NO FOCUS');
  return (
    <TouchableOpacity onFocus={() => setState('FOCUSED')} onBlur={() => setState('NO FOCUS')}>
      <Text>{state}</Text>
    </TouchableOpacity>
  );
};

export default Button;
