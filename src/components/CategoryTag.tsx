import React from 'react';
import { Chip } from 'react-native-paper';

interface Props {
  label: string;
}

export const CategoryTag: React.FC<Props> = ({ label }) => (
  <Chip className="mr-1" mode="outlined">
    {label}
  </Chip>
);
