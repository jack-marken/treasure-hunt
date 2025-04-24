import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from "./supabaseClient";

export default function App() {
  return (
    <div className="min-h-screen">
        <header className="pt-10 py-4 text-center text-emerald-800 text-xl">
            Treasure Hunt
        </header>
        <div className="h-svh pt-12">
            <div className="flex justify-center">
                <div className="flex justify-between mb-12 mx-4 py-4 px-6 w-full h-36 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Link to="adventure">
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-emerald-700 h-64">
        </div>
    </div>
  );
}
