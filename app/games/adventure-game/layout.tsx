"use client";

import LikeButton from "../ui/like-button";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  //  const localHealth = JSON.parse(localStorage.getItem("health") ?? "{}");
  //  const localStrength = JSON.parse(localStorage.getItem("strength") ?? "{}");
  //  const localIntelligence = JSON.parse(localStorage.getItem("intelligence") ?? "{}");

  //  const stats = [localHealth, localStrength, localIntelligence];
  var stats = [
    ["Health", "10", "color: red;"],
    ["Strength", "5", "color: green;"],
    ["Intelligence", "5", "color: blue;"],
  ];

  return (
    <div className="grid grid-cols-5">
      <div className="p-5">
        <h3 className="text-themeSecondary text-xl font-bold py-1">Stats</h3>
        <p>theres gonna be a bunch of stats and stuff here, maybe like a character bio or something aswell</p>
        <ul className="margintop-50">
          {stats.map((stat) => (
            <li key={stat[0]}>
              {stat[0]} : {stat[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3">{children}</div>
      <div className="p-5">
        <p>
          I dont really know what goes here, maybe navigation, or more stats, we'll work something out, in the meantime
          have a like button:
        </p>
        <LikeButton />
        <p>
          actually I think an inventory type thing might be good here, I'll need to work out how to do global variables
          like in Godot though
        </p>
      </div>
    </div>
  );
}
