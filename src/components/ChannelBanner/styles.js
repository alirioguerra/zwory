import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

export const Container = styled.TouchableOpacity`
  position: relative;
  margin: 0 5px;
  width: ${Math.round((Dimensions.get('window').width * 20) / 100)}px;
  height: 110px;
  border-radius: 15px;
  background-color: transparent;
  overflow: hidden;
  border: 2px solid
    ${(props) => (props.focused ? `${colors.zwory};` : `${colors.medium};`)};
`;

export const ChannelLogo = styled.ImageBackground`
  display: flex;
  flex: 1;
  justify-content: center;
`;
