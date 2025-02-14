import Button from "../Elements/Button"
import Inputform from "../Elements/input"

const FormLogin = () => {
    const handlerLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        window.location.href = "/products"
    }
    return (
        <form onSubmit={handlerLogin}>
            <Inputform label="email" type="email" placeholder="example@gmail.com" name="email" />
            <Inputform label="password" type="password" placeholder="********" name="password" />
            <Button classname="bg-blue-700 w-full" type="submit"> Login</Button>
        </form>
    )
}

export default FormLogin