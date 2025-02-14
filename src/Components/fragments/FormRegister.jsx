import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import Inputform from "../Elements/input"

const FormRegister = () => {
    return (
        <form action="">
            <Inputform label="Nama" type="text" placeholder="example@gmail.com" name="email" />
            <Inputform label="email" type="email" placeholder="example@gmail.com" name="email" />
            <Inputform label="password" type="password" placeholder="********" name="password" />
            <Inputform label="Confirm password" type="password" placeholder="********" name="password" />
            <Button classname="bg-blue-700 w-full"> <Link to="/login">Register</Link></Button>
        </form>
    )
}

export default FormRegister