import "@/app/ui/adventure-game/adventure.css"
import LikeButton from "../ui/like-button"
import { Stats } from  "@/public/adventure-game/Global variables"

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="MainColumns">
            <div>
                <h3>Stats</h3>
                <p>theres gonna be a bunch of stats and stuff here, maybe like a character bio or something aswell</p>
                <ul>
                    {Stats.map((stats) => (
                    <li key={stats[0]}> {stats[0]} : {stats[1]} </li>
                    ))}
                </ul>
            </div>
            {children}
            <div>
                <p>
                    I dont really know what goes here, maybe navigation, or more stats, we'll work something out,
                    in the meantime have a like button:
                </p>
                <LikeButton />
                <p>
                    actually I think an inventory type thing might be good here, I'll need to work out how to do
                    global variables like in Godot though
                </p>
            </div>
        </div>
    )
}