import api from "./apiConfig";

export const userService = {
  getAll: () => api.get("/users"),
  register: (data) => api.post("/users", data),
  login: (creds) => api.get("/users", { params: creds }),
};
