import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <div className="header--container">
                <div className="header--div-name">
                    <h2>Neimer Hamad Helal Jr</h2>
                    <span>Front-End Developer</span>
                </div>
                {/* <div className="header--ul-menu">
                    <ul className="menu-navigation--ul">
                        <li>Sobre Mim</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </div> */}
            </div>
        </StyledHeader>
    )
}