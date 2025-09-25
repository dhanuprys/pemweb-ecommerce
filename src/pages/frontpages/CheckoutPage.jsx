import { useLocation } from "react-router-dom";
import SafeWidth from "../../components/SafeWidth";
import CheckoutForm from "../../components/CheckoutForm";
import OrderSummary from "../../components/OrderSummary";

export default function CheckoutPage() {
    const location = useLocation();
    const { product, quantity = 1 } = location.state || {};

    // Jika tidak ada data produk, redirect ke home
    if (!product) {
        return (
            <SafeWidth>
                <div className="text-center py-8">
                    <h2 className="text-xl font-bold text-gray-800">Tidak ada produk untuk checkout</h2>
                    <p className="text-gray-600 mt-2">Silakan pilih produk terlebih dahulu</p>
                </div>
            </SafeWidth>
        );
    }

    return (
        <div>
            <SafeWidth className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 lg:gap-x-8">
                <div className="col-span-full space-y-4 lg:space-y-8 lg:col-span-4">
                    <CheckoutForm />
                </div>
                <div className="col-span-full lg:col-span-2">
                    <OrderSummary product={product} quantity={quantity} />
                </div>
            </SafeWidth>
        </div>
    );
}
