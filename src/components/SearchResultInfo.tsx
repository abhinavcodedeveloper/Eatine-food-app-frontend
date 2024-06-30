
  
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";



const RestaurantInfo = () => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          Yellow Chilli 
        </CardTitle>
        <CardDescription>
          Delhi, India
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="flex">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent> */}
    </Card>
  );
};

export default RestaurantInfo;