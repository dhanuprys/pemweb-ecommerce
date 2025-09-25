import { useLocation } from "react-router-dom";
import SafeWidth from "../components/SafeWidth";
import ProductDetail from "../components/ProductDetail";
import CheckoutCard from "../components/CheckoutCard";
import ProductReview from "../components/ProductReview";

export default function DetailPage() {
    const product = useLocation().state.product;
    return (
        <div>
            <SafeWidth className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 lg:gap-x-8">
                <div className="col-span-full space-y-4 lg:space-y-8 lg:col-span-4">
                    <ProductDetail product={product} />
                    <ProductReview />
                </div>
                <div className="col-span-full lg:col-span-2">
                    <CheckoutCard product={product} />
                </div>
            </SafeWidth>
        </div>
    );
}