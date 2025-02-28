import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { SettingsFormData } from "../schemas/settingsSchema";

interface FormInputProps {
  label: string;
  name:
    | "personalInfo.fullName"
    | "personalInfo.username"
    | "personalInfo.email"
    | "personalInfo.password"
    | "personalInfo.dateOfBirth"
    | "address.present"
    | "address.permanent"
    | "address.city"
    | "address.postalCode"
    | "address.country";
  type?: string;
  placeholder?: string;
  register: UseFormRegister<SettingsFormData>;
  error?: string;
  className?: string;
  birth?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  className = "",
  birth,
}) => {
  return (
    <div>
      <label className="block text-sm font-regular text-secondary mb-3">
        {label}
      </label>
      {birth ? (
        <div className="relative">
          <input
            {...register(name)}
            type="text"
            defaultValue="25 January 1990"
            className="w-full p-3 border border-skyLight rounded-[15px] focus:outline-none focus:ring-1 focus:ring-primary pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={`w-full p-3 border border-skyLight rounded-[15px] focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
