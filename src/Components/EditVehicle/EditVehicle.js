import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getVehicleData, updateVehicleData } from "../../Api/ApiCall";
import Button from "../../Atoms/LargeButton/Button";
import Input from "../../Atoms/Input/Input";
import editvehicle from "./editvehicle.module.css";
import Sidebar from "../Sidebar/Sidebar";

const EditVehicle = () => {
  const [vehicleDetails, setVehicleDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const editedVehicleId = location.state.editedScenarioId;

  useEffect(() => {
    fetchVehicleDetails(editedVehicleId);
  }, []);
  const fetchVehicleDetails = async (vehicleId) => {
    try {
      const data = await getVehicleData(vehicleId);
      setVehicleDetails(data);
    } catch (error) {
      toast.error("Failed to load vehicle details", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateChanges = async () => {
    try {
      await updateVehicleData(editedVehicleId, vehicleDetails);
      toast.success("Vehicle details updated successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    } catch (error) {
      toast.error("Failed to update vehicle details", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className={editvehicle.container}>
      <Sidebar />
      <ToastContainer />
      <div className={editvehicle.form}>
        <h2>Edit Vehicle</h2>
        <div className={editvehicle.form_group}>
          <label htmlFor="vehicleId">Vehicle ID</label>
          <Input
            type="text"
            id="vehicleId"
            name="vehicleId"
            value={vehicleDetails.Id}
            disabled
          />
        </div>
        <div className={editvehicle.form_group}>
          <label htmlFor="vehicleName">Vehicle Name</label>
          <Input
            type="text"
            id="vehicleName"
            name="vehicleName"
            value={vehicleDetails.vehicleName}
            onChange={handleInputChange}
          />
        </div>
        <div className={editvehicle.form_group}>
          <label htmlFor="positionX">Position X</label>
          <Input
            type="text"
            id="positionX"
            name="positionX"
            value={vehicleDetails.positionX}
            onChange={handleInputChange}
          />
        </div>
        <div className={editvehicle.form_group}>
          <label htmlFor="positionY">Position Y</label>
          <Input
            type="text"
            id="positionY"
            name="positionY"
            value={vehicleDetails.positionY}
            onChange={handleInputChange}
          />
        </div>
        <div className={editvehicle.form_group}>
          <label htmlFor="speed">Speed</label>
          <Input
            type="text"
            id="speed"
            name="speed"
            value={vehicleDetails.speed}
            onChange={handleInputChange}
          />
        </div>
        <div className={editvehicle.form_group}>
          <label htmlFor="direction">Direction</label>
          <Input
            type="text"
            id="direction"
            name="direction"
            value={vehicleDetails.direction}
            onChange={handleInputChange}
          />
        </div>
        <div className={editvehicle.btn_wrapper}>
          <Button onClick={handleUpdateChanges} color="green">
            Save Changes
          </Button>
          <Button onClick={() => navigate("/")} color="blue">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditVehicle;
