import React from "react";

export const CheckBox = (props) => {
  return (
    <>
      {props.filterData.map((item) => {
        return (
          <div key={item.id}>
            <input
              id={item.id}
              onClick={props.handleCheckChildElement}
              type="checkbox"
              checked={item.isChecked}
              value={item.id}
            />
            {item.value}
            {props.showCount ? <span>{`(${item.count})`}</span> : ""}
          </div>
        );
      })}
    </>
  );
};

export default CheckBox;
