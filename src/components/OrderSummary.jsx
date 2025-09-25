import formatPrice from "../utils/formatPrice";
import { IoClipboardOutline, IoTicketOutline } from "react-icons/io5";

export default function OrderSummary({ product, quantity = 1 }) {
    const subtotal = product.price * quantity;
    const shippingCost = 15000; // Fixed shipping cost
    const total = subtotal + shippingCost;

    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-x-2">
                    <IoClipboardOutline className="w-5 h-5 text-blue-600" />
                    Ringkasan Pesanan
                </h2>
            </div>

            {/* Product Info */}
            <section className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex gap-3">
                    <img
                        src={product.imageSrc}
                        alt={`${product.title} - Produk dari Sony Official`}
                        className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
                        <p className="text-sm text-gray-600">Sony Official</p>
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-sm text-gray-600">Qty: {quantity}</span>
                            <span className="font-medium" aria-label={`Harga per unit: ${formatPrice(product.price)}`}>
                                {formatPrice(product.price)}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Price Breakdown */}
            <section className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="sr-only">Detail harga</h3>
                <dl className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <dt className="text-gray-600">Subtotal</dt>
                        <dd aria-label={`Subtotal: ${formatPrice(subtotal)}`}>{formatPrice(subtotal)}</dd>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                        <dt className="text-gray-600">Ongkos Kirim</dt>
                        <dd aria-label={`Ongkos kirim: ${formatPrice(shippingCost)}`}>{formatPrice(shippingCost)}</dd>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between font-semibold text-lg">
                            <dt>Total</dt>
                            <dd className="text-green-600" aria-label={`Total pembayaran: ${formatPrice(total)}`}>
                                {formatPrice(total)}
                            </dd>
                        </div>
                    </div>
                </dl>
            </section>
            
            {/* Promo Code */}
            <section className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-x-2">
                    <IoTicketOutline className="w-4 h-4 text-purple-600" />
                    Kode Promo
                </h4>
                <form className="flex gap-2">
                    <label htmlFor="promo-code" className="sr-only">Masukkan kode promo</label>
                    <input
                        id="promo-code"
                        type="text"
                        placeholder="Masukkan kode promo"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                    <button type="submit" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                        Terapkan
                    </button>
                </form>
            </section>
        </div>
    );
}
