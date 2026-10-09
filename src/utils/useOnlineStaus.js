import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineState, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineState;
};
export default useOnlineStatus;
