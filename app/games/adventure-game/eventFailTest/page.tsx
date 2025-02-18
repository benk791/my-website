import Event from "@/app/ui/adventure-game/event";
import Option from "@/app/ui/adventure-game/option";
import { BoltIcon } from "@heroicons/react/16/solid";

function Main() {
  return (
    <div>
      <Event
        image="/adventure-game/fox refrencce.jpg"
        title="Ooof, stats too low"
        content="hopefully this means you didnt have the stats for a previous check"
      />
      <div className="options">
        <Option
          Icon={<BoltIcon />}
          title="Return injured"
          content="since you failed you should have lost health"
          link="/adventure-game"
        />
      </div>
    </div>
  );
}

export default Main;
