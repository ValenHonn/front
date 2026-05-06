import { createContext, useState, useContext, useEffect } from "react";
import registerService from "../services/registerService"
import type { RegisterData } from "../services/registerService";
import type { LoginData } from "../services/loginService";
import loginService from "../services/loginService";
import Cookies from 'js-cookie'; //libreria que me deja usar las cookies del navegador
//El objeto Cookies contiene varias funciones para manipular cookies del navegador.
import verifyTokenService from "../services/verifyTokenService";

type AuthContextType = {
  user: any
  signup: (data: RegisterData) => Promise<any>,
  login: (data: LoginData) => Promise<any>
  isAuthenticated: boolean,
  loading: any
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => { //hook
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider"); //si el componente no esta envuelto en el componente provider
  }

  return context;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ( { children }: AuthProviderProps ) => { //el componente AuthProvider usa AuthContext para proveerle los datos
  
  const [user, setUser] = useState(null); //definimos el estado global user
  const [isAuthenticated, setIsAutheticated] = useState(false) //este estado sirve sobre todo para proteger rutas
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(user); //cada vez que el usuario se actualiza, ya que react tarda en actualizar el estado 
  }, [user]);

  //funcion encargada de llamar al servicio y actualizar el estado global user segun la data que recibe del mismo
  const signup = async (userdata: RegisterData) => { 
    try {

      const data = await registerService(userdata);
      setUser(data.user); //actualizamos el estado global con los datos del usuario (porque data tmb tiene un mensaje) que nos devuelve el servicio register
      setIsAutheticated(true) //para esto habria que agregar que se loguee ni bien se registra
      
    } catch (error) {
        console.log(error)
        throw error;
    }
  };

  const login = async (userdata: LoginData) => { 
    try {

      const data = await loginService(userdata);

      setUser(data.user); //actualizamos el estado global con los datos del usuario (porque data tmb tiene un mensaje) que nos devuelve el servicio login
      setIsAutheticated(true) //para esto habria que agregar que se loguee ni bien se registra
      
    } catch (error) {
        console.log(error)
        throw error;
    }
  };

  useEffect(() => {
    const checkLogin = async () => {

      const cookies = Cookies.get(); //obtengo las cookies del navegador en un solo objeto

      if (cookies.token) { //si existe la cookie token (intento acceder a la propiedad del objeto, a ver si existe)
        try {
          const res = await verifyTokenService()
          if (!res) {
            setIsAutheticated(false)
            return
          }
          

          setIsAutheticated(true)
          setUser(res)

        } catch (error) { //si hubo un error y lo atrapamos, significa que el token es invalido, expirado, o no se encontro al usuario
          setIsAutheticated(false)
          setUser(null)
        }

        finally {
          setLoading(false); 
        }
      }

    }

    checkLogin()
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        loading,
        user,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

