import React, { Component, Fragment } from "react";
import s from "./NewList.module.css";

class NewList extends Component {
  state = {};

  handleChangeColor = (e) => {
      const {name}= e.target.name;
    const {value} = e.target.value;
      const defaultStyle = [s.block];
      const activeStyle = defaultStyle.push(s.random)
      return activeStyle;
  }
  render() {
    return (
      <Fragment>
        <h4>IT WORKS</h4>
        <ul className={s.container}>
          <li onClick={this.handleChangeColor} className={s.block}>
            f
          </li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.lost}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.lost}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.lost}>f</li>
          <li className={s.won}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.won}>f</li>
          <li className={s.block}>f</li>
          <li className={s.won}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.won}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.won}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
          <li className={s.block}>f</li>
        </ul>
      </Fragment>
    );
  }
}

export default NewList;
