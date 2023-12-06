import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { IntroContainer, MainContainer, ContactContainer } from "./style"
import { ContactCard } from "../../components/ContactCard"

export const LandingPage = () => {
    return (
        <>
            <Header/>
            <IntroContainer>
                <div className="container">
                    <div className="container--left">
                        <div className="photo-and-text">
                            <img src="./src/assets/nei-photo.jpeg" width="56px" height="56px"/>
                            <span> Olá, meu nome é Neimer </span>
                        </div>
                        <div className="title--section">
                            <h1>I Love creating and developing projects</h1>
                            <span>Discover Here in this enviroment,created especially for you, all my projects and technologies</span>
                        </div>
                        <div className="button--section">
                            <button>Github</button>
                            <img src="./src/assets/Bt-Circle.png" width="48px" height="48px"/>
                        </div>
                        <div>
                            <img src="./src/assets/tecnologias.png"/>
                        </div>
                    </div>
                    <div className="container--right">
                        <img src="./src/assets/banner-landingpage.png"/>
                    </div>
                </div>
            </IntroContainer>
            <MainContainer>
                <div className="container">
                    <div className="title--div">
                        <h3>Meus Projetos</h3>
                        <span>Projetos criados em <span className="strong--span">Kenzie Academy</span></span>
                    </div>
                    <div className="projects--div">
                        <Card 
                            title="QuickStart"
                            language="JavaScript"
                            description="Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório..."
                            linkGit="https://github.com/"
                            linkShare="www.google.com"
                        />
                        <Card 
                            title="QuickStart"
                            language="JavaScript"
                            description="Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório..."
                            linkGit="www.github.com"
                            linkShare="www.google.com"
                        />
                        <Card 
                            title="QuickStart"
                            language="JavaScript"
                            description="Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório..."
                            linkGit="www.github.com"
                            linkShare="www.google.com"
                        />
                        <Card 
                            title="QuickStart"
                            language="JavaScript"
                            description="Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório..."
                            linkGit="www.github.com"
                            linkShare="www.google.com"
                        />
                    </div>
                </div>
            </MainContainer>
            <ContactContainer>
                <div className="container">
                    <div className="left--container">
                        <h2>Let's set up a conversation and develop our creativity together?</h2>
                        <span>Advertise your brand organically within Dribbble’s design inspiration feed.</span>
                    </div>
                    <div className="right--container">
                        <ContactCard
                            link="www.github.com"
                            src="./src/assets/whatsBtn.png"
                            title="Meu Telefone"
                            description="I'm avaible for a voice chat, lets about creativity togheter?"
                            linkTo="www.github.com"
                            buttonTitle="Call Now"
                        />
                    </div>
                </div>
            </ContactContainer>
        </>        
    )
}