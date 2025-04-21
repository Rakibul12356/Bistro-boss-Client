import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
      <p className='text-[#D99904] mb-2'>--<i>{subHeading}</i>---</p>
      <h3 className='text-2xl border-y-2 border-[#E8E8E8] py-4 uppercase font-bold'>{heading}</h3>
    </div>
  )
}

export default SectionTitle
