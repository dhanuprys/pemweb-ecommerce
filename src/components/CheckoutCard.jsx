import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { IoChatboxEllipsesOutline, IoHeartOutline, IoShareOutline } from "react-icons/io5";

export default function CheckoutCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = useCallback(() => {
        setQuantity(prev => prev + 1);
    }, []);

    const subtractQuantity = useCallback(() => {
        setQuantity(prev => {
            if (prev <= 1) {
                return prev;
            }
            return prev - 1;
        });
    }, []);

    return (
        <div>
            <div className="bg-gradient-to-r px-4 py-2 rounded-xl from-green-800 to-green-500">
                <span className="text-white font-bold text-sm">Harga Terbaik</span>
            </div>
            <section className="p-4 rounded-xl border shadow-sm border-gray-300/40 mt-4" aria-labelledby="checkout-section">
                <h2 id="checkout-section" className="text-sm font-semibold mb-2">Atur jumlah dan catatan</h2>
                <div className="flex items-center gap-x-4 mt-2">
                    <div className="flex items-center gap-x-2 border rounded-xl border-gray-300/40" role="group" aria-label="Quantity controls">
                        <button 
                            onClick={subtractQuantity} 
                            disabled={quantity <= 1} 
                            className="px-2 py-1 hover:cursor-pointer disabled:text-gray-400"
                            aria-label="Kurangi jumlah"
                        >
                            -
                        </button>
                        <span className="text-sm" aria-label={`Jumlah: ${quantity}`}>{quantity}</span>
                        <button 
                            onClick={addQuantity} 
                            className="px-2 py-1 hover:cursor-pointer"
                            aria-label="Tambah jumlah"
                        >
                            +
                        </button>
                    </div>
                    <span className="text-sm">Stok: <strong className="font-bold">{9999 - quantity}</strong></span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="text-xs">Subtotal</span>
                    <strong aria-label={`Subtotal: ${formatPrice(quantity * product.price)}`}>
                        {formatPrice(quantity * product.price)}
                    </strong>
                </div>
                <nav className="mt-4">
                    <Link to="/cart">
                        <button className="bg-green-600 rounded-xl w-full text-white px-4 py-2">
                            + Keranjang
                        </button>
                    </Link>
                    <Link to="/checkout" state={{ product, quantity }}>
                        <button className="border border-green-600 rounded-xl mt-2 w-full text-green-600 px-4 py-2">
                            Beli Sekarang
                        </button>
                    </Link>
                </nav>
                <nav className="flex mt-4 justify-center text-gray-700 divide-x divide-gray-300/50" aria-label="Product actions">
                    <button className="flex px-4 items-center gap-x-2 hover:text-blue-600 transition-colors">
                        <IoChatboxEllipsesOutline aria-hidden="true" />
                        <span className="text-sm font-semibold">Chat</span>
                    </button>
                    <button className="flex px-4 items-center gap-x-2 hover:text-red-500 transition-colors">
                        <IoHeartOutline aria-hidden="true" />
                        <span className="text-sm font-semibold">Wishlist</span>
                    </button>
                    <button className="flex px-4 items-center gap-x-2 hover:text-green-600 transition-colors">
                        <IoShareOutline aria-hidden="true" />
                        <span className="text-sm font-semibold">Share</span>
                    </button>
                </nav>
            </section>
        </div>
    );
}