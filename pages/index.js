import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
    const blackOverlayControl = useAnimation();
    const SloganControl = useAnimation();
    const ComingSoonControl = useAnimation();

    const sloganWrapperVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                easings: "easeIn",
                staggerChildren: 1,
            },
        },
    };
    const sloganVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transform: {
                easings: "easeInOut",
                duration: 2,
                delay: 5,
            },
        },
    };
    const comingSoonWrapperVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
            },
        },
    };
    const comingSoonVariant = {
        logo: {
            y: 0,
            transition: {
                duration: 1.5,
            },
        },
        text: {
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 1.5,
            },
        },
    };

    useEffect(() => {
        const sequence = async () => {
            await blackOverlayControl.start({
                y: 0,
                transition: {
                    duration: 1,
                    easings: "easeIn",
                    // delay: 1.3,
                },
            });
            await SloganControl.start("visible");
            await SloganControl.start({ opacity: 0, transition: { duration: 1, delay: 1 } });
            await ComingSoonControl.start("visible");
        };

        sequence();
    }, []);

    return (
        <Component>
            <BlackOverlay initial={{ y: "-100%" }} animate={blackOverlayControl} />
            <Slogan initial={"hidden"} animate={SloganControl} variants={sloganWrapperVariants}>
                <motion.p variants={sloganVariants}>Design</motion.p>
                <motion.p variants={sloganVariants}>
                    <strong>With Us</strong>
                </motion.p>
                {/* <motion.p variants={sloganVariants}>
                    <strong>Us</strong>
                </motion.p> */}
            </Slogan>
            <Page initial={"hidden"} variants={comingSoonWrapperVariant} animate={ComingSoonControl}>
                <main>
                    <motion.img src='/assets/images/logo/logo_white.svg' alt='' initial={{ y: -50 }} variants={comingSoonVariant} animate={"logo"} />
                    {/* <motion.p className='bio' initial={{ opacity: 0 }} variants={comingSoonVariant} animate={"text"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad
                    </motion.p> */}
                    <motion.p className='coming-soon' initial={{ opacity: 0 }} variants={comingSoonVariant} animate={"text"}>
                        Coming Soon
                    </motion.p>
                </main>
                <motion.footer initial={{ opacity: 0 }} variants={comingSoonVariant} animate={"text"}>
                    <a href='mailto:sinan@wu.com.tr'>sinan@wu.com.tr</a>
                    <a href='tel:+90 0530 220 34 20'>+90 0530 220 34 20</a>
                    <a href='mailto:guven@wu.com.tr'>guven@wu.com.tr</a>
                </motion.footer>
            </Page>
        </Component>
    );
};
const Component = styled.div`
    position: relative;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    /* ========= */
`;
const BlackOverlay = styled(motion.div)`
    position: absolute;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    background-color: #191919;
    z-index: 1;
`;
const Slogan = styled(motion.div)`
    position: absolute;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 8px;
    justify-content: center;
    align-content: center;
    z-index: 2;
    p {
        color: white;
        text-transform: uppercase;
        font-weight: 300;
    }
`;

const Page = styled(motion.div)`
    position: absolute;
    padding: 32px 8px;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    grid-template-rows: 1fr auto;
    z-index: 3;
    main {
        display: grid;
        justify-items: center;
        align-items: center;
        align-content: center;
        grid-row-gap: 40px;
        p {
            color: white;
            max-width: 494px;
            text-align: center;
        }
        .logo {
            width: 60%;
            max-width: 267px;
        }
        .bio {
            font-weight: 300;
            line-height: 24px;
        }
        .coming-soon {
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            @media (min-width: 768px) {
            }
        }
    }
    footer {
        display: grid;
        grid-row-gap: 8px;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 8px;
    }
    a {
        color: white;
        font-size: 12px;
        font-weight: 300;
        @media (min-width: 768px) {
            font-size: 16px;
        }
    }
`;

export default Home;
