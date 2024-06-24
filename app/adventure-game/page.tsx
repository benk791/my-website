"use client";

import Event from "@/app/ui/adventure-game/event";
import Option from "@/app/ui/adventure-game/option";
import { BoltIcon, ScaleIcon } from "@heroicons/react/16/solid";
import { Stats } from "@/public/adventure-game/Global variables";
import { useEffect } from "react";

const initialHealth = { name: "Health", value: 10, color: "red" };
const initialStrength = { name: "Strength", value: 4, color: "green" };
const initialIntelligence = { name: "Intelligence", value: 4, color: "blue" };

function Main() {
  var link2 =
    parseInt(Stats[1][1]) >= 5
      ? "/adventure-game/event3"
      : "/adventure-game/eventFailTest";

  useEffect(() => {
    const health = localStorage.getItem("health");
    const strength = localStorage.getItem("strength");
    const intelligence = localStorage.getItem("intelligence");
    if (!health) {
      localStorage.setItem("health", JSON.stringify(initialHealth));
    }
    if (!strength) {
      localStorage.setItem("strength", JSON.stringify(initialStrength));
    }
    if (!intelligence) {
      localStorage.setItem("intelligence", JSON.stringify(initialIntelligence));
    }
  }, []);

  return (
    <div>
      <Event
        image="/adventure-game/sanke refrence.jpg"
        title="Funky snake"
        content="This is actually a sick drawing of a snake"
      />
      <div className="options">
        <Option
          Icon={<ScaleIcon />}
          title="Try this"
          content="it looks like a fun option here"
          link="/adventure-game/event2"
        />
        <Option
          Icon={<BoltIcon />}
          title="or try this"
          content="with a little stat check for fun"
          check={[1, 5]}
          link={link2}
        />
      </div>
    </div>
  );
}

export default Main;
