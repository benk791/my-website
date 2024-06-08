'use client';

import LikeButton from '../ui/like-button';
import Footer from "../ui/footer"
 
function Header({ title }: {title: string}) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  /*
  function SpaceInvaders() {
    document.getElementById("gameScript")!.setAttribute( 'src', "Space Invader.js" )
    console.log("space")
  }
  function Spark() {
    document.getElementById("gameScript")!.setAttribute( 'src', "Sparks.js" )
    console.log("spark")
  }
    */

  return (
    <div>
        <Header title="testing" />
        <div className="container">
        <div className='screenSelection'>
          <section>
            <p>you need to reload the ge to get the game to show up <br />
            (controls are left and right arrow keys, and f to fire) <br />
            menu bar not currently functional</p>
            <h2>Menu bar shenanigans</h2>
            <ul>
              <li><button>Space Invader</button></li> {
              //onClick={SpaceInvaders}
              }
              <li><button>sparks</button></li> {
              //onClick={Spark}
              }
            </ul>
          </section>
          <canvas id="screen" width="500" height="300"/>
            <script id="gameScript" src="Space Invader.js" async/>
        </div>
          <section>
            <h2>React Tests</h2>
            <ul>
              {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
            </ul>
          </section>
          <section>
          <p>Then we can throw in some likes for fun</p>
          <LikeButton />
          </section>
        </div>
        <Footer />
    </div>
  );
}