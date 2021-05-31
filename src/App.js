import React, { Component } from "react";
import CheckBox from "./CheckBox";

const App = ({ data, onChange, multiSelect, showFilter, showCount }) => {
  const [Item, setItem] = React.useState([]);
  const [singleSelect, setSingleSelect] = React.useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    let res;
    if (data) {
      res = data;
      res.forEach((element) => {
        element.isChecked = false;
      });
    }
    setItem(res);
    setFilterData(res);
  }, []);

  React.useEffect(() => {
    if (filterText) {
      const res = Item.filter((item) => item.value.startsWith(filterText));
      setFilterData(res);
    }
  }, [filterText]);

  const handleCheckChildElement = (event) => {
    let res = filterData;
    console.log(event.target.id);
    res.forEach((item) => {
      if (item.id == event.target.value) {
        if (multiSelect === false && singleSelect === true) {
          if (event.target.checked === true) {
            console.log("end");
            return;
          }
        } else {
          item.isChecked = event.target.checked;
          console.log("start");
          if (onChange) {
            onChange(item);
          }
          setSingleSelect(event.target.checked);
        }
      }

      // } else {
      //   item.isChecked = event.target.checked;
      //   if (onChange) {
      //     onChange(item);
      //   }
      // }
    });

    //setItem(res);
    setFilterData(res);
  };

  return (
    <div className="App">
      {singleSelect}
      {console.log(filterData)}
      {showFilter ? (
        <input
          placeholder="type filter..."
          onChange={(event) => setFilterText(event.target.value)}
        />
      ) : (
        <></>
      )}
      <div>
        <CheckBox
          handleCheckChildElement={handleCheckChildElement}
          showCount={showCount}
          filterData={filterData}
        />
      </div>
    </div>
  );
};

export default App;
