import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getScenarioData, postVehicleRequest } from "../../Api/ApiCall";
import { emptyCheck, validateCoordinates } from "../../Helper/Helper";
import addvehicle from "./addvehicle.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const AddVehicle = () => {
  const [scanarioDropDown, setScenarioDropDown] = useState([]);
  const [vehicleInfo, setVehiclInfo] = useState({
    vehicleName: "",
    positionX: "",
    positionY: "",
    speed: "",
    scenarioName: "",
    direction: "",
  });

  useEffect(() => {
    const fetchDropDownData = async () => {
      try {
        const data = await getScenarioData();
        if (data) {
          setScenarioDropDown(data);
        } else {
          throw new Error("Something went wrong, refresh page");
        }
      } catch (error) {
        toast.error("Something went wrong,refresh page");
      }
    };
    fetchDropDownData();
  }, []);

  const postVehicleData = async () => {
    const isValid = emptyCheck([
      vehicleInfo.vehicleName,
      vehicleInfo.positionX,
      vehicleInfo.positionY,
      vehicleInfo.speed,
    ]);
    const numberRange = validateCoordinates([
      vehicleInfo.positionX,
      vehicleInfo.positionY,
    ]);
    if (isValid && numberRange) {
      try {
        const data = await postVehicleRequest(vehicleInfo);
        if (data) {
          toast.success("Vehicle added successfully");
          setVehiclInfo({
            vehicleName: "",
            positionX: "",
            positionY: "",
            speed: "",
            scenarioName: "",
            direction: "",
          });
        }
      } catch (error) {
        toast.error("failed to add vehicle try again", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } else {
      toast.warning("fields cant be empty");
    }
  };

  const captureUserInput = (e) => {
    const { name, value } = e.target;
    setVehiclInfo({
      ...vehicleInfo,
      [name]: value,
    });
  };
  const handleResetButton = () => {
    setVehiclInfo({
      vehicleName: "",
      positionX: "",
      positionY: "",
      speed: "",
      scenarioName: "",
      direction: "",
    });
  };
  return (
    <div className={addvehicle.container}>
      <Sidebar />
      <ToastContainer />
      <div className={addvehicle.vehicle_wrapper}>
        <p>Vehicle / add</p>
        <h2>Add Vehicle</h2>
        <div className={addvehicle.vehicle_card}>
          <div className={addvehicle.dropdown_container}>
            <label htmlFor="drop_down">Scenario List</label>
            <div className={addvehicle.dropdown_wrapper}>
              <select
                name="scenarioName"
                onChange={captureUserInput}
                className={addvehicle.drop_down}
                id="drop_down"
                value={vehicleInfo.scenarioName}
              >
                <option value="" disabled selected>
                  Select Scenario
                </option>
                {scanarioDropDown.map((values) => {
                  return <option key={values.id}>{values.scenarioName}</option>;
                })}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="vehicle_name">Vehicle Name</label>
            <Input
              id="vehicle_name"
              placeholder="Target abc"
              type="text"
              name="vehicleName"
              onChange={captureUserInput}
              value={vehicleInfo.vehicleName}
            />
          </div>
          <div>
            <label htmlFor="speed">Speed</label>
            <Input
              id="speed"
              placeholder="2"
              type="number"
              name="speed"
              value={vehicleInfo.speed}
              onChange={captureUserInput}
            />
          </div>
          <div>
            <label htmlFor="position_x">Position X</label>
            <Input
              id="position_x"
              placeholder="1000"
              type="number"
              name="positionX"
              value={vehicleInfo.positionX}
              onChange={captureUserInput}
            />
          </div>
          <div>
            <label htmlFor="position_y">Position Y</label>
            <Input
              id="position_y"
              placeholder="20"
              type="number"
              name="positionY"
              value={vehicleInfo.positionY}
              onChange={captureUserInput}
            />
          </div>
          <div className={addvehicle.dropdown_container}>
            <label htmlFor="drop_down">Direction</label>
            <div className={addvehicle.dropdown_wrapper}>
              <select
                name="direction"
                onChange={captureUserInput}
                className={addvehicle.drop_down}
                id="drop_down"
                value={vehicleInfo.direction}
              >
                <option value="" disabled selected>
                  Select Direction
                </option>
                <option>Towards</option>
                <option>Backwards</option>
                <option>Upwards</option>
                <option>Downwards</option>
              </select>
            </div>
          </div>
        </div>
        <div className={addvehicle.btn_wrappper}>
          <Button onClick={postVehicleData} color="green">
            Add
          </Button>
          <Button onClick={handleResetButton} color="orange">
            Reset
          </Button>
          <Button color="blue">Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
