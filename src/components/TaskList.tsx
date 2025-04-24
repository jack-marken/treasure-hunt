import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";


interface taskListProps {
  lockedArr: boolean[];
}

export default function TaskList({lockedArr} : taskListProps) {
  const tasks = [];

  for (let i = 1; i <= 5; i++) {
    tasks.push(
        <Link to={'/'+i} key={i} className={`relative flex items-center justify-center h-16 text-xl ${
          lockedArr[i]
            ? '-left-1 -top-1 mb-2 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1 active:top-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
        {lockedArr[i] ? <FaLock /> : '#'+i }                                                                                                                                                                                               
        </Link>                                                                                                                                                                                                                          
    )
  }
  return (
    <div className="min-h-screen bg-stone-400 text-center">
      <h1 className="pt-10 pb-8 text-3xl text-white">TASKS</h1>
      <div className="flex flex-col mx-8 gap-6 align-center justify-center justify-items-center">
        {tasks}
      </div>
    </div>
  );
}
