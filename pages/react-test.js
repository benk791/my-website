import LikeButton from './like-button';
import {NavBar, Footer} from "./permenant";
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
        <NavBar />
        <Header />
        <div class="container">
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