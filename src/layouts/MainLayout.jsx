import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SearchProvider } from "../contexts/SearchContext";
import { Toaster } from "sonner";

export default function MainLayout() {
    return (
        <SearchProvider>
            <Toaster />
            <div>
                <Header withSearch={false} />
                <main className="pt-22 min-h-screen pb-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SearchProvider>
    );
}