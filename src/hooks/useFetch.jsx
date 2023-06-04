import { useState, useEffect } from "react";
import api from "../api/posts";

export default (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await api.get(url);
          setData(data);
        } catch (err) {
          err.response
            ? err.response.status === 404
              ? setError("Provided server not found..")
              : setError("Something went wrong")
            : setError(err.message);
        } finally {
          setLoading(false);
        }
      })();
    }, 1000);
  }, [url]);

  return { data, loading, error };
};
