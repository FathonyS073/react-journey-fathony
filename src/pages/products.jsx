import { Fragment, useEffect, useState  } from "react"
import CardProducts from "../Components/fragments/CardProducts"
import Button from "../Components/Elements/Button"

const products = [
    {
        id : 1,
        name : "Sepatu Baru",
        image : "../Asset/sepatu1.webp",
        description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque voluptatibus deserunt eaque, 
        magni quasi voluptatum unde minima dolore recusandae dolor maiores nihil, fugiat facilis consequatur,`,
        price : 200000

    },
    {
        id : 2,
        name : "Sepatu Lama",
        image : "../Asset/sepatu.jpg",
        description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque voluptatibus deserunt eaque, 
        magni quasi voluptatum,`,
        price : 500000,
    },
    {
        id : 3,
        name : "Sepatu Lama banget",
        image : "../Asset/sepatu2.webp",
        description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque voluptatibus deserunt eaque, 
        magni quasi voluptatum unde minima dolore recusandae dolor maiores nihil, fugiat facilis consequatur,`,
        price : 1000000
    },
    {
        id : 4,
        name : "Sepatu Lama banget",
        image : "../Asset/sepatu2.webp",
        description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque voluptatibus deserunt eaque, 
        magni quasi voluptatum unde minima dolore recusandae dolor maiores nihil, fugiat facilis consequatur,`,
        price : 1500000
    }
]

const email = localStorage.getItem("email")



const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
       setCart(JSON.parse(localStorage.getItem("cart")) || []) 
    }, []); //untuk komponen didUpdate

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            }, 0)
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])


    const handlerLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const addToCart = (id) => {
        if(cart.find((item) => item.id === id)){
            setCart(cart.map((item) => (item.id === id ? {...item, qty : item.qty + 1} : item)))
        } else {
            setCart([...cart, {id, qty : 1}]);
        }
    };

    return (
        <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-10">
                {email}
                <Button classname="bg-red-700 ml-5" onClick={handlerLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5 mx-10">
                <div className="w-3/4 flex flex-wrap">
                {products.map((product) => ( 
                    <CardProducts key={product.id}>
                        <CardProducts.Header image={product.image}/>
                        <CardProducts.Body name={product.name}>
                            {product.description}
                        </CardProducts.Body>
                        <CardProducts.Footer price={product.price} id={product.id} addToCart={addToCart}/>
                    </CardProducts>
                ))}
                </div>
                <div className="w-1/4 mx-10 mt-5">
                    <h1 className="font-bold text-3xl text-blue-500 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp.{" "}
                                        {product.price.toLocaleString('id-ID', {styles:'currecy', currency : 'IDR'})}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>Rp{(product.price * item.qty).toLocaleString('id-ID', {styles:'currecy', currency : 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td> Rp. {totalPrice.toLocaleString('id-ID', {styles:'currecy', currency : 'IDR'})}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage