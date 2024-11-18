import React, { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const BottomToUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible ? (
        <div className="flex justify-end fixed right-5 bottom-5">
          <button
            className="bg-gray-200 m-8 p-2  rounded-full "
            onClick={goToUp}
          >
            <BiUpArrowAlt className="text-4xl animate-bounce " />
          </button>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BottomToUp;
