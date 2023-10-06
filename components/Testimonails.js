'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/Ai';
import testi1 from '../public/images/testi1.webp';
import testi2 from '../public/images/testi2.webp';

const Testimonails = () => {
return (
<>
<div className="Testimonails pt-5 pb-5">
<Container>
<Row>
<Col lg={12}>
<h4 className='fs-3 fw-bold text-center m-0 pb-4'>Eye-Popping Embroidered Patches in UK for Every Industry</h4>
</Col>
</Row>
<Row className='justify-content-center'>
<Col lg={5} className='offset-md-1'>
<div className="testiSec">
<div className="topTesti d-flex align-items-center">
    <div className='borderBc'>
        <Image src={testi1} alt="Essay Roo Logo" quality={75} style={{width:'100px',height:'auto'}} /> 
    </div>
    <div className='xs'>
        <p className='m-0 text-white'>Angela Livingstone</p>
    </div>
</div>
<h5 className='m-0 pt-2'>100 Percent Satisfied</h5>
<p className='m-0 pb-2'><AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /></p>
<p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
</div>
</Col>
<Col lg={5} className='offset-md-1'>
<div className="testiSec">
<div className="topTesti d-flex align-items-center">
    <div className='borderBc'>
        <Image src={testi1} alt="Essay Roo Logo" quality={75} style={{width:'100px',height:'auto'}} /> 
    </div>
    <div className='xs'>
        <p className='m-0 text-white'>Angela Livingstone</p>
    </div>
</div>
<h5 className='m-0 pt-2'>100 Percent Satisfied</h5>
<p className='m-0 pb-2'><AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /> <AiFillStar size={20} fill="#f7c856" /></p>
<p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
</div>
</Col>
</Row>
</Container>
</div>
</>
)
}

export default Testimonails