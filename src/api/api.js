import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7aa905cd-5ce9-42b5-be7e-658eee3aec0e",
  },
});

export const usersAPI ={
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
          })
      .then((response) => {
            return response.data;
  });
}
}
