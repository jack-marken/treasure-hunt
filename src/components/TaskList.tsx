import { useState, useEffect } from 'react';
import supabase from "../supabase-client";
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";

export default function TaskList() {
  const [lockedArr, setLockedArr] = useState([])

  const retrieveLocked = async () => {
    const { data, error } = await supabase
    .from('tasks')
    .select('*')

    const sortedObj = {}
    for (const record of Object.values(data)) {
      sortedObj[record.sequence] = record.is_locked;
    }
    setLockedArr(sortedObj);
  }
    
  useEffect(() => {
    retrieveLocked();
  }, []);

  return (
    <div className="min-h-screen bg-stone-400 text-center">
      <h1 className="pt-10 pb-8 text-3xl text-white">TASKS</h1>
      <div className="flex flex-col mx-8 gap-6 align-center justify-center justify-items-center">
        <Link to="/1" className={`relative flex items-center justify-center h-16 text-xl ${
          lockedArr[1]
            ? '-left-1 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
        {lockedArr[1] ? <FaLock /> : '#1'}                                                                                                                                                                                               
        </Link>                                                                                                                                                                                                                          
        <Link to="/2" className={`relative -left-1 flex items-center justify-center h-16 text-xl ${
          lockedArr[2]
            ? '-left-1 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
          {lockedArr[2] ? <FaLock /> : '#2'}                                                                                                                                                                                             
        </Link>                                                                                                                                                                                                                          
        <Link to="/3" className={`relative -left-1 flex items-center justify-center h-16 text-xl ${
          lockedArr[3]
            ? '-left-1 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
          {lockedArr[3] ? <FaLock /> : '#3'}                                                                                                                                                                                             
        </Link>                                                                                                                                                                                                                          
        <Link to="/4" className={`relative -left-1 flex items-center justify-center h-16 text-xl ${
          lockedArr[4]
            ? '-left-1 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
          {lockedArr[4] ? <FaLock /> : '#4'}                                                                                                                                                                                             
        </Link>                                                                                                                                                                                                                          
        <Link to="/5" className={`relative -left-1 flex items-center justify-center h-16 text-xl ${
          lockedArr[5]
            ? '-left-1 bg-gray-200 shadow-solid text-black active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1'
            : 'bg-stone-300 shadow-md left-1 border-stone-100 border-dashed border-2 text-stone-600'
          }`}>
          {lockedArr[5] ? <FaLock /> : '#5'}
        </Link>
      </div>
    </div>

  );
}
