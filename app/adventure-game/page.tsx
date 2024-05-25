import Event from "@/app/ui/adventure-game/event"
import Option from "@/app/ui/adventure-game/option"
import { BoltIcon, ScaleIcon } from "@heroicons/react/16/solid"

function Main() {
    return(
        <div>
            <Event
                image = "/adventure-game/sanke refrence.jpg"
                title = "Funky snake"
                content = "This is actually a sick drawing of a snake"
            />
            <div className="options">
                <Option
                    Icon = { ScaleIcon }
                    title = "Try this"
                    content = "it looks like a fun option here"
                    link = "/adventure-game/event2"
                />
                <Option
                    Icon = { BoltIcon }
                    title = "or try this"
                    content = "what could this possibly do"
                    link = "/adventure-game/event3"
                />
            </div>
        </div>
    )
}

export default Main