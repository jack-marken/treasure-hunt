import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import supabase from "./supabase-client";

import Task from "./components/Task";
import TaskList from "./components/TaskList";
import OrigamiTask from "./components/OrigamiTask";
import LocationTask from "./components/LocationTask";
import PhilipTask from "./components/PhilipTask";
import JigsawTask from "./components/JigsawTask";


interface Task {
  sequence: number;
  is_locked: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await supabase.from('tasks').select();
    if (data != null) {
        setTasks(data);
    }
  }

  const retrieveLocked = (sequence: number) => {
    // const lockedArr = tasks.map((task) => return {task.sequence:task.is_locked});
    const match = tasks.find(x => x.sequence == sequence);

    if (match) {
      return match.is_locked;
    }
    return false;


    // console.log(JSON.stringify(lockedTasks));
    // const { data } = await supabase
    // .from('tasks')
    // .select('is_locked')
    // .eq('sequence', 1)
    // console.log(JSON.stringify(data[0]['is_locked']));
    // return JSON.stringify(data[0]['is_locked']);
  }

  // const toggleLocked = async (id) => {
  //   const { error } = await supabase
  //   .from('tasks')
  //   .update({ is_locked: !JSON.stringify(tasks["is_locked"]) })
  //   .eq('id', id)
  // }

  useEffect(() => {
      getTasks();
  }, [tasks]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/tasks" element={<TaskList />} />

        <Route path="/" element={<Navigate to="1" replace={true} />} />
        <Route path="/1" element={
          <Task
          sequence="1"
          mainText="HEYY"
          hintText="Here is a hint"
          tasksLength={tasks.length}
          locked={retrieveLocked(1)}
          />}
        />
        <Route path="/2" element={
          <Task
          sequence="2"
          mainText="Origami Anagram"
          bodyText="Follow these instructions, and letters will reveal themselves. All letters will make up a single word for the next password."
          link="https://youtu.be/e3NxzdEeAlA"
          hintText="Here is a hint"
          tasksLength={tasks.length}
          locked={retrieveLocked(2)}
          />}
        />
        <Route path="/3" element={
          <Task
          sequence="3"
          mainText="Here is the third task"
          link=""
          hintText="Here is a hint"
          tasksLength={tasks.length}
          locked={retrieveLocked(3)}
          />}
        />
        <Route path="/4" element={
          <Task
          sequence="4"
          mainText="Here is the fourth task"
          link=""
          hintText="Here is a hint"
          tasksLength={tasks.length}
          locked={retrieveLocked(4)}
          />}
        />
        <Route path="/5" element={
          <Task
          sequence="5"
          mainText="Here is the fifth task"
          link=""
          hintText="Here is a hint"
          tasksLength={tasks.length}
          locked={retrieveLocked(5)}
          />}
        />
      </Routes>
    </HashRouter>
  );
}

        // <Route path="2" element={<OrigamiTask />} />
        // <Route path="3" element={<LocationTask />} />
        // <Route path="4" element={<PhilipTask />} />
        // <Route path="5" element={<JigsawTask />} />





// <div className="flex justify-between mb-12 mx-4 py-4 px-6 w-full h-36 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
//   <Link to="adventure">
//   </Link>
// </div>
