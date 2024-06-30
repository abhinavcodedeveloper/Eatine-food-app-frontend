import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import React from "react";
import LogoutUser from "./LogoutUser";
import { Link } from "react-router-dom";

const LoggedinUserNav = () => {
  const { user } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <div className="flex gap-2 items-center clash px-2 py-3">
          <img src="./icons/Tick.png" height={20} width={20}></img>
          <DropdownMenuTrigger>{user?.name}</DropdownMenuTrigger>
        </div>
        <DropdownMenuContent className="w-full flex flex-col item-center border-none clash py-6 px-6 gap-2 ">
          <Link to="/profile">My profile</Link>
          <Link to="/rest-profile">Restaurent Profile</Link>
          <DropdownMenuSeparator />
          <p>{user?.email}</p>
          <div className="bg-red-600 text-white rounded-md px-4 py-2 text-center cursor-pointer">
            <LogoutUser />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LoggedinUserNav;
