import { useMemo } from "react";

const Formtextarea = ({
  background,
  text,
  formtextareaWidth,
  formtextareaHeight,
  formtextareaPosition,
  formtextareaTop,
  formtextareaLeft,
}) => {
  const formtextareaStyle = useMemo(() => {
    return {
      width: formtextareaWidth,
      height: formtextareaHeight,
      position: formtextareaPosition,
      top: formtextareaTop,
      left: formtextareaLeft,
    };
  }, [
    formtextareaWidth,
    formtextareaHeight,
    formtextareaPosition,
    formtextareaTop,
    formtextareaLeft,
  ]);

  return (
    <div
      className="w-[350px] h-[61px] text-left text-base text-gray-500 font-text-btn-btn-small"
      style={formtextareaStyle}
    >
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md max-w-full overflow-hidden max-h-full"
          alt=""
          src={background}
        />
        <div className="absolute w-[calc(100%_-_48px)] top-[11px] left-[11px] inline-block">
          {text}
        </div>
        <img
          className="absolute right-[7px] bottom-[6px] w-2 h-2"
          alt=""
          src="/resizer.svg"
        />
      </div>
    </div>
  );
};

export default Formtextarea;
