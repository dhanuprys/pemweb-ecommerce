import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchProvider } from "../contexts/SearchContext";

export default function AdminLayout() {
    return (
        <SearchProvider>
        <div>
            <Header />
            <main className="pt-22 min-h-screen pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
        </SearchProvider>
    );
}