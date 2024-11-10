import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
}
