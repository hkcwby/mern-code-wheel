import { useState, useEffect } from "react";
import svg from "./assets/Infobox.svg";
import Wheel from "./components/Wheel.jsx";
import Info from "./components/Info.jsx";
import "./components/info.css";
import "./components/wheel.css";
import axios from "axios";
import theMatrix from "./assets/wheelData";

function App() {
  // const [loading, setLoading] = useState(false);

  //loading information toggle function

  const [info, setInfo] = useState(true);
  function infoToggle() {
    setInfo(!info);
  }

  // defining the variables that change dependent on wheel positions and start their values

  const [outer, setOuter] = useState(Object.keys(theMatrix));
  const [inner, setInner] = useState(Object.keys(theMatrix.Chatsubo));

  const [wheelData, setWheelData] = useState({
    // asanoComputing: "61254",
    // spacedock: "031770",
    // spaceColony: "054127",
    // flatline: "132077",
    // ai: "71226",
    // zionCluster: "43267",
    // marcusGarvey: "45771",
    // cryptology: "67237",
    // chibaCity: "3347",
    // bankOfBerne: "5165",
    // bankOfZurich: "1053",
    // fujiElectric: "6124",
    // holyJoystick: "333",
    // onoSendai: "725",
    // hitachiBiotech: "672",
    // compuJudge: "054",
    asanoComputing: "",
    spacedock: "",
    spaceColony: "",
    flatline: "",
    ai: "",
    zionCluster: "",
    marcusGarvey: "",
    cryptology: "",
    chibaCity: "",
    bankOfBerne: "",
    bankOfZurich: "",
    fujiElectric: "",
    holyJoystick: "",
    onoSendai: "",
    hitachiBiotech: "",
    compuJudge: "",
  });

  /*setting up each layer of the wheel based upon a start position of "Chatsubo":"Cyberdeck"
   at the 12 O'clock position*/
  const layerOneWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    wheelData.asanoComputing,
    "",
    "Space Colony",
    "",
    wheelData.spacedock,
    "",
    "",
    "flatline",
  ];
  const layerTwoWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "ZionCluster",
    "Asano Computing",
    "",
    wheelData.spaceColony,
    "",
    "Spacedock",
    "Marcus Garvey",
    "",
    wheelData.flatline,
  ];
  const layerThreeWheel = [
    "AI",
    "",
    "",
    "",
    "",
    "",
    "",
    wheelData.zionCluster,
    "",
    "Cryptology",
    "",
    "",
    "",
    wheelData.marcusGarvey,
    "",
    "",
  ];
  const layerFourWheel = [
    wheelData.ai,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    wheelData.cryptology,
    "",
    "Bank of Berne",
    "",
    "",
    "",
    "",
  ];
  const layerFiveWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Chiba City",
    "",
    "",
    "",
    wheelData.bankOfBerne,
    "",
    wheelData.bankOfZurich,
    "",
    "",
  ];
  const layerSixWheel = [
    wheelData.fujiElectric,
    "",
    "",
    "",
    "",
    "",
    "",
    wheelData.chibaCity,
    "",
    "",
    "Holy Joystick",
    "",
    "",
    "Bank of Zurich",
    "Compu-judge",
    "",
  ];
  const layerSevenWheel = [
    "Fuji Electric",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Hitachi Biotech",
    "",
    wheelData.holyJoystick,
    "",
    "Ono-Sendai",
    "",
    wheelData.compuJudge,
    "",
  ];
  const layerEightWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    wheelData.hitachiBiotech,
    "",
    "",
    "",
    wheelData.onoSendai,
    "",
    "",
    "",
  ];

  const logoTitleWheel = [
    "",
    "",
    "",
    true,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  //creating react state management for each of these data positions above

  const [layers, setLayers] = useState({
    layerOne: layerOneWheel,
    layerTwo: layerTwoWheel,
    layerThree: layerThreeWheel,
    layerFour: layerFourWheel,
    layerFive: layerFiveWheel,
    layerSix: layerSixWheel,
    layerSeven: layerSevenWheel,
    layerEight: layerEightWheel,
    logoTitle: logoTitleWheel,
  });

  //shifts the innerwheel positions and refreshes data values
  function innerWheelShift(position) {
    //tracks the current position of the wheel tracking based on the location of the original top position
    //this is used for the "layers" because we will be refreshing their data each time
    const topPosition = 16 - inner.indexOf("Cyberdeck");
    //first step in modifying the inner wheel values positions
    const innerNew = [...inner];
    const innerMod = innerNew.splice(0, position);
    //update data based on the new inner and existing outer wheel positions
    // updateValues(innerNew.concat(...innerMod), outer);
    //set the new inner wheel positions for rendering
    setInner(innerNew.concat(...innerMod));

    const logoTitleNew = [...layers.logoTitle];
    const logoTitleMod = logoTitleNew.splice(0, position);
    const dataLogoTitle = logoTitleNew.concat(logoTitleMod);

    // declare the async data fetching function
    const fetchWheelData = async (term = "chatsuboCyberdeck") => {
      // get the data from the api
      const reponse = await axios.get(
        `http://localhost:5555/datawheel/fetchdata?term=${term}`
      );
      const newData = await JSON.parse(reponse.data[0].data);
      await console.log("this is called data", newData);
      // updateValues(newData);

      let wheelData = {
        ai: newData["AI"],
        fujiElectric: newData["Fuji Electric"],
        zionCluster: newData["Zion Cluster"],
        chibaCity: newData["Chiba City"],
        asanoComputing: newData["Asano Computing"],
        hitachiBiotech: newData["Hitachi Biotech"],
        cryptology: newData["Cryptology"],
        spaceColony: newData["Space Colony"],
        holyJoystick: newData["Holy Joystick"],
        bankOfBerne: newData["Bank of Berne"],
        spacedock: newData["Spacedock"],
        onoSendai: newData["Ono-Sendai"],
        marcusGarvey: newData["Marcus Garvey"],
        bankOfZurich: newData["Bank of Zurich"],
        compuJudge: newData["Compu-judge"],
        flatline: newData["flatline"],
      };

      let dataOne = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        wheelData.asanoComputing,
        "",
        "Space Colony",
        "",
        wheelData.spacedock,
        "",
        "",
        "flatline",
      ];
      //since this data is in the order of the initial render we must first readjust using our stored variable
      let modOne = dataOne.splice(0, topPosition);
      dataOne = dataOne.concat(modOne);
      //now adjust it to the new position based on the clicked position
      modOne = dataOne.splice(0, position);
      dataOne = dataOne.concat(modOne);
      //repeat the process for layers two through eight
      let dataTwo = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "ZionCluster",
        "Asano Computing",
        "",
        wheelData.spaceColony,
        "",
        "Spacedock",
        "Marcus Garvey",
        "",
        wheelData.flatline,
      ];
      let modTwo = dataTwo.splice(0, topPosition);
      dataTwo = dataTwo.concat(modTwo);
      modTwo = dataTwo.splice(0, position);
      dataTwo = dataTwo.concat(modTwo);

      let dataThree = [
        "AI",
        "",
        "",
        "",
        "",
        "",
        "",
        wheelData.zionCluster,
        "",
        "Cryptology",
        "",
        "",
        "",
        wheelData.marcusGarvey,
        "",
        "",
      ];
      let modThree = dataThree.splice(0, topPosition);
      dataThree = dataThree.concat(modThree);
      modThree = dataThree.splice(0, position);
      dataThree = dataThree.concat(modThree);

      let dataFour = [
        wheelData.ai,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        wheelData.cryptology,
        "",
        "Bank of Berne",
        "",
        "",
        "",
        "",
      ];
      let modFour = dataFour.splice(0, topPosition);
      dataFour = dataFour.concat(modFour);
      modFour = dataFour.splice(0, position);
      dataFour = dataFour.concat(modFour);

      let dataFive = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Chiba City",
        "",
        "",
        "",
        wheelData.bankOfBerne,
        "",
        wheelData.bankOfZurich,
        "",
        "",
      ];
      let modFive = dataFive.splice(0, topPosition);
      dataFive = dataFive.concat(modFive);
      modFive = dataFive.splice(0, position);
      dataFive = dataFive.concat(modFive);

      let dataSix = [
        wheelData.fujiElectric,
        "",
        "",
        "",
        "",
        "",
        "",
        wheelData.chibaCity,
        "",
        "",
        "Holy Joystick",
        "",
        "",
        "Bank of Zurich",
        "Compu-judge",
        "",
      ];
      let modSix = dataSix.splice(0, topPosition);
      dataSix = dataSix.concat(modSix);
      modSix = dataSix.splice(0, position);
      dataSix = dataSix.concat(modSix);

      let dataSeven = [
        "Fuji Electric",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Hitachi Biotech",
        "",
        wheelData.holyJoystick,
        "",
        "Ono-Sendai",
        "",
        wheelData.compuJudge,
        "",
      ];
      let modSeven = dataSeven.splice(0, topPosition);
      dataSeven = dataSeven.concat(modSeven);
      modSeven = dataSeven.splice(0, position);
      dataSeven = dataSeven.concat(modSeven);

      let dataEight = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        wheelData.hitachiBiotech,
        "",
        "",
        "",
        wheelData.onoSendai,
        "",
        "",
        "",
      ];
      let modEight = dataEight.splice(0, topPosition);
      dataEight = dataEight.concat(modEight);
      modEight = dataEight.splice(0, position);
      dataEight = dataEight.concat(modEight);

      setLayers({
        ...layers,
        layerOne: dataOne,
        layerTwo: dataTwo,
        layerThree: dataThree,
        layerFour: dataFour,
        layerFive: dataFive,
        layerSix: dataSix,
        layerSeven: dataSeven,
        layerEight: dataEight,
        logoTitle: dataLogoTitle,
      });
    };

    fetchWheelData(theMatrix[outer[0]][inner[0]]);

    //now refresh each of the eight wheel data layers with the updated variable values
  }
  //shifts the outer wheel
  function outerWheelShift(position) {
    const outerNew = [...outer];
    const outerMod = outerNew.splice(0, position);
    setOuter(outerNew.concat(outerMod));
  }
  //a useEffect hook, rerun the innerWheel data calc (unmoved) when the outer wheel is updated
  useEffect(() => {
    innerWheelShift(0);
    console.log("called");
  }, [outer]);

  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchWheelData = async (term = "chatsuboCyberdeck") => {
  //     // get the data from the api
  //     const reponse = await axios.get(
  //       `http://localhost:5555/datawheel/fetchdata?term=${term}`
  //     );
  //     const newData = await JSON.parse(reponse.data[0].data);
  //     await console.log("this is called data", newData);
  //     // updateValues(newData);
  //     await setWheelData({
  //       ai: newData["AI"],
  //       fujiElectric: newData["Fuji Electric"],
  //       zionCluster: newData["Zion Cluster"],
  //       chibaCity: newData["Chiba City"],
  //       asanoComputing: newData["Asano Computing"],
  //       hitachiBiotech: newData["Hitachi Biotech"],
  //       cryptology: newData["Cryptology"],
  //       spaceColony: newData["Space Colony"],
  //       holyJoystick: newData["Holy Joystick"],
  //       bankOfBerne: newData["Bank of Berne"],
  //       spacedock: newData["Spacedock"],
  //       onoSendai: newData["Ono-Sendai"],
  //       marcusGarvey: newData["Marcus Garvey"],
  //       bankOfZurich: newData["Bank of Zurich"],
  //       compuJudge: newData["Compu-judge"],
  //       flatline: newData["flatline"],
  //     });
  //     await console.log("this is wheel data", { ...wheelData });
  //   };

  //   // call the function
  //   fetchWheelData(theMatrix[outer[0]][inner[0]])
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [outer, inner]);

  return (
    <div className="App">
      <div id="background">
        <div id="info-toggle">
          {info ? (
            <img src={svg} id="info" onClick={() => infoToggle()} />
          ) : (
            <div id="toggle-background">
              <div id="toggle-outer-wheel" onClick={() => infoToggle()}>
                <div id="toggle-inner-wheel">
                  <div id="toggle-ring-wheel"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        {info ? (
          <Wheel
            outerWheelClick={outerWheelShift}
            innerWheelClick={innerWheelShift}
            layers={layers}
            outer={outer}
            inner={inner}
          />
        ) : (
          <Info />
        )}
      </div>
    </div>
  );
}

export default App;
