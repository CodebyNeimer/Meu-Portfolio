import { StyledFooter } from "./style"

export const Footer = () => {
    return (
        <>
        <StyledFooter>
            <div className="container">
                <div className="left--container">
                   <div className="img--container">
                        <img src="./src/assets/portrait.png" width="56px" height="56px"/>
                    </div>
                    <div className="text--container">
                        <h3>Obriado por chegar até aqui</h3>
                        <span>Me siga nas redes Sociais para conversarmos</span>
                    </div> 
                </div>
                <div className="right--container">
                    <div className="icons--container">
                        <a href="https://github.com/CodebyNeimer" target="__blank"><img src="./src/assets/icons8-github-64.png" alt="Icone do GitHub para acesso ao meu Github" /></a>
                        <a href="https://www.linkedin.com/in/neimer-hamad/" target="__blank"><img src="./src/assets/icons8-linkedin-64.png" alt="Icone do Linkedin para acesso ao meu Linkedin" /></a>
                        <a href="mailto:neimer.hamad@gmail.com" target="__blank"><img src="./src/assets/icons8-mail-64.png" alt="Icone do Email para acesso ao meu Email" /></a>
                    </div>
                </div>
            </div>
        </StyledFooter>
        </>
    )
}