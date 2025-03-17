import Circle from "./Circle.jsx";

function Illustration() {
  return (
    <>
      <div className="illustration">
        <div>
          <Circle color="light_blue" />
          <div className="cone light_blue" />
        </div>
        <div>
          <Circle color="yellow" />
          <div className="cone yellow" />
        </div>
        <div>
          <Circle color="green" />
          <div className="cone green" />
        </div>
        <div>
          <Circle color="dark_blue" />
          <div className="cone dark_blue" />
        </div>
        <div>
          <Circle color="red" />
          <div className="cone red" />
        </div>
        <div>
          <Circle color="purple" />
          <div className="cone purple" />
        </div>
      </div>
      <div className="bottomline"></div>
    </>
  );
}

export default Illustration;
