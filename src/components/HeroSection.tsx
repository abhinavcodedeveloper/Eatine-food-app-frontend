import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" w-[90%] mx-auto flex max-md:flex-col px=5 gap-3 items-center justify-center">
      <div className=" flex flex-col gap-4 font-bold clash">
        <p className=" font-bold text-6xl max-md:text-3xl max-md:text-center ">
          Hungry? Just wait food<br/> at your door
        </p>
        <p className="clashl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quas
          sapiente <br/> deserunt rerum ducimus eligendi. Sint error aliquam esse.
          Voluptatum?
        </p>
        <Link to="/searchpage" className="rounded-md font-bold clashl bg-orange-600 text-white text-center w-[25%] py-5 max-md:w-[50%] max-md:mx-auto" >Order Now</Link>
      </div>
      <img src="/images/herofood/herofood.jpg" className="h-[30rem] "></img>
    </div>
  );
};

export default HeroSection;
