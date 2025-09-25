import ProductCard from "../../components/ProductCard";
import products from "../../data/products";
import SafeWidth from "../../components/SafeWidth";

export default function Home() {
    return (
        <div>
            <SafeWidth className="grid gap-x-2 gap-y-3 sm:gap-y-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </SafeWidth>
        </div>
    );
}