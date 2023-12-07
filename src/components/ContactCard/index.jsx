import { StyledContactCard } from "./style"

export const ContactCard = (props) => {
    return (
        <>
        <StyledContactCard>
            <div style={props.divStyle} className="img--container">
                <a href={props.link}><img src={props.src}/></a>
            </div>
            <div className="content--container">
                <h4>{props.title}</h4>
                <span>{props.description}</span>
                <a href={props.linkTo}><button>{props.buttonTitle}</button></a>
            </div>
        </StyledContactCard>
        </>
    )

}