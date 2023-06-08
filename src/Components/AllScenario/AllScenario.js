import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getScenarioData, deleteScenarioData } from "../../Api/ApiCall";
import allscenario from "./allscenario.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../../Atoms/LargeButton/Button";
import "react-toastify/dist/ReactToastify.css";

const AllScenario = () => {
  const [allScenarioData, setAllScenarioData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchScenariosData();
  }, []);

  const fetchScenariosData = async () => {
    try {
      const data = await getScenarioData();
      setAllScenarioData(data);
    } catch (error) {
      toast.error("Failed to load data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };
  const deleteScenarios = async (id) => {
    try {
      const response = await deleteScenarioData(id);
      if (response) {
        toast.success("deleted successfully");
        fetchScenariosData();
      }
    } catch (error) {
      toast.error("failed to delete", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };
  const deleteAllScenarios = async () => {
    const scenariosIdsArray = allScenarioData.map((scenario) => scenario.id);
    try {
      await Promise.all(
        scenariosIdsArray.map(async (id) => {
          await deleteScenarioData(id);
        })
      );
      toast.success("All scenarios deleted");
      fetchScenariosData();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  const handleNavigationClick = (path, scenarioId) => {
    navigate(path, { state: { editedScenarioId: scenarioId } });
  };

  return (
    <div className={allscenario.container}>
      <Sidebar />
      <ToastContainer />
      <div className={allscenario.scenario_wrapper}>
        <div className={allscenario.header}>
          <h3>All Scenario</h3>
          <div className={allscenario.btn_wrapper}>
            <Button
              onClick={() => handleNavigationClick("/addscenario")}
              color="blue"
            >
              New Scenario
            </Button>
            <Button
              onClick={() => handleNavigationClick("/addvehicle ")}
              color="green"
            >
              Add Vehicle
            </Button>
            <Button onClick={deleteAllScenarios} color="orange">
              Delete All
            </Button>
          </div>
        </div>
        <div className={allscenario.list_wrapper}>
          <table>
            <thead>
              <tr className={allscenario.table_row}>
                <th className={allscenario.table_heading}>Scenario Id</th>
                <th className={allscenario.table_heading}>Scenario Name</th>
                <th className={allscenario.table_heading}>Scenario Time</th>
                <th className={allscenario.table_heading}>Number of Vehicle</th>
                <th className={allscenario.table_heading}>Add Vehicle</th>
                <th className={allscenario.table_heading}>Edit</th>
                <th className={allscenario.table_heading}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allScenarioData?.map((element) => {
                return (
                  <tr key={element.id}>
                    <td className={allscenario.table_content}>{element?.id}</td>
                    <td className={allscenario.table_content}>
                      {element.scenarioName}
                    </td>
                    <td className={allscenario.table_content}>
                      {element.scenarioTime}
                    </td>
                    <td className={allscenario.table_content}>
                      {element.numberOfVehcles}
                    </td>
                    <td className={allscenario.table_content}>
                      <button
                        onClick={() => handleNavigationClick("/addvehicle")}
                        className={allscenario.add_btn}
                      >
                        <HiPlus />
                      </button>
                    </td>
                    <td className={allscenario.table_content}>
                      <button
                        onClick={() =>
                          handleNavigationClick("/editscenario", element.id)
                        }
                        className={allscenario.button}
                      >
                        <MdModeEdit className={allscenario.icon} />
                      </button>
                    </td>
                    <td className={allscenario.table_content}>
                      <button
                        onClick={() => deleteScenarios(element.id)}
                        className={allscenario.button}
                      >
                        <RiDeleteBin5Fill className={allscenario.icon} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllScenario;
