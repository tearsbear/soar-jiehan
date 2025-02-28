import React from "react";
import { Card } from "../types";

interface CardItemProps {
  card: Card;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div
      className={`rounded-[25px] h-[235px] overflow-hidden flex flex-col justify-between ${
        card.color === "dark"
          ? "bg-gradient-to-b from-[#5B5A6F] to-[#000000]/90 text-white"
          : "bg-white text-gray-800 border border-skyLight"
      }`}
    >
      <div className="p-5 px-6 flex-1 flex flex-col gap-8">
        <div className="flex justify-between items-start">
          <div>
            <p
              className={`text-sm lato-regular md:text-[12px] ${
                card.color === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Balance
            </p>
            <h3 className="text-2xl md:text-[20px] lato-bold">
              ${card.balance.toLocaleString()}
            </h3>
          </div>
          <img
            src="/assets/svg/chip-card.svg"
            alt="Card chip"
            className={`w-9 h-9 ${card.color === "dark" ? "" : "brightness-0"}`}
          />
        </div>

        <div className="flex gap-10 items-start">
          <div>
            <p
              className={`text-sm lato-regular md:text-[12px] ${
                card.color === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              CARD HOLDER
            </p>
            <p className="lato-bold md:text-[15px]">{card.cardHolder}</p>
          </div>
          <div>
            <p
              className={`text-sm lato-regular md:text-[12px] ${
                card.color === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              VALID THRU
            </p>
            <p className="lato-bold md:text-[15px]">{card.validThru}</p>
          </div>
        </div>
      </div>

      <div
        className={`px-6 py-4 flex justify-between items-center ${
          card.color === "dark"
            ? "bg-gradient-to-b from-white/10 to-black/10"
            : "bg-white border-t"
        }`}
      >
        <p className="text-lg lato-bold">{card.cardNumber}</p>
        <img
          src="/assets/svg/type-card.svg"
          alt={`${card.type} logo`}
          className={`w-12 h-8 ${
            card.color === "dark" ? "" : "brightness-50 opacity-45"
          }`}
        />
      </div>
    </div>
  );
};

export default CardItem;
