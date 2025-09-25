import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { IoClipboardOutline, IoTicketOutline } from "react-icons/io5";

export default function CartSummary({ items }) {
    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = subtotal > 500000 ? 0 : 15000; // Free shipping above 500k
    const total = subtotal + shippingCost;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="space-y-3 sm:space-y-4">
            <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-x-2">
                    <IoClipboardOutline className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    Ringkasan Belanja
                </h2>
            </div>

            {/* Order Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Total Item ({totalItems})</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>
                    
                    <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Ongkos Kirim</span>
                        <span className={shippingCost === 0 ? "text-green-600 font-medium" : ""}>
                            {shippingCost === 0 ? "GRATIS" : formatPrice(shippingCost)}
                        </span>
                    </div>
                    
                    {shippingCost > 0 && (
                        <div className="text-xs text-gray-500">
                            💡 Gratis ongkir untuk pembelian di atas {formatPrice(500000)}
                        </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-2 sm:pt-3">
                        <div className="flex justify-between font-semibold text-base sm:text-lg">
                            <span>Total</span>
                            <span className="text-green-600">{formatPrice(total)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-x-2 text-sm sm:text-base">
                    <IoTicketOutline className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    Kode Promo
                </h4>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Masukkan kode promo"
                        className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-xs sm:text-sm"
                    />
                    <button className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-xs sm:text-sm">
                        Terapkan
                    </button>
                </div>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout" state={{ items }}>
                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium text-sm sm:text-base">
                    Checkout ({totalItems} item)
                </button>
            </Link>

            {/* Continue Shopping */}
            <div className="text-center mt-2">
                <Link to="/" className="text-xs sm:text-sm text-gray-600 hover:text-gray-800">
                    ← Lanjutkan Belanja
                </Link>
            </div>
        </div>
    );
}
