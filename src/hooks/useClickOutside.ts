import { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, handler: (e: MouseEvent) => void) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        handler(e);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [handler, ref]);
};

export default useClickOutside;
