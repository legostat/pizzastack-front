import { FC } from "react";

interface MenuItemsProps {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const MenuItem: FC<MenuItemsProps> = ({
  imagePath,
  weight,
  title,
  ingredients,
  price,
}) => {
  return (
    <div className="shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <img
          className="object-cover object-center h-60 w-full rounded-t-2xl"
          src={imagePath}
          alt="Піца Мангеттен"
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
