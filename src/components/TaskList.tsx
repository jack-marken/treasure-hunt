import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

interface taskListProps {
  lockedArr: boolean[];
  completedArr: boolean[];
}

export default function TaskList({lockedArr, completedArr} : taskListProps) {
  const [allCompleted, setAllCompleted] = useState<boolean>(false);
  const tasks = [];
  
  
  useEffect(() => {
    if (completedArr.filter(task => task === true).length < completedArr.length - 1) {
      setAllCompleted(false);
    } else {
      setAllCompleted(true);
    }
  });

  for (let i = 1; i < lockedArr.length; i++) {
    tasks.push(
        <Link to={'/'+i} key={i} className={`relative flex items-center justify-center h-16 text-xl ${
          completedArr[i]
            ? 'bg-stone-300 shadow-md border-stone-100 border-dashed border-2 text-stone-600'
            : '-left-1 -top-1 mb-2 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1 active:top-1'
          }`}>
          {
          lockedArr[i]
          ? <div className="flex flex-row align-center leading-[1.2] text-gray-500"><FaLock className="mr-2" />#{i}</div>
          : completedArr[i]
            ? <div className="flex flex-row align-center leading-[1.2] pl-2"><FaCheckCircle className="text-emerald-700 mr-2" />#{i}</div>
            : <div className="flex flex-row align-center leading-[1.2] pl-2">#{i}</div>
          }
        </Link>
    )
  }
  return (
    <div className={`min-h-screen pb-10 text-center ${allCompleted ? 'bg-yellow-600' : 'bg-stone-400'}`}>
      <h1 className="pt-10 pb-8 text-3xl text-white">TASKS</h1>
        <div className="bg-gray-100 border-stone-600 text-gray-500 pt-6 pb-5 mx-8 mb-10">
          <div className={`px-3 py-2 mb-3 inline-block text-white ${allCompleted ? 'bg-emerald-700' : 'bg-gray-400'} rounded-lg`}>{completedArr.filter(task => task === true).length}/{completedArr.length - 1}</div><br />
          {!allCompleted && <span>Tasks until gift</span>}
          {allCompleted && <span>YOU ARE FINISHED. HAPPY BIRTHDAY!!!!!!!<br/><br/>Consult Jack for the prize.</span>}
        </div>
      <div className="flex flex-col mx-8 gap-6 align-center justify-center justify-items-center">
        {tasks}
      </div>
    </div>
  );
}
