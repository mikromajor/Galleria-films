import React, { useState, useEffect } from "react";
import { ARR } from "../../../../constants";
import cl from "./Counter.module.css";

const Counter = ({
  favoriteList,
}: {
  favoriteList: string | ARR;
}) => {
  let amount;
  typeof favoriteList === "string"
    ? (amount = 0)
    : (amount = favoriteList.length);
  return <div className={cl.counter}>{amount}</div>;
};
export default Counter;
