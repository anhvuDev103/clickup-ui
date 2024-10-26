import { useState } from 'react';

const useToggle = (defaultState?: boolean): [boolean, (targetState?: boolean) => void] => {
  const [state, setState] = useState<boolean>(!!defaultState);

  const toggle = (targetState?: boolean) => {
    setState((prev) => {
      if (targetState === undefined) return !prev;

      return targetState;
    });
  };

  return [state, toggle];
};

export default useToggle;
