import SafeWidth from "./SafeWidth";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube, IoArrowForwardOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="border-t border-gray-300/50 bg-gray-50/50">
            <SafeWidth>
                <div className="py-8 lg:py-12">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Hackstore</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Platform e-commerce terpercaya untuk kebutuhan teknologi dan gadget terbaru dengan kualitas terjamin.
                                </p>
                            </div>
                            
                            {/* Contact Info */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-2 text-sm text-gray-600">
                                    <IoCallOutline className="w-4 h-4 text-green-600" />
                                    <span>+62 21 1234 5678</span>
                                </div>
                                <div className="flex items-center gap-x-2 text-sm text-gray-600">
                                    <IoMailOutline className="w-4 h-4 text-green-600" />
                                    <span>support@hackstore.com</span>
                                </div>
                                <div className="flex items-start gap-x-2 text-sm text-gray-600">
                                    <IoLocationOutline className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Jl. Teknologi No. 123, Jakarta Selatan 12345</span>
                                </div>
                            </div>
                        </div>

                        {/* Customer Service */}
                        <div className="space-y-4">
                            <h4 className="text-base font-semibold text-gray-900">Layanan Pelanggan</h4>
                            <nav className="space-y-2">
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Pusat Bantuan
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Cara Berbelanja
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Pengiriman & Pengembalian
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Garansi Produk
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Hubungi Kami
                                </a>
                            </nav>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h4 className="text-base font-semibold text-gray-900">Tentang Kami</h4>
                            <nav className="space-y-2">
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Tentang Hackstore
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Karir
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Berita & Blog
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Program Afiliasi
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                                    Mitra Bisnis
                                </a>
                            </nav>
                        </div>

                        {/* Newsletter & Social */}
                        <div className="space-y-4">
                            <h4 className="text-base font-semibold text-gray-900">Tetap Terhubung</h4>
                            
                            {/* Newsletter */}
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600">
                                    Dapatkan update produk terbaru dan penawaran menarik!
                                </p>
                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Masukkan email Anda"
                                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                                        aria-label="Subscribe newsletter"
                                    >
                                        <IoArrowForwardOutline className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>

                            {/* Social Media */}
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600">Ikuti kami di:</p>
                                <nav className="flex gap-x-3">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <IoLogoFacebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-xl transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <IoLogoTwitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <IoLogoInstagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <IoLogoYoutube className="w-5 h-5" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="border-t border-gray-300/50 pt-6 mb-6">
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-gray-900">Metode Pembayaran</h4>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    Visa
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    Mastercard
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    BCA
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    Mandiri
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    BNI
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    BRI
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    OVO
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    DANA
                                </div>
                                <div className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700">
                                    GoPay
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-300/50 pt-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="text-center md:text-left">
                                <p className="text-sm text-gray-600">
                            © 2025 Hackstore. All rights reserved.
                        </p>
                                <p className="text-xs mt-1 text-gray-500">
                            Built with React & Tailwind CSS
                        </p>
                            </div>
                            
                            {/* Legal Links */}
                            <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                    Syarat & Ketentuan
                                </a>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                    Kebijakan Pengembalian
                                </a>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                    Sitemap
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </SafeWidth>
        </footer>
    );
}