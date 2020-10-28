import "./App.css";
import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
function App() {
  let colorList = [];

  const [Colors, setColors] = useState([]);
  // const [dWidth, setDWidth] = useState(0);
  /**
   * At the time of component mounting
   * generating array of unique color codes with RGB variations
   */
  useEffect(() => {
    const value = 8;
    var v = 255 / value;

    for (var rStep = 0, r = 0; rStep < v; rStep++) {
      for (var gStep = 0, g = 0; gStep < v; gStep++) {
        for (var bStep = 0, b = 0; bStep < v; bStep++) {
          colorList.push(`${r},${g},${b}`);
          b += value;
        }
        g += value;
      }
      r += value;
    }
    /**
     * set color list into state array
     */
    setColors(colorList);
  }, []);

  return (
    <div className="App" key={"AppKey"}>
      Color Generator
      <Row key={Math.random().toString()}>
        <Col
          key={Math.random().toString()}
          md="12"
          className="d-flex flex-row flex-wrap mt-1 mx-5 colDiv"
        >
          {Colors.map((element, i) => (
            <div
              key={i}
              style={{ background: `rgb(${element})` }}
              className="rgbColorBox"
            ></div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default App;
