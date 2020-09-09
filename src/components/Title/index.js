import React from 'react';
import { Text } from './styles';

const Title = (props) => {
  const { text } = props;
  return <Text>{text}</Text>;
};

export default Title;
