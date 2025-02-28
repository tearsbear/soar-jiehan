import React from 'react';
import { RouteObject } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import menuItems from '../config/menuItems';

// Create routes dynamically from menu items
export const routes: RouteObject[] = menuItems.map(item => {
  // Return implemented pages for routes that have components
  if (item.path === '/') {
    return {
      path: item.path,
      element: <Dashboard />
    };
  } else if (item.path === '/settings') {
    return {
      path: item.path,
      element: <Settings />
    };
  } else {
    // For routes without implemented pages, show the NotFound component
    return {
      path: item.path,
      element: <NotFound />
    };
  }
});

// Add a catch-all route for any undefined paths
routes.push({
  path: '*',
  element: <NotFound />
});