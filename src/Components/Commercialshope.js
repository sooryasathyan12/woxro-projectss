import React, { useEffect, useState } from 'react'
// import Card from './card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Commercialshope() {
    const [allitems,setitems]=useState([])
    const getitems =async()=>{
        await fetch('/db.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setitems(result.items)
            })

        })
    }
    useEffect(()=>{
        getitems()
    },[])
  return (
    <Row >
    {/* {
        allitems.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Card items={item} />
            </Col>
        ))
    } */}
</Row>
)

    
  
}

export default Commercialshope