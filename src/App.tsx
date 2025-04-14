import Home from './components/Home.tsx'
// import { useState, useEffect } from 'react';
// import supabase from "./supabaseClient";

export default function App() {
  // const [adventures, setAdventures] = useState([]);

  // const getAdventures = async () => {
  //   const { data, error } = await supabase.from('adventures').select("*");
  //   setAdventures(data);
  //   console.log(data)
  // }

  // useEffect(() => {
  //     // setTimeout(() => {
  //     getAdventures();
  //     // }, 1000);
  // }, [])

  // return (
  //   <ul>
  //       {adventures.map(a => <li>{a.title}</li>)}
  //   </ul>
  // );
    return (
        <Home />
    );
}
