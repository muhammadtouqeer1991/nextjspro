'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/Ai';

const HomeForm = () => {
return (
<>
<div className="HomeForm pt-5 pb-5">
<Container>
<Row>
    <Col lg={12}>
        <h4 className='m-0 text-center fs-2 fw-bold pb-4'>Eye-Popping Embroidered Patches in UK for Every Industry</h4>
    </Col>
</Row>
<Row className='align-items-center'>
    <Col lg={8}>
        <h5 className='m-0 fs-3 fw-bold pb-2'>London’s Best Patches Design Company Weaving Each 
Patch with Years of Experience</h5>
<p className='m-0 pb-2'>Custom embroidered patches are the go-to option for every existing industry, including the 
military, motorcycle clubs, organizations, anniversaries and other occasions. Bespoke Patc
hes UK is a one-stop kind of clothing patch making company that offers best quality embr
oidery patches for clothing, backed with your desired type of backing, with free artwork an
d unlimited cycles of design edits.</p>
<p className='m-0 pb-2'>Expert patch creators here can turn any design into thread artwork. All you have to do is, 
follow a few steps, and we’d deliver your personalised patches to your doorstep in no time! 
Being a part of this market for 10+ years, we have mastered the art of needle and thread. 
Here at our custom-made badge making company, each fabric badge is stitched with 
experience, and perfection.</p>
<p className='m-0 pb-2'>Whether you need to personalise your outfit, wish to raise brand awareness, or want to 
bring old apparel</p>
    </Col>
    <Col lg={4}>
        <div className="instantForm">
            <h5 className='m-0 text-center fs-4 pb-3 text-white fw-bold'>Instant Free Quote</h5>
            <div className="form-group">
                <select name="" id="" className="form-control">
                    <option value="">Select Service</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder='Name' />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder='Your Email' />
            </div>
            <div className="form-group">
                <input type="tel" className="form-control" placeholder='Phone' />
            </div>
            <div className="form-group">
                <p className='m-0 text-center text-white fs-5 fw-bold'>Approximate Price:36 $</p>
            </div>
            <div className="form-group">
                <button className='d-flex w-100 justify-content-between align-items-center ps-3'>Send It My Way <span><AiOutlineDoubleRight size={18} fill="#fff" /></span></button>
            </div>
        </div>
    </Col>
</Row>
</Container>
</div>
</>
)
}

export default HomeForm