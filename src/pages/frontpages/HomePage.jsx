import ProductCard from "../../components/ProductCard";
import products from "../../data/products";
import SafeWidth from "../../components/SafeWidth";
import { useSearch } from "../../contexts/SearchContext";
import { useMemo } from "react";

export default function Home() {
    const { searchQuery } = useSearch();

    const filteredProducts = useMemo(() => {
        if (!searchQuery.trim()) {
            return products;
        }
        
        return products.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div>
            <SafeWidth>
                <div className="grid gap-x-2 gap-y-3 sm:gap-y-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                
                {filteredProducts.length === 0 && searchQuery && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
                        <p className="text-gray-600">Coba kata kunci lain atau periksa ejaan Anda</p>
                    </div>
                )}
            </SafeWidth>
        </div>
    );
}