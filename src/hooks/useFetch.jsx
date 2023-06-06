import { useState, useEffect } from "react";
import api from "../api/posts";

export default (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // Setting the timeout in an axios call
        const { data } = await api(url, {
          signal: AbortSignal.timeout(2000),
        });
        mounted && setData(data);
      } catch (err) {
        if (mounted)
          err.response
            ? err.response.status === 404
              ? setError("Provided server not found..")
              : setError("Something went wrong")
            : setError(err.message);
      } finally {
        mounted && setLoading(false);
      }
    })();

    return () => (mounted = false);
  }, [url]);

  return { data, loading, error };
};
