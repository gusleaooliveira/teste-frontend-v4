import { useQuery } from '@tanstack/react-query';
import { api } from './api';

export const fetchEquipment: any = async () => {
  const { data } = await api.get('/equipment');
  return data;
};
