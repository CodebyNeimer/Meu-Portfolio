import { CardStyled } from "./style"

export const Card = (props) => {
    return (
        <>
            <CardStyled>
                <h4 className="card--title">{props.title}</h4>
                <span>Linguagem: <span className="focus--span">{props.language}</span></span>
                <p>{props.description}</p>
                <div className="buttons--div">
                    <a className="anchor" target="_blank" href={props.linkGit}><button><img src="./src/assets/github.png"/> Github Code</button></a>
                    <a className="anchor" target="_blank" href={props.linkShare}><button><img src="./src/assets/share.png"/> Aplicação</button></a>
                </div>
            </CardStyled>    
        </>
    )
}