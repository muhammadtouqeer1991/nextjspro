"use client"
import React from 'react'
import Image from 'next/image';
import headerIcon1 from '../public/images/headerIcon1.webp';
import headerIcon2 from '../public/images/headerIcon2.webp';
import headerIcon3 from '../public/images/headerIcon3.webp';
import headerIcon4 from '../public/images/headerIcon4.webp';
import headerIcon5 from '../public/images/headerIcon5.webp';
import headerbigimg from '../public/images/headerbigimg.webp';

import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Mainheader = () => {
return (
<>
<div className="Mainheader pt-4 pb-4">
<Container fluid>
<Row className='align-items-center'>
<Col lg={2}>
    <ul className='m-0 list-unstyled ps-4 gap-2 d-flex flex-column justify-content-center align-items-center'>
        <li>
        <Image src={headerIcon1} alt="Essay Roo Logo" quality={75} style={{width:'120px',height:'auto'}} />  
        </li>
        <li>
        <Image src={headerIcon2} alt="Essay Roo Logo" quality={75} style={{width:'120px',height:'auto'}} />  
        </li>
        <li>
        <Image src={headerIcon3} alt="Essay Roo Logo" quality={75} style={{width:'120px',height:'auto'}} />  
        </li>
        <li>
        <Image src={headerIcon4} alt="Essay Roo Logo" quality={75} style={{width:'134px',height:'auto'}} />  
        </li>
    </ul>
</Col>
<Col lg={5}>
    <div className="infoHeader">
        <h1 className='fw-bold'>Custom Embroidered Patches In Uk</h1>
        <p>Embroidery Patches uk is the go-to place for British people who love custom
embroidered patches. When you see the results of our patchwork, you will </p>
<ul className='m-0 list-unstyled d-flex flex-column gap-2'>
    <li className='d-flex align-items-center gap-3'>
        <div className='firstBox'>
            <Image src={headerIcon5} alt="Essay Roo Logo" quality={75} style={{width:'80px',height:'auto'}} />   
        </div>
        <div className='secondBox'>
            <h4 className='m-0 text-white fs-4 fw-bold'>Trusted Patches Designagency</h4>
            <p className='m-0 text-white'>Durable, Quality-Checked, Enduring</p>
        </div>
    </li>
    <li className='d-flex align-items-center gap-3'>
        <div className='firstBox'>
            <Image src={headerIcon5} alt="Essay Roo Logo" quality={75} style={{width:'80px',height:'auto'}} />   
        </div>
        <div className='secondBox'>
            <h4 className='m-0 text-white fs-4 fw-bold'>Trusted Patches Designagency</h4>
            <p className='m-0 text-white'>Durable, Quality-Checked, Enduring</p>
        </div>
    </li>
</ul>
<ul className='quickBtn list-unstyled m-0 d-flex gap-2 mt-3'>
    <li><Link href="#" className="livechat">Live Chat</Link></li>
    <li><Link href="#" className="ordernow">Order Now</Link></li>
</ul>
    </div>
</Col>
<Col lg={5}>
<Image src={headerbigimg} alt="Essay Roo Logo" quality={75} style={{width:'100%',height:'auto'}} />   
</Col>
</Row>
</Container>
</div>
</>
)
}

export default Mainheader