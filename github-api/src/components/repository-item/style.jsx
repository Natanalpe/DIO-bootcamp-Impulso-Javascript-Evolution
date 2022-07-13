import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #d1d1d1;
    color: #26273b;
    margin: 15px 10px;
    border-radius: 10px;
    padding: 30px;
    min-width: 25%;
    max-width: 25%;
    min-height: 200px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    overflow: hidden;
    text-align: center;
    
    .repo-link-name {
        text-decoration: none;
        color: #32367c;
    }

    .link-btn {
        border-radius: 50px;
        max-width: 55px;
        min-width: 55px;
        height: 55px;
        border: none;
        background: #E52B50;
        position: absolute;
        margin-bottom: -255px;
        transition: .3s;
        align-items: center;
        overflow: hidden;


        :hover {
            transform: scale(1.1);
            background: #f14265;
        }
        :hover img {

            animation: animArrow 1s;
        }

    }

    .link-btn img {
        width: 36px;
        margin: 8px 1px;
        height: 36px;
    }


    @keyframes animArrow {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: 100px;
        }
    }

`