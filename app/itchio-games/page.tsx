export default function main() {
  return (
    <div className="container">
      <h1>Itch.io Games</h1>
      <p className="mb-10">
        I enjoy making games, and so I thought I'd make a page for them to be showcased on. so far I have only got one
        game to the point that I would consider playable, but I have a couple more in progress, so I'll add those here
        aswell once they're closer to completion.
      </p>
      <section>
        <h2> The Lab</h2>
        <div className="">
          <iframe
            className="float-end ml-4 my-2"
            src="https://itch.io/embed/2437120?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636"
            width="552"
            height="167"
          >
            <a href="https://polygons-to-pulsars.itch.io/the-lab">The Lab by polygons-to-pulsars</a>
          </iframe>
          <p>
            The Lab is a little kind of horror / creature collector game, where you explore the outskirts of a facility
            that seems to be being infected by a strange substance. It was made for a secret santa GameJam and is my
            first complete game (however I might still go back and tidy some of it up, there are a lot of little things
            that could be improved that I didn't have time for during the jam).
          </p>
        </div>
      </section>
    </div>
  );
}
