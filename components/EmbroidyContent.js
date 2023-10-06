'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import middel1 from '../public/images/middel1.webp';
import middel2 from '../public/images/middle2.webp';

const EmbroidyContent = () => {
return (
<>
<div className="EmbroidyContent pt-5">
<Container>
    <Row>
        <Col lg={12}>
            <h4 className='fs-3 fw-bold text-center m-0 pb-4'>Eye-Popping Embroidered Patches in UK for Every Industry</h4>
        </Col>
    </Row>
    <Row className='align-items-center'>
        <Col lg={4}>
        <h5 className='m-0 pb-2 fw-bold fs-4'>London’s Best Patches Design 
        Patch with Years of Experience</h5>
        <p className='m-0 pb-2'>Custom embroidered patches are the go-to option for 
        every existing industry, including the military, motorcy
        cle clubs, organizations, anniversaries and other 
        occasions. Bespoke Patches UK is a one-stop kind of 
        clothing patch making company that offers best quality 
        embroidery patches for clothing, backed with your 
        desired type of backing, with free artwork and unlimi
        ted cycles of design edits.ompany that offers best qual
        ity embroidery patches for cl</p>
        <p className='m-0 pb-2'>Expert patch creators here can turn any design into 
        thread artwork. All you have to do is, follow a few steps, 
        and we’d deliver your personalised patches to your door
        step in no time! Being a part of this market for 10+ years,
        we have mastered the art of needle and thread. Here at 
        our custom-made badge making company, each fabric 
        badge is stitched with experience, and perfection.</p>
        <p className='m-0'>Whether you need to personalise your outfit, wish to 
        raise brand awareness, or want to bring old apparel 
        Expert patch creators here can turn any design into 
        thread artwork. All you have to do is, follow a few 
        steps,and we’d deliver your personalised patches to 
        your doorstep in no time! Being a part of this market for 
        0+ years,we have mastered the art of needle and thread. 
        Here at our custom-made badge making company, 
        each fabric badge is stitched with experience, and 
        perfection. </p>
        </Col>
        <Col lg={4}>
            <div className="middleSec">
            <Image src={middel1} alt="Essay Roo Logo" quality={75} style={{width:'70%',height:'auto'}} />  
            <Image src={middel2} alt="Essay Roo Logo" quality={75} style={{width:'80%',height:'auto'}} /> 
            </div>
        </Col>
        <Col lg={4}>
        <h5 className='m-0 pb-2 fw-bold fs-4'>London’s Best Patches Design 
        Patch with Years of Experience</h5>
        <p className='m-0 pb-2'>Custom embroidered patches are the go-to option for 
        every existing industry, including the military, motorcy
        cle clubs, organizations, anniversaries and other 
        occasions. Bespoke Patches UK is a one-stop kind of 
        clothing patch making company that offers best quality 
        embroidery patches for clothing, backed with your 
        desired type of backing, with free artwork and unlimi
        ted cycles of design edits.ompany that offers best qual
        ity embroidery patches for cl</p>
        <p className='m-0 pb-2'>Expert patch creators here can turn any design into 
        thread artwork. All you have to do is, follow a few steps, 
        and we’d deliver your personalised patches to your door
        step in no time! Being a part of this market for 10+ years,
        we have mastered the art of needle and thread. Here at 
        our custom-made badge making company, each fabric 
        badge is stitched with experience, and perfection.</p>
        <p className='m-0'>Whether you need to personalise your outfit, wish to 
        raise brand awareness, or want to bring old apparel 
        Expert patch creators here can turn any design into 
        thread artwork. All you have to do is, follow a few 
        steps,and we’d deliver your personalised patches to 
        your doorstep in no time! Being a part of this market for 
        0+ years,we have mastered the art of needle and thread. 
        Here at our custom-made badge making company, 
        each fabric badge is stitched with experience, and 
        perfection. </p>
        </Col>
    </Row>
</Container>
</div>
</>
)
}

export default EmbroidyContent