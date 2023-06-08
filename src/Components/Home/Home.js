import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  getVehicleData,
  getScenarioData,
  deleteVehicleData,
} from "../../Api/ApiCall";
import home from "./home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../../Atoms/LargeButton/Button";
import DrivingVehicle from "../DrivingVehicle/DrivingVehicle";

const Home = () => {
  const [dropDownMenu, setDropDownMenu] = useState([]);
  const [captureInput, setCapturedInput] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [filteredVehicleData, setFilteredVehicleData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchDropDownMenu();
    filterVehicleDatails();
    fetchVehicleData();
  }, [captureInput]);

  const fetchVehicleData = async () => {
    try {
      const data = await getVehicleData();
      setVehicleData(data);
    } catch (error) {
      toast.error("Failed to load data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };
  const deleteVehicles = async (id) => {
    try {
      const response = await deleteVehicleData(id);
      if (response) {
        const selectedDropDownMenu = captureInput.scenarioName;
        const scenarioList = vehicleData;
        const filteredData = scenarioList.filter(
          (scenario) => scenario.scenarioName === selectedDropDownMenu
        );
        setFilteredVehicleData(filteredData);
      }
    } catch (error) {
      toast.error("failed to delete", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };
  const fetchDropDownMenu = async () => {
    try {
      const data = await getScenarioData();
      setDropDownMenu(data);
    } catch (error) {
      toast.error("Failed to load data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };
  const handleStartMoving = () => {
    setIsMoving(true);
  };
  const handleStopMoving = () => {
    setIsMoving(false);
  };
  const handleEditVehicle = (path, vehicleId) => {
    navigate(path, { state: { editedScenarioId: vehicleId } });
  };
  const dropDownCapture = (e) => {
    const { name, value } = e.target;
    setCapturedInput({
      [name]: value,
    });
  };
  const filterVehicleDatails = () => {
    const selectedDropDownMenu = captureInput.scenarioName;
    const scenarioList = vehicleData;
    const filteredData = scenarioList.filter(
      (scenario) => scenario.scenarioName === selectedDropDownMenu
    );
    setFilteredVehicleData(filteredData);
  };

  return (
    <div className={home.container}>
      <Sidebar />
      <ToastContainer />
      <div className={home.home_content}>
        <div className={home.dropdown_container}>
          <label htmlFor="drop_down">Scenario</label>
          <div className={home.dropdown_wrapper}>
            <select
              onChange={dropDownCapture}
              name="scenarioName"
              className={home.drop_down}
              id="drop_down"
            >
              <option>Select Scenario</option>
              {dropDownMenu.map((option) => {
                return <option key={option.id}>{option.scenarioName}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={home.list_wrapper}>
          <table>
            <thead>
              <tr className={home.table_row}>
                <th className={home.table_heading}>Vehicle Id</th>
                <th className={home.table_heading}>Vehicle Name</th>
                <th className={home.table_heading}>Position X</th>
                <th className={home.table_heading}>Position Y</th>
                <th className={home.table_heading}>Speed</th>
                <th className={home.table_heading}>Direction</th>
                <th className={home.table_heading}>Edit</th>
                <th className={home.table_heading}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicleData.map((element) => {
                return (
                  <tr key={element.id}>
                    <td className={home.table_content}>{element.id}</td>
                    <td className={home.table_content}>
                      {element.vehicleName}
                    </td>
                    <td className={home.table_content}>{element.positionX}</td>
                    <td className={home.table_content}>{element.positionY}</td>
                    <td className={home.table_content}>{element.speed}</td>
                    <td className={home.table_content}>{element.direction}</td>
                    <td className={home.table_content}>
                      <MdModeEdit
                        onClick={() =>
                          handleEditVehicle("/editvehicle", element.id)
                        }
                        className={home.icon}
                      />
                    </td>
                    <td className={home.table_content}>
                      <RiDeleteBin5Fill
                        onClick={() => deleteVehicles(element.id)}
                        className={home.icon}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={home.btn_wrapper}>
          <Button onClick={handleStartMoving} color="green">
            Start Stimulation
          </Button>
          <Button onClick={handleStopMoving} color="blue">
            Stop Stimulation
          </Button>
        </div>
        <div className={home.driving_area}>
          {filteredVehicleData.map((vehicleDetails) => {
            return (
              <DrivingVehicle
                key={vehicleDetails.id}
                isMoving={isMoving}
                vehicleDetails={vehicleDetails}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
