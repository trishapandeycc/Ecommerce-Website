
import { getProducts } from "../data/products"
import ProductCard from "../Component/ProductCard";
export default function Home() {
    return(<div className="page">
        <div className="home-hero">
            <h1 className="home-title">
                Welcome to Shophub
                </h1>
            <p className="home-subtitle">
                Discover Amazing products at Great Prices
            </p>
        </div>
        <div className="container">
            <h2 className="Page-title">Our Products</h2>
            <div className="product-grid">
                {getProducts().map((product) => {
                    return(
                    <ProductCard product = {product} key={product.id}/>
                    )
                })}
            </div>
        </div>
    </div>
    )
}
