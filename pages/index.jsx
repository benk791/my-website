import NavBar from "./header"
import Footer from "./footer"
import Image from "next/image"
import profilePic from "./assets/Me.jpg"
import Link from "next/link"

export default function main() {
    return (
        <div>
            <NavBar />
            <div class="container">
                <h1>What's up with this website</h1>
                <div class="SideBySide">
                    <Image id="pfp" src={profilePic} alt="A cute Picrew I made" objectFit="contain" />
                    <section>
                        <h2>Overview type thing</h2>
                        <p>
                            What's up gang, this is a little website to try out some coding projects in HTML,
                            and at some point it'll hopefully have python and godot projects linked aswell, but
                            we'll see if I get round to that. So far theres a test page for trying our react, and
                            node js stuff (from the node.js tutorials at the moment) There's also a little
                            collection of 3D models I've made, and a to do list for future expansions to the website.
                            At some point I might also add some recipes, since I created a recipe for a code institue
                            coding challenge that would be good to showcase.
                        </p>
                        <p>
                            Also, I've redeployed this website at <Link href="bkral.vercel.app" style={{color:"#F4F1BB", marginRight:0,}}>bkral.vercel.app </Link> 
                        since it run faster and is easier to deploy to from github. So any new improvements and changes
                        should hopefully happen there.
                        </p>
                    </section>
                </div>
        </div>
        <Footer />
    </div>
    )
}