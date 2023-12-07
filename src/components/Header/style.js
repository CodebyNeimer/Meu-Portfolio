import styled from "styled-components";

export const StyledHeader = styled.header`
    background: rgba(10, 10, 11, 1);

    .header--container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header--div-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin: 0 auto;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        color: rgba(248, 249, 250, 1);
    }

    .header--div-name > span {
        color: rgba(134, 142, 150, 1);
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }

    .menu-navigation--ul {
        color: rgba(248, 249, 250, 1);
        display: flex;
        gap: 50px;
    }

    .menu-navigation--ul > li {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal; 
    }

    @media (max-width: 400px) {
        .header--div-name > h2 {
            font-size: 28px;
        }
        
        .header--div-name > span {
            font-size: 20px;
        }
    }
`