import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ErrorBoundary } from "react-error-boundaries";
import AddScenario from "./Components/AddScenario/AddScenario";
import AddVehicle from "./Components/AddVehicle/AddVehicle";
import AllScenario from "./Components/AllScenario/AllScenario";
import EditScenario from "./Components/EditScenario/EditScenario";
import EditVehicle from "./Components/EditVehicle/EditVehicle";
import FallbackUI from "./Components/FallbackUI/FallbackUI";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addscenario" element={<AddScenario />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/allscenario" element={<AllScenario />} />
        <Route path="/editscenario" element={<EditScenario />} />
        <Route path="/editvehicle" element={<EditVehicle />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
