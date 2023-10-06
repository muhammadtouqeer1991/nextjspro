'use client'
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row,Tab,Nav } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillCaretRight } from 'react-icons/Ai';


import coin1 from '../public/images/coin1.webp';

const PatchesCategory = () => {
return (
<>
<div className="PatchesCategory pt-5 pb-5">
<Container>
    <Row>
        <Col lg={12}>
        <h3 className='text-center m-0 fs-2 fw-bold pb-1'>Foundations Of Our Patches Making Company in UK</h3>
        <p className='text-center pb-3'> Foundations Of Our Patches Making Company in  Foundations Of Our Patches Making Company in UK</p>
        </Col>
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="backpatches">
    <Row>
        <Col lg={3}>
            <h5>Category</h5>
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="backpatches"><AiFillCaretRight size={20} fill="#d80000" /> Back Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bikerpatces"><AiFillCaretRight size={20} fill="#d80000" /> Biker Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="wovenpatces"><AiFillCaretRight size={20} fill="#d80000" /> Woven Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ironpatces"><AiFillCaretRight size={20} fill="#d80000" /> Iron Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="jacketpatces"><AiFillCaretRight size={20} fill="#d80000" /> Jacket Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="militarypatces"><AiFillCaretRight size={20} fill="#d80000" /> Military Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="moralpatces"><AiFillCaretRight size={20} fill="#d80000" /> Morale Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sewpatces"><AiFillCaretRight size={20} fill="#d80000" /> Sew on Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="velcropatces"><AiFillCaretRight size={20} fill="#d80000" /> Velcro Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="chenillepatces"><AiFillCaretRight size={20} fill="#d80000" /> Chenille Patches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="customhatpatces"><AiFillCaretRight size={20} fill="#d80000" /> Custom Hat Patches</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col lg={9}>
            <h5 className='fs-3 fw-bold text-center m-0 pb-4'>Patches For Category</h5>
            <Tab.Content>
                <Tab.Pane eventKey="backpatches">
                    <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="bikerpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="wovenpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="ironpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="jacketpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="militarypatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul></Tab.Pane>
                <Tab.Pane eventKey="moralpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="sewpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="velcropatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="chenillepatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="customhatpatces">
                <ul className='myBxs d-flex flex-wrap gap-3 list-unstyled m-0'>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                        <li> <Image src={coin1} alt="Essay Roo Logo" quality={75} style={{width:'110px',height:'auto'}} /> </li>
                    </ul>
                </Tab.Pane>
                
            </Tab.Content>
        </Col>
    </Row>
    </Tab.Container>
</Container>
</div>
</>
)
}

export default PatchesCategory