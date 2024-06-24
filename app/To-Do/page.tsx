import Link from "next/link";

export default function main() {
  return (
    <div className="container">
      <h1> To Do List</h1>
      <section>
        <h2>Stuff to do on the website</h2>
        <ul className="list-disc">
          <li>Reformat header to look nicer</li>
          <li>Find a better colour pallette (maybe, this one is growing on me)</li>
          <li>Make header have dropdowns / scale to mobile / something like that</li>
          <li>Add more react and next.js tests</li>
          <li>Remake and reimport the earlier 3D model gifs, without the strage shading/conversion artifacts</li>
          <li>Fix canvas code switch in react tests</li>
          <li>Maybe add / sort out a server for some of this stuff</li>
        </ul>
      </section>
      <section>
        <h2>Stuff to add to the website</h2>
        <ul className="list-disc">
          <li>Python Pong Game</li>
          <li>Failed fluid simulation</li>
          <li>links to itch.io projects</li>
          <li>Maybe drawing progress, if I ever do enough to make it worth it</li>
          <li>
            Add recipes backs, and like a content page type thing (maybe even a fun recipe book situation if I can work
            that out)
          </li>
          <li>
            Fallen london / a dark room style game thing{" "}
            <Link href="/adventure-game" className="MidTextLink">
              {" "}
              (being tested here)
            </Link>
            <ul className="list-disc list-inside">
              <li>Improve option.tsx code (feels very inefficient at the moment)</li>
              <li>Add ways to change stats</li>
              <li>Add inventory and ways to find items</li>
              <li>Add more events and story (big task)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
