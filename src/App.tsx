import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from "./supabase-client";
import { BsMap } from "react-icons/bs";
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";

import WelcomeTask from "./components/WelcomeTask";
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
  const [currentTask, setCurrentTask] = useState(1);

  const getTasks = async () => {
    const { data } = await supabase.from('tasks').select();
    if (data != null) {
        setTasks(data);
    }
  }

  const retrieveLocked = (sequence) => {
    // const lockedArr = tasks.map((task) => return {task.sequence:task.is_locked});
    var match = tasks.find(x => x.sequence == sequence);

    if (match) {
      console.log(match.is_locked);
      return match.is_locked;
    }


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
  }, []);


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="1" replace={true} />} />
        <Route path="1" element={<WelcomeTask sequence="1" tasksLength={tasks.length} locked={retrieveLocked(1)} />} />
        <Route path="2" element={<OrigamiTask />} />
        <Route path="3" element={<LocationTask />} />
        <Route path="4" element={<PhilipTask />} />
        <Route path="5" element={<JigsawTask />} />
      </Routes>
    </HashRouter>
  );
}

// <div className="flex justify-between mb-12 mx-4 py-4 px-6 w-full h-36 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
//   <Link to="adventure">
//   </Link>
// </div>
