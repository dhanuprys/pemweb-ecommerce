import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div>
            <Header />
            <main className="pt-22 min-h-screen pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}