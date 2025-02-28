import React from "react";
import { Card } from "../types";
import CardItem from "./CardItem";

interface CardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cards: Card[];
}

const CardDrawer: React.FC<CardDrawerProps> = ({ isOpen, onClose, cards }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-[998] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-white shadow-xl z-[999] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary">All Cards</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 gap-4">
              {cards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDrawer;
