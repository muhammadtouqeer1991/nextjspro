'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import sec41 from '../public/images/sec41.webp';
import sec42 from '../public/images/sec42.webp';
import sec43 from '../public/images/sec43.webp';
import sec44 from '../public/images/sec44.webp';
import sec45 from '../public/images/sec45.webp';
import sec46 from '../public/images/sec46.webp';

const ClassicPatches = () => {
return (
<>
<div className="ClassicPatches pt-5 pb-5">
<Container>
<Row>
    <Col lg={12}>
        <h4 className='fs-1 fw-bold text-center m-0 pb-4'>Explore Our Classic Patches In UK</h4>
    </Col>
</Row>
<Row className='align-items-center'>
    <Col lg={4} className='text-center'>
        <Image src={sec41} alt="Essay Roo Logo" quality={75} style={{width:'90%',height:'auto'}} />  
    </Col>
    <Col lg={4} className='text-center'>
        <Image src={sec42} alt="Essay Roo Logo" quality={75} style={{width:'80%',height:'auto'}} />  
    </Col>
    <Col lg={4} className='text-center'>
        <Image src={sec43} alt="Essay Roo Logo" quality={75} style={{width:'90%',height:'auto'}} />  
    </Col>
     
</Row>
<Row className='align-items-center pt-3'>
<Col lg={4} className='text-center'>
        <Image src={sec44} alt="Essay Roo Logo" quality={75} style={{width:'80%',height:'auto'}} />  
    </Col>
    <Col lg={4} className='text-center'>
        <Image src={sec45} alt="Essay Roo Logo" quality={75} style={{width:'70%',height:'auto'}} />  
    </Col>
    <Col lg={4} className='text-center'>
        <Image src={sec46} alt="Essay Roo Logo" quality={75} style={{width:'80%',height:'auto'}} />  
    </Col>
</Row>
</Container>
</div>
</>
)
}

export default ClassicPatches