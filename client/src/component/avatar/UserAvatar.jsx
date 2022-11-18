import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserAvatar() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative"
      onClick={() => {
        setShow(!show);
      }}
    >
      <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
      {show && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <Link to={"portfolio"} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
              Account settings
            </Link>
            <Link to={""} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
              Support
            </Link>

            <form method="" action="#" role="none">
              <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
