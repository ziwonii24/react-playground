import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

function Sidebar() {
  return (
    <nav className="h-screen w-64 bg-white">
      <ul>
        <li>
          <Link to={`/${PATH.test1}`}>test1</Link>
        </li>
        <li>
          <Link to={`/${PATH.test2}`}>test2</Link>
        </li>
        <li>
          <Link to={`/${PATH.test3}`}>test3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
