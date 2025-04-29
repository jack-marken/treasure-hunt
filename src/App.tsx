import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import supabase from "./supabase-client";

import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Jemima from "./components/Jemima";
import Boxes from "./components/Boxes";
import Reset from "./components/Reset";

interface Task {
  sequence: number;
  is_locked: boolean;
  is_completed: boolean;
}

export default function App() {
  const [lockedArr, setLockedArr] = useState<boolean[]>([]);
  const [completedArr, setCompletedArr] = useState<boolean[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await supabase.from('tasks').select();
    if (data != null) {
        setTasks(data);
    }
    const sortedLocked: boolean[] = []
    const sortedCompleted: boolean[] = []
    for (const record of Object.values(tasks)) {
      sortedLocked[record.sequence] = record.is_locked;
      sortedCompleted[record.sequence] = record.is_completed;
    }
    setLockedArr(sortedLocked);
    setCompletedArr(sortedCompleted);
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

  const toggleCompleted = async (seq: number) => {
    var newCompletedArr: boolean[] = completedArr;
    newCompletedArr[seq] = !completedArr[seq];
    setCompletedArr(newCompletedArr);
    const { error } = await supabase
    .from('tasks')
    .update({ is_completed: completedArr[seq] })
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
        <Route path="/tasks" element={<TaskList lockedArr={lockedArr} completedArr={completedArr} />} />
        <Route path="/jemima" element={<Jemima />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/" element={<Navigate to="tasks" replace={true} />} />
        <Route path="/1" element={
          <Task
          sequence="1"
          mainText="Origami"
          bodyText="Follow these instructions, and letters will reveal themselves. Combine all letters at the end into one word."
          password="origami"
          correctAnswer="underneath"
          answerText="The password for task #8 is 'underneath'."
          link="https://youtu.be/e3NxzdEeAlA"
          hintText="The word does not include a 'Z'"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(1)}
          toggleCompleted={() => toggleCompleted(1)}
          />}
        />
        <Route path="/2" element={
          <Task
          sequence="2"
          mainText="Virnanagram"
          bodyText="Create 10 words using the letters in 'Birthday'. No 3 or 2 letter words are allowed."
          link=""
          hintText="It's up to Virna whether or not you can get a hint"
          password="virna"
          correctAnswer="done"
          answerText="CONGRATS 🎉. More tasks will appear to you soon..."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(2)}
          toggleCompleted={() => toggleCompleted(2)}
          />}
        />
        <Route path="/3" element={
          <Task
          sequence="3"
          mainText="Jemima"
          bodyText="Animal puzzle curated by the mima."
          link="https://jack-marken.github.io/treasure-hunt#/jemima"
          hintText="Spaces are included"
          password="jemima"
          correctAnswer="happy birthday lara"
          answerText="WOOOOO 🔥. Let's move forward... the password for task #4 is 'filip'."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(3)}
          toggleCompleted={() => toggleCompleted(3)}
          />}
        />
        <Route path="/4" element={
          <Task
          sequence="4"
          mainText="Filip"
          bodyText="Ask Filip, 'What is your deepest desire?'"
          link=""
          hintText="His spine tingles even at the thought."
          password="Filip"
          correctAnswer="ear"
          answerText="You have identified his desire clearly. His goals are within reach - perchance we can consider providing to him? The password for task #5 is 'ear'."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(4)}
          toggleCompleted={() => toggleCompleted(4)}
          />}
        />
        <Route path="/5" element={
          <Task
          sequence="5"
          mainText="Filip: Part 2"
          bodyText="Fulfill Filip's desire: send him photos of five ears, each belonging to a different person."
          link=""
          hintText="Challenging but simple. Do as he would like."
          password="ear"
          correctAnswer="ihavebeenpleased"
          answerText="Filip is nourished; well done 👑. Keep your eyes peeled, as more tasks will appear."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(5)}
          toggleCompleted={() => toggleCompleted(5)}
          />}
        />
        <Route path="/6" element={
          <Task
          sequence="6"
          mainText="Katherine's connections"
          bodyText="A NYT connections game, custom made by your co-worker"
          link="https://connections.swellgarfo.com/game/-OP0NP7eU4IRGidGaYOm"
          hintText=""
          password="katherine"
          correctAnswer="moo"
          answerText="Baller 🔥. Two more tasks to go."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(6)}
          toggleCompleted={() => toggleCompleted(6)}
          />}
        />
        <Route path="/7" element={
          <Task
          sequence="7"
          mainText="Paige's word search"
          bodyText="Find and enter the 4 letter word resulting from Paige's puzzle."
          link=""
          hintText="echolocation"
          password="paige"
          correctAnswer="bats"
          answerText="Correct! 🎉🦇🐺🦇🎉"
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(7)}
          toggleCompleted={() => toggleCompleted(7)}
          />}
        />
        <Route path="/8" element={
          <Task
          sequence="8"
          mainText="-38.02410, 145.10692"
          bodyText="Take a look around"
          link="https://www.google.com/maps"
          hintText="You'll need to travel there and look for anything out of place (save this for Friday)."
          password="underneath"
          correctAnswer="1483"
          answerText="DONE. Congratulations!!! 🔥🔥🔥🔥🔥 If you have done all tasks, go to the menu screen."
          tasksLength={tasks.length}
          lockedArr={lockedArr}
          completedArr={completedArr}
          toggleLocked={() => toggleLocked(8)}
          toggleCompleted={() => toggleCompleted(8)}
          />}
        />
      </Routes>
    </HashRouter>
  );
}
