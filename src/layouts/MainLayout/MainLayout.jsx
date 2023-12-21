import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


export default function MainLayout() {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-40vh)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="relative my-0">
                <Footer></Footer>
            </div>
        </div>
    )
}
