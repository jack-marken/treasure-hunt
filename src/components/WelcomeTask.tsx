import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from "../supabase-client";
import { BsMap } from "react-icons/bs";
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

export default function WelcomeTask( {sequence, tasksLength, locked, bg} ) {
  const [isLocked, setIsLocked] = useState<boolean>(locked);

  const toggleIsLocked = async () => {
    // var newTasks = tasks;
    // for (let i of Object.keys(tasks)) {
    //   if (tasks[i]['sequence'] == currentTask) {
    //     newTasks[i]['is_locked'] = !newTasks[i]['is_locked']
    //   }
    // }
    
    // console.log(newTasks);
    // setTasks(newTasks);
    // setLocked(!locked);
    
    // var lockedStatus = false;
    // for (let i of Object.keys(tasks)) {
    //   if (tasks[i]['sequence'] == currentTask) {
    //     lockedStatus = tasks[i]['is_locked'];
    //   }
    // }
    
    // lockedStatus = !lockedStatus
    
    const { error } = await supabase
    .from('tasks')
    .update({ is_locked: !isLocked })
    .eq('sequence', sequence)
    setIsLocked(!isLocked);
    // window.location.reload(); 
  }

  return (
    <div className={`h-dvh ${isLocked ? 'bg-gray-400' : 'bg-emerald-800'}`}>
      <header className="fixed top-8 right-8 left-8 text-white text-4xl">
        <ul className="flex justify-between">
          <li><RiTreasureMapFill /></li>
          <li>{sequence}/{tasksLength}</li>
          <li><MdOutlineQuestionMark /></li>
        </ul>
      </header>
        <div className={`flex flex-col h-dvh items-center justify-center text-white ${isLocked ? 'bg-gray-400' : 'bg-emerald-700'}`}>
        {isLocked &&
          <FaLock className="relative -top-5 text-5xl" />
        }
        {!isLocked &&
          <h1>NOT LOCKED</h1>
        }
        </div>
      <div className="fixed right-8 bottom-8 left-8">
      {isLocked &&
        <button onClick={toggleIsLocked} className="relative -left-1 flex items-center justify-center w-full h-16 rounded-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          I'VE GOT IT
        </button>
      }
      {!isLocked &&
        <button onClick={toggleIsLocked} className="relative -left-1 flex items-center justify-center w-full h-16 rounded-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          I'VE GOT IT
        </button>
      }
      </div>
    </div>
  );
}

// <div className="flex justify-between mb-12 mx-4 py-4 px-6 w-full h-36 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
//   <Link to="adventure">
//   </Link>
// </div>
