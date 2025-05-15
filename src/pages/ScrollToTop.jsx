
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prePathRefs = useRef(null);


  useEffect(() => {

    const prePath = prePathRefs.current;

    const excludedPaths = ["/events/phoenix","/events/asYouLikeLit","/events/aTaleOfThreeQuizzes"];

    if (excludedPaths?.includes(prePath)) {
      return;
    }
    window.scrollTo(0, 0);

    prePathRefs.current = pathname;

  }, [pathname]);

  return null;
};

export default ScrollToTop;
