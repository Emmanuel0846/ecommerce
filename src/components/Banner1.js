import SizesmallContentbtnText from "./SizesmallContentbtnText";

const Banner1 = () => {
  return (
    <div className="absolute h-[90%] w-[56.36%] top-[5%] right-[20.34%] bottom-[5%] left-[23.31%] text-left text-9xl text-dark font-text-btn-btn-small">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mask-group4@2x.png"
      />
      <div className="absolute top-[53px] left-[45px] w-[253px] h-[73px]">
        <div className="absolute top-[0px] left-[1px]">Latest trending</div>
        <b className="absolute top-[34px] left-[0px] text-13xl">
          Electronic items
        </b>
      </div>
      <SizesmallContentbtnText
        text="Learn more"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="143px"
        sizesmallContentbtnTextLeft="46px"
        sizesmallContentbtnTextWidth="unset"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#fff"
        sizesmallContentbtnTextBorder="1px solid #fff"
        sizesmallContentbtnTextHeight="40px"
        sizesmallContentbtnTextRight="unset"
        sizesmallContentbtnTextBottom="unset"
        sizesmallContentbtnTextBoxShadow="0px 1px 2px rgba(56, 56, 56, 0.08)"
        textColor="#1c1c1c"
        textFontSize="16px"
      />
    </div>
  );
};

export default Banner1;
