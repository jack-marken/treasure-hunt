import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import supabase from "./supabase-client";

import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Jemima from "./components/Jemima";

interface Task {
  sequence: number;
  is_locked: boolean;
}

export default function App() {
  const [lockedArr, setLockedArr] = useState<boolean[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await supabase.from('tasks').select();
    if (data != null) {
        setTasks(data);
    }
    const sortedObj: boolean[] = []
    for (const record of Object.values(tasks)) {
      sortedObj[record.sequence] = record.is_locked;
    }
    setLockedArr(sortedObj);
  }

  const toggleLocked = async (seq: number) => {
    var newLockedArr: boolean[] = lockedArr;
    newLockedArr[seq] = !lockedArr[seq];
    setLockedArr(newLockedArr);
    const { error } = await supabase
    .from('tasks')
    .update({ is_locked: lockedArr[seq] })
    .eq('sequence', seq)
    getTasks();
    console.log(error);
  }

  useEffect(() => {
      getTasks();
  }, [tasks]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/tasks" element={<TaskList lockedArr={lockedArr} />} />
        <Route path="/jemima" element={<Jemima />} />
        <Route path="/" element={<Navigate to="1" replace={true} />} />
        <Route path="/1" element={
          <Task
          sequence="1"
          mainText="Virnanagram"
          bodyText="Create 10 words using the letters in 'Birthday'. No 3 or 2 letter words are allowed."
          link=""
          img=""
          hintText="Here is a hint"
          password="virnanagram"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(1)}
          />}
        />
        <Route path="/2" element={
          <Task
          sequence="2"
          mainText="Origami"
          bodyText="Follow these instructions, and letters will reveal themselves. All letters will make up a single word for the next password."
          password="origami"
          link="https://youtu.be/e3NxzdEeAlA"
          img=""
          hintText="Here is a hint"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(2)}
          />}
        />
        <Route path="/3" element={
          <Task
          sequence="3"
          mainText="Jemima"
          bodyText="The puzzle is below"
          link="https://jack-marken.github.io/treasure-hunt#/jemima"
          img=""
          hintText="Here is a hint"
          password="jemima"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(3)}
          />}
        />
        <Route path="/jemima" element={<Jemima />} />
        <Route path="/3" element={
          <Task
          sequence="3"
          mainText="Philip"
          bodyText="Message Philip and ask him 'What is your deepest desire?'"
          link=""
          img=""
          hintText="Here is a hint"
          password="philip"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(3)}
          />}
        />
        <Route path="/4" element={
          <Task
          sequence="4"
          mainText="Philip Part 2"
          bodyText="Fulfill Phlip's desire: send him photos of four ears, each belonging to a different person."
          link=""
          img=""
          hintText="Here is a hint"
          password="ear"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(4)}
          />}
        />
        <Route path="/5" element={
          <Task
          sequence="5"
          mainText="Here is the fifth task"
          bodyText=""
          link=""
          img=""
          hintText="Here is a hint"
          password=""
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          toggleLocked={() => toggleLocked(5)}
          />}
        />
      </Routes>
    </HashRouter>
  );
}
