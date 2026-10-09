import { useEffect, useState } from "react";
import { menu_API } from "../utils/constants";
const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menu_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestroMenu;
