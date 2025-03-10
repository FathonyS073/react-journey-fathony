import { Fragment, useEffect, useRef, useState  } from "react"
import CardProducts from "../Components/fragments/CardProducts"
import Button from "../Components/Elements/Button"
import { getProducts } from "../Services/product.service"

const email = localStorage.getItem("email")



const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
       setCart(JSON.parse(localStorage.getItem("cart")) || []) 
    }, []); //untuk komponen didUpdate


    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0 &&
            cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            }, 0)
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    useEffect (() => {
        getProducts((data)=>{
            setProducts(data)
        });
    },[])


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

    const totalPriceRef =  useRef(null)
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"   
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart, products])

    //UseRef
    const cartRef = useRef(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const addtoCartRef = (id) => {
        cartRef.current = [...cartRef.current, {id, qty : 1}];
        localStorage.setItem("cart", JSON.stringify(cartRef.current))
    }

    return (
        <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-10">
                {email}
                <Button classname="bg-red-700 ml-5" onClick={handlerLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5 mx-10">
                <div className="w-3/4 flex flex-wrap">
                {products.length > 0 && 
                products.map((product) => ( 
                    <CardProducts key={product.id}>
                        <CardProducts.Header image={product.image}/>
                        <CardProducts.Body name={product.title}>
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
                            {products.length > 0 && 
                            cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0,10)} ...</td>
                                        <td>$.{" "}
                                        {product.price.toLocaleString('id-ID', {styles:'currecy', currency : 'USD'})}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>${(product.price * item.qty).toLocaleString('id-ID', {styles:'currecy', currency : 'USD'})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td> $. {totalPrice.toLocaleString('id-ID', {styles:'currecy', currency : 'USD'})}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage