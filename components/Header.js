"use client"
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { BiCheck } from 'react-icons/Bi';
import headerKanguru from '/public/images/headerKanguru.webp';
import OrdernowButton from './OrdernowButton';
import LiveChat from './LiveChat';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
return (
<>
<div className="headerSec">
<Container>
<Row className='align-items-center'>
<Col lg={5}>
<h1 className='fw-bold fs-2 text-white m-0'>Essay Writing Services <span>Starts at $7/Page</span></h1>
<p className='text-white m-0 pb-3 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur voluptatem cum aperiam facilis natus rem, inventore accusantium </p>

<ul className='list-unstyled d-flex flex-column text-white gap-2 align-items-start'>
<li><BiCheck size={25} fill="#f7c856" /> Plagiarism-Free your shoulders</li>
<li><BiCheck size={25} fill="#f7c856" /> Your data is 100% Safe</li>
<li><BiCheck size={25} fill="#f7c856"/> Your data is 100% Safe</li>
</ul>

<ul  className='list-unstyled d-flex text-white gap-2 align-items-start mt-4'>
<li><Link href="/order-now" className='ordernow pe-4 ps-4 pt-2 pb-2 text-decoration-none'><OrdernowButton /></Link></li>
<li><Link href="javascript:void(Tawk_API.toggle())" className='livechat pe-4 ps-4 pt-2 pb-2 text-decoration-none'><LiveChat /></Link></li>
</ul>
</Col>
<Col lg={4}>
<div className="placeOverlay">
<div className="placeOrder bg-white pe-4 ps-4 pt-4 pb-4 rounded">
<h3 className='text-center pb-3'>Place an Order</h3>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor="" >Type of Service:</label>
<select name="" id="" className="form-control">
    <option value="">Select Academic paper</option>
</select>
</div>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor="" >Type of Paper:</label>
<select name="" id="" className="form-control">
    <option value="">Select Essay</option>
</select>
</div>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor="" >No of Pages:</label>
<select name="" id="" className="form-control">
    <option value="">Select No of Pages</option>
</select>
</div>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor="" >Academic Level:</label>
<select name="" id="" className="form-control">
    <option value="">Select Level</option>
</select>
</div>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor="" >Deadline:</label>
<select name="" id="" className="form-control">
    <option value="">Select Deadline</option>
</select>
</div>
<div className="form-group d-flex gap-2 align-items-center">
<label htmlFor=""><b>Total Price: $12.99</b></label>
<button type='button' className='pe-5 ps-5 pt-1 pb-1'>Submit</button>
</div>
</div>
</div>
</Col>
<Col lg={3}>
<Image src={headerKanguru} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
</Col>
</Row>
</Container>
</div>
</>
)
}

export default Header