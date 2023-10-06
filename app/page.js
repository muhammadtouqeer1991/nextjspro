import React from 'react'
import Mainheader from '@/components/Mainheader'
import HomeForm from '@/components/HomeForm'
import PatchesIndustry from '@/components/PatchesIndustry'
import IndustryContent from '@/components/IndustryContent'
import ClassicPatches from '@/components/ClassicPatches'
import EmbroidyContent from '@/components/EmbroidyContent'
import CalltoAction from '@/components/CalltoAction'
import Testimonails from '@/components/Testimonails'
import CompanyContent from '@/components/CompanyContent'
import PatchesCategory from '@/components/PatchesCategory'
import FaqSec from '@/components/FaqSec'
import ProcessSec from '@/components/ProcessSec'

const page = () => {
  return (
    <>
    <Mainheader />
    <HomeForm />
    <PatchesIndustry />
    <IndustryContent />
    <ClassicPatches />
    <EmbroidyContent />
    <CalltoAction />
    <Testimonails />
    <CompanyContent />
    <PatchesCategory />
    <FaqSec />
    <ProcessSec />
    </>
  )
}

export default page