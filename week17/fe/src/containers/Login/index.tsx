import { LoginForm as LoginFormProps, LoginResponse } from "../../types"
import { LoginForm } from "../../components"

const Login = () => {

    const onSubmit = async (data: LoginFormProps) => {
        const fetching = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: LoginResponse = await fetching.json()
        if(response) {
            localStorage.setItem('token', response.token)
            window.location.replace('/')
        }
    }

    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}

export default Login