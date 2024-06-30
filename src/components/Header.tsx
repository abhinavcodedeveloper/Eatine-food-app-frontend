import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import LoggedinUserNav from "./LoggedinUserNav";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <section className="flex items-center justify-between w-full px-8 py-6 ">
      <Link to="/" className="flex items-center justify-center">
        <img src="./icons/logo.png" height={60} width={60}></img>
        <p className="pt-1 items-center text-2xl font-bold clashb">Eatein</p>
      </Link>

      <div className="sm:hidden">
        {/* burger icon lagana h idhar */}
        <MobileNav />
      </div>
      <div className="flex gap-10 items-center max-sm:hidden text-orange-500 font-bold clash">
        <Link to="/">Home</Link>
        <Link to="/">Food</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
      <div className="max-md:hidden">
        {isAuthenticated ? (
          <LoggedinUserNav />
        ) : (
          <Button
            className="max-md:hidden py-2 clas"
            onClick={() => loginWithRedirect()}
          >
            Log in
          </Button>
        )}
      </div>
    </section>
  );
};

export default Header;
