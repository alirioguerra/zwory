import React from 'react';
import Video from 'react-native-video';

// import { Container } from './styles';

const VideoPlayer = ({ route }) => {
  return (
    <Video
      source={{ uri: route.params.channelVideoLink }} // Can be a URL or a local file.
      // ref={(ref) => {
      //   player = ref;
      // }} // Store reference
      fullscreen
      resizeMode="cover"
      poster={route.params.channelLogo.uri}
      posterResizeMode="center"
      style={{
        flex: 1,
      }}
    />
  );
};

export default VideoPlayer;
