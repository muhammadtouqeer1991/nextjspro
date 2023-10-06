import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerLogo from '../public/images/footerLogo.svg';
import Payment from '../public/images/Payment.webp';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebook,BiLogoLinkedin,BiLogoInstagram } from 'react-icons/Bi';
import { BsTwitter } from 'react-icons/Bs';

const Footer = () => {
  return (
    <>
      <div className="Footer pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={4}>
            <Image src={footerLogo} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
            <p className='m-0 pt-3 pb-2'>The most important reason for getting 
assignment help is lackof time. Since 
its impossible to cover all project
by their assignment</p>
<ul className='m-0 list-unstyled gap-2 d-flex'>
  <li><Link href="#"><BiLogoFacebook size={25} fill="#000" /></Link></li>
  <li><Link href="#"><BsTwitter size={25} fill="#000" /></Link></li>
  <li><Link href="#"><BiLogoLinkedin size={25} fill="#000" /></Link></li>
  <li><Link href="#"><BiLogoInstagram size={25} fill="#000" /></Link></li>
</ul>
            </Col>
            <Col lg={2}>
              <div className="serviceInfo">
                <h4 className='m-0 pb-2 fw-bold fs-4'>Our Services</h4>
                <ul className='list-unstyled m-0'>
                  <li><Link href="#">Back Patches</Link></li>
                  <li><Link href="#">Biker Patches</Link></li>
                  <li><Link href="#">Cotton Patches</Link></li>
                  <li><Link href="#">Iron Patches</Link></li>
                  <li><Link href="#">Jacket Patches</Link></li>
                  <li><Link href="#">Militarys Patches</Link></li>
                  <li><Link href="#">Morals Patches</Link></li>
                  <li><Link href="#">Sew on Patches</Link></li>
                  <li><Link href="#">Velcro Patches</Link></li>
                  <li><Link href="#">Chemille Patches</Link></li>
                  <li><Link href="#">Custom Hat Patches</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
            <div className="serviceInfo">
                <h4 className='m-0 pb-2 fw-bold fs-4'>Quick Links</h4>
                <ul className='list-unstyled m-0'>
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Sample</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Get Quote</Link></li>
                  <li><Link href="#">Free Instant Quote</Link></li>
                  <li><Link href="#">Reviews</Link></li>
                  <li><Link href="#">Sitemap</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Term and Condition</Link></li>
                  <li><Link href="#">Privacy Policies</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="serviceInfo">
                <h4 className='m-0 pb-2 fw-bold fs-4'>Contact info</h4>
                <ul className='m-0 list-unstyled pb-3'>
                  <li><Link href="#">+441613810000</Link></li>
                  <li><Link href="#">+441613810000</Link></li>
                  <li><Link href="#">embroiderypatches.co.uk</Link></li>
                </ul>
                <Image src={Payment} quality={75} priority className='kanguruImg img-fluid' alt='kanguru' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyRight pt-2 pb-2">
        <Container>
          <Row>
            <Col lg={12}>
              <p className='m-0 text-center text-white'>Copyright © 2015 - 2023   embroiderypatches.co.uk- All Right Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer