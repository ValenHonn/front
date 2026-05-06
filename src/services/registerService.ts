export const API_REGISTER_URL = "http://localhost:3000/api/register";

export type RegisterData = { 
    username: string;
    email: string;
    password: string;
};

const registerService = async ({ username, email, password }: RegisterData) => { 
  const response = await fetch(API_REGISTER_URL, { 
   
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    credentials: "include",
    body: JSON.stringify({
        username,
        email,
        password
    }),
  });

  const data = await response.json(); 
  if (!response.ok) { 
    throw new Error(data.message || "Error al registrarse"); 
  }

  return data; //data contiene al usuario que se crea y un mensaje de registro exitoso
};

export default registerService;