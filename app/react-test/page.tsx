"use client";

import LikeButton from "../ui/like-button";
import Footer from "../ui/footer";
import { useState } from "react";

function Header({ title }: { title: string }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [game, setGame] = useState<"space" | "spark">("space");

  function SpaceInvaders() {
    setGame("space");
    console.log("space");
  }
  function Spark() {
    setGame("spark");
    console.log("spark");
  }

  return (
    <div>
      <Header title="testing" />
      <div className="container">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <section>
            <p>
              This page is a bit messy, you might need to reload the page to get the game to show up <br />
              <br />
              (controls are left and right arrow keys and F) <br />
              <br />
              the menu bar not currently functional
            </p>
            <h2>Menu bar shenanigans</h2>
            <ul>
              <li>
                <button
                  onClick={SpaceInvaders}
                  className="p-1 my-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight"
                >
                  Space Invaders
                </button>
              </li>
              <li>
                <button
                  onClick={Spark}
                  className="p-1 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight"
                >
                  Sparks
                </button>
              </li>
            </ul>
          </section>
          <div style={{ visibility: game === "space" ? "visible" : "hidden" }}>
            <canvas id="screen" width="500" height="300" />
            <script id="gameScript" src="Space Invader.js" async />
          </div>
        </div>
        <section>
          <h2>React Tests</h2>
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
        <section>
          <p>Then we can throw in some likes for fun</p>
          <LikeButton />
        </section>
      </div>
      <Footer />
    </div>
  );
}
