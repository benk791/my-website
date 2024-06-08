import Link from "next/link"

export default function main() {
    return (
        <div className="container">
            <h1> To Do List</h1>
            <section>
                <h2>Stuff to do on the website</h2>
                 <ul>
                    <li>Reformat header to look nicer</li>
                    <li>Find a better colour pallette (maybe, this one is growing on me)</li>
                    <li>Make header have dropdowns / scale to mobile / something like that</li>
                    <li>Add more react and next.js tests</li>
                    <li>Remake and reimport the earlier 3D model gifs, without the strage shading/conversion artifacts</li>
                    <li>fix canvas code switch in react tests</li>
                </ul>
            </section>
            <section>
                <h2>Stuff to add to the website</h2>
                <ul>
                    <li>Python Pong Game</li>
                    <li>Failed fluid simulation</li>
                    <li>links to itch.io projects</li>
                    <li>Maybe drawing progress, if I ever do enough to make it worth it</li>
                    <li>add recipes backs, and like a content page type thing (maybe even a fun recipe book situation if I can work that out)</li>
                    <li>fallen london / a dark room style game thing <Link href="/adventure-game" className="MidTextLink"> (being tested here)</Link>
                        <ul>
                            <li>improve option.tsx code (feels very inefficient at the moment)</li>
                            <li>add ways to change stats</li>
                            <li>add inventory and ways to find items</li>
                            <li>add more events and story (big task)</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
      )
}