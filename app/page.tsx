import Image from "next/image";

export default function main() {
  return (
    <div className="container">
      <h1>What's up with this website</h1>
      <div className="SideBySide">
        <Image src="/Me.png" width={600} height={600} alt="A cute Picrew I made" objectFit="contain" />
        <section>
          <h2>Overview type thing</h2>
          <p>
            What's up, this is a little website to try out some coding projects in{" "}
            <a className="underline decoration-2 decoration-themeSecondary">HTML</a> (using a combination of{" "}
            <a className="underline decoration-2 decoration-themeSecondary">Tailwind</a> and{" "}
            <a className="underline decoration-2 decoration-themeSecondary">CSS</a> for styling), and at some point
            it'll hopefully have <a className="underline decoration-2 decoration-themeSecondary">Python</a> projects
            linked aswell, but we'll see if I get round to that. So far theres a test page for trying our{" "}
            <a className="underline decoration-2 decoration-themeSecondary">React</a>, and{" "}
            <a className="underline decoration-2 decoration-themeSecondary">Next.js</a> stuff (from the next.js.org
            tutorials and then some <a className="underline decoration-2 decoration-themeSecondary">Javascript</a> game
            testing aswell) There's also a little collection of 3D models I've made in{" "}
            <a className="underline decoration-2 decoration-themeSecondary">Blender</a>, and a to do list for future
            expansions to the website (with a link to an in progress text based adventure game type thing (though it's
            very in progress)). I've also added a page to show off some{" "}
            <a className="underline decoration-2 decoration-themeSecondary">Godot</a> projects, although there's only
            one at the moment. At some point I might also add some recipes, since I created a basic recipe for a code
            institue coding challenge that would be good to show as a start point.
          </p>
        </section>
      </div>
    </div>
  );
}
