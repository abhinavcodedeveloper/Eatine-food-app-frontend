import { AspectRatio } from "../components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existImgurl = watch("imageUrl");

  return (
    <div className="flex flex-col gap-3 justify-center clash">
      <div>
        <h2 className="text-2xl font-bold clashl">Image</h2>
        <FormDescription>
          Add an image to get displayed!!
        </FormDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existImgurl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existImgurl}
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;