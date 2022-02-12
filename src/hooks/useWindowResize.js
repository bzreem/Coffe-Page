import { useEffect, useState } from "react";

const useWindowResize = (media) => {
  const [wr, setWr] = useState(null);
  useEffect(() => {
    function windowResize() {
      if (matchMedia(media).matches) {
        setWr(true);
      } else {
        setWr(false);
      }
    }

    windowResize();
    document.addEventListener("DOMContentLoaded", windowResize);
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
      document.removeEventListener("DOMContentLoaded", windowResize);
    };
  }, [media]);
  return [wr];
};

export default useWindowResize;
