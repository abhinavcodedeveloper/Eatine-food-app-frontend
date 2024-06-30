// import { useAuth0 } from "@auth0/auth0-react";
// import { useMutation } from "react-query";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; //deploy purpose
// type MenuItem = {
//   _id: string;
//   name: string;
//   price: number;
// };

// type Restaurent = {
//   _id: string;
//   user: string;
//   restaurentName: string;
//   city: string;
//   country: string;
//   deliveryPrice: number;
//   estimatedDeliveryTime: number;
//   cuisines: string[];
//   menuItems: MenuItem[];
//   imageUrl: string;
//   lastUpdated: string;
// };

// export const MyRestapi = () => {
//   const { getAccessTokenSilently } = useAuth0();
//   const createReqRest = async (
//     restaurentData: FormData
//   ): Promise<Restaurent> => {
//     const token = await getAccessTokenSilently();
//     console.log(restaurentData)
//     const res = await fetch(`${API_BASE_URL}/api/my/restaurent`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: restaurentData,
//     });
//     console.log("hello there")
//     if (!res.ok) {
//       throw new Error("NO rest created, try again!!");
//     }
//     return res.json();
//   };
//   const {
//     mutateAsync: createRest,
//     isLoading,
//     isError,
//     isSuccess,
//   } = useMutation(createReqRest);

//   if(isSuccess){
//     console.log("successfylly created restaurent")
//   }
//   if (isError) {
//     throw new Error("Problem is there");
//   }
//   return {
//     createRest,
//     isLoading,
//   };
// };

// import { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
// import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
type MenuItem = {
      _id: string;
      name: string;
      price: number;
    };
    
    type Restaurent = {
      _id: string;
      user: string;
      restaurentName: string;
      city: string;
      country: string;
      deliveryPrice: number;
      estimatedDeliveryTime: number;
      cuisines: string[];
      menuItems: MenuItem[];
      imageUrl: string;
      lastUpdated: string;
    };
    


export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurent> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    }); 

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRest,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    console.log("lesgoo")
  }

  if (error) {
   throw new Error("Not in runnable state")
  }

  return { createRest, isLoading };
};



// export const useGetMyRestaurantOrders = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch orders");
//     }

//     return response.json();
//   };

//   const { data: orders, isLoading } = useQuery(
//     "fetchMyRestaurantOrders",
//     getMyRestaurantOrdersRequest
//   );

//   return { orders, isLoading };
// };

// type UpdateOrderStatusRequest = {
//   orderId: string;
//   status: string;
// };

// export const useUpdateMyRestaurantOrder = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const updateMyRestaurantOrder = async (
//     updateStatusOrderRequest: UpdateOrderStatusRequest
//   ) => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(
//       `${API_BASE_URL}/api/my/restaurant/order/${updateStatusOrderRequest.orderId}/status`,
//       {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: updateStatusOrderRequest.status }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update status");
//     }

//     return response.json();
//   };

//   const {
//     mutateAsync: updateRestaurantStatus,
//     isLoading,
//     isError,
//     isSuccess,
//     reset,
//   } = useMutation(updateMyRestaurantOrder);

//   if (isSuccess) {
//     toast.success("Order updated");
//   }

//   if (isError) {
//     toast.error("Unable to update order");
//     reset();
//   }

//   return { updateRestaurantStatus, isLoading };
// };
