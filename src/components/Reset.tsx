import { useState } from 'react';
import supabase from "../supabase-client";

export default function Reset() {
    const [resetted, setResetted] = useState<boolean>(false)
    const resetAllTasks = async () => {
        const { error } = await supabase
        .from('tasks')
        .update({ is_locked: true, is_completed: false })
        .gte('sequence', 1)
        console.log(error);
        setResetted(true);
    }
    return (
        <div className="min-h-screen w-full bg-stone-300">
            <div className="flex pt-10 px-8 w-full justify-center">
               <button onClick={() => resetAllTasks()} className={`${resetted ? 'bg-yellow-500 border-yellow-600' : 'bg-red-700 border-red-800'} text-white px-5 py-4 border border-4`}>RESET ALL TASKS</button> 
            </div>
        </div>
    );
}