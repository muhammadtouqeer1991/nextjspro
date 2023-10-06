'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';
import patches1 from '../public/images/patches1.svg';
import patches2 from '../public/images/patches2.svg';
import patches3 from '../public/images/patches3.svg';
import patches4 from '../public/images/patches4.svg';

const PatchesIndustry = () => {
return (
<>
<div className="PatchesIndustry pt-5 pb-5">
<Container>
<Row>
<Col lg={12}>
    <h4 className='text-center fw-bold fs-2 pb-4'>Eye-Popping Embroidered Patches in UK for Every Industry</h4>
</Col>
</Row>
<Row>
    <Col lg={3}>
        <div className="patchesBox text-center">
            <Image src={patches1} alt="Essay Roo Logo" quality={75} style={{width:'170px',height:'auto'}} />
        </div>
        <div className="bikerPatches">
            <h5 className='m-0 text-center text-white'>Biker Patches</h5>
        </div>
    </Col>
    <Col lg={3}>
    <div className="patchesBox text-center">
            <Image src={patches2} alt="Essay Roo Logo" quality={75} style={{width:'170px',height:'auto'}} />
        </div>
        <div className="bikerPatches">
            <h5 className='m-0 text-center text-white'>Biker Patches</h5>
        </div>
    </Col>
    <Col lg={3}>
    <div className="patchesBox text-center">
            <Image src={patches3} alt="Essay Roo Logo" quality={75} style={{width:'170px',height:'auto'}} />
        </div>
        <div className="bikerPatches">
            <h5 className='m-0 text-center  text-white'>Biker Patches</h5>
        </div>
    </Col>
    <Col lg={3}>
    <div className="patchesBox text-center">
            <Image src={patches4} alt="Essay Roo Logo" quality={75} style={{width:'170px',height:'auto'}} />
        </div>
        <div className="bikerPatches">
            <h5 className='m-0 text-center text-white'>Biker Patches</h5>
        </div>
    </Col>
</Row>
</Container>
</div>
</>
)
}

export default PatchesIndustry