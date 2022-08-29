import { useEffect, useState } from "react";
import "./App.css";
import LoadingSpinner from "./Components/Spinnner/Spinner";
import AppRoutes from "./Routes";
// import { BrowserRouter } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <div className="App">{loading ? <LoadingSpinner /> : <AppRoutes />}</div>
  );
}

export default App;
