import styled from "styled-components";

export const CardStyled = styled.div`
    max-width: 500px;
    width: 100%;
    height: 226px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span, p, button, a {
        color: rgba(134, 142, 150, 1);
    }

    a, button {
        cursor: pointer;
    }

    .card--title{
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        color: rgba(248, 249, 250, 1);
    }

    .focus--span{
        display: inline-flex;
        height: 24px;
        padding: 0px 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 4px; 
        background-color:rgba(18, 18, 20, 1) ;
    }

    .buttons--div {
        display: flex;
        align-items: center;
        gap: 26px;
    }
    
    .buttons--div > .anchor {
        padding: 5px;
        display: flex;
        align-items: center;
        text-align: center;
        background:rgba(18, 18, 20, 1);
        text-decoration: none;
    }

    .buttons--div > .anchor > button {
        display: flex;
        align-items: center;
        padding: 5px;
        gap: 3px;
        background-color: transparent;
    }

`