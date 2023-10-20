import SizesmallContentbtnText from "./SizesmallContentbtnText";
import SizenormalContentbtnIcon1 from "./SizenormalContentbtnIcon1";
import ItemCart from "./ItemCart";

const Cart = () => {
  return (
    <div className="absolute top-[168px] left-[70px] w-[880px] h-[552px] text-left text-base text-dark font-text-btn-btn-small">
      <div className="absolute top-[0px] left-[0px] rounded-md bg-white box-border w-[880px] h-[552px] border-[1px] border-solid border-gray-300" />
      <SizesmallContentbtnText
        text="Remove all"
        sizesmallContentbtnTextPosition="absolute"
        sizesmallContentbtnTextTop="88.95%"
        sizesmallContentbtnTextLeft="84.66%"
        sizesmallContentbtnTextWidth="13.07%"
        sizesmallContentbtnTextBackground="unset"
        sizesmallContentbtnTextBackgroundColor="#fff"
        sizesmallContentbtnTextBorder="1px solid #dee2e7"
        sizesmallContentbtnTextHeight="7.25%"
        sizesmallContentbtnTextRight="2.27%"
        sizesmallContentbtnTextBottom="3.8%"
        sizesmallContentbtnTextBoxShadow="unset"
        textColor="#0d6efd"
        textFontSize="16px"
      />
      <SizenormalContentbtnIcon1
        icon0="/iconcontrolarrow-back.svg"
        text="Back to shop"
        sizenormalContentbtnIconWidth="159px"
        sizenormalContentbtnIconHeight="40px"
        sizenormalContentbtnIconPosition="absolute"
        sizenormalContentbtnIconTop="491px"
        sizenormalContentbtnIconRight="unset"
        sizenormalContentbtnIconBottom="unset"
        sizenormalContentbtnIconLeft="19px"
        sizenormalContentbtnIconBackgroundColor="unset"
        sizenormalContentbtnIconBorder="unset"
        sizenormalContentbtnIconBoxSizing="unset"
        sizenormalContentbtnIconBackground="linear-gradient(180deg, #127fff, #0067ff)"
        buttonbasetextMdWidth="calc(100% - 59px)"
        buttonbasetextMdRight="14px"
        buttonbasetextMdLeft="45px"
        textColor="#fff"
      />
      <ItemCart
        productDimensions="/-background27.svg"
        quantityText="Qty: 9"
        sellerName="Seller: Artel Market"
        priceText="$78.99"
        itemDimensions="/bitmap2@2x.png"
      />
      <ItemCart
        productDimensions="/-background28.svg"
        quantityText="Qty: 3"
        sellerName="Seller: Best factory LLC"
        priceText="$39.00"
        itemDimensions="/image-261@2x.png"
        textTop="179px"
        propLeft="93.33%"
        propHeight="86.22%"
        propWidth="86.22%"
        propRight="6.67%"
        propBottom="6.67%"
        propLeft1="7.11%"
        propTop="7.11%"
      />
      <ItemCart
        productDimensions="/-background28.svg"
        quantityText="Qty: 1"
        sellerName="Seller: Artel Market"
        priceText="$170.50"
        itemDimensions="/image-942@2x.png"
        textTop="335px"
        propLeft="92.62%"
        propHeight="91.11%"
        propWidth="91.11%"
        propRight="4.44%"
        propBottom="4.44%"
        propLeft1="4.44%"
        propTop="4.44%"
      />
    </div>
  );
};

export default Cart;
