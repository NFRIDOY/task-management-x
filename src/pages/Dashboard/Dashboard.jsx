import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadingAnimations from '../../components/LoadingAnimations/LoadingAnimations';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import TaskCard from '../../components/TaskCard/TaskCard';

export default function Dashboard() {

    const [postedTaskData, setPostedTaskData] = useState([])
    const [stateChanged, setStateChanged] = useState(false)
    const [statusState, setStatusState] = useState("")
    const axios = useAxios()
    const { user } = useAuth()

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
        queryKey: ['AddedTaskss', user],
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
    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div>
            Dashboard
            <Tabs>
                <TabList>
                    <Tab>To-Do</Tab>
                    <Tab>OnGoing</Tab>
                    <Tab>Complete</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1  md:grid-cols-3 md:grid-flow-row-dense gap-y-8 py-10">
                        {
                            postedTaskData?.filter(postedTask => postedTask?.status === "todo").map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleOnGoing={handleOnGoing} statusState={statusState} handleTodo={handleTodo} handleComplete={handleComplete}> </TaskCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1  md:grid-cols-3 md:grid-flow-row-dense gap-y-8 py-10">
                        {
                            postedTaskData?.filter(postedTask => postedTask?.status === "OnGoing").map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleOnGoing={handleOnGoing} statusState={statusState} handleTodo={handleTodo} handleComplete={handleComplete}> </TaskCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1  md:grid-cols-3 md:grid-flow-row-dense gap-y-8 py-10">
                        {
                            postedTaskData?.filter(postedTask => postedTask?.status === "Complete").map(postedTask => <TaskCard key={postedTask._id} postedTask={postedTask} handleOnGoing={handleOnGoing} statusState={statusState} handleTodo={handleTodo} handleComplete={handleComplete}> </TaskCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs >
        </div >
    )
}
