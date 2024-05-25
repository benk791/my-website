import Image from "next/image"

export default function Event({ image, title, content}: {image: string; title: string; content: string}) {
    return(
        <section className="eventpanel">
            <div>
                <Image 
                    src={image}
                    width={500}
                    height={500}
                    alt="test image"
                />
            </div>
            <div>
                <h2>{ title }</h2>
                <p>{ content }</p>
            </div>
        </section>
    )
}