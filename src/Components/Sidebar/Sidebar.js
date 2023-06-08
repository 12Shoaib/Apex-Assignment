import { useNavigate } from "react-router-dom";
import sidebar from "./sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigationClick = (path) => {
    navigate(path);
  };

  return (
    <div className={sidebar.container}>
      <p className={sidebar.content} onClick={() => handleNavigationClick("/")}>
        Home
      </p>
      <p
        className={sidebar.content}
        onClick={() => handleNavigationClick("/addscenario")}
      >
        Add Scenario
      </p>
      <p
        className={sidebar.content}
        onClick={() => handleNavigationClick("/allscenario")}
      >
        All Scenario
      </p>
      <p
        className={sidebar.content}
        onClick={() => handleNavigationClick("/addvehicle")}
      >
        Add Vehicle
      </p>
    </div>
  );
};

export default Sidebar;
