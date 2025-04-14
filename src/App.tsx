import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://trqtlzvegdfvthfctxdh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycXRsenZlZ2RmdnRoZmN0eGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyOTEyNDgsImV4cCI6MjA1OTg2NzI0OH0.1M-AStLQdB-cOPADdvm9av7gu1dcQSdanLwkYJI6Dvk")

function App() {
  // const [levels, setLevels] = useState([]);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
     getLevels()
  }, []);
 console.log(levels)


  async function getLevels() {
      const { data } = await supabase.from("levels").select();
      setLevels(data);
  }


//   return (
//       <ul>
//         {levels.map((level) => (
//             <li key={level.unlocked.toString()}>{level.unlocked.toString()}</li>
//         ))}

//         {console.log(levels)}
//       </ul>
//   );

        // <p class="isolated">{levels.map((level) => level.unlocked.toString())}</p>

            // <div className="relative aspect-video m-6 p-6 w-auto sm:w-96 rounded-xl {level.unlocked == false ? bg-white/20 : bg-red-400;} shadow-lg ring-1 ring-black/5 backdrop-blur-lg"></div>
            // <div className="relative left-10 aspect-square rounded-full w-12 bg-orange-500"></div>
            // <div className="relative -right-10 aspect-square rounded-full w-24 bg-purple-500"></div>
                // <div className={"relative aspect-video m-6 p-6 w-auto sm:w-96 rounded-xl shadow-lg ring-1 ring-black/5 backdrop-blur-lg" + (level.unlocked ? "bg-white" : "bg-red-500")}>

  return (
    <div className="min-h-screen flex justify-center bg-emerald-700">
        <div className="aspect-video p-2 w-96 inline-block bg-white">
            {levels.map((level) => (
                <div key={level.id} className={`relative aspect-video mb-2 p-6 w-auto rounded-xl ring-1 ring-black/5 ${level.unlocked
                    ? "bg-white/20"
                    : "bg-gray-200"
                    }`
                }>
                    <div className="text-xl font-medium text-black">{level.id.toString()}</div>
                    <p className="text-gray-500">{level.unlocked ? 'Unlocked' : 'Locked'}</p>
                </div>
                // <p></p>
            ))}
        </div>
    </div>
  );
}

export default App;
