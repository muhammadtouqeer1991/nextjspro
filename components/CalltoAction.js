'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import whatsappIcon from '../public/images/whatsappIcon.svg';
import coin1 from '../public/images/coin1.webp';
import coin2 from '../public/images/coin2.webp';
import coin3 from '../public/images/coin3.webp';

const CalltoAction = () => {
return (
<>
<div className="CalltoAction pt-5 pb-5">
<Container>
<Row className='align-items-center'>
<Col lg={8}>
    <h4 className='m-0 pb-2 fs-3 fw-bold text-dark'>How about some stunning Challenge Coins 
to go along with those patches?</h4>
<p className='m-0'>Custom embroidered patches are the go-to option for every existing industry, including the military, motorcy
cle clubs, organizations, anniversaries and other occasions. Bespoke Patches UK is a one-stop kind of 
clothing patch making company that offers best quality</p>
<ul className='quickBtn list-unstyled m-0 d-flex gap-2 mt-3'>
<li><Link href="#" className="livechat">Live Chat</Link></li>
<li><Link href="#" className="ordernow">Order Now</Link></li>
<li><Link href="#" className="livechat"><Image src={whatsappIcon} alt="Essay Roo Logo" quality={75} style={{width:'24px',height:'auto'}} /> +441613810000</Link></li>
</ul>
</Col>
<Col lg={4}>
    <ul className='m-0 list-unstyled d-flex flex-wrap itemList'>
        <li>
            <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'130px',height:'auto'}} /> 
        </li>
        <li>
            <Image src={coin2} alt="Essay Roo Logo" quality={75} style={{width:'130px',height:'auto'}} /> 
        </li>
        <li>
            <Image src={coin3} alt="Essay Roo Logo" quality={75} style={{width:'150px',height:'auto'}} /> 
        </li>
    </ul>
</Col>
</Row>
</Container>
</div>
</>
)
}

export default CalltoAction