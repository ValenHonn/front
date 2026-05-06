import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Register() {

    const {signup, isAuthenticated} = useAuth() //useAuth devuelve el contexto, son los valores que ofrece el provider

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const [formError, setFormError] = useState<string | null>(null);

    const [fieldErrors, setFieldErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated)
            navigate("/")
    }, [isAuthenticated])

    const handleRegister = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newFieldErrors = {
            username: "",
            email: "",
            password: "",
        };

        let hasErrors = false;

        if (!username.trim()) {
            newFieldErrors.username = "El username es obligatorio";
            hasErrors = true;
        }

        if (!email.trim()) {
            newFieldErrors.email = "El email es obligatorio";
            hasErrors = true;
        }

        if (!password.trim()) {
            newFieldErrors.password = "La contraseña es obligatoria";
            hasErrors = true;
        }

        setFieldErrors(newFieldErrors);

        if (hasErrors) {
            setFormError(null);
            return;
        }

        try {
            setFormError(null);

            await signup({
            username,
            email,
            password,
            });

            setUsername("");
            setEmail("");
            setPassword("");

            setFieldErrors({
            username: "",
            email: "",
            password: "",
            });
        } catch (error: any) {
            setFormError(error.message);
        }
};

    return(
        <>
            <form onSubmit={handleRegister}>
                {formError && <p style={{ color: "red" }}>{formError}</p>}

                <div>
                    <input
                    type="text"
                    value={username}
                    name="username"
                    placeholder="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    />
                    {fieldErrors.username && (
                    <p style={{ color: "red" }}>{fieldErrors.username}</p>
                    )}
                </div>

                <div>
                    <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={({ target }) => setEmail(target.value)}
                    />
                    {fieldErrors.email && (
                    <p style={{ color: "red" }}>{fieldErrors.email}</p>
                    )}
                </div>

                <div>
                    <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    />
                    {fieldErrors.password && (
                    <p style={{ color: "red" }}>{fieldErrors.password}</p>
                    )}
                </div>

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register