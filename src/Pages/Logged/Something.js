import React from 'react'
import Header from './Header'
import { GetToTop } from '../../Components/Functions'

function Something() {
  GetToTop()

  return (
    <div className='w-full py-10 px-20'>
      <Header title="Someting" total={0} />
    </div>
  )
}

export default Something