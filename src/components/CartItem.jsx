import { useState, useCallback } from "react";
import formatPrice from "../utils/formatPrice";
import { IoTrashOutline, IoHeartOutline, IoHeart, IoStar } from "react-icons/io5";

export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(item.quantity);
    const [isWishlisted, setIsWishlisted] = useState(false);

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

    const toggleWishlist = useCallback(() => {
        setIsWishlisted(prev => !prev);
    }, []);

    const removeItem = useCallback(() => {
        // In real app, this would remove from cart
        alert(`"${item.title}" dihapus dari keranjang`);
    }, [item.title]);

    return (
        <article className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex gap-3 sm:gap-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                    <img
                        src={item.imageSrc}
                        alt={`${item.title} - Produk dari ${item.seller}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.seller}</p>
                            
                            {/* Rating & Sold */}
                            <div className="flex items-center gap-x-2 mt-1 sm:mt-2 text-xs text-gray-600">
                                <div className="flex items-center gap-x-1">
                                    <IoStar className="w-3 h-3 text-yellow-500" aria-label={`Rating ${item.rating} dari 5`} />
                                    <span>{item.rating}</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden="true"></span>
                                <div aria-label={`Terjual ${item.sold} unit`}>{item.sold}+ terjual</div>
                            </div>

                            {/* Price */}
                            <div className="mt-1 sm:mt-2">
                                <span className="text-base sm:text-lg font-semibold text-gray-900" aria-label={`Harga: ${formatPrice(item.price)}`}>
                                    {formatPrice(item.price)}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <nav className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0" aria-label="Item actions">
                            <button
                                onClick={toggleWishlist}
                                className="p-1 sm:p-2 text-gray-400 hover:text-red-500 transition-colors"
                                aria-label={isWishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
                            >
                                {isWishlisted ? (
                                    <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                                ) : (
                                    <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5" />
                                )}
                            </button>
                            <button
                                onClick={removeItem}
                                className="p-1 sm:p-2 text-gray-400 hover:text-red-500 transition-colors"
                                aria-label={`Hapus ${item.title} dari keranjang`}
                            >
                                <IoTrashOutline className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </nav>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3 sm:mt-4">
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                            <span className="text-xs sm:text-sm text-gray-600">Jumlah:</span>
                            <div className="flex items-center gap-x-1 border border-gray-300 rounded-xl" role="group" aria-label="Quantity controls">
                                <button
                                    onClick={subtractQuantity}
                                    disabled={quantity <= 1}
                                    className="px-2 sm:px-3 py-1 hover:cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed text-sm"
                                    aria-label="Kurangi jumlah"
                                >
                                    -
                                </button>
                                <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium" aria-label={`Jumlah: ${quantity}`}>{quantity}</span>
                                <button
                                    onClick={addQuantity}
                                    className="px-2 sm:px-3 py-1 hover:cursor-pointer text-sm"
                                    aria-label="Tambah jumlah"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Subtotal */}
                        <div className="text-left sm:text-right">
                            <div className="text-xs sm:text-sm text-gray-600">Subtotal</div>
                            <div className="text-base sm:text-lg font-semibold text-gray-900" aria-label={`Subtotal: ${formatPrice(item.price * quantity)}`}>
                                {formatPrice(item.price * quantity)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
