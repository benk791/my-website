import {NavBar, Footer} from "./permenant";
import Image from 'next/image'
import Sword from './assets/Sword.gif'
import Bardiche from './assets/Bardiche.gif'
import Character from './assets/Character.gif'
import Mug from './assets/Mug.gif'

export default function main() {
    return (
        <div>
            <NavBar />
            <div class="container">
                <h1>Some 3D models I made</h1>
                <div class="SideBySide">
                    <section class="showcase">
                        <h2>Sword</h2>
                        <Image src={Sword} alt="A low poly Sword" />
                    </section>
                    <section class="showcase">
                        <h2>Bardiche</h2>
                        <Image src={Bardiche} alt="A low poly Bardiche" />
                    </section>
                    <section class="showcase">
                        <h2>Swordfighter</h2>
                        <Image src={Character} alt="A low poly swordfighter" />
                    </section>
                    <section class="showcase">
                        <h2>IAEA Mug</h2>
                        <Image src={Mug} alt="A cool mug I own" />
                    </section>
                </div>
            </div>
            <Footer />
        </div>
      );
}