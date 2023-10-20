const LayoutcollablseHeading = ({ categoryLabel, brandImageUrl }) => {
  return (
    <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-12 text-left text-base text-dark font-text-btn-btn-small border-t-[1px] border-solid border-gray-300">
      <div className="absolute top-[calc(50%_-_10px)] left-[0px] font-semibold">
        {categoryLabel}
      </div>
      <img
        className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6"
        alt=""
        src={brandImageUrl}
      />
    </div>
  );
};

export default LayoutcollablseHeading;
