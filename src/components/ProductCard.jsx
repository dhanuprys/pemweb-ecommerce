import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { IoStar } from "react-icons/io5";

export default function ProductCard({ product }) {
  return (
    <article className="group">
      <Link to={`/product/${product.id}`} state={{ product }} className="block">
        <img
          className="w-full aspect-square bg-gray-100 object-cover rounded-xl"
          src={product.imageSrc}
          alt={`${product.title} - Produk dari Sony Official`}
        />
        <div className="p-2 space-y-1">
          <h3 className="text-gray-900 truncate">{product.title}</h3>
          <p className="font-semibold" aria-label={`Harga ${formatPrice(product.price)}`}>
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-x-1 text-xs text-gray-700">
            <span aria-label={`Rating ${product.rating} dari 5`} className="flex items-center gap-x-1">
              <IoStar className="w-3 h-3 text-yellow-500" />
              {product.rating}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
            <span aria-label={`Terjual ${product.sold} unit`}>{product.sold}+ sold</span>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Sony Official</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
