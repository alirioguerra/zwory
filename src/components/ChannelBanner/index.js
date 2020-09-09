import React, { useState } from 'react';
import { Container, ChannelLogo } from './styles';
import ChannelInfo from '../ChannelInfo';

const ChannelBanner = (props) => {
  const {
    channelLogo,
    channelNumberAndName,
    nowShowing,
    nextShow,
    elapsedTime,
    channelVideoLink,
    navigation,
  } = props;
  const [focused, setFocus] = useState(false);
  return (
    <Container
      focused={focused}
      onPress={() =>
        navigation.navigate('VideoPlayer', { channelVideoLink, channelLogo })
      }
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <ChannelLogo source={channelLogo} resizeMode="cover" />
      {focused ? (
        <ChannelInfo
          channelNumberAndName={channelNumberAndName}
          nowShowing={nowShowing}
          nextShow={nextShow}
          elapsedTime={elapsedTime}
          focused={focused}
        />
      ) : (
        false
      )}
    </Container>
  );
};

export default ChannelBanner;
