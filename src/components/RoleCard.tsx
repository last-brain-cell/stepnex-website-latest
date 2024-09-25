"use client";

import ReactCardFlip from "react-card-flip";
import { Role } from "@/components/RolesSection";
import { useState } from "react";

export default function RoleCard({ role }: { role: Role }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} containerClassName={""}>
      {/* Front of the card */}
      <div
        onClick={() => setIsFlipped(true)}
        className="relative flex hover:scale-95 transition ease-linear flex-col h-56 py-4 hover:cursor-pointer bg-white shadow-md p-4  rounded-lg   no-scrollbar overflow-auto"
      >
        <div className="text-lg font-semibold text-stepnex-blue mb-2">
          {role.name}
        </div>
        <div className="text-md mb-2">{role.description}</div>

        {/* Display skills as a comma-separated string */}
        <div className="text-sm text-gray-700 mb-4">
          Skills: {role.skills.join(", ")}
        </div>

        {/* View details button at top-right corner */}
        {/*<div className="absolute top-2 right-2">*/}
        {/*    <button*/}
        {/*        className="text-blue-600 font-semibold p-1 hover:bg-gray-100 rounded-lg"*/}
        {/*        onClick={() => setIsFlipped(true)}*/}
        {/*    >*/}
        {/*        View details*/}
        {/*    </button>*/}
        {/*</div>*/}
      </div>

      {/* Back of the card */}
      <div
        onClick={() => setIsFlipped(false)}
        className="hover:cursor-pointer relative  flex flex-col h-56 py-4 bg-white shadow-md p-4  rounded-lg "
      >
        <div className="font-semibold mb-4  text-blue-800">
          Roles and Responsibilities:
        </div>
        <ul className="list-disc pl-5 mb-4 no-scrollbar overflow-auto">
          {role.responsibilities.map((responsibility) => (
            <li className={"mb-1"} key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>

        {/* Go back button at top-right corner */}
        {/*<div className="absolute top-2 right-2">*/}
        {/*    <button*/}
        {/*        className="text-blue-600 font-semibold p-1 hover:bg-gray-100 rounded-lg"*/}
        {/*        onClick={() => setIsFlipped(false)}*/}
        {/*    >*/}
        {/*        Go back*/}
        {/*    </button>*/}
        {/*</div>*/}
      </div>
    </ReactCardFlip>
  );
}
