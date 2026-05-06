export const API_LOGIN_URL = "http://localhost:3000/api/login";

export type LoginData = { //La función login va a recibir un objeto con email de tipo string, password de tipo string
  email: string;
  password: string;
};

const loginService = async ({ email, password }: LoginData) => { 
  const response = await fetch(API_LOGIN_URL, { // en el primer parametro indicamos la url
    //en el segundo indicamos por lo general el metodo, cabecera y body
    method: "POST", //porque nos estamos autenticando y tenemos que mandarle al back los datos del usuario
    headers: {
      "Content-Type": "application/json", //le decimos al back que estamos datos en formato json
    },
    credentials: "include", //para el sop, ademas el navegador con esto adjunta la cookie en la request automaticamente
    body: JSON.stringify({ //en el body le mandamos los datos del usuario, que son los parametros que manda el handleLogin
      email,
      password,
    }),
  });
  //JSON.stringify convierte un objeto js { username, password } en un string json {"username":"valen","password":"1234"}

  const data = await response.json(); //como el backend nos devuelvo un string json, lo convertimos en un objeto js

  if (!response.ok) { //response.ok es una propiedad booleana, si es true responde con un codigo 200 y pico
    throw new Error(data.message || "Error al iniciar sesión"); //tiramos el error para que el catch del handlelogin lo capture
  }//Si el backend manda algo como: "message": "Credenciales incorrectas" entonces el error tendrá ese mensaje, si no existe data.message, se usa: "Error al iniciar sesión"

  return data; //devuelvo los datos del usuario al handelogin
};

export default loginService ;