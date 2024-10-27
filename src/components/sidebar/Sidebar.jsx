import { Link , useLocation} from "react-router-dom";
import { Icons } from "../../assets/icons";
import { SidebarWrap } from "./Sidebar.styles";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">Flights</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>

      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className={`menu-link ${location.pathname === "/" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <img src={Icons.Info} alt="" />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/info" className={`menu-link ${location.pathname === "/info" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <img src={Icons.Chart} alt="" />
                </span>
                <span className="menu-link-text">Information</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/graficas" className={`menu-link ${location.pathname === "/graficas" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <img src={Icons.Graph} alt="" />
                </span>
                <span className="menu-link-text">Graphs</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/tablas" className={`menu-link ${location.pathname === "/tablas" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <img src={Icons.Table} alt="" />
                </span>
                <span className="menu-link-text">Tables</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;