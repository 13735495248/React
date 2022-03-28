import { useEffect, useState } from "react";
export function usePosition() {
  function clickmsg(e) {
    setPoint({ x: e.pageX, y: e.pageY })
  }
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener('click', clickmsg);
    return () => {
      document.removeEventListener('click');
    }
  }, []);
  return point;
}