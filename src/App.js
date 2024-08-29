import axios from "axios";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect, useState } from "react";
import { api } from "./api/api";
import uuid from "react-uuid";

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTasks = async () => {
    setLoading(true)
    const res = await api.get("/todolist")

    setTasks(res.data)

    setLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addNewTask = async (task) => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false
    }

    const res = await api.post('/todolist', newTask)
    // console.log(res)
    setTasks([...tasks, res.data])
  }

  const deleteTask = async (id) => {
    const res = await api.delete(`/todolist/${id}`)

    if (res.statusText === "OK") {
      setTasks(tasks.filter(task => task.id !== id))
    }

    // console.log(res)
  }

  const updateTask = async (id, complete) => {
    const res = await api.patch(`/todolist/${id}`, {
      complete
    })
   
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          task: task.task,
          complete: !task.complete
        }
      }
      return task;
    }))

  }

  return (
    <>
      <div className="w-full h-screen  bg-zinc-800 flex flex-col gap-y-9 justify-center items-center">
        <h1 className="text-4xl text-center text-gray-300 font-bold">To Do List</h1>
        <Form addNewTask={addNewTask} />
        {
          loading ? <h1 className="text-2xl text-center text-gray-300 my-5">Loading ....</h1> :
            <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        }
      </div>
    </>
  );
}

export default App;
