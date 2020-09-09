import styled from 'styled-components/native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const Container = styled.View`
  display: ${(props) => (props.focused ? 'flex' : 'none')};
  position: absolute;
  background-color: ${colors.dark};
  width: 100%;
  bottom: 0;
  padding: 5px;
`;
export const ChannelNumberAndName = styled.Text`
  color: ${colors.light};
  font-size: 8px;
  text-transform: uppercase;
`;
export const NowShowing = styled.Text`
  color: ${colors.light};
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
`;
export const ElapsedTime = styled(ProgressBar).attrs({ color: colors.zwory })`
  border-radius: 10px;
  background-color: ${colors.light};
  margin: 4px 0;
  height: 3px;
`;
export const NextShow = styled(ChannelNumberAndName)``;
