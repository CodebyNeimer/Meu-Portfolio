import { CardStyled } from "./style"
import GithubImg from "../../assets/github.png"
import ShareImg from "../../assets/share.png"

export const Card = (props) => {
    return (
        <>
            <CardStyled>
                <h4 className="card--title">{props.title}</h4>
                <span>Linguagem: <span className="focus--span">{props.language}</span></span>
                <p>{props.description}</p>
                <div className="buttons--div">
                    <a className="anchor" target="_blank" href={props.linkGit}><button><img src={GithubImg}/> Github Code</button></a>
                    <a className="anchor" target="_blank" href={props.linkShare}><button><img src={ShareImg}/> Aplicação</button></a>
                </div>
            </CardStyled>    
        </>
    )
}