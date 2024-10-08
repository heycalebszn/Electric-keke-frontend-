import { useNavigate } from "react-router-dom";
import dispatchables from "./dispatchables";

const useReroute = () => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const rerouting = (errCode) => {
    if (errCode === 500) {
      showAlert("Error Connecting");
      navigate("/ie/kadkjakda");
    }
  };

  return { rerouting };
};

export default useReroute;
