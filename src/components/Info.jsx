import mainLogo from "../assets/Interplay_logo.png";
function Info() {
  return (
    <div className="outer-wheel info-tab">
      <div className="info-title">
        <h1>Information</h1>
      </div>
      <div className="info-body">
        <p className="info-text-top">
          This is a recreation of the Pax Verification Wheel from the 1988 game{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Neuromancer_(video_game)"
          >
            Neuromancer
          </a>
          , which is based (sadly a little too loosely) on the classic{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Cyberpunk">
            Cyberpunk
          </a>{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Neuromancer">
            Novel
          </a>{" "}
          by{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/William_Gibson"
          >
            William Gibson
          </a>
          .
        </p>
        <p className="info-text-mid">
          The game itself is now widely available to play on modern computers
          using{" "}
          <a target="_blank" href="https://www.dosbox.com/">
            DOSBox
          </a>{" "}
          or through a web browser. However, in order to play the game properly
          you require a code wheel which was supplied with the original physical
          copy of the game. This was a common form of data protection in the
          1980s and 1990s for PC gaming.
        </p>
        <p className="info-text-bottom">
          This web application is functional replica of the original code wheel.
          Now you won't need to be a Console Cowboy or crack the{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Intrusion_Countermeasures_Electronics"
          >
            ICE
          </a>{" "}
          to enjoy this game; its so easy any{" "}
          <a
            target="_blank"
            href="https://www.urbandictionary.com/define.php?term=hot%20dogger"
          >
            Hot Dogger
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            href="https://www.urbandictionary.com/define.php?term=The%20Wilson&page=4"
          >
            Wilson
          </a>{" "}
          can play.
        </p>
      </div>
      <img src={mainLogo} style={{ height: "10vh" }} alt="logo" />
    </div>
  );
}

export default Info;
