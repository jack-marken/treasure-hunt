import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from "../supabase-client";
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaLock, FaLockOpen, FaCaretLeft, FaCaretRight } from "react-icons/fa6";

type TaskProps = {
  sequence: string;
  mainText: string;
  bodyText: string;
  link: string;
  hintText: string;
  tasksLength: number;
  toggleLocked: void;
}

export default function Task( {sequence, mainText, bodyText, link, hintText, tasksLength, lockedArr, toggleLocked}: TaskProps ) {
  const [isLocked, setIsLocked] = useState<boolean>(true);

  useEffect(() => {
    if (lockedArr[sequence]) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
  });

  return (
    <div className={`h-dvh ${isLocked ? 'bg-gray-400' : 'bg-emerald-800'}`}>
      <header className="fixed top-8 right-8 left-8 text-white text-4xl">
        <ul className="flex justify-between">
          <li><Link to="/tasks"><RiTreasureMapFill /></Link></li>
          <li>{sequence}/{tasksLength}</li>
          <li><MdOutlineQuestionMark /></li>
        </ul>
      </header>

      <div className={`flex flex-col p-8 h-dvh items-center justify-center text-center text-white ${isLocked ? 'bg-gray-400' : 'bg-emerald-700'}`}>
        {isLocked &&
        <FaLock className="relative text-5xl" />
        }
        {!isLocked && <h1 className="text-4xl">{mainText}</h1>}
        {!isLocked && bodyText && <p className="p-3 border-t mt-4 text-xl">{bodyText}</p>}
        {!isLocked && link && <a className="p-3 mt-4 bg-white rounded-md text-black" href={link}>{link}</a>}
      </div>

      <div className="fixed flex right-8 bottom-8 left-8">
        <div className="flex w-full justify-center">
        <Link
        to={`/${sequence > 1 ? parseInt(sequence) - 1 : parseInt(sequence)}`}
        className="w-12 flex-grow relative -left-1 flex items-center justify-center h-16 rounded-l-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1"
        >
          <FaCaretLeft />
        </Link>
      {!isLocked &&
        <button onClick={toggleLocked} className="basis-3/4 relative -left-1 flex items-center justify-center h-16 bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          <FaLock/>
        </button>
      }
      {isLocked &&
        <button onClick={toggleLocked} className="basis-3/4 relative -left-1 flex items-center justify-center h-16 bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          PASSWORD
        </button>
      }
        <Link
        to={`/${sequence < tasksLength ? parseInt(sequence) + 1 : parseInt(sequence)}`}
        className="w-12 flex-auto relative -left-1 flex items-center justify-center h-16 rounded-r-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1"
        >
          <FaCaretRight />
        </Link>
        </div>
      </div>
    </div>
  );
}
