import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const routeElements = useRoutes(routes);

  return <div className="h-screen bg-gray-50">{routeElements}</div>;
}

export default App;
