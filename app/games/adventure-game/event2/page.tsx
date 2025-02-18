import Event from "@/app/ui/adventure-game/event";
import Option from "@/app/ui/adventure-game/option";
import { ScaleIcon } from "@heroicons/react/16/solid";

function Main() {
  return (
    <div>
      <Event
        image="/adventure-game/sanke refrence.jpg"
        title="Funky snake"
        content="guess what gang, it's another snake"
      />
      <div className="options">
        <Option
          Icon={<ScaleIcon style={{ color: "blue" }} />}
          title="Return changed"
          content="at some point this option will change a stat, but it just takes you back for now"
          link="/adventure-game"
        />
      </div>
    </div>
  );
}

export default Main;
