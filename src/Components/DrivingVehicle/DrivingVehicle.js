import { useState, useEffect } from "react";
import drivingvehicle from "./drivingvehicle.module.css";

const DrivingVehicle = ({ vehicleDetails, isMoving }) => {
  const { direction, speed, vehicleName, positionX, positionY } = vehicleDetails;
  const [isOutsideArea, setIsOutsideArea] = useState(false);
  const [position, setPosition] = useState({
    coordinateX: positionX,
    coordinateY: positionY,
  });
  useEffect(() => {
    let myInterval;
    if (isMoving) {
      myInterval = setInterval(() => {
        setPosition((prevPosition) => {
          let newXPosition = prevPosition.coordinateX;
          let newYPosition = prevPosition.coordinateY;

          if (direction === "Towards") {
            newXPosition += speed;
          } else if (direction === "Backwards") {
            newXPosition -= speed;
          } else if (direction === "Upwards") {
            newYPosition -= speed;
          } else if (direction === "Downwards") {
            newYPosition += speed;
          }
          setIsOutsideArea(newXPosition < 0 || newXPosition > 40);
          return { coordinateX: newXPosition, coordinateY: newYPosition };
        });
      }, 1000);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [isMoving, speed, direction]);

  return (
    <>
      <div
        className={drivingvehicle.container}
        style={{
          position: "absolute",
          top: `${position.coordinateY}px`,
          left: `${position.coordinateX}px`,
          width: "1rem",
          height: "1rem",
          backgroundColor: "red",
          borderRadius: "30px",
          visibility: isOutsideArea ? "hidden" : "visible",
        }}
      >
        {vehicleName}
      </div>
    </>
  );
};

export default DrivingVehicle;
