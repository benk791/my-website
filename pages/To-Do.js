import {NavBar, Footer} from "./header";

export default function main() {
    return (
        <div>
            <NavBar />
            <div class="container">
                <h1> To Do List</h1>
                <section>
                    <h2>Stuff to do on the website</h2>
                    <ul>
                        <li>Reformat header to look nicer</li>
                        <li>Find a better colour pallette (maybe)</li>
                        <li>Make header have dropdowns / scale to mobile / something like that</li>
                        <li>Change the recipe to somwthing actually useful</li>
                    </ul>
                </section>
                <section>
                    <h2>Stuff to add to the website</h2>
                    <ul>
                        <li>Python Pong Game</li>
                        <li>Failed fluid simulation</li>
                        <li>links to itch.io projects</li>
                        <li>Maybe drawing progress, if I ever do enough to make it worth it</li>
                        <li>More recipes, and like a content page type thing (maybe even a fun recipe book situation if I can work that out)</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
      );
}