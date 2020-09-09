import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../constants/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.medium};
  width: ${(props) => (props.alt ? '18px' : '32px')};
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 8px 0;
  margin-right: 15px;
  ${(props) => (props.focused ? `border: 2px solid ${colors.zwory};` : '')}
`;

export const MyIcon = styled(Icon).attrs({ color: colors.light })``;
