import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Contact } from "../types";

interface QuickTransferProps {
  contacts: Contact[];
}

const QuickTransfer: React.FC<QuickTransferProps> = ({ contacts }) => {
  const [amount, setAmount] = useState("1");
  const [startIndex, setStartIndex] = useState(0);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);

  const isAtEnd = startIndex + 3 >= contacts.length;

  const handleNext = () => {
    if (startIndex + 3 < contacts.length) {
      setStartIndex((prev) => prev + 3);
    }
  };

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 3));
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleTransfer = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmTransfer = () => {
    setIsTransferring(true);
    // Here you would typically make an API call to process the transfer
    setTimeout(() => {
      setShowConfirmDialog(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedContact(null);
        setAmount("0");
        setIsTransferring(false);
      }, 3000);
    }, 2000); // Simulating API call delay
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full flex flex-col">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex mb-6 pb-2 md:mt-2 transition-transform duration-300 ease-in-out mr-10"
            style={{ transform: `translateX(-${startIndex * 33.33}%)` }}
          >
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex flex-col items-center flex-shrink-0 px-1 cursor-pointer transition-all hover:scale-105`}
                style={{ width: "33.33%" }}
                onClick={() => handleContactClick(contact)}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <p
                  className={`text-base text-primary ${
                    selectedContact?.id === contact.id
                      ? "font-bold"
                      : "font-normal"
                  }`}
                >
                  {contact.name}
                </p>
                <p
                  className={`text-sm text-blueGray ${
                    selectedContact?.id === contact.id
                      ? "font-medium"
                      : "font-normal"
                  }`}
                >
                  {contact.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button
            onClick={isAtEnd ? handlePrevious : handleNext}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          >
            {isAtEnd ? (
              <ChevronLeft className="h-6 w-6 text-blueGray" />
            ) : (
              <ChevronRight className="h-6 w-6 text-blueGray" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div className="text-blueGray text-base">
          {selectedContact
            ? `Send to ${selectedContact.name}`
            : "Select Contact"}
        </div>
        <div className="relative max-w-[265px]">
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={handleAmountChange}
            disabled={!selectedContact || isTransferring}
            placeholder="Enter amount"
            className={`w-full py-3 pl-5 pr-24 text-left rounded-full focus:outline-none text-base font-medium ${
              selectedContact && !isTransferring
                ? "bg-gray-100"
                : "bg-gray-50 text-gray-400 cursor-not-allowed"
            }`}
            readOnly={!selectedContact || isTransferring}
          />
          <button
            onClick={handleTransfer}
            disabled={
              !selectedContact ||
              !amount ||
              parseFloat(amount) <= 0 ||
              isTransferring
            }
            className="absolute right-0 top-0 bottom-0 bg-gray-900 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Send{" "}
            <img
              src="/assets/svg/send.svg"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Transfer</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to send ${amount} to {selectedContact?.name}
              ?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                disabled={isTransferring}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmTransfer}
                disabled={isTransferring}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed min-w-[100px] flex items-center justify-center"
              >
                {isTransferring ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      <div
        className={`fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 z-50 ${
          showSuccess
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p>Transfer successful!</p>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
