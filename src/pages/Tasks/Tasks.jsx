import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import swal from "sweetalert";
import TaskCard from "../../components/TaskCard/TaskCard";
import toast from "react-hot-toast";

export default function Tasks() {

    const [postedTaskData, setPostedTaskData] = useState([])
    const axios = useAxios()
    const { user } = useAuth()


    

    const { isPending, error, data: myPostedTasks } = useQuery({
        queryKey: ['AddedTasks', user, postedTaskData],
        queryFn: () =>
            axios.get(`/tasks?email=${user.email}&myTask=${true}`).then(
                (res) => {
                    console.log(res.data)
                    console.log(myPostedTasks)
                    setPostedTaskData(res.data)
                },

            ),
    })

    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div>
            <div className="mx-auto md:w-fit lg:w-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-flow-row-dense gap-y-8 py-10">
                    {
                        postedTaskData?.map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleDelete={handleDelete}></TaskCard>)
                    }
                </div>
            </div>
        </div>
    )

}
