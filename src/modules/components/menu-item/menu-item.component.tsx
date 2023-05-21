import { FC } from "react";
import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

interface MenuItemsProps {
  imageId: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const MenuItem: FC<MenuItemsProps> = ({
  imageId,
  weight,
  title,
  ingredients,
  price,
}) => {
  const image = cloudinary.image(imageId);
  image.addTransformation("w_384,h_240,dpr_2.0");

  return (
    <div className="shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <AdvancedImage
          cldImg={image}
          alt={title}
          className="object-cover object-center h-60 w-full rounded-t-2xl"
        />
        <span className="absolute bottom-1.5 right-3 text-white text-sm rounded-[2rem] px-2 py-px bg-gray-900/50">
          {weight} г
        </span>
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price} грн.</span>
      </div>
    </div>
  );
};
