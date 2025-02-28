import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import CardItem from "../components/CardItem";
import CardDrawer from "../components/CardDrawer";
import TransactionItem from "../components/TransactionItem";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";
import MobileMenu from "../components/MobileMenu";
import CardSkeleton from "../components/skeletons/CardSkeleton";
import TransactionSkeleton from "../components/skeletons/TransactionSkeleton";
import WeeklyActivitySkeleton from "../components/skeletons/WeeklyActivitySkeleton";
import ExpenseStatisticsSkeleton from "../components/skeletons/ExpenseStatisticsSkeleton";
import QuickTransferSkeleton from "../components/skeletons/QuickTransferSkeleton";
import BalanceHistorySkeleton from "../components/skeletons/BalanceHistorySkeleton";
import {
  cards,
  recentTransactions,
  contacts,
  expenseCategories,
  weeklyActivity,
  balanceHistory,
} from "../data/mockData";

const Dashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCardDrawerOpen, setIsCardDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <CardDrawer
        isOpen={isCardDrawerOpen}
        onClose={() => setIsCardDrawerOpen(false)}
        cards={cards}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed header for desktop only */}
        <div className="hidden md:block">
          <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />
        </div>

        {/* Scrollable content for mobile that includes header */}
        <div className="flex-1 overflow-y-auto bg-white md:bg-cloud">
          {/* Mobile header (not fixed) */}
          <div className="md:hidden">
            <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />
            <MobileHeader />
          </div>

          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              {/* Top Section: My Cards and Recent Transaction */}
              <div className="grid grid-cols-12 gap-6 mb-8">
                {/* My Cards Section */}
                <div className="col-span-12 md:col-span-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-primary">
                      My Cards
                    </h2>
                    <button
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      onClick={() => setIsCardDrawerOpen(true)}
                    >
                      See All
                    </button>
                  </div>

                  {/* Mobile slider */}
                  <div className="md:hidden w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
                    <div className="flex gap-4 min-w-full">
                      {isLoading
                        ? Array(2)
                            .fill(0)
                            .map((_, index) => (
                              <div
                                key={index}
                                className="min-w-[calc(100%-2rem)] snap-center"
                              >
                                <CardSkeleton />
                              </div>
                            ))
                        : cards.slice(0, 2).map((card) => (
                            <div
                              key={card.id}
                              className="min-w-[calc(100%-2rem)] snap-center"
                            >
                              <CardItem card={card} />
                            </div>
                          ))}
                    </div>
                  </div>

                  {/* Desktop grid */}
                  <div className="hidden md:grid md:grid-cols-2 gap-4">
                    {isLoading
                      ? Array(2)
                          .fill(0)
                          .map((_, index) => <CardSkeleton key={index} />)
                      : cards
                          .slice(0, 2)
                          .map((card) => (
                            <CardItem key={card.id} card={card} />
                          ))}
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold text-primary mb-4">
                    Recent Transaction
                  </h2>
                  <div className="bg-white rounded-[25px] p-5 shadow-sm h-[235px] overflow-auto">
                    {isLoading
                      ? Array(3)
                          .fill(0)
                          .map((_, index) => (
                            <TransactionSkeleton key={index} />
                          ))
                      : recentTransactions.map((transaction) => (
                          <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                          />
                        ))}
                  </div>
                </div>
              </div>

              {/* Middle Section: Charts */}
              <div className="grid grid-cols-12 gap-6 mb-8">
                <div className="col-span-12 md:col-span-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Weekly Activity
                  </h3>
                  <div className="h-[322px]">
                    {isLoading ? (
                      <WeeklyActivitySkeleton />
                    ) : (
                      <WeeklyActivity data={weeklyActivity} />
                    )}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Expense Statistics
                  </h3>
                  <div className="h-[322px]">
                    {isLoading ? (
                      <ExpenseStatisticsSkeleton />
                    ) : (
                      <ExpenseStatistics data={expenseCategories} />
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Quick Transfer and Balance History */}
              <div className="grid grid-cols-12 gap-6 mb-8">
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Quick Transfer
                  </h3>
                  <div className="h-[276px]">
                    {isLoading ? (
                      <QuickTransferSkeleton />
                    ) : (
                      <QuickTransfer contacts={contacts} />
                    )}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Balance History
                  </h3>
                  <div className="h-[276px]">
                    {isLoading ? (
                      <BalanceHistorySkeleton />
                    ) : (
                      <BalanceHistory data={balanceHistory} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
