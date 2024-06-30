import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { isUint16Array } from "util/types";
import { isatty } from "tty";
import MobileNavContent from "./MobileNavContent";

const MobileNav = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img src="./icons/hamburger.png" height={35} width={35}></img>
        </SheetTrigger>
        <SheetContent>
          {isAuthenticated ? (
            <MobileNavContent/>
          ) : (
            <div className="flex flex-col justify-center w-full gap-3">
              <p className="text-2xl text-bold"> Welcome to Eatein!</p>
              <Button
                className="text-center py-2 w-full bg-orange-500 text-white clash"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
