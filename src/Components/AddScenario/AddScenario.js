import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { emptyCheck } from "../../Helper/Helper";
import { postScenarioRequest } from "../../Api/ApiCall";
import addscenario from "./addscenario.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const AddScenario = () => {
  const [inputCapture, setInputCapture] = useState({
    scenarioName: "",
    scenarioTime: "",
  });
  const handleUserInputData = (e) => {
    const { name, value } = e.target;
    setInputCapture({
      ...inputCapture,
      [name]: value,
      numberOfVehcles: 0,
    });
  };
  const postScenarioData = async () => {
    const isValid = emptyCheck([
      inputCapture.scenarioName,
      inputCapture.scenarioTime,
    ]);
    if (isValid) {
      try {
        const data = await postScenarioRequest(inputCapture);
        if (data) {
          toast.success("Scenario added successfully");
          setInputCapture({ scenarioName: " ", scenarioTime: " " });
        }
      } catch (error) {
        toast.error("failed to add scenario try again", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } else {
      toast.warning("fields cant be empty");
    }
  };

  const handleResetButton = () => {
    setInputCapture({
      scenarioName: "",
      scenarioTime: "",
    });
  };

  return (
    <div className={addscenario.conatiner}>
      <Sidebar />
      <ToastContainer />
      <div className={addscenario.content_wrapper}>
        <p className={addscenario.sub_heading}>Scenario/ add</p>
        <h2 className={addscenario.heading}>Add Scenario</h2>
        <div className={addscenario.scenario_card}>
          <div>
            <label htmlFor="scenario_name" className={addscenario.label_text}>
              Scenario Name
            </label>
            <Input
              id="scenario_name"
              placeholder="Test Scenario"
              type="text"
              value={inputCapture.scenarioName}
              name="scenarioName"
              onChange={handleUserInputData}
            />
          </div>
          <div>
            <label htmlFor="scenario_time" className={addscenario.label_text}>
              Scenario Time(seconds)
            </label>
            <Input
              id="scenario_time"
              placeholder="Time"
              type="number"
              value={inputCapture.scenarioTime}
              name="scenarioTime"
              onChange={handleUserInputData}
            />
          </div>
        </div>
        <div className={addscenario.button_wrapper}>
          <Button onClick={postScenarioData} color="green">
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

export default AddScenario;
