import { IoStar } from "react-icons/io5";
import { IoThumbsUpOutline, IoCheckmarkCircle } from "react-icons/io5";
import reviews from "../data/reviews";

export default function ProductReview() {
    return (
        <div>
            <strong className="text-xl">ULASAN PELANGGAN</strong>
            <section className="bg-gradient-to-t border rounded-xl border-gray-300/30 gap-x-10 px-2 py-6 mt-4 grid-cols-1 grid md:grid-cols-3 from-yellow-100/40 via-white to-white">
                <div>
                    <div className="flex items-end gap-x-1">
                        <IoStar className="w-8 h-8 text-yellow-500" />
                        <span className="text-4xl font-bold">4.8</span>
                        <span className="text-gray-600">/ 5.0</span>
                    </div>
                    <div className="text-xs mt-1">100% pembeli merasa puas</div>
                </div>
                <div className="pt-5 md:pt-0">
                    <RatingProgress rate={5} percentage={50} count={58} />
                    <RatingProgress rate={4} percentage={30} count={32} />
                    <RatingProgress rate={3} percentage={10} count={10} />
                </div>
                <div>
                    <RatingProgress rate={2} percentage={5} count={5} />
                    <RatingProgress rate={1} percentage={5} count={5} />
                </div>
            </section>
            <section className="mt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Ulasan Terbaru ({reviews.length})
                    </h3>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        Lihat Semua Ulasan
                    </button>
                </div>
                
                <div className="space-y-4">
                    {reviews.slice(0, 3).map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
                
                {reviews.length > 3 && (
                    <div className="text-center mt-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                            Tampilkan Lebih Banyak
                        </button>
                    </div>
                )}
            </section>
        </div>
    );   
}

function RatingProgress({ rate, percentage, count }) {
    return (
        <div className="flex items-center gap-x-2">
            <span className="text-xs shrink-0 flex items-center gap-x-1">
                <IoStar className="w-3 h-3 text-yellow-500" />
                {rate}
            </span>
            <div className="h-[5px] relative bg-gray-300 w-full rounded-xl-full">
                <div className="h-full bg-green-500 rounded-xl-full" style={{ width: percentage }}></div>
            </div>
            <span className="text-xs text-gray-500">({count})</span>
        </div>
    );
}

function ReviewCard({ review }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <IoStar
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <article className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-x-3">
                {/* User Avatar */}
                <img
                    src={review.userAvatar}
                    alt={`Avatar ${review.userName}`}
                    className="w-10 h-10 rounded-full object-cover"
                />
                
                {/* Review Content */}
                <div className="flex-1 min-w-0">
                    {/* User Info & Rating */}
                    <div className="flex items-center gap-x-2 mb-2">
                        <h4 className="font-medium text-gray-900">{review.userName}</h4>
                        {review.verified && (
                            <IoCheckmarkCircle className="w-4 h-4 text-green-500" title="Verified Purchase" />
                        )}
                        <div className="flex items-center gap-x-1">
                            {renderStars(review.rating)}
                        </div>
                    </div>
                    
                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-2">{formatDate(review.date)}</p>
                    
                    {/* Comment */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {review.comment}
                    </p>
                    
                    {/* Helpful Button */}
                    <div className="flex items-center gap-x-2">
                        <button className="flex items-center gap-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                            <IoThumbsUpOutline className="w-4 h-4" />
                            <span>Membantu ({review.helpful})</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}