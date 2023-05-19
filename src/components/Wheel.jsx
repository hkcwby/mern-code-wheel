import mainLogo from "../assets/Interplay_logo.png";
function Wheel(props) {
  return (
    <div className="outer-wheel">
      <div>
        {props.outer.map((item, index) => (
          <div
            key={index}
            className={`pos-data-${index} outer`}
            onClick={() => props.outerWheelClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="inner-wheel">
        {props.inner.map((item, index) => (
          <div
            key={index}
            className={`pos-data-${index} inner`}
            onClick={() => props.innerWheelClick(index)}
          >
            {item}
          </div>
        ))}
        {props.layers.layerOne.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-one number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-one`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerTwo.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-two number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-two`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerThree.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-three number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-three`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFour.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-four number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-four`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFive.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-five number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-five`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSix.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-six number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-six`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSeven.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-seven number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-seven`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerEight.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-data-${index} layer-eight number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} layer-eight`}>
              {item}
            </div>
          )
        )}
        {props.layers.logoTitle.map((item, index) =>
          item ? (
            <h2 key={index} className={`pos-logo-title-${index} title`}>
              NEUROMANCER
            </h2>
          ) : (
            <></>
          )
        )}
        {props.layers.logoTitle.map((item, index) =>
          item ? (
            <h3 key={index} className={`pos-logo-title-${index} subtitle`}>
              PAX Verification Code Wheel
            </h3>
          ) : (
            <></>
          )
        )}
        {props.layers.logoTitle.map((item, index) =>
          item ? (
            <img
              src={mainLogo}
              className={`pos-logo-title-${index} logo`}
              alt="logo"
            />
          ) : (
            <></>
          )
        )}
        <div id="ring-wheel"></div>
      </div>
    </div>
  );
}

export default Wheel;
