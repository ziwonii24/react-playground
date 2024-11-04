import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex h-auto bg-slate-50">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
