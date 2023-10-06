import BreadCrumb from '@/components/BreadCrumb'
import CompanyContent from '@/components/CompanyContent'
import ProcessSec from '@/components/ProcessSec'
import Testimonails from '@/components/Testimonails'
import React from 'react'

const page = () => {
  return (
    <>
        <BreadCrumb title="About Us" />
        <Testimonails />
        <CompanyContent />
        <ProcessSec />
    </>
  )
}

export default page