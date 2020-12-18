import React, { useState } from 'react';
import Head from 'next/head';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import AzureLogo from '../assets/azure.svg';
import AspNet from '../assets/aspnet.svg';
import CSharp from '../assets/csharp.svg';
import Github from '../assets/github.svg';
import JS from '../assets/javascript.svg';
import Linkedin from '../assets/linkedin.svg';
import NetCore from '../assets/netcore.svg';
import ReactIcon from '../assets/react.svg';
import TypescriptIcon from '../assets/typescript.svg';
import VisualStudio from '../assets/vs.svg';
import VSCode from '../assets/vscode.svg';

import {
    Container,
    Wrapper,
    Presents,
    Techs,
    TechContent,
    TechItem,
    TechsList,
} from '../styles/pages/Home';

const Home: React.FC = () => {
    const items = [1, 2, 3, 4, 5];
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <Head>
                <title>André</title>
            </Head>
            <Container>
                <Wrapper>
                    <Presents>
                        <span>Olá, sou</span>
                        <h1>André Augusto</h1>
                        <h3>Desenvolvedor backend</h3>
                        <small>e um pézinho em outras áreas 😀</small>

                        <footer>
                            <button>Github</button>
                            <button>Linkedin</button>
                        </footer>
                    </Presents>

                    <Techs>
                        <AnimateSharedLayout>
                            <TechsList
                                layout
                                initial={{ borderRadius: 25 }}
                                style={{ backgroundColor: '#f5f0fe' }}
                            >
                                <TechItem
                                    layout
                                    onClick={toggleOpen}
                                    initial={{ borderRadius: 10 }}
                                >
                                    <div className="wrapper">
                                        <NetCore />
                                        <h2>.Net Core</h2>
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <TechContent
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <span>
                                                    .Net core tecnologia que
                                                    mais tenho proximidade no
                                                    dia a dia utilizando C#
                                                </span>
                                            </TechContent>
                                        )}
                                    </AnimatePresence>
                                </TechItem>
                                <TechItem
                                    layout
                                    onClick={toggleOpen}
                                    initial={{ borderRadius: 10 }}
                                >
                                    <div className="wrapper">
                                        <ReactIcon />
                                        <h2>ReactJS</h2>
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <TechContent
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <span>ReactJS</span>
                                            </TechContent>
                                        )}
                                    </AnimatePresence>
                                </TechItem>
                            </TechsList>
                        </AnimateSharedLayout>
                    </Techs>
                </Wrapper>
            </Container>
        </>
    );
};

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="row" />
            <div className="row" />
            <div className="row" />
        </motion.div>
    );
}
export default Home;
