import api from "./apiConfig";

export async function registerUser({ name, email, hp, password }) {
  const profilePic = "https://placehold.co/150";
  const response = await api.post("/users", {
    name,
    email,
    hp,
    password,
    profilePic,
  });
  return response.data;
}

export async function loginUser({ email, password }) {
  const response = await api.get("/users", { params: { email } });
  const matches = response.data.filter(
    (u) => u.email === email && u.password === password
  );

  if (matches.length > 0) {
    return matches[0];
  } else {
    throw new Error("Email atau password salah");
  }
}
