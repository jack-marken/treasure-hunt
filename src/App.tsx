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
  const [lockedArr, setLockedArr] = useState([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await supabase.from('tasks').select();
    if (data != null) {
        setTasks(data);
    }
    const sortedObj = {}
    for (const record of Object.values(data)) {
      sortedObj[record.sequence] = record.is_locked;
    }
    setLockedArr(sortedObj);
  }

  const toggleLocked = async (seq) => {
    var newLockedArr = lockedArr;
    newLockedArr[seq] = !lockedArr[seq];
    setLockedArr(newLockedArr);
    const { error } = await supabase
    .from('tasks')
    .update({ is_locked: lockedArr[seq] })
    .eq('sequence', seq)
    getTasks();
  }

  useEffect(() => {
      getTasks();
  }, [tasks]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/tasks" element={<TaskList lockedArr={lockedArr} />} />
        <Route path="/" element={<Navigate to="1" replace={true} />} />
        <Route path="/1" element={
          <Task
          sequence="1"
          mainText="HEYY"
          hintText="Here is a hint"
          answer=""
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(1)}
          />}
        />
        <Route path="/2" element={
          <Task
          sequence="2"
          mainText="Origami Anagram"
          bodyText="Follow these instructions, and letters will reveal themselves. All letters will make up a single word for the next password."
          answer=""
          link="https://youtu.be/e3NxzdEeAlA"
          hintText="Here is a hint"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(2)}
          />}
        />
        <Route path="/3" element={
          <Task
          sequence="3"
          mainText="Here is the third task"
          link=""
          hintText="Here is a hint"
          answer=""
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(3)}
          />}
        />
        <Route path="/4" element={
          <Task
          sequence="4"
          mainText="Here is the fourth task"
          link=""
          hintText="Here is a hint"
          answer=""
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(4)}
          />}
        />
        <Route path="/5" element={
          <Task
          sequence="5"
          mainText="Here is the fifth task"
          link=""
          hintText="Here is a hint"
          answer=""
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(5)}
          />}
        />
      </Routes>
    </HashRouter>
  );
}
