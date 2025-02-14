import Label from "./label"
import Input from "./input"

const Inputform = (props) => {
    const {label, type, name, placeholder,id} = props
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} id={name}/>
        </div>
    )
}

export default Inputform