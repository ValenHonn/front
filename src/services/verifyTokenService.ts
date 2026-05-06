const API_VERIFYTOKEN_URL = "http://localhost:3000/api/verify";

const verifyTokenService = async () => {
  const response = await fetch(API_VERIFYTOKEN_URL, {
    method: "GET",
    credentials: "include", // importante para enviar la cookie con el token
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Token verification failed");
  }

  return data;
};

export default verifyTokenService;