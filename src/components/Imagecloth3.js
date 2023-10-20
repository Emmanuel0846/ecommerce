import { useMemo } from "react";

const Imagecloth3 = ({
  prop,
  imagecloth3Width,
  imagecloth3Height,
  imagecloth3Position,
  imagecloth3Top,
  imagecloth3Left,
  imagecloth3Right,
  imagecloth3Bottom,
}) => {
  const imagecloth3Style = useMemo(() => {
    return {
      width: imagecloth3Width,
      height: imagecloth3Height,
      position: imagecloth3Position,
      top: imagecloth3Top,
      left: imagecloth3Left,
      right: imagecloth3Right,
      bottom: imagecloth3Bottom,
    };
  }, [
    imagecloth3Width,
    imagecloth3Height,
    imagecloth3Position,
    imagecloth3Top,
    imagecloth3Left,
    imagecloth3Right,
    imagecloth3Bottom,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth3Style}
    >
      <img
        className="absolute h-[88.89%] w-[86.22%] top-[3.56%] right-[7.56%] bottom-[7.56%] left-[6.22%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={prop}
      />
    </div>
  );
};

export default Imagecloth3;
