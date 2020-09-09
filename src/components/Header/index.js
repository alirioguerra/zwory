/* eslint-disable global-require */
import React from 'react';
import { Container, Image } from './styles';
import ButtonIcon from '../ButtonIcon';

const Header = () => {
  return (
    <Container>
      <Image
        source={require('../../assets/images/zwory.png')}
        resizeMode="contain"
      />
      <ButtonIcon name="search" />
      <ButtonIcon name="refresh-ccw" />
      <ButtonIcon name="settings" />
    </Container>
  );
};

export default Header;
