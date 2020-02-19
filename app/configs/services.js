// eslint-disable-next-line import/named
import { post } from './networking';

export const endpoint = {
  login: async params => post('/api/users/login', params),
  register: async params => post('/api/users/register', params)
};

export default { endpoint };
