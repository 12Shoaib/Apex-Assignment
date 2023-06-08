import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getScenarioData, updateScenarioData } from "../../Api/ApiCall";
import Sidebar from "../Sidebar/Sidebar";
import ediscenario from "./editscenario.module.css";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const EditScenario = () => {
  const [scenarioDetails, setScenarioDetails] = useState([]);
  const location = useLocation();
  const editedScenarioId = location.state.editedScenarioId;
  useEffect(() => {
    fetchScenarioDetails();
  }, []);

  const fetchScenarioDetails = async () => {
    try {
      const data = await getScenarioData(editedScenarioId);
      setScenarioDetails(data);
    } catch (error) {
      toast.error("Failed to load scenario details", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  const handleUpdate = async () => {
    try {
      await updateScenarioData(editedScenarioId, scenarioDetails);
      toast.success("Scenario details updated successfully");
    } catch (error) {
      toast.error("Failed to update scenario details", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setScenarioDetails({
      ...scenarioDetails,
      [name]: value,
      numberOfVehcles: 0,
    });
  };

  return (
    <div className={ediscenario.container}>
      <Sidebar />
      <div className={ediscenario.edit_options}>
        <h3>Edit Scenario</h3>
        <div className={ediscenario.editor_wrapper}>
          <label>Scenario Name</label>
          <Input
            type="text"
            name="scenarioName"
            value={scenarioDetails?.scenarioName}
            onChange={handleInputChange}
          />
        </div>
        <div className={ediscenario.editor_wrapper}>
          <label>Scenario Time</label>
          <Input
            type="number"
            name="scenarioTime"
            value={scenarioDetails?.scenarioTime}
            onChange={handleInputChange}
          />
        </div>
        <div className={ediscenario.editor_wrapper}>
          <label>Number of Vehicle</label>
          <Input
            type="number"
            name="numberOfVehcles"
            value={scenarioDetails?.numberOfVehcles}
            onChange={handleInputChange}
          />
        </div>
        <Button color="orange" onClick={handleUpdate}>
          Update
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditScenario;
