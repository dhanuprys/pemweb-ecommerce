import SafeWidth from "../components/SafeWidth";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import cartData from "../data/cart";
import { IoCartOutline } from "react-icons/io5";

export default function CartPage() {
    return (
        <div>
            <SafeWidth className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 lg:gap-x-8">
                <div className="col-span-full space-y-4 lg:space-y-6 lg:col-span-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-x-2">
                                <IoCartOutline className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                                Keranjang Belanja
                            </h1>
                            <p className="text-gray-600 mt-1 text-sm sm:text-base">{cartData.length} item dalam keranjang</p>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-700 self-start sm:self-auto">
                            Hapus Semua
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="space-y-4">
                        {cartData.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Empty State (hidden when cart has items) */}
                    {cartData.length === 0 && (
                        <div className="text-center py-12">
                            <IoCartOutline className="w-24 h-24 text-gray-400 mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Keranjang Kosong</h2>
                            <p className="text-gray-600 mb-6">Belum ada item dalam keranjang Anda</p>
                            <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                                Mulai Belanja
                            </button>
                        </div>
                    )}
                </div>

                {/* Cart Summary */}
                <div className="col-span-full lg:col-span-2">
                    <CartSummary items={cartData} />
                </div>
            </SafeWidth>
        </div>
    );
}
