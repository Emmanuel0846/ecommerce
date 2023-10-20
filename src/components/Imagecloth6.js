import { useMemo } from "react";

const Imagecloth6 = ({
  image24,
  imagecloth6Width,
  imagecloth6Height,
  imagecloth6Position,
  imagecloth6Top,
  imagecloth6Right,
  imagecloth6Bottom,
  imagecloth6Left,
  imagecloth6MixBlendMode,
}) => {
  const imagecloth6Style = useMemo(() => {
    return {
      width: imagecloth6Width,
      height: imagecloth6Height,
      position: imagecloth6Position,
      top: imagecloth6Top,
      right: imagecloth6Right,
      bottom: imagecloth6Bottom,
      left: imagecloth6Left,
      mixBlendMode: imagecloth6MixBlendMode,
    };
  }, [
    imagecloth6Width,
    imagecloth6Height,
    imagecloth6Position,
    imagecloth6Top,
    imagecloth6Right,
    imagecloth6Bottom,
    imagecloth6Left,
    imagecloth6MixBlendMode,
  ]);

  return (
    <div
      className="bg-white w-[225px] h-[225px] overflow-hidden"
      style={imagecloth6Style}
    >
      <img
        className="absolute h-[85.33%] w-[84.44%] top-[7.56%] right-[7.56%] bottom-[7.11%] left-[8%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image24}
      />
    </div>
  );
};

export default Imagecloth6;
