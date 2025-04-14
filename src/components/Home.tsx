import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";

export default function Counter() {
  const [adventures, setAdventures] = useState([]);

  const getAdventures = async () => {
    const { data, error } = await supabase.from('adventures').select("*");
    setAdventures(data);
    console.log(data)
  }

  useEffect(() => {
      // setTimeout(() => {
      getAdventures();
      // }, 1000);
  }, [])

  return (
    <div className="min-h-screen">
        <header className="h-32 py-2 text-white text-center bg-emerald-800">
            Treasure Hunt
        </header>
        <div className="-mt-6 pt-20 bg-white rounded-t-[24px] h-svh">
            <div className="flex flex-col bg-gray-200">
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap ml-10">
                        {adventures.map(a => (
                        <div className="inline-block px-3">
                            <div className="py-4 px-6 flex justify-between h-96 w-64 rounded-[18px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <h1>{a.title}</h1>
                              <p>{a.is_completed.toString()}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-red-100 h-64">
        </div>
    </div>
  );
}
