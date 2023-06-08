const scenarioDataUrl = "https://json-server-fzox.onrender.com/allScenarios";
const vehicleDataUrl = "https://json-server-fzox.onrender.com/vehicleData";

// Sceanrio requests
export const postScenarioRequest = async (data) => {
  try {
    const response = await fetch(scenarioDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Post request failed try again");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getScenarioData = async (scenarioId = null) => {
  try {
    let url = scenarioDataUrl;
    if (scenarioId) {
      url += `/${scenarioId}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateScenarioData = async (id, data) => {
  try {
    const response = await fetch(`${scenarioDataUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Update Request failed");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteScenarioData = async (id) => {
  try {
    const response = await fetch(`${scenarioDataUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("delete request failed");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

//Vehicle  request

export const postVehicleRequest = async (data) => {
  try {
    const response = await fetch(vehicleDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Post request failed try again");
    }
    return response.json();
  } catch (error) {
    throw new Error("Post reqiest failed try again");
  }
};

export const getVehicleData = async (vehicleId = null) => {
  try {
    let url = vehicleDataUrl;
    if (vehicleId) {
      url += `/${vehicleId}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateVehicleData = async (id, data) => {
  try {
    const response = await fetch(`${vehicleDataUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Update Request failed");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteVehicleData = async (id) => {
  try {
    const response = await fetch(`${vehicleDataUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("delete request failed");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
