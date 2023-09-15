"use client";
import { useCallback, useEffect, useState } from "react";
const api_key = process.env.APIKEY_TMDB;

function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);

    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_key}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => setError(err));

    setData(dataFetch.results);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
}

export default useFetch;
