import { Link } from "react-router-dom";


const AuthLayouts = (props) => {
    const {children, tittle, type} = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs" >
                <h1 className="text-3xl font-bold mb-2 text-blue-800">{tittle}</h1>
                <p className="font-medium text-slate-500">
                Wellcome, Please enter Your Details
                </p>
                {children}
                <Navigation type={type}/>
            </div>
        </div>
    )
}

const Navigation = ({type}) =>{
    if (type === "Login") {
        return (
            <p className="text-center py-4">
                    Don't have an account ? 
                    <Link to="/register" className=" text-blue-700"> Register</Link>
             </p>
        )
    } else {
        return (
            <p className="text-center py-4">
                    Already Account ? 
                    <Link to="/login" className=" text-blue-700"> Login </Link>
             </p>
        )
    }

}

export default AuthLayouts