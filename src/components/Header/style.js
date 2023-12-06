import styled from "styled-components";

export const StyledHeader = styled.header`
    background: rgba(10, 10, 11, 1);

    .header--container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header--div-name {
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        color: rgba(248, 249, 250, 1);
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
`