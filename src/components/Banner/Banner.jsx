import { Link } from "react-router-dom";

const banner1 = <div className="relative">
    <img className="object-cover w-full rounded-3xl h-96 brightness-50" src="https://images.unsplash.com/photo-1573495782952-e42bd3ea5a4d?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    {/* <img className="object-cover w-full rounded-3xl h-96 brightness-50" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    <div className="absolute top-20 left-8 font-bold flex flex-col justify-center items-start">
        <h1 className="uppercase text-white text-5xl text-left ">
            Hire the best <span className="text-accent font-extrabold">Employers</span> <br />
            for IT jobs, <br />
            Or Get <span className="text-yellow-500  font-extrabold">Hired!!!</span>
        </h1>
        <div className="flex gap-x-6 justify-end pt-4">
            <Link to={"/Registration"} className="btn btn-accent text-black ">
                Registration
            </Link>
            <Link to={"/Login"} className="btn btn-ghost btn-outline  text-white ">
                Login
            </Link>
        </div>
    </div>
</div>
export default function Banner() {
    return (
        <div className="flex w-screen ">
            <div className="w-fit">
                <img className="h-96 w-[400px] rounded-lg" src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="capitalize pl-10 flex flex-col  py-2">
                <div className="text-7xl ml-0 w-fit capitalize font-bold flex-grow">
                    facing difficulties to<br />  manage your <span className="text-red-600">task?</span>
                </div>
                <div className="flex-grow-0 flex items-center justify-between">
                    <div className="text-5xl ml-0 w-fit capitalize font-bold italic ">
                        We are here!!!
                    </div>
                    <Link to={'./login'}><button className="btn btn-primary bg-red-600 border-none text-white">Let's Explore</button></Link>
                </div>

            </div>
        </div>
    )
}
