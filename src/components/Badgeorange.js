import { useMemo } from "react";

const Badgeorange = ({
  pending,
  badgeorangeBackgroundColor,
  badgeorangePosition,
  badgeorangeTop,
  badgeorangeLeft,
  pendingColor,
}) => {
  const badgeorangeStyle = useMemo(() => {
    return {
      backgroundColor: badgeorangeBackgroundColor,
      position: badgeorangePosition,
      top: badgeorangeTop,
      left: badgeorangeLeft,
    };
  }, [
    badgeorangeBackgroundColor,
    badgeorangePosition,
    badgeorangeTop,
    badgeorangeLeft,
  ]);

  const pendingStyle = useMemo(() => {
    return {
      color: pendingColor,
    };
  }, [pendingColor]);

  return (
    <div
      className="rounded-10xl bg-papayawhip h-7 flex flex-row items-center justify-center pt-[3px] px-[13px] pb-1 box-border text-center text-sm text-base-color-orange font-text-btn-btn-small"
      style={badgeorangeStyle}
    >
      <div
        className="relative tracking-[-0.2px] font-medium"
        style={pendingStyle}
      >
        {pending}
      </div>
    </div>
  );
};

export default Badgeorange;
