import { useState, useEffect } from 'react';

const useFetch = (url, initialData = []) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('blogs');
    return savedData ? JSON.parse(savedData) : initialData;
  });
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setIsPending(false);
      return;
    }
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
          localStorage.setItem('blogs', JSON.stringify(fetchedData));
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

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(data));
  }, [data]);

  return { data, setData, isPending, error };
};

export default useFetch;