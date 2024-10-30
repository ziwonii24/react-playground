import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="border-solid border-2 border-indigo-600">
      <nav>
        <ul>
          <li>
            <Link to="/test1">test1</Link>
          </li>
          <li>
            <Link to="/test2">test2</Link>
          </li>
          <li>
            <Link to="/test3">test3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
