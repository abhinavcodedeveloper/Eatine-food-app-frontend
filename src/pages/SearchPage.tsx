import CuisineFilter from "../components/CuisineFilter";
import {SearchResultCard} from "../components/SearchResultCard";
import SearchResultInfo from "../components/SearchResultInfo";
import SortOptionDropdown from "../components/SortOptionDropDown";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

// sample interface of cards 
const SearchPage = ()=>{
  const results = [
    {
      user:"asdas3",
      restaurentName: "La Bella Italia",
      city: "Rome",
      country: "Italy",
      deliveryPrice: 5,
      estimatedDeliveryTime: 30,
      cuisines: ["Italian", "Mediterranean"],
      menuItems: [
        
        { name: "Margherita Pizza", price: 12 },
        { name: "Pasta Carbonara", price: 15 }
      ],
      imageUrl: "https://example.com/images/la-bella-italia.jpg",
      lastUpdated: "2023-06-29T12:34:56Z"
    },
    {
        user:"asdas4",
      restaurentName: "Dragon's Delight",
      city: "Beijing",
      country: "China",
      deliveryPrice: 3,
      estimatedDeliveryTime: 25,
      cuisines: ["Chinese"],
      menuItems: [
        { name: "Kung Pao Chicken", price: 10 },
        { name: "Spring Rolls", price: 5 }
      ],
      imageUrl: "https://example.com/images/dragons-delight.jpg",
      lastUpdated: "2023-06-28T10:20:30Z"
    },
    {
        user:"asdas5",
      restaurentName: "El Mexicano",
      city: "Mexico City",
      country: "Mexico",
      deliveryPrice: 4,
      estimatedDeliveryTime: 35,
      cuisines: ["Mexican"],
      menuItems: [
        { name: "Tacos", price: 8 },
        { name: "Burritos", price: 10 }
      ],
      imageUrl: "https://example.com/images/el-mexicano.jpg",
      lastUpdated: "2023-06-27T15:50:20Z"
    },
    {
        user:"asdas6",
      restaurentName: "Spice Route",
      city: "Mumbai",
      country: "India",
      deliveryPrice: 2,
      estimatedDeliveryTime: 40,
      cuisines: ["Indian"],
      menuItems: [
        { name: "Butter Chicken", price: 12 },
        { name: "Naan", price: 3 }
      ],
      imageUrl: "https://example.com/images/spice-route.jpg",
      lastUpdated: "2023-06-26T18:25:40Z"
    },
    {
        user:"asdas7",
      restaurentName: "Thai Orchid",
      city: "Bangkok",
      country: "Thailand",
      deliveryPrice: 3,
      estimatedDeliveryTime: 20,
      cuisines: ["Thai"],
      menuItems: [
        { name: "Pad Thai", price: 9 },
        { name: "Green Curry", price: 11 }
      ],
      imageUrl: "https://example.com/images/thai-orchid.jpg",
      lastUpdated: "2023-06-25T14:10:10Z"
    }
  ];
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        <CuisineFilter
        />
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo />
          <SortOptionDropdown
          />
        </div>

        {results.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
       
      </div>
    </div>
  );
};

export default SearchPage;