import { useState, useEffect } from 'react';  
import axios from "axios"; 
import { Image } from '@chakra-ui/image';
import { BiSearch } from 'react-icons/bi';
import { SiDogecoin } from 'react-icons/si';
import WordLimit from 'react-word-limit';
import { ChakraProvider,Input,InputGroup,InputLeftElement,HStack } from '@chakra-ui/react';
import homeStyle from '../styles/home.module.css'
   
function App(){
  const [numindex, setindex] = useState();
  const [more, setmore] = useState(false);
  const [news, setNews] = useState([])
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
  axios({
    method: 'get',
    url: `./gnews.json`,
  })
  .then(function (response) {
    const News = response.data.articles
    setLoading(true)
    console.log(News)
    setNews(News)
  });
},[])
function extra (index){
  setindex(index)
  setmore(!more)
  }
  return (
    <div>
            <div className={homeStyle.navbar}>
        <div className={homeStyle.navbar1}>
          <HStack marginTop="0.3rem" marginLeft="1rem">
          <SiDogecoin style={{color:"yellow",fontSize:"1.5rem"}}/>
          <p color="white">Doge news</p>
                <InputGroup style={{width:"20vw"}}>
                    <InputLeftElement pointerEvents='none' height="1.6rem" children={<BiSearch color='white' />}
                    />
                    <Input type='tel' size='xs' placeholder='Search' style={{color:"white",border:"2px solid white",borderRadius:"30px"}} _placeholder={{color:"white"}}/>
                </InputGroup>
            </HStack>
        </div>
        <div className={homeStyle.navbar2}>
        <div className={homeStyle.links}>
            <a href="#">News</a>
            <a href="#">Market</a>
            <a href="#">opinion</a>
          </div>
        </div>
      </div>

      <div className={homeStyle.mobilenav}><center><SiDogecoin style={{color:"yellow",fontSize:"1.5rem",position:'relative',top:'0.2rem'}}/></center></div>

      <div><Image src="1635779886.gif" className={homeStyle.ad}/></div>

      <center>
      <div className={homeStyle.newsbox}>
      {Loading && news.map((news, index)=>
      <div key={news}>
        
      <div className={homeStyle.newsbox1} onClick={() => setmore(()=> extra(index))}><center><div className={homeStyle.news}><Image src={news.image}/></div></center><p className={homeStyle.title}>{news.title}</p></div>
      
      </div>)}
      </div>
      </center>
      


      {more && 
      <div style={{position:"fixed" , height:"100%" , width:"100%" , background:"rgba(195, 121, 255, 0.645)", top:"0" , left:"0"}} onClick={() => setmore(!more)} className={homeStyle.boxanime}>
       <div style={{height :"100vh", position:"fixed" ,overflow:"auto",marginLeft:"5%" ,top:"5vh" ,width: "90vw" , background:"#0c0029" ,zIndex:"100",borderRadius:'15px'}} overflow='auto' onClick={(e) => e.stopPropagation()}>
       <p className={homeStyle.title}>{news[numindex].title}</p>
       <div className={homeStyle.infobox}>
       <div className={homeStyle.infobox1}><Image src={news[numindex].image}/><div style={{marginTop:'1rem'}}><span style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>published at:</span><span style={{textShadow:"0 1px 1px black"}}>{news[numindex].publishedAt}</span></div><div><span style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>Author:</span><span style={{textShadow:"0 1px 1px black"}}>{news[numindex].source.name}</span></div></div>
       <div className={homeStyle.infobox2}><p style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>description:</p><p  style={{padding:"1rem",textShadow:"0 1px 1px black"}}>{news[numindex].description.substring(0, 160)}...</p><center><a href={news[numindex].url} className={homeStyle.seemorelink}>See more</a></center></div>
       </div>
        </div>
      </div>
      }
  </div>
  )
}
export default App
