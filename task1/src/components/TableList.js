import React from "react";
import s from "./TableList.module.css";

const arr = [];
let i;
const numb = 10;

const getLine = (numb) => {
  arr.push(0);
  i++;
  if (i < numb) {
    getLine();
  }
  console.log("arr", arr);
  return arr;
};

const getArr = (arr) => {
  const newArr = [];
  const arrInt = getLine().map((elem) => (elem = newArr.push(getLine(numb))));

  return arrInt;
};

const TableList = ({ size = 10, array = [10, 10] }) => {
  getLine(10);
  getArr();
  return (
    <div>
      <h4>div</h4>
      {array.map((number) => (
        <div className={s.block}>div</div>
      ))}
    </div>
  );
};

export default TableList;
