import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {

    const {login, isAuthenticated} = useAuth()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
 

   
    const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault(); //prevenimos que el navegador recargue la pagina, porque sino se perderian los estados y la peticion

        try { //Inicia un bloque donde vas a intentar ejecutar código que puede fallar, por ejemplo usuario incorrecto
            await login({ //en esta funcion el frontend le envia las credenciales al backend
             //a esa funcion le enviamos los datos para que se los envie al backend
            email,
            password
            });

            //limpiamos los inputs
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error)
            alert("Wrong credentials")
        }
};

    return(
        <>
            
            <form onSubmit={handleLogin} > 
                <input //onSubmit es un evento de react, se dispara cuando se presiona enter o un boton del type="submit"
                       // entonces significa, cuando el formulario se envia, ejecutar la funcion handleSubmit
                    type="email"
                    value={email} //el valor del input es el del estado, y este estado se cambia con la funcion onChange
                    name="email"
                    placeholder="Email" 
                    onChange={({target}) => setEmail(target.value)} //actualizamos el estado email con lo que escribio el usuario en el input
                />
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={({target}) => setPassword(target.value)}
                />
                <button>
                    Login
                </button>
            </form>
        
        </>
    )
}

export default Login