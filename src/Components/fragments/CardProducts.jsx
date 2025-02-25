import Button from "../Elements/Button"

const CardProducts = (props) => {
    const {children} = props
    return (
        <div className="w-full mt-8 my-2 max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow mx-5 flex flex-col justify-between">
            {children}
        </div>
    )
}


const Header = (props) => {
    const {image} = props
    return (
        <a href="">
            <img src={image} alt="" className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </a>
    )
}


const Body = (props) => {
    const {children, name} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white ">{name.substring(0,20)} ...</h5>
                <p className="text-m text-white">{children.substring(0,100)}</p>
            </a>     
        </div>
    )
}

const Footer = (props) => {
    const {price, addToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-semibold text-white pr-5">Rp. {price.toLocaleString('id-ID', {styles:'currecy', currency : 'IDR'})}</span>
            <Button classname="bg-blue-700" onClick={() =>addToCart(id)}>Add To cart</Button>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer


export default CardProducts