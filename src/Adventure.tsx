import { useState, useEffect } from 'react';
import supabase from "./supabaseClient";

export default function App() {
  const TASK_HEIGHT = 20;
  const [adventures, setAdventures] = useState<any[]>([]);

  const getAdventures = async () => {
    const { data } = await supabase.from('adventures').select();
    if (data != null) {
        setAdventures(data);
    }
  }

  useEffect(() => {
      getAdventures();
  }, [])

  return (
    <div className="min-h-screen bg-emerald-700">
        <header className="pt-10 py-4 text-center text-white text-xl">
            Adventure #1
        </header>
        <div className="h-svh pt-12 mx-4">
            <div className="bg-blue-300 flex justify-between">
                <div className="flex-none w-12 bg-blue-400"></div>
                <div className="grow">
                {adventures.map((a: any) => (
                <div key={a.id} className="flex justify-center">
                    <div className="grow h-20 flex justify-between mb-12 py-4 px-6 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <h1>{a.title}</h1>
                      <p>{a.is_completed.toString()}</p>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}
