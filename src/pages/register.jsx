import AuthLayouts from "../Components/layout/AuthLayouts"
import FormRegister from "../Components/fragments/FormRegister";



const RegisterPage = () => {
    return (
        <AuthLayouts tittle="Register" type="Register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPage