import React from "react";
import { Routes } from "../routes";

const Display = () => {
    return (
        <div className="w-[100%] m-2 px-6 pt-4 rounded bg-spotify-black text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path='/' element={<DisplayHome />} />
            </Routes>
        </div>
    )
}

export default Display