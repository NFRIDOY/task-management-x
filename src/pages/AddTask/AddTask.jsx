import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
// import axios from "axios";
// import { data } from "autoprefixer";


export default function AddTask() {

    useEffect(() => {
        // const routeName = location.pathname === '/' ? '' : "";

        // document.title = `${routeName}`;
        // console.log(document.title)
    }, [])

    const { user, loading, setLoading } = useAuth()
    const axios = useAxios();

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email
        const taskTitle = form.Title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;


        const newTask = {
            email,
            taskTitle,
            description,
            deadline,
            priority,
            status: "todo"
        }
        // Output
        console.log(newTask)
        axios.post("/addTask", newTask)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }

            })
    }
    return (
        <div className="py-7 flex flex-col md:flex-row ">
            <div className="md:w-1/2 space-y-6 flex flex-col md:flex-row justify-center items-center">
                <h1 className="text-7xl font-bold">Add Your <br /> <span className="text-red-600"> Task</span> Here</h1>
            </div>
            <div className="md:w-1/2 my-10 px-10 md:my-0 md:px-0">
                <form className="w-full space-y-3" onSubmit={handleAddTask}>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email <span>(Read Only)</span></label>
                        <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder={user.email} required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Your Task Title</label>
                        <input type="text" name="Title" id="Title" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Task Title" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea name="description" id="description" cols="30" rows="3" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Description" required=""></textarea>
                        {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Type" required="" /> */}
                    </div>
                    <div className="w-full">
                        <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 ">Deadline</label>
                        <input type="date" name="deadline" id="deadline" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Type" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 capitalize">priority</label>
                        {/* <input type="text" name="yyyyy" id="yyyyy" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Type" required="" /> */}
                        <select name="priority" id="priority" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Type" required="">
                            {/* <option className="cursor-wait capitalize" value="">
                                Choose Your Priority
                            </option> */}
                            <option value="Low">
                                Low
                            </option>
                            <option value="Moderate">
                                Moderate
                            </option>
                            <option value="High">
                                High
                            </option>
                        </select>
                    </div>
                    <div className="w-full">
                        <input type="submit" name="submit" id="submit" className="w-full text-white bg-red-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder=" Title" required="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
