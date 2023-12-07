import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { IntroContainer, MainContainer, ContactContainer } from "./style"
import { ContactCard } from "../../components/ContactCard"
import { Footer } from "../../components/Footer"

export const LandingPage = () => {
    return (
        <>
            <Header/>
            <IntroContainer>
                <div className="container">
                    <div className="container--left">
                        <div className="photo-and-text">
                            <img src="./src/assets/portrait.png" width="56px" height="56px"/>
                            <span> Olá, Bem-vindo ao meu Portfolio, aqui está um pouco sobre mim! </span>
                        </div>
                        <div className="title--section">
                            <h1>Da Curiosidade à Maestria: Minha Jornada Infinita na Programação</h1>
                            <span>Desde os meus primeiros passos no vasto universo da programação, percebi que minha jornada seria moldada por uma curiosidade insaciável.
                                Cada linha de código, cada desafio, é uma porta que se abre para um novo domínio a ser explorado. 
                                A curiosidade é minha bússola, guiando-me através dos caminhos do desenvolvimento e transformando cada problema em uma oportunidade de aprendizado.
                                Minha determinação não conhece limites quando se trata de avançar. Cada barreira, cada obstáculo, é visto como uma oportunidade de fortalecimento.
                                Não me contento com pouco, busco constantemente ir além, transformando contratempos em trampolins para novas conquistas. 
                                A resiliência é minha aliada na jornada de construir soluções e superar expectativas.
                                Em resumo, minha história na programação é uma trilha única, entrelaçada pela curiosidade que me guia, pela determinação que me impulsiona e pelo constante crescimento que caracteriza minha jornada.
                                </span>
                        </div>
                        <div className="button--section">
                            <a href="https://github.com/CodebyNeimer" target="__blank"><button>Github</button></a>
                            <img src="./src/assets/Bt-Circle.png" width="48px" height="48px"/>
                        </div>
                        <div className="tech--icons">
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
                            title="Kenzie Jobs"
                            language="JavaScript"
                            description="O projeto foi desenvolvido em 5 pessoas. Ele se baseia na criação de uma plataforma para gerenciar suas candidaturas e contratar um profissional capacitado para sua área."
                            linkGit="https://github.com/rcoelhomf/Kenzie-Jobs-T17-tsunode"
                            linkShare="https://kenzie-jobs-t17-tsunode.vercel.app/admin/applications"
                        />
                        <Card 
                            title="Kenzie HUB"
                            language="JavaScript"
                            description="O projeto Kenzie HUB foi desenvolvido para que estudantes conseguissem acompanhar sua evolução em seus estudos, podendo adicionar tecnologias as quais você está estudando ou já domina."
                            linkGit="https://github.com/Kenzie-Academy-Brasil-Developers/-Kenzie-Academy-Brasil-Developers-react-entrega-kenzie-hub-Neimer"
                            linkShare="https://kenzie-academy-brasil-developers-react-entrega-ken-codebyneimer.vercel.app/"
                        />
                        <Card 
                            title="Hamburgueria Kenzie"
                            language="JavaScript"
                            description="O projeto Hamburgueria Kenzie foi desenvolvido para demonstrar o uso das tecnologias para criação de um e-commerce focado em entrega de comida."
                            linkGit="https://github.com/Kenzie-Academy-Brasil-Developers/-Kenzie-Academy-Brasil-Developers-react-entrega-s3-template-hamburgueria-Neimer"
                            linkShare="https://kenzie-academy-brasil-developers-react-entrega-s3-codebyneimer.vercel.app/"
                        />
                        <Card 
                            title="Nu Kenzie"
                            language="JavaScript"
                            description="Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório..."
                            linkGit="https://github.com/Kenzie-Academy-Brasil-Developers/-Kenzie-Academy-Brasil-Developers-react-entrega-s1-template-nu-kenzie-Neimer"
                            linkShare="https://kenzie-academy-brasil-developers-react-entrega-s1-codebyneimer.vercel.app/"
                        />
                    </div>
                </div>
            </MainContainer>
            <ContactContainer>
                <div className="container">
                    <div className="left--container">
                        <h2>Em Busca do Conhecimento Infinito: Uma Jornada de Curiosidade e Aperfeiçoamento como Programador</h2>
                        <span>A vontade de melhorar como programador não é apenas uma aspiração, mas uma paixão que permeia cada projeto que abraço. A cada desafio enfrentado, sinto-me impelido a aprimorar minhas habilidades, a entender não apenas o "como" de um código, mas também o "porquê". Essa busca constante pelo entendimento profundo não apenas me torna um desenvolvedor mais competente, mas também enriquece minha conexão com a arte da programação.</span>
                    </div>
                    <div className="right--container">
                        <ContactCard
                            divStyle={{background: "linear-gradient(180deg, #50C571 0%, #50CF9A 100%)"}}
                            link="https://wa.me/5511992395941"
                            src="./src/assets/whatsBtn.png"
                            title="Meu Telefone"
                            description="Estou disponivel para conversarmos!"
                            linkTo="https://wa.me/5511992395941"
                            buttonTitle="Me chame agora"
                        />
                        <ContactCard
                            divStyle={{background: "linear-gradient(180deg, #BD3B9B 0%, #EE5BC7 100%)"}}
                            link="mailto:neimer.hamad@gmail.com"
                            src="./src/assets/mailBtn.png"
                            title="Meu Email"
                            description="Me envie um email para conversarmos!"
                            linkTo="mailto:neimer.hamad@gmail.com"
                            buttonTitle="Me envie um Email"
                        />
                        <ContactCard
                            divStyle={{background: "linear-gradient(180deg, #4E73FF 0%, #506CCF 100%)"}}
                            link="https://www.linkedin.com/in/neimer-hamad/"
                            src="./src/assets/linkedinBtn.png"
                            title="Meu Linkedin"
                            description="Conecte-se comigo no linkedin para conversarmos!"
                            linkTo="https://www.linkedin.com/in/neimer-hamad/"
                            buttonTitle="Conecte-se Comigo"
                        />
                    </div>
                </div>
            </ContactContainer>
            <Footer/>
        </>        
    )
}