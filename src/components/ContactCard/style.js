import styled from "styled-components";

export const StyledContactCard = styled.div`
    max-width: 445px;
    width: 100%;

    display: flex;
    gap: 50px;

    a, button {
        cursor: pointer;
    }

    .img--container {
        max-height: 68px;
        max-width: 68px;
        width: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content--container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .content--container > h4 {
        color:rgba(248, 249, 250, 1);
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
    }

    .content--container > span {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: rgba(134, 142, 150, 1);
    }

    .content--container > a {
        background-color: transparent;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: rgba(248, 249, 250, 1);
    }

    .content--container > a > button {
        background-color: transparent;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: rgba(248, 249, 250, 1);
    }
` 