import React from 'react';
import { SvgXml } from 'react-native-svg';

interface ConfigIconProps {
  color: string;
  size: number;
}

const ConfigIcon = ({ color, size }: ConfigIconProps) => (
  <SvgXml xml={`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <path fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/>
    </svg>
  `} />
);

export default ConfigIcon;
