//import pumpsStyle from '../styles/pumps.module.css'
import { Progress } from '@chakra-ui/react'
import axios from "axios"; 
//import db from 'diskdb';
import React, { useEffect, useState } from "react";

function Pumps({}){
  //read---------+++

      //const [getvoteno, setGetvoteno] = useState()
      //const [getvoteyes, setGetvoteyes] = useState()
      const [loading, setLoading] = useState(false)


      axios({
        method: 'get',
        url: `./votes.json`,
      })
      .then(function(res){
        setCounteryes(res.data[0].yes)
        setCounterno(res.data[0].no)
        setLoading(true)
      }).catch( error => { console.log(error); });
      
    const [counterno, setCounterno] = useState(0)
    const [counteryes, setCounteryes] = useState(0)
    const [countstate, setCountstate] = useState(false)

    const handleClick1yes = () => {
        //console.log(countstate)
        if (countstate === false && loading === true){
            setCounteryes(counteryes + 1)
            //setCountstate(true)
        }else{
          setCounteryes(counteryes)
        }
      }

      const handleClick1no = () => {
        //console.log(countstate)
        if (countstate === false && loading === true){
            setCounterno(counterno + 1)
            //setCountstate(true)
        }else{
          setCounterno(counterno)
        }
      }


      if (counterno == 0 || counteryes == 0){
        console.log('error')
      }else{
      axios({
        method: 'post',
        url: `./api/hello`,
        data: {counteryes,counterno}
      })
      .then(function(res){
        console.log(res)
      })
    }


      //console.log(counterno)
      //console.log(counteryes)

    return(
        <div>
            <button onClick={handleClick1yes}>yes</button>:{counteryes}<br />
            
            <button onClick={handleClick1no}>no</button>:{counterno}
        </div>
    )
}

export default Pumps


