import formatPrice from "../utils/formatPrice";
import { IoStar } from "react-icons/io5";

export default function ProductDetail({ product }) {
    return (
        <div className="grid grid-cols-8 gap-x-8">
            <div className="col-span-full md:col-span-3">
                <div className="w-full aspect-square group overflow-hidden">
                    <img src={product.imageSrc} alt={product.title} className="rounded-xl size-full transition-transform group-hover:scale-115" />
                </div>
                <div className="flex gap-x-2 mt-2">
                    {[1, 2, 3].map(() => (
                        <img src={product.imageSrc} className="size-14 border-2 border-transparent hover:border-gray-500 rounded-xl" />
                    ))}
                </div>
            </div>
            <div className="col-span-full md:col-span-5">
                <section className="mt-4 md:mt-0">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <strong className="text-2xl">{formatPrice(product.price)}</strong>
                    <div className="flex items-center gap-x-2 mt-1 text-gray-700">
                        <div>Terjual {product.sold}+</div>
                        <span className="w-1 h-1 rounded-xl-full bg-slate-300"></span>
                        <div className="flex items-center gap-x-1">
                            <IoStar className="w-4 h-4 text-yellow-500" />
                            {product.rating}
                        </div>
                    </div>
                </section>
                <section>
                    <p className="text-gray-700 mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
        </div>
    );
}