import React from "react";
import { Transaction } from "../types";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const getIcon = () => {
    switch (transaction.icon) {
      case "credit-card":
        return (
          <div className="bg-[#FFF5D9] p-3 rounded-full">
            <img src="/assets/svg/card.svg" width={28} height={28} />
          </div>
        );
      case "paypal":
        return (
          <div className="bg-[#E7EDFF] p-3 rounded-full">
            <img src="/assets/svg/paypal.svg" width={28} height={28} />
          </div>
        );
      case "user":
        return (
          <div className="bg-[#DCFAF8] p-3 rounded-full">
            <img src="/assets/svg/cash.svg" width={28} height={28} />
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-3 rounded-full">
            <img src="/assets/svg/cash.svg" width={28} height={28} />
          </div>
        );
    }
  };

  return (
    <div className="flex items-center -mt-4 py-4">
      {getIcon()}
      <div className="ml-4 flex-1">
        <p className="font-medium text-secondary">{transaction.type}</p>
        <p className="text-sm text-blueGray">{transaction.date}</p>
      </div>
      <div
        className={`font-medium ${
          transaction.amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]"
        }`}
      >
        {transaction.amount < 0 ? "-" : "+"}$
        {Math.abs(transaction.amount).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;
