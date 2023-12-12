import React from 'react'
import { Layout, SearchBox } from './Cards'

function FilteBox({setSearchTerm, layout, setLayout}) {
  return (
    <div className='flex flex-row justify-between items-center mt-10'>
        <SearchBox placeholder={"Search by cour title"} setSearchTerm={setSearchTerm} />
        <Layout layout={layout} setLayout={setLayout} />
    </div>
  )
}

export default FilteBox