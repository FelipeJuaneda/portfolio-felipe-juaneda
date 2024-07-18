import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1">
      <div
        className="h-1 bg-violetaPrincipal"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
