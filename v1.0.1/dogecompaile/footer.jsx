import { Center, HStack, VStack } from "@chakra-ui/layout";
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {SiDiscord } from 'react-icons/si';
import footerStyle from "../styles/footer.module.css"

function Footer(){
    return(
        <div>
            <footer class={footerStyle.footer}>
                    <div class={footerStyle.container}>
                        <div class={footerStyle.socailmedia}>
                            <center>
                            <h1 class={footerStyle.socailtitle}>Community</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <a href='#' class={footerStyle.href}>Terms & Conditions </a>
                            <a href='#' class={footerStyle.href}>Market</a>
                            </VStack>
                        </div>
                        <div class={footerStyle.socailmedia}>
                            <center>
                            <h1 class={footerStyle.about}>About us</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <p class={footerStyle.href} style={{cursor:"pointer"}}>Roadmap</p>
                            <a href='#' class={footerStyle.href}>FAQ</a>
                            </VStack>
                        </div>
                    </div>
                    <center>
                        <Center>
                        <HStack padding='1.5rem' spacing='1rem'>
                        <a href='#'><SiDiscord class={footerStyle.link}/></a>
                        <a href='#'><FaTwitter class={footerStyle.link}/></a>
                        <a href='#'><FaInstagram class={footerStyle.link}/></a>
                        </HStack>
                        </Center>
                    <hr color='#a200ff' width='85%' marginTop='2.5rem'/>
                    </center>
                    <p style={{color:"white",marginTop:'1rem',paddingLeft:'0.7rem',textShadow:'0px 2px 2px #a200ff'}}>&copy; Doge news 2022</p>
            </footer>
        </div>
    )
}
export default Footer;