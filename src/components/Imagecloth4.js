import { useMemo } from "react";

const Imagecloth4 = ({
  bitmap,
  imagecloth4Width,
  imagecloth4Height,
  imagecloth4Position,
  imagecloth4Top,
  imagecloth4Right,
  imagecloth4Bottom,
  imagecloth4Left,
  imagecloth4MixBlendMode,
}) => {
  const imagecloth4Style = useMemo(() => {
    return {
      width: imagecloth4Width,
      height: imagecloth4Height,
      position: imagecloth4Position,
      top: imagecloth4Top,
      right: imagecloth4Right,
      bottom: imagecloth4Bottom,
      left: imagecloth4Left,
      mixBlendMode: imagecloth4MixBlendMode,
    };
  }, [
    imagecloth4Width,
    imagecloth4Height,
    imagecloth4Position,
    imagecloth4Top,
    imagecloth4Right,
    imagecloth4Bottom,
    imagecloth4Left,
    imagecloth4MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth4Style}
    >
      <img
        className="absolute h-[76%] w-[73.78%] top-[12%] right-[12.89%] bottom-[12%] left-[13.33%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={bitmap}
      />
    </div>
  );
};

export default Imagecloth4;
