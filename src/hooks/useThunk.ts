import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk: any): [(url: string) => void, boolean, any] => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const runThunk = useCallback(
    (url: string) => {
      setIsLoading(true);
      dispatch(thunk(url))
        .unwrap()
        .catch((e: any) => setError(e))
        .finally((_: any) => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
