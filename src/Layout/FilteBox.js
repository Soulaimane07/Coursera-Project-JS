import React from 'react'
import { Layout, SearchBox } from './Cards'

function FilteBox({text, setSearchTerm, layout, setLayout, lang}) {
  return (
    <div className='flex flex-row justify-between items-center mt-10'>
        <SearchBox placeholder={text} setSearchTerm={setSearchTerm} />
        <Layout lang={lang} layout={layout} setLayout={setLayout} />
    </div>
  )
}

export default FilteBox