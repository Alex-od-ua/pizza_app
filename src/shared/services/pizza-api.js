import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6477b5b0362560649a2ce1ec.mockapi.io/api/',

  params: {
    limit: 6,
  },
});

export const getAllPizza = async (page = 1, sort, sortBy) => {
  const { data } = await instance.get('/pizza', {
    params: {
      page,
      sortBy: `${sort}`,
      following: `${sortBy}`,
      order: 'desc',
    },
  });

  return data;
};
