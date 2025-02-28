export interface Card {
  id: string;
  balance: number;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  type: 'mastercard' | 'visa';
  color: 'dark' | 'light';
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
  icon: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ExpenseCategory {
  name: string;
  value: number;
  color: string;
}

export interface ActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface BalanceHistoryData {
  month: string;
  balance: number;
}