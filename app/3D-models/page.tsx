import Image from 'next/image'

// good site for gif converting https://ezgif.com/video-to-gif

export default function main() {
    return (
        <div className="container">
            <h1>Some 3D models I made</h1>
            <div className="SideBySide">
                <section className="showcase">
                    <h2>Sword</h2>
                    <Image 
                        src="/Sword.gif"
                        width={1920}
                        height={1080}
                        alt="A low poly Sword"
                    />
                </section>
                <section className="showcase">
                    <h2>Bardiche</h2>
                    <Image
                        src="/Bardiche.gif"
                        width={1920}
                        height={1080}
                        alt="A low poly Bardiche"
                    />
                </section>
                <section className="showcase">
                    <h2>Swordfighter</h2>
                    <Image
                        src="/Character.gif"
                        width={1920}
                        height={1080}
                        alt="A low poly swordfighter"
                    />
                </section>
                <section className="showcase">
                    <h2>IAEA Mug</h2>
                    <Image
                        src="/Mug.gif"
                        width={1920}
                        height={1080}
                        alt="A cool mug I own"
                    />
                </section>
                <section className="showcase">
                    <h2>Palm House</h2>
                    <Image
                        src="/PalmHouse.gif"
                        width={600}
                        height={338}
                        alt="Kew gardens Palm House"
                    />
                </section>
            </div>
        </div>
    );
}