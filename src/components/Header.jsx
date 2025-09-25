import { Link } from "react-router-dom";
import SafeWidth from "./SafeWidth";
import { IoSearchOutline, IoCartOutline, IoNotificationsOutline, IoMailOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[50] bg-white border-b border-b-gray-300/50">
            <SafeWidth className="flex justify-between items-center py-4">
                <div>
                    <Link to="/">
                        <h2 className="font-mono text-xl md:text-2xl font-bold">&lt;HACKSTORE/&gt;</h2>
                    </Link>
                </div>
                <div className="flex items-center gap-x-1 md:gap-x-4">
                    {/* Search Bar */}
                    <div className="hidden md:flex items-center relative">
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            className="w-80 px-4 py-2 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        />
                        <IoSearchOutline className="absolute left-3 w-4 h-4 text-gray-400" />
                    </div>
                    
                    {/* Mobile Search Icon */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
                        <IoSearchOutline className="w-5 h-5" />
                    </button>
                    
                    {/* Icons */}
                    <div className="flex items-center gap-x-1 md:gap-x-3">
                        {/* Email Icon */}
                        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <IoMailOutline className="w-5 h-5" />
                        </button>
                        
                        {/* Notification Icon */}
                        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors relative">
                            <IoNotificationsOutline className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                                3
                            </span>
                        </button>
                        
                        {/* Cart Icon */}
                        <Link to="/cart" className="p-2 text-gray-600 hover:text-gray-800 transition-colors relative">
                            <IoCartOutline className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">
                                2
                            </span>
                        </Link>
                    </div>
                </div>
            </SafeWidth>
        </header>
    );
}