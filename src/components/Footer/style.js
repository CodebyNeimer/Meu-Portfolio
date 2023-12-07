import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: rgba(10, 10, 11, 1);

    .container {
        padding: 50px;
        margin: 0 auto;
        max-width: 1440px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .left--container {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .img--container > img {
        border-radius: 128px;
    }

    .text--container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .text--container > h3 {
        color: rgba(248, 249, 250, 1);
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
    }

    .text--container > span {
        color: rgba(134, 142, 150, 1);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .icons--container {
        display: flex;
        gap: 30px;
    }

    @media (max-width: 717px){
        .container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .left--container {
            flex-direction: column;
        }
    }
`