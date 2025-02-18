"use client";

import { useState } from "react";
import { BookOpenIcon, UsersIcon } from "@heroicons/react/24/outline";
import BasicButton from "@/app/ui/idle-game/BasicButton";
export default function main() {
  const [int, setInt] = useState(0);
  const [increase, setIncrease] = useState(1);
  const [intReq, setIntReq] = useState(5);

  async function timer(
    targetID: string,
    targetStat: Function,
    buttonID: string,
    speed: number
  ) {
    var elem = document.getElementById(targetID);
    var button = document.getElementById(buttonID);
    var width = 1;
    var i = 1;
    if (button) button.setAttribute("disabled", "");
    var id = setInterval(function () {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        targetStat();
        if (buttonID == "readButton") button?.removeAttribute("disabled");
      } else {
        width += speed;
        if (elem) elem.style.width = width + "%";
      }
    }, speed);
  }

  function readBook() {
    timer("readBar", changeInt, "readButton", 1);
  }

  function changeInt() {
    setInt(int + increase);
  }

  function readBetter() {
    timer("multitaskBar", changeIncrease, "multitaskButton", 1);
  }

  function changeIncrease() {
    setIncrease(increase + 1);
    setIntReq(intReq + intReq);
  }

  var button = document.getElementById("multitaskButton");
  if (int >= intReq) {
    if (button) button?.removeAttribute("disabled");
  } else {
    if (button) button?.setAttribute("disabled", "");
  }

  return (
    <div className="container">
      <h1>lil clicker game</h1>
      <div className="flex gap-10">
        <button
          onClick={readBook}
          id="readButton"
          className="p-1 my-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight  disabled:text-themeTertiary disabled:border-themeTertiary"
        >
          <div className="flex">
            <BookOpenIcon
              id="bookIcon"
              className="w-16 m-auto pl-2"
              color="themeHighlight"
              display="none"
            />
            <div className="px-5 py-5">
              <h3>Read Book</h3>
              <p>increases intelligence</p>
            </div>
          </div>
          <div
            id="readBar"
            className="w-full h-2 bg-themeHighlight rounded-sm"
          ></div>
        </button>
        <BasicButton
          func={readBook}
          buttonID="readButton"
          barID="readBar"
          heading="Read Book"
          description="increases intelligence"
          icon={
            <BookOpenIcon
              id="bookIcon"
              className="w-16 m-auto pl-2"
              color="themeHighlight"
              display="none"
            />
          }
        />
        <button
          onClick={readBetter}
          id="multitaskButton"
          className="p-1 my-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight disabled:text-themeTertiary disabled:border-themeTertiary"
        >
          <div className="flex">
            <UsersIcon
              id="bookIcon"
              className="w-16 m-auto pl-2"
              color="themeHighlight"
              display="none"
            />
            <div className="px-5 py-3">
              <h3>Multitask ({intReq} int)</h3>
              <p>Read multiple books at once</p>
            </div>
          </div>
          <div
            id="multitaskBar"
            className="w-full h-5 bg-themeHighlight rounded-sm"
          ></div>
        </button>
        <p>int: {int}</p>
      </div>
    </div>
  );
}
