import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: radial-gradient(50% 50% at 50% 50%, #144953 0%, #121718 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
    flex: 1;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Presents = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > span {
        font-weight: 600;
        font-size: 36px;
    }

    > h1 {
        font-weight: 800;
        font-size: 64px;
    }

    > h3 {
        font-weight: bold;
        font-size: 36px;
    }
    > small {
        font-size: 20px;
    }

    > footer {
        display: flex;
        justify-content: space-evenly;
        margin-top: 16px;
        width: 100%;

        > a {
            background: #0f7ccb;
            border-radius: 12px;
            border: none;
            outline: none;
            padding: 5px;
            font-size: 24px;
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;

            color: ${props => props.theme.colors.text};
            > svg {
                fill: #fff;
                height: 80%;
                margin-right: 10px;
            }
        }
    }
`;

export const Techs = styled.aside`
    flex: 1;
`;

export const TechsList = styled(motion.ul)`
    list-style: none;
    padding: 8px;
    max-height: 80vh;
    overflow: auto;

    > h1 {
        color: ${props => props.theme.colors.background};
        margin-top: 16px;
        text-align: center;
    }
`;
export const TechItem = styled(motion.li)`
    margin-top: 16px;
    border-top: 2px solid #00000056;
    border-bottom: 2px solid #00000056;
    .wrapper {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px;

        cursor: pointer;
        > h2 {
            color: ${props => props.theme.colors.background};
            margin-left: 16px;
            font-size: 32px;
        }
        > svg {
            border-radius: 30%;
            height: 80px;
            width: 80px;
        }
    }
`;
export const TechContent = styled(motion.div)`
    margin-top: 16px;
    padding: 16px;
    width: 100%;
    > span {
        color: ${props => props.theme.colors.background};
        font-size: 24px;
        line-height: 24px;
    }
`;
