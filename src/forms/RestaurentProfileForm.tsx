import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../components/ui/form";
import DetailsSection from "./DetailsSection";
import CuisinesSec from "./CuisinesSec";
import Menuitem from "./MenuitemS";
import ImageSection from "./ImageSection";
import { Button } from "../components/ui/button";

type Props = {
  onSave: (restaurentData: FormData) => void;
  isLoading: boolean;
};

const frontendformS = z.object({
  restaurentName: z.string({
    required_error: "Restaurant name is required"
  }),
  city: z.string({
    required_error: "City name is required"
  }),
  country: z.string({
    required_error: "Country name is required"
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Price is required"
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Delivery time is required"
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please add at least one item"
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required")
    })
  ),
  imageFile: z.instanceof(File, { message: "File is required" })
});

// Adding the formS type in restformdata
type Restformdata = z.infer<typeof frontendformS>;

const RestaurentProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<Restformdata>({
    resolver: zodResolver(frontendformS),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }]
    }
  });

  const onSubmit = (formDataJSON: Restformdata) => {
      console.log("hello");
    const formData = new FormData();
    formData.append("restaurentName", formDataJSON.restaurentName);
    formData.append("city", formDataJSON.city);
    formData.append("country", formDataJSON.country);
    formData.append("deliveryPrice", formDataJSON.deliveryPrice.toString());
    formData.append("estimatedDeliveryTime", formDataJSON.estimatedDeliveryTime.toString());
    formDataJSON.cuisines.forEach((c, i) => {
      formData.append(`c[${i}]`, c);
    });
    formDataJSON.menuItems.forEach((m, i) => {
      formData.append(`menuItems[${i}][name]`, m.name);
      formData.append(`menuItems[${i}][price]`, m.price.toString());
    });
    formData.append(`imageFile`, formDataJSON.imageFile);
    onSave(formData);
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 bg-gray-50 p-10 rounded-lg">
          <DetailsSection />
          <CuisinesSec />
          <Menuitem />
          <ImageSection />
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <Button className="rounded-mg py-2 px-4 text-white bg-green-400 w-[70px]" type="submit">
              Upload
            </Button>
          )}
        </form>
      </Form>
  );
};

export default RestaurentProfileForm;
