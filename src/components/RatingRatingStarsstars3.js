import { useMemo } from "react";

const RatingRatingStarsstars3 = ({
  ratingRatingStarsstars3Ra,
  ratingRatingStarsstars3IcWidth,
  ratingRatingStarsstars3IcHeight,
  ratingRatingStarsstars3IcPosition,
  ratingRatingStarsstars3IcTop,
  ratingRatingStarsstars3IcRight,
  ratingRatingStarsstars3IcBottom,
  ratingRatingStarsstars3IcLeft,
  ratingRatingStarsstars3IcMaxWidth,
  ratingRatingStarsstars3IcOverflow,
  ratingRatingStarsstars3IcMaxHeight,
}) => {
  const ratingRatingStarsstars3IconStyle = useMemo(() => {
    return {
      width: ratingRatingStarsstars3IcWidth,
      height: ratingRatingStarsstars3IcHeight,
      position: ratingRatingStarsstars3IcPosition,
      top: ratingRatingStarsstars3IcTop,
      right: ratingRatingStarsstars3IcRight,
      bottom: ratingRatingStarsstars3IcBottom,
      left: ratingRatingStarsstars3IcLeft,
      maxWidth: ratingRatingStarsstars3IcMaxWidth,
      overflow: ratingRatingStarsstars3IcOverflow,
      maxHeight: ratingRatingStarsstars3IcMaxHeight,
    };
  }, [
    ratingRatingStarsstars3IcWidth,
    ratingRatingStarsstars3IcHeight,
    ratingRatingStarsstars3IcPosition,
    ratingRatingStarsstars3IcTop,
    ratingRatingStarsstars3IcRight,
    ratingRatingStarsstars3IcBottom,
    ratingRatingStarsstars3IcLeft,
    ratingRatingStarsstars3IcMaxWidth,
    ratingRatingStarsstars3IcOverflow,
    ratingRatingStarsstars3IcMaxHeight,
  ]);

  return (
    <img
      className="w-20 h-[15px]"
      alt=""
      src={ratingRatingStarsstars3Ra}
      style={ratingRatingStarsstars3IconStyle}
    />
  );
};

export default RatingRatingStarsstars3;
