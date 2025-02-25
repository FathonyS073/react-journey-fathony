import Label from "./label"
import Input from "./input"
import { forwardRef } from "react"

const Inputform = forwardRef(
    (props, ref) => {
        const {label, type, name, placeholder,id} = props
        return (
            <div className="mb-6">
                <Label htmlFor={name}>{label}</Label>
                <Input name={name} type={type} placeholder={placeholder} id={name} ref={ref}/>
            </div>
        )
    }
);

export default Inputform