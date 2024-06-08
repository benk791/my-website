import Link from "next/link"
import { Stats } from "@/public/adventure-game/Global variables"

export default function Option({Icon, title, content, link, check} :  {Icon: React.ElementType, title: string, content: string, link:string, check?: number[]}) {
    if (typeof check !== 'undefined')
    return(
        <section className="optionpanel">
            {<Icon />}
            <div id  ="optionBody">
                <h2>{ title }</h2>
                <p>{ content }</p>
                <p><br />{ Stats[check[0]][0] }: { Stats[check[0]][1] }/{ check[1] }</p>
            </div>
            <div className ="SideBySide">
                <Link href={ link } className="button">Go</Link>
            </div>
        </section>
    ); else
    return(
        <section className="optionpanel">
            {<Icon />}
            <div id  ="optionBody">
                <h2>{ title }</h2>
                <p>{ content }</p>
            </div>
            <Link href={ link } className="button">Go</Link>
        </section>
    )
}