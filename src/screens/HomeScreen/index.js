import React from 'react';
import ChannelBannerList from '../../components/ChannelBannerList';
import Header from '../../components/Header';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header />
      <ChannelBannerList navigation={navigation} />
    </>
  );
};

export default HomeScreen;
