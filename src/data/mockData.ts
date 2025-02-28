import {
  Card,
  Transaction,
  Contact,
  ExpenseCategory,
  ActivityData,
  BalanceHistoryData,
} from "../types";

export const cards: Card[] = [
  {
    id: "1",
    balance: 5756,
    cardNumber: "3778 **** **** 1234",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    type: "mastercard",
    color: "dark",
  },
  {
    id: "2",
    balance: 5756,
    cardNumber: "3778 **** **** 1234",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    type: "visa",
    color: "light",
  },
  {
    id: "3",
    balance: 100000,
    cardNumber: "3778 **** **** 1234",
    cardHolder: "Jeihan Anandika",
    validThru: "12/29",
    type: "visa",
    color: "light",
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: "1",
    type: "Deposit from my Card",
    amount: -850,
    date: "28 January 2021",
    icon: "credit-card",
  },
  {
    id: "2",
    type: "Deposit Paypal",
    amount: 2500,
    date: "25 January 2021",
    icon: "paypal",
  },
  {
    id: "3",
    type: "Jemi Wilson",
    amount: 5400,
    date: "21 January 2021",
    icon: "user",
  },
];

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Livia Bator",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "2",
    name: "Randy Press",
    role: "Director",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "3",
    name: "Workman",
    role: "Designer",
    avatar:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "4",
    name: "Steve",
    role: "Engineer",
    avatar:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "5",
    name: "Nathan",
    role: "Police",
    avatar:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "6",
    name: "Alex",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const expenseCategories: ExpenseCategory[] = [
  { name: "Entertainment", value: 30, color: "#3B4B80" },
  { name: "Bill Expense", value: 15, color: "#FF8A48" },
  { name: "Investment", value: 20, color: "#4D7CFE" },
  { name: "Others", value: 35, color: "#2A2A2A" },
];

export const weeklyActivity: ActivityData[] = [
  { day: "Sat", deposit: 250, withdraw: 450 },
  { day: "Sun", deposit: 100, withdraw: 320 },
  { day: "Mon", deposit: 280, withdraw: 400 },
  { day: "Tue", deposit: 350, withdraw: 450 },
  { day: "Wed", deposit: 200, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 400 },
  { day: "Fri", deposit: 300, withdraw: 420 },
];

export const balanceHistory: BalanceHistoryData[] = [
  { month: "Jul", balance: 100 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 700 },
  { month: "Oct", balance: 400 },
  { month: "Nov", balance: 600 },
  { month: "Dec", balance: 300 },
  { month: "Jan", balance: 600 },
];

export interface UserProfile {
  avatar: string;
  personalInfo: {
    fullName: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
  };
  address: {
    present: string;
    permanent: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export const userProfileData: UserProfile = {
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  personalInfo: {
    fullName: "Charlene Reed",
    username: "charlenereed",
    email: "charlenereed@gmail.com",
    password: "Cher@12345",
    dateOfBirth: "25 January 1990",
  },
  address: {
    present: "San Jose, California, USA",
    permanent: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  },
};
