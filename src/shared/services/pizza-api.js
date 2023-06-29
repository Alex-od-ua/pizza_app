import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6477b5b0362560649a2ce1ec.mockapi.io/api/',

  params: {
    limit: 6,
  },
});

export const getAll = async (page = 1, sort, sortBy) => {
  const { data } = await instance.get('/Pizza', {
    params: {
      page,
      sortBy: `${sort}`,
      following: `${sortBy}`,
      order: 'desc',
    },
  });

  return data;
};
