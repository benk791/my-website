import {NavBar, Footer} from "./permenant";
import Image from "next/image";
import profilePic from "./assets/me.jpg"

export default function main() {
    return (
        <div>
            <NavBar />
            <div class="container">
            <h1>What's up with this website</h1>
                <div class="SideBySide">
                    <Image id="pfp" src ={profilePic} alt = "A cute Picrew I made" objectFit="contain"/>
                    <section>
                        <h2>Overview type thing</h2>
                        <p>
                            What's up gang, this is a little website to try out some coding projects in HTML, 
                            and at some point it'll hopefully have python and godot projects linked aswell, but 
                            we'll see if I get round to that. So far theres a demo website made duing a HTML 
                            course with a recipe for tea on it, that at some point I'll change to have  more 
                            recipes, and maybe a more exciting layout. There's also a little collection of 3D models 
                            I've made, and a to do list for future expansions to the website
                        </p>
                        <p>
                            the url is borrowed from my dad, so don't look too hard at the base website, it's 
                            got nothing to do with me. the "/ben" is all you need. At some point I'll hopefuly 
                            get my own domain name, then we'll be set, but for now I'm just hijacking my dad.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
      );
}