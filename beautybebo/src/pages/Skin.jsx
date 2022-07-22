import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { Box ,Flex,Grid,Button} from '@chakra-ui/react'
import { GiBeachBag} from 'react-icons/gi';
import styles from "../styles/page.module.css"
import Loading from "./Loading"
import {Link } from "react-router-dom"
const Skin = () => {
    const {skin,setskin,changeskinpage,load,onclickaddcart,spage}=useContext(Appcontext)
  return (
    <div className={styles.maincontainer} >
      <Link to="/"> <Button marginTop="1rem">GO TO HOME</Button></Link>
        <div style={{width: '50%', justifyContent:"space-between", margin:"auto",display: "flex",marginBottom:"1rem",marginTop:"1rem"}}>
                
            <h1 style={{fontWeight: "bolder", fontSize: "20px" ,textAlign: "center",marginBottom: "10px"}}>SKIN</h1>
            <Flex gap="0.5rem" >
             <Button disabled={spage===1}
             onClick={()=>changeskinpage(1)}>1</Button>
             <Button disabled={spage===2}
             onClick={()=>changeskinpage(2)}>2</Button>
             <Button disabled={spage===3}
             onClick={()=>changeskinpage(3)}>3</Button>
            </Flex>
        </div>

{ load? <Loading/>  :     <div className={styles.container}>
            {
                skin.map((item)=>(
                    <div className={styles.box}>
                            <img src={item.img} />
                            <p>{item.name}</p>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <Flex gap="0.5rem">
                            <s>{item.cost}</s>
                            <h3>₹ {item.price}</h3>
                            <h4>{item.off}</h4>
                            </Flex>
                            <Button className={styles.button}
                            onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                            >{<GiBeachBag/>} {  } Add to cart</Button>
                    </div>
                ))
                }
        </div>}
    </div>
  )
}

export default Skin