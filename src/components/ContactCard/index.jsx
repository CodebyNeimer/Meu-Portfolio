import { StyledContactCard } from "./style"

export const ContactCard = (props) => {
    return (
        <>
        <StyledContactCard>
            <div className="img--container">
                <a href={props.link}><img src={props.src}/></a>
            </div>
            <div className="content--container">
                <h4>{props.title}</h4>
                <span>{props.description}</span>
                <a href={props.linkTo}><button style={props.buttonStyle}>{props.buttonTitle}</button></a>
            </div>
        </StyledContactCard>
        </>
    )

}