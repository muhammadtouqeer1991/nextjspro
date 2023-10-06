"use client"
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { IoLogoWhatsapp } from 'react-icons/Io';
import { MdEmail } from 'react-icons/Md';
import logoSvg from '../public/images/whiteLogo.svg';
import whatsappIcon from '../public/images/whatsappIcon.svg';

const Navigation = () => {

const [scroll, setScroll] = useState(false);
useEffect(() => {
window.addEventListener("scroll", () => {
setScroll(window.scrollY > 50);
});
}, []);

return (
<>
<div className={`navigationSec ${scroll ? "active" : ""}`}>
<Navbar expand="lg">
<Container>
<Link className='navbar-brand' href="/"><Image src={logoSvg} alt="Essay Roo Logo" quality={75} style={{width:'230px',height:'auto'}} /></Link>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto text-white align-items-center gap-1">
  <Link className="nav-link" href="/">Home</Link>
  <Link className="nav-link" href="/about-us">About Us</Link>
  <NavDropdown title="Services" id="basic-nav-dropdown" className='pt-0 pb-0'>
    <Link className="dropdown-item" href="/services">Assignment Help</Link>
    <Link className="dropdown-item" href="/dissertation-help">Dissertation Help</Link>
    <Link className="dropdown-item" href="/thesis-help">Thesis Help</Link>
    <Link className="dropdown-item" href="/cipd-assignment-help">CIPD Assignment Help</Link>
    <Link className="dropdown-item" href="/hr-assignment-help">HR Assignment Help</Link>
    <Link className="dropdown-item" href="/law-assignment-help">Law Assignment Help</Link>
    <Link className="dropdown-item" href="/mba-assignment-help">MBA Assignment Help</Link>
  </NavDropdown>
  <Link className="nav-link" href="/pricing" >Pricing</Link>
  <Link className="nav-link" href="/reviews">Reviews</Link>
  <Link className="nav-link" href="/blog">Blog</Link>
  <Link className="nav-link" href="#"><Image src={whatsappIcon} alt="Essay Roo Logo" quality={75} style={{width:'24px',height:'auto'}} /> +441613810000</Link>
  <Link className="nav-link ordernow pe-3 ps-3" href="#">Live Chat</Link>
  <Link className="nav-link livechat pe-3 ps-3 ms-1" href="/order-now">Order Now</Link>
  
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
</>
)
}

export default Navigation