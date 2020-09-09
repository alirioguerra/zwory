import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import {
  Container,
  ChannelNumberAndName,
  NowShowing,
  ElapsedTime,
  NextShow,
} from './styles';

const ChannelInfo = (props) => {
  const {
    focused,
    channelNumberAndName,
    nowShowing,
    elapsedTime,
    nextShow,
  } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      focused={focused}
      style={{
        scaleY: fadeAnim,
      }}
    >
      <Container>
        <ChannelNumberAndName>{channelNumberAndName}</ChannelNumberAndName>
        <NowShowing>{nowShowing}</NowShowing>
        <ElapsedTime progress={elapsedTime} />
        <NextShow>{nextShow}</NextShow>
      </Container>
    </Animated.View>
  );
};

export default ChannelInfo;
