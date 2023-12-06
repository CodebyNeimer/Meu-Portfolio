import styled from "styled-components";

export const IntroContainer = styled.div`
    background: rgba(18, 18, 20, 1);

    .container {
        padding: 20px;
        margin: 0 auto;
        max-width: 1440px;
        border: 2px solid red;
        display: flex;
        justify-content: space-between;
    }
    
    .container--left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid green;
    }

    .photo-and-text {
        display: flex;
        align-items: center;
        gap: 20px;
        border: 2px solid red;
    }

    .photo-and-text > span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        color: rgba(233, 236, 239, 1);
    }

    .photo-and-text > img {
        border-radius: 150px;
    }

    .title--section > h1{

        font-size: 38px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
        color: rgba(248, 249, 250, 1);
    }

    .title--section > span {
        color: rgba(134, 142, 150, 1);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }

    .button--section {
        display: flex;
        gap: 16px; 

    }

    .button--section > button {
        display: flex;
        height: 48px;
        padding: 0px 32px;
        justify-content: center;
        align-items: center;
        gap: 10px; 
        background-color: rgba(98, 60, 234, 1);
        color: #FFF;
        border-radius: 8px;
        border: 2px solid rgba(98, 60, 234, 1);
        
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const MainContainer = styled.div`
    background-color:rgba(10, 10, 11, 1);

    .container {
        padding: 20px;
        margin: 0 auto;
        max-width: 1440px;
    }

    .title--div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 3rem;
    }

    .title--div > h3 {
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        color: rgba(248, 249, 250, 1);
    }
    
    .title--div > span {
        color: rgba(134, 142, 150, 1);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
    }

    .strong--span {
        color: rgba(255, 87, 127, 1);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
    }

    .projects--div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 3rem;
    }
`

export const ContactContainer = styled.div`
    border: 1px solid black;
    background-color: rgba(18, 18, 20, 1);

    .container {
        padding: 20px;
        margin: 4rem auto;
        max-width: 1440px;
        display: flex;
        justify-content: space-between;
    }

    .left--container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .left--container > h2{
        max-width: 415px;
        height: auto;
        color: rgba(248, 249, 250, 1);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px
    }

    .left--container > span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        color: rgba(134, 142, 150, 1);
    }
`