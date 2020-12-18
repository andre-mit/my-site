import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

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
`;

export const Techs = styled.aside`
    flex: 1;
`;

export const TechsList = styled(motion.ul)`
    list-style: none;
    padding: 8px;
`;
export const TechItem = styled(motion.li)`
    & + & {
        margin-top: 16px;
        border-top: 2px solid #00000056;
    }
    .wrapper {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px;

        cursor: grab;
        > h2 {
            color: ${props => props.theme.colors.background};
            margin-left: 16px;
            font-size: 32px;
        }
        > svg {
            border-radius: 50%;
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
