import axios from 'axios';
import { conf } from '../config/config';

export const getTasks = async () => {
  const { data } = await axios.get(conf.BASE_URL + '/tasks/')
  return data
}

export const createTask = async (data) => {
  const response = await axios.post(conf.BASE_URL + '/tasks/create/', data)
  return response
}

