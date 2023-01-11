import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SilverIcon } from './images/silver_logo.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SilverIcon} viewBox="0 0 150 58" {...props} />;
}
