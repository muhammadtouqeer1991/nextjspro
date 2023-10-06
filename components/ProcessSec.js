'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row,Accordion } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillCaretRight } from 'react-icons/Ai';
import { IoIosArrowForward } from 'react-icons/Io';
import process1 from '../public/images/process1.svg';
import process2 from '../public/images/process2.svg';
import process3 from '../public/images/process3.svg';
import process4 from '../public/images/process4.svg';

const ProcessSec = () => {
return (
<>
<div className="ProcessSec pt-5 pb-5">
<Container>
<Row>
<Col lg={12}>
<h4 className='m-0 pb-3 fs-3 fw-bold text-center'> Foundations Of Our Patches Process Company in UK</h4>
</Col>
</Row>
<Row>
<Col lg={6}>
<div className="processBox d-flex">
    <div className="stepTItle text-white"><span>Step</span></div>
    <div className="circleStep"><span>1</span></div>
    <div className="stepinfo">
        <h5 className='m-0 text-white'>Share a Design</h5>
        <p className='m-0 text-white'>Initiate your order by simply sharing any of your patch designs.</p>
    </div>
    <div className="circleImg">
        <Image src={process1} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
    </div>
</div>
<div className="processBox d-flex mt-3">
    <div className="stepTItle text-white"><span>Step</span></div>
    <div className="circleStep"><span>2</span></div>
    <div className="stepinfo">
        <h5 className='m-0 text-white'>Share a Design</h5>
        <p className='m-0 text-white'>Initiate your order by simply sharing any of your patch designs.</p>
    </div>
    <div className="circleImg">
        <Image src={process2} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
    </div>
</div>
</Col>
<Col lg={6}>
<div className="processBox d-flex">
    <div className="stepTItle text-white"><span>Step</span></div>
    <div className="circleStep"><span>3</span></div>
    <div className="stepinfo">
        <h5 className='m-0 text-white'>Share a Design</h5>
        <p className='m-0 text-white'>Initiate your order by simply sharing any of your patch designs.</p>
    </div>
    <div className="circleImg">
        <Image src={process3} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
    </div>
</div>
<div className="processBox d-flex mt-3">
    <div className="stepTItle text-white"><span>Step</span></div>
    <div className="circleStep"><span>4</span></div>
    <div className="stepinfo">
        <h5 className='m-0 text-white'>Share a Design</h5>
        <p className='m-0 text-white'>Initiate your order by simply sharing any of your patch designs.</p>
    </div>
    <div className="circleImg">
        <Image src={process4} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
    </div>
</div>
</Col>
</Row>
</Container>
</div>
</>
)
}

export default ProcessSec