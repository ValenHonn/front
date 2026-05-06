//este archivo sirve para verificar la existencia de datos que permite que el usuario siga el flujo de navegacion o no (en este caso redireccionar)
//osea se ejecuta cuando el usuario intenta acceder a una ruta protegida


import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; //si no esta autenticado lo redireccionamos al login con replace, esto reemplaza la ruta en la que estaba por la actual, eliminado del historial del navegador para que el usuario no pueda ir para atras
  }

  return <Outlet />; //el outlet funciona de manera que si esta autenticado, puede seguir con la ruta hija de protected route en la que el usuario intento acceder
}


export default ProtectedRoute;
