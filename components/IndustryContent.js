'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import patches1 from '../public/images/patches1.svg';

const IndustryContent = () => {
return (
<>
<div className="IndustryContent pt-5 pb-5">
<Container>
<Row>
    <Col lg={12}>
        <h4 className='text-center fs-3 fw-bold'>Eye-Popping Embroidered Patches in UK for Every Industry</h4>
    </Col>
</Row>
<Row className='pt-4'>
    <Col lg={5}>
        <ul className='m-0 list-unstyled d-flex flex-wrap gap-3'>
            <li>
                <Image src={patches1} alt="Essay Roo Logo" quality={75} style={{width:'140px',height:'auto'}} />  
            </li>
            <li>
                <Image src={patches1} alt="Essay Roo Logo" quality={75} style={{width:'140px',height:'auto'}} />  
            </li>
            <li>
                <Image src={patches1} alt="Essay Roo Logo" quality={75} style={{width:'140px',height:'auto'}} />  
            </li>
            <li>
                <Image src={patches1} alt="Essay Roo Logo" quality={75} style={{width:'140px',height:'auto'}} />  
            </li>
        </ul>
    </Col>
    <Col lg={7}>
        <h5 className='m-0 fs-4 fw-bold'>London’s Best Patches Design Company Weaving Each 
Patch with Years of Experience</h5>
<p className='m-0 pt-2 pb-2'>Custom embroidered patches are the go-to option for every existing industry, including the 
military, motorcycle clubs, organizations, anniversaries and other occasions. Bespoke Patc
hes UK is a one-stop kind of clothing patch making company that offers best quality embr
oidery patches for clothing, backed with your desired type of backing, with free artwork an
d unlimited cycles of design edits.</p>
<p className='m-0 pb-2'>Expert patch creators here can turn any design into thread artwork. All you have to do is, 
follow a few steps, and we’d deliver your personalised patches to your doorstep in no time! 
Being a part of this market for 10+ years, we have mastered the art of needle and thread. 
Here at our custom-made badge making company, each fabric badge is stitched with 
experience, and perfection.
</p>
<p className='m-0'>Whether you need to personalise your outfit, wish to raise brand awareness, or want to 
bring old apparel</p>
    </Col>
</Row>
</Container>
</div>
</>
)
}

export default IndustryContent