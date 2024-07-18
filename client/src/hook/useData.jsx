import { useEffect, useState } from "react";

const useData = (dataUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error("Error al obtener los datos.");
        }
        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataUrl]);

  return { data, loading };
};

export default useData;
