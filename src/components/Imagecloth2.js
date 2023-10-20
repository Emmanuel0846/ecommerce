import { useMemo } from "react";

const Imagecloth2 = ({
  image25,
  imagecloth2Width,
  imagecloth2Height,
  imagecloth2Position,
  imagecloth2Top,
  imagecloth2Left,
}) => {
  const imagecloth2Style = useMemo(() => {
    return {
      width: imagecloth2Width,
      height: imagecloth2Height,
      position: imagecloth2Position,
      top: imagecloth2Top,
      left: imagecloth2Left,
    };
  }, [
    imagecloth2Width,
    imagecloth2Height,
    imagecloth2Position,
    imagecloth2Top,
    imagecloth2Left,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth2Style}
    >
      <img
        className="absolute h-[88.89%] w-4/5 top-[4.89%] right-[9.78%] bottom-[6.22%] left-[10.22%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image25}
      />
    </div>
  );
};

export default Imagecloth2;
