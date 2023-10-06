'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import whatsappIcon from '../public/images/whatsappIcon.svg';

const BreadCrumb = ({title}) => {
return (
<>
<div className="BreadCrumb pt-5 pb-5">
<Container>
<Row>
    <Col lg={8} className='offset-md-2'>
        <h1 className='m-0 pb-1 text-center fw-bold'>{title}</h1>
        <p className='m-0 text-center'>Embroidery Patches uk is the go-to-place for British people who love custom Embroidery patches</p>
        <ul className='quickBtn list-unstyled m-0 d-flex justify-content-center gap-2 mt-3'>
            <li><Link href="#" className="livechat">Live Chat</Link></li>
            <li><Link href="#" className="ordernow">Order Now</Link></li>
            <li><Link href="#" className="livechat"><Image src={whatsappIcon} alt="Essay Roo Logo" quality={75} style={{width:'24px',height:'auto'}} /> +441613810000</Link></li>
        </ul>
    </Col>
</Row>
</Container>
</div> 
</>
)
}

export default BreadCrumb