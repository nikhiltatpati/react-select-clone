import React from "react";
import App from "./App.js";

const Test = () => {
  const handleChange = (item) => {
    console.log(item);
  };

  // const [data, setData] = React.useState(undefined);

  const [data, setData] = React.useState([
    { id: 1, value: "banana", count: 20, isChecked: true },
    { id: 2, value: "apple", count: 50, isChecked: false },
    { id: 3, value: "mango", count: 10, isChecked: false },
    { id: 4, value: "grap", count: 70, isChecked: false },
  ]);

  // React.useEffect(() => {
  //   const resultData = [];
  //   fetch("https://www.json-generator.com/api/json/get/cqVmFQHuUO")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       result.forEach((item) => {
  //         resultData.push({
  //           id: item.guid,
  //           value: item.eyeColor,
  //           count: item.age,
  //         });
  //       });
  //       setData(resultData);
  //     });
  // }, []);

  return (
    <div>
      {data && (
        <App
          multiSelect={true}
          showCount={true}
          data={data}
          defaultSelected={[]}
          onChange={handleChange}
          showFilter={true}
        />
      )}
      {!data && `Fetchin Data...`}
    </div>
  );
};

export default Test;
