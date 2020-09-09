import React from 'react';
import ChannelBanner from '../ChannelBanner';
import { Container } from './styles';
import Title from '../Title';

const ChannelBannerList = ({ navigation }) => {
  return (
    <>
      <Title text="Favoritos" />
      <Container horizontal>
        <ChannelBanner
          navigation={navigation}
          channelVideoLink="http://vipeiptv.com:25461/6194581611ALIRIO/6194581611ALIRIO/855995"
          channelLogo={{
            uri:
              'http://vipeiptv.com:25461/images/9a96876e2f8f3dc4f3cf45f02c61c0c1.jpg',
          }}
          channelNumberAndName="2230 - TELECINE ACTION FULL HD"
          nowShowing="12:00 - Animais fantásticos e onde habitam"
          nextShow="A seguir 12:45 - JORNAL HOJE"
          elapsedTime={0.9}
        />
      </Container>
    </>
  );
};

export default ChannelBannerList;
