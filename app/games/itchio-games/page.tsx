export default function main() {
  return (
    <div className="container">
      <h1>Games</h1>
      <p className="mb-10">
        I enjoy making video games, and so I thought I'd make a page for them to
        be showcased on. So far I have got two games to the point that I would
        consider playable (but by no means perfect), but I have a couple more in
        progress, so I'll add those here aswell once they're closer to
        completion.
      </p>
      <section className="border-t-2">
        <h2 className="text-right py-2">The Lab</h2>
        <div className="flex">
          <div className="">
            <iframe
              className="float-end ml-2"
              src="https://itch.io/embed/2437120?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636"
              width="208"
              height="167"
            >
              <a href="https://polygons-to-pulsars.itch.io/the-lab">
                The Lab by polygons-to-pulsars
              </a>
            </iframe>
            <p>
              The Lab is a little kind of horror / creature collector game,
              where you explore the outskirts of a facility that seems to be
              being infected by a strange substance. It was made for a secret
              santa GameJam and is my first complete game (however I might still
              go back and tidy some of it up, there are a lot of little things
              that could be improved that I didn't have time for during the
              jam).
            </p>
          </div>
        </div>
      </section>
      <section className="border-t-2">
        <h2 className="py-2">GREAT WYRM</h2>
        <div className="flex">
          <div className="">
            <iframe
              className="float-start mr-4"
              src="https://itch.io/embed/3332294?dark=true"
              width="208"
              height="167"
            >
              <a href="https://polygons-to-pulsars.itch.io/great-wyrm">
                GREAT WYRM by polygons-to-pulsars
              </a>
            </iframe>
            <p>
              GREAT WYRM is another GameJam game, made for Mini Jam 178:
              Monsters. You play as a cultist trying to prove yourself the most
              worthy sacrifice, fighting through waves of other contenders. (the
              jam version is lacking in polish, and the UI elements don't work
              quite as intended, however I might come back and fix some of these
              bits up at some point).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
