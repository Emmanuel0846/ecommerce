import Content from "../components/Content";
import ContentTop1 from "../components/ContentTop1";
import LayoutnavbarAlibaba from "../components/LayoutnavbarAlibaba";
import LayoutheaderAlibaba from "../components/LayoutheaderAlibaba";
import Formselectbox from "../components/Formselectbox";
import SizenormalGroupmiddleCon from "../components/SizenormalGroupmiddleCon";
import LayoutnewsletterAlibaba from "../components/LayoutnewsletterAlibaba";
import LayoutfooterAlibaba from "../components/LayoutfooterAlibaba";
import Sidebar from "../components/Sidebar";
import ContainerForm from "../components/ContainerForm";

const WebListview = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[2346px] overflow-hidden">
      <Content />
      <ContentTop1 />
      <LayoutnavbarAlibaba />
      <LayoutheaderAlibaba
        dimension="/vector5.svg"
        imageDimensions="/-background13.svg"
        imageDimensionsText="/brandlogocolored6.svg"
        showSearchForm
      />
      <Formselectbox
        background="/-background15.svg"
        text="Show 10"
        iconcontrolexpandMore="/iconcontrolexpand-more3.svg"
        formselectboxWidth="125px"
        formselectboxPosition="absolute"
        formselectboxTop="1779px"
        formselectboxLeft="889px"
        formselectboxHeight="40px"
        formselectboxRight="unset"
        formselectboxBottom="unset"
        formselectboxBoxShadow="unset"
      />
      <div className="absolute top-[1779px] left-[1013px] w-[217px] h-10">
        <img
          className="absolute top-[0px] left-[0px] w-11 h-10"
          alt=""
          src="/buttonbtngroup.svg"
        />
        <img
          className="absolute top-[0px] left-[173px] w-11 h-10"
          alt=""
          src="/buttonbtngroup1.svg"
        />
        <SizenormalGroupmiddleCon
          background="/-background16.svg"
          text="2"
          sizenormalGroupmiddleConWidth="44px"
          sizenormalGroupmiddleConHeight="40px"
          sizenormalGroupmiddleConPosition="absolute"
          sizenormalGroupmiddleConTop="0px"
          sizenormalGroupmiddleConRight="unset"
          sizenormalGroupmiddleConBottom="unset"
          sizenormalGroupmiddleConLeft="87px"
          textColor="#1c1c1c"
        />
        <SizenormalGroupmiddleCon
          background="/-background17.svg"
          text="1"
          sizenormalGroupmiddleConWidth="44px"
          sizenormalGroupmiddleConHeight="40px"
          sizenormalGroupmiddleConPosition="absolute"
          sizenormalGroupmiddleConTop="0px"
          sizenormalGroupmiddleConRight="unset"
          sizenormalGroupmiddleConBottom="unset"
          sizenormalGroupmiddleConLeft="44px"
          textColor="#8b96a5"
        />
        <SizenormalGroupmiddleCon
          background="/-background16.svg"
          text="3"
          sizenormalGroupmiddleConWidth="44px"
          sizenormalGroupmiddleConHeight="40px"
          sizenormalGroupmiddleConPosition="absolute"
          sizenormalGroupmiddleConTop="0px"
          sizenormalGroupmiddleConRight="unset"
          sizenormalGroupmiddleConBottom="unset"
          sizenormalGroupmiddleConLeft="130px"
          textColor="#1c1c1c"
        />
      </div>
      <LayoutnewsletterAlibaba
        dimensionCode="/-background18.svg"
        imageDimensionCode="/icon06.svg"
        imageDimensionCode2="/iconemail.svg"
        propTop="1832px"
      />
      <LayoutfooterAlibaba
        imageDimensions="/brandlogocolored7.svg"
        imageDimensionsText="/iconcontrolexpand-less.svg"
        imageDimensionsText2="/subtract3.svg"
        imageDimensionsCode="/logo3.svg"
        colTop="2022px"
      />
      <Sidebar />
      <ContainerForm dimensionCode="/iconcontrolchevron-right1.svg" />
    </div>
  );
};

export default WebListview;
