import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import TaskCard from "../../components/TaskCard/TaskCard";
import toast from "react-hot-toast";
import LoadingAnimations from './../../components/LoadingAnimations/LoadingAnimations';

export default function Tasks() {

    const [postedTaskData, setPostedTaskData] = useState([])
    const [stateChanged, setStateChanged] = useState(false)
    const [statusState, setStatusState] = useState("")
    const axios = useAxios()
    const { user } = useAuth()


    console.log(user)

    const handleDelete = (id) => {

        toast.success("Deleted task")
        // alert

        // axios.delete

    }

    const handleOnGoing = (id) => {
        axios.put(`/tasks/${id}`, { status: "OnGoing" })
        toast.success("Task ")
            .then(res => {
                console.log(res.data)
                toast.success("OnGoing")
                setStatusState("OnGoing")
                setStateChanged(!stateChanged)
            })
        // setStateChanged(!stateChanged)
    }
    const handleTodo = (id) => {
        axios.put(`/tasks/${id}`, { status: "todo" })
        toast.success("Task ")
            .then(res => {
                console.log(res.data)
                toast.success("todo")
                setStatusState("todo")
                setStateChanged(!stateChanged)
            })
        // setStateChanged(!stateChanged)
    }
    const handleComplete = (id) => {
        axios.put(`/tasks/${id}`, { status: "Complete" })
        toast.success("Task ")
            .then(res => {
                console.log(res.data)
                toast.success("Complete")
                setStatusState("Complete")
                setStateChanged(!stateChanged)
            })
        // setStateChanged(!stateChanged)
    }

    const { isPending, error, data: myPostedTasks } = useQuery({
        queryKey: ['AddedTasks', user, postedTaskData, stateChanged, statusState],
        queryFn: () =>
            // // axios.get(`/tasks?email=${user.email}&myTask=${true}`).then(
            axios.get(`/tasks?email=${user.email}`).then(
                (res) => {
                    console.log(res.data)
                    // console.log(myPostedTasks)
                    setPostedTaskData(res.data)
                },

            ),
    })

    // useEffect(() => {
    //     axios.get(`/tasks?email=${user.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //             const taskData = res.data;
    //             setPostedTaskData(taskData)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }, [stateChanged])

    // axios.get(`/tasks?email=${user.email}`)
    //     .then(res => {
    //         // console.log(res.data)
    //         // const taskData = res.data;
    //         setPostedTaskData(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    // console.log()
    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div>
            <div className="mx-auto md:w-fit lg:w-auto">

                <div className="grid grid-cols-1  md:grid-cols-3 md:grid-flow-row-dense gap-y-8 py-10">
                    {
                        postedTaskData?.map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleOnGoing={handleOnGoing} statusState={statusState} handleTodo={handleTodo} handleComplete={handleComplete}> </TaskCard>)
                    }
                    {/* {
                        postedTaskData?.map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleDelete={handleDelete}></TaskCard>)
                    } */}
                </div>
            </div>
        </div>
    )

}
