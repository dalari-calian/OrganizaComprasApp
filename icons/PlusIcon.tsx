import React from 'react';
import { SvgXml } from 'react-native-svg';

interface PlusIconProps {
  color: string;
  size: number;
}

const PlusIcon = ({ color, size }: PlusIconProps) => (
  <SvgXml
    xml={`<?xml version="1.0" encoding="iso-8859-1"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
        <path fill="${color}" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/>
      </svg>
    `}
  />
);

export default PlusIcon;
