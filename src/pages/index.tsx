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

interface ItemProps {
    title: string;
    content: string;
    Logo: any;
}

const Home: React.FC = () => {
    const items: ItemProps[] = [
        {
            title: 'C#',
            content: 'Linguagem que desenvolvo grande parte das aplicações',
            Logo: CSharp,
        },
        {
            title: '.NET Core',
            content:
                'Tecnologia que mais tenho proximidade no dia a dia utilizando C#',
            Logo: NetCore,
        },
        {
            title: 'ASP.NET Core',
            content:
                'Framework web integrado a plataforma .NET, o qual utilizo para construir APIs',
            Logo: AspNet,
        },
        {
            title: 'Javascript',
            content:
                'Linguagem que faz parte do meu desenvolvimento frontend quando preciso',
            Logo: JS,
        },
        {
            title: 'Typescript',
            content:
                'Linguagem que faz parte do meu desenvolvimento frontend quando preciso',
            Logo: TypescriptIcon,
        },
        {
            title: 'ReactJS',
            content:
                'Biblioteca frontend onde desenvolvo aplicações frontend, junto das linguagens Javascript e Typescript',
            Logo: ReactIcon,
        },
        {
            title: 'Azure',
            content:
                'Serviço de nuvem ondem hospedo e testo disversos tipos de aplicações',
            Logo: AzureLogo,
        },
    ];

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
                            <a
                                href="https://github.com/andre-mit"
                                target="_blank"
                            >
                                <Github />
                                <span>Github</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andr%C3%A9-amaral/"
                                target="_blank"
                            >
                                <Linkedin />
                                <span>Linkedin</span>
                            </a>
                        </footer>
                    </Presents>

                    <Techs>
                        <AnimateSharedLayout>
                            <TechsList
                                layout
                                initial={{ borderRadius: 25 }}
                                style={{ backgroundColor: '#f5f0fe' }}
                            >
                                <h1>Tecnologias que utilizo</h1>

                                {items.map(item => (
                                    <Item
                                        key={item.title}
                                        title={item.title}
                                        content={item.content}
                                        Logo={item.Logo}
                                    />
                                ))}
                            </TechsList>
                        </AnimateSharedLayout>
                    </Techs>
                </Wrapper>
            </Container>
        </>
    );
};

const Item: React.FC<ItemProps> = ({ title, content, Logo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <TechItem layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <div className="wrapper">
                <Logo />
                <h2>{title}</h2>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <TechContent
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <span>{content}</span>
                    </TechContent>
                )}
            </AnimatePresence>
        </TechItem>
    );
};
export default Home;
