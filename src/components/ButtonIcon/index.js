import React, { useState } from 'react';
import { Container, MyIcon } from './styles';

const ButtonIcon = (props) => {
  const { name, alt, size } = props;
  const [focused, setFocus] = useState(false);

  return (
    <Container
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      focused={focused}
      alt={alt}
    >
      <MyIcon name={name} size={size || 14} />
    </Container>
  );
};

export default ButtonIcon;
