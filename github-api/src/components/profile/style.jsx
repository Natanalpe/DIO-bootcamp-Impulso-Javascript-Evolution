import styled from "styled-components";

export const Wrapper = styled.div`    
    
    margin-left: 50vw;
    transform: translateX(-50%);
    margin-top: 5vh;
    display: grid;
    grid-template-columns: 18rem 18rem;
    grid-template-rows: 6rem 6rem 5rem;
    grid-template-areas: 
        'avatar nickname'
        'avatar perfilInfo'
        'avatar accessPerfil';
    background-color: #d1d1d1;
    
    align-items: center;
    height: 17rem;
    width: 36rem;
    place-items: center;
    box-shadow: 1.5px 3px 13px #111111;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 10px 0 0 10px;
    * {
        color: #242449;
    }

    img {
        grid-area: avatar;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .3s;

        &:hover {
            transform: scale(1.05)
        }
    }

    .names {
        grid-area: nickname;
        line-height: 2px;

        h1 {
            font-weight: 400;
        }

        span a {
            font-weight: 200;
            text-decoration: none;
            margin-left: 25%;
        }

        * {
            text-align: center;
        }
    }

    .follow {
        grid-area: perfilInfo;
        text-align: center;
        line-height: 4px;
        justify-content: center;
        display: flex;
        align-items: center;

        h4 {
            font-weight: 300;
        }
        span {
            font-weight: 400;
            font-size: 30px;
        }

        div {
            padding: 10px 1rem;
            justify-content: center;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

    }

    .access-btn {
        grid-area: accessPerfil;

        a {
            background: #26273b;
            padding: 15px 32px;
            border-radius: 30px;
            border: none;
            color: white;
            font-size: 20px;
            font-weight: 500;
            transition: .3s;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                transform: scale(1.05);
                background: #14141f;
            }
        }
    }

`