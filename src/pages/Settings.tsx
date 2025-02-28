import React, { useState } from "react";
import { Pencil } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
import { userProfileData } from "../data/mockData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../components/FormInput";
import SettingsSkeleton from "../components/skeletons/SettingsSkeleton";

// Add the validation schema
const settingsFormSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
  }),
  address: z.object({
    present: z.string().min(1, "Present address is required"),
    permanent: z.string().min(1, "Permanent address is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    country: z.string().min(1, "Country is required"),
  }),
});

// Add type inference
type SettingsFormData = z.infer<typeof settingsFormSchema>;

const Settings: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Add form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      personalInfo: userProfileData.personalInfo,
      address: userProfileData.address,
    },
  });

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: SettingsFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3s
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed header for desktop only */}
        <div className="hidden md:block">
          <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {/* Mobile header (not fixed) */}
          <div className="md:hidden">
            <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />
            <MobileHeader />
          </div>

          {/* Settings Content */}
          <div className="px-4 pb-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              {isLoading ? (
                <SettingsSkeleton />
              ) : (
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* Tabs */}
                  <div className="flex border-b border-[#F4F5F7] justify-center md:justify-start">
                    <button
                      className={`flex-1 md:flex-initial px-4 md:px-6 py-4 text-base font-medium border-b-2 ${
                        activeTab === "profile"
                          ? "text-secondary border-secondary"
                          : "text-blueGray hover:text-gray-700 border-transparent"
                      }`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <span className="text-center w-full">Edit Profile</span>
                    </button>
                    <button
                      className={`flex-1 md:flex-initial px-4 md:px-6 py-4 text-base font-medium border-b-2 ${
                        activeTab === "preferences"
                          ? "text-secondary border-secondary"
                          : "text-blueGray hover:text-gray-700 border-transparent"
                      }`}
                      onClick={() => setActiveTab("preferences")}
                    >
                      <span className="text-center w-full">Preference</span>
                    </button>
                    <button
                      className={`flex-1 md:flex-initial px-4 md:px-6 py-4 text-base font-medium border-b-2 ${
                        activeTab === "security"
                          ? "text-secondary border-secondary"
                          : "text-blueGray hover:text-gray-700 border-transparent"
                      }`}
                      onClick={() => setActiveTab("security")}
                    >
                      <span className="text-center w-full">Security</span>
                    </button>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6 md:p-10">
                    <div className="flex flex-col md:flex-row">
                      {/* Profile Picture */}
                      <div className="md:w-1/5 mb-8 md:mb-0 md:pr-10 flex justify-center md:block">
                        <div className="relative inline-block">
                          <img
                            src={userProfileData.avatar}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover"
                          />
                          <button className="absolute -bottom-2 -right-2 bg-gray-800 text-white p-2.5 rounded-full">
                            <Pencil size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full md:w-4/5"
                      >
                        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                          <FormInput
                            label="Your Name"
                            name="personalInfo.fullName"
                            placeholder="Charlene Reed"
                            register={register}
                            error={errors.personalInfo?.fullName?.message}
                          />

                          <FormInput
                            label="User Name"
                            name="personalInfo.username"
                            placeholder="Charlene Reed"
                            register={register}
                            error={errors.personalInfo?.username?.message}
                          />

                          <FormInput
                            label="Email"
                            name="personalInfo.email"
                            type="email"
                            placeholder="charlenereed@gmail.com"
                            register={register}
                            error={errors.personalInfo?.email?.message}
                          />

                          <FormInput
                            label="Password"
                            name="personalInfo.password"
                            type="password"
                            placeholder="**********"
                            register={register}
                            error={errors.personalInfo?.password?.message}
                          />

                          <FormInput
                            label="Date of Birth"
                            name="personalInfo.dateOfBirth"
                            type="text"
                            birth={true}
                            placeholder="25 January 1990"
                            register={register}
                            error={errors.personalInfo?.dateOfBirth?.message}
                          />

                          <FormInput
                            label="Present Address"
                            name="address.present"
                            placeholder="San Jose, California, USA"
                            register={register}
                            error={errors.address?.present?.message}
                          />

                          <FormInput
                            label="Permanent Address"
                            name="address.permanent"
                            placeholder="San Jose, California, USA"
                            register={register}
                            error={errors.address?.permanent?.message}
                          />

                          <FormInput
                            label="City"
                            name="address.city"
                            placeholder="San Jose"
                            register={register}
                            error={errors.address?.city?.message}
                          />

                          <FormInput
                            label="Postal Code"
                            name="address.postalCode"
                            placeholder="45962"
                            register={register}
                            error={errors.address?.postalCode?.message}
                          />

                          <FormInput
                            label="Country"
                            name="address.country"
                            placeholder="USA"
                            register={register}
                            error={errors.address?.country?.message}
                          />

                          {/* Save Button */}
                          <div className="col-span-2 mt-8 ml-auto">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed relative"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                  <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                                  Saving...
                                </div>
                              ) : (
                                "Save"
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog - Fixed at the top */}
      <div
        className={`fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 z-50 ${
          showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
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
          <p>Settings updated successfully!</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
