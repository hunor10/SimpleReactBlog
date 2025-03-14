import { useState, useEffect } from 'react';

const useFetch = (url, initialData = []) => {
  const [data, setData] = useState(() => {
    // Load from localStorage if available, otherwise use initialData
    const savedData = localStorage.getItem('blogs');
    return savedData ? JSON.parse(savedData) : initialData;
  });
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          console.log(res);
          if (!res.ok) throw Error('couldn\'t fetch the data for that resource');
          return res.json();
        })
        .then(fetchedData => {
          console.log(fetchedData);
          setData(fetchedData);
          localStorage.setItem('blogs', JSON.stringify(fetchedData)); // Save initial fetch to localStorage
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 500);
    return () => abortCont.abort();
  }, [url]);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(data));
  }, [data]);

  return { data, setData, isPending, error };
};

export default useFetch;