import { SiDogecoin } from 'react-icons/si';
import { FaThinkPeaks } from 'react-icons/fa';
import { AiFillSliders } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { Flex,Text } from '@chakra-ui/react'
import tabbarStyle from '../styles/tabbar.module.css'

function Tabbar(){
    return(
        <div>
<Flex display={{base:"flex", padM:"none"}} justifyContent="space-around" borderRadius="50% 50% 10% 10% / 15% 15% 0% 0%" zIndex="999" width="100%" bottom="0" position="fixed" overflow="hidden" height="4.5rem" background="#0f0018" borderTop="3px solid #a200ff" >

<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer"> <SiDogecoin style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">HOME</Text>  </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer"> <FaThinkPeaks style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">OPINION</Text> </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer" > <AiFillSliders style={{height:"40%" , width:"40%" }} /><Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700" >MARKET</Text> </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer" > <BiNews style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">NEWS</Text> </Flex>

</Flex>
        </div>
    )
}
export default Tabbar