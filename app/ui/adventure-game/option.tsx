import Link from "next/link"

export default function Option({ Icon, title, content, link}: {Icon: React.ElementType; title: string; content: string; link:string}) {
    return(
        <section className="optionpanel">
            {<Icon />}
            <div>
                <h2>{ title }</h2>
                <p>{ content }</p>
            </div>
            <Link href={ link } className="button">Go</Link>
        </section>
    )
}