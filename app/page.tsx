import Image from "next/image"

export default function main() {
    return (
        <div className="container">
            <h1>What's up with this website</h1>
            <div className="SideBySide">
                <Image
                    src="/Me.jpg"
                    width={600}
                    height={600}
                    alt="A cute Picrew I made"
                    objectFit="contain"
                />
                <section>
                    <h2>Overview type thing</h2>
                    <p>
                        What's up, this is a little website to try out some coding projects in HTML,
                        and at some point it'll hopefully have python and godot projects linked aswell, but
                        we'll see if I get round to that. So far theres a test page for trying our react, and
                        node js stuff (from the next.js.org tutorials and then some javascript game testing aswell)
                        There's also a little collection of 3D models I've made, and a to do list for future expansions
                        to the website. At some point I might also add some recipes, since I created a basic recipe for a code
                        institue coding challenge that would be good to show as a start point.
                    </p>
                </section>
            </div>
        </div>
    )
}