import AuthLayouts from "../Components/layout/AuthLayouts"
import FormLogin from "../Components/fragments/FormLogin";



const LoginPage = () => {
    return (
        <AuthLayouts tittle="Login" type="Login">
            <FormLogin/>
        </AuthLayouts>
    )
}

export default LoginPage