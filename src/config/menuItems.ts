export interface MenuItem {
  path: string;
  label: string;
  icon: string;
  title: string; // Title to display in header
}

const menuItems: MenuItem[] = [
  {
    path: "/",
    label: "Dashboard",
    icon: "dashboard",
    title: "Overview",
  },
  {
    path: "/transactions",
    label: "Transactions",
    icon: "trx",
    title: "Transactions",
  },
  {
    path: "/accounts",
    label: "Accounts",
    icon: "account",
    title: "Accounts",
  },
  {
    path: "/investments",
    label: "Investments",
    icon: "invest",
    title: "Investments",
  },
  {
    path: "/credit-cards",
    label: "Credit Cards",
    icon: "credit",
    title: "Credit Cards",
  },
  {
    path: "/loans",
    label: "Loans",
    icon: "loan",
    title: "Loans",
  },
  {
    path: "/services",
    label: "Services",
    icon: "service",
    title: "Services",
  },
  {
    path: "/privileges",
    label: "My Privileges",
    icon: "privilege",
    title: "My Privileges",
  },
  {
    path: "/settings",
    label: "Setting",
    icon: "settings",
    title: "Setting",
  },
];

export default menuItems;
