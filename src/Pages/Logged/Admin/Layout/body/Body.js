import React, { useState } from 'react'
import FilteBox from '../../../../../Layout/FilteBox'
import { AffectToTeacher, Alert, GridCours, GridTeachers, GroupeCard } from '../../../../../Layout/Cards'
import { CoursesTable, TeachersTable } from '../../../../../Layout/Tables'
import { DetailCour, DetailProf, GroupesDetails } from '../../../../../Layout/Details'
import { UpdateCour, UpdateGroupe, UpdateProf } from '../../../../../Layout/Update'
import { DeleteData, SearchFun } from '../../../../../Components/Functions'
import { CreateStudent } from '../../../../../Layout/Create'

export const CoursBody = ({cours, lang}) => {
  const [detailsCour, setDetailsCour] = useState(null)
  const [updateCour, setUpdateCour] = useState(null)
  const [layout, setLayout] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <FilteBox lang={lang} text={lang.placeholder} setSearchTerm={setSearchTerm} layout={layout} setLayout={setLayout} />

      <div className='courses mt-10 flex flex-wrap justify-center'>
        {layout === 0 && <GridCours cours={SearchFun(cours?.cours, 'libelle', searchTerm)} setDetailsCour={setDetailsCour} />}
        {layout === 1 && <CoursesTable cours={SearchFun(cours?.cours, 'libelle', searchTerm)} lang={lang} setDetailsCour={setDetailsCour}  />}
      </div>

      {detailsCour && <DetailCour detailsCour={detailsCour} setDetailsCour={setDetailsCour} setUpdateCour={setUpdateCour} />}
      {updateCour && <UpdateCour detailsCour={detailsCour} setUpdateCour={setUpdateCour} />}
    </div>
  )
}

export const TeachersBody = ({teachers, lang}) => {
  let spinner = () => {}

    const [detailsProf, setDetailsProf] = useState(null)
    const [updateProf, setUpdateProf] = useState(null)
    const [selectedProf, setSelectedProf] = useState(null)
    
    const [layout, setLayout] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')

    const [deleteBtn, setDeleteBtn] = useState(false)

  return(
    <div>
      <FilteBox lang={lang} text={lang.placeholder} setSearchTerm={setSearchTerm} layout={layout} setLayout={setLayout} />
    
      <div className="relative overflow-x-auto  sm:rounded-lg mt-10">
          {layout === 0 && 
              <div className='flex flex-wrap justify-center space-x-4'>
                  <GridTeachers teachers={SearchFun(teachers?.professeurs, 'email', searchTerm)}  lang={lang} setDetailsProf={setDetailsProf} setUpdateProf={setUpdateProf} deleteBtn={setDeleteBtn} />
              </div>
          }
          {layout === 1 && <TeachersTable teachers={SearchFun(teachers?.professeurs, 'email', searchTerm)} lang={lang} setDetailsProf={setDetailsProf} setUpdateProf={setUpdateProf} deleteBtn={setDeleteBtn} />}
      </div>
      
      {deleteBtn && <Alert yesFun={()=> DeleteData(null, spinner, null, null, `/prof/destroy/${deleteBtn}`)} noFun={()=> setDeleteBtn(false)} bg={false} />}

      {detailsProf && <DetailProf detailsProf={detailsProf} setDetailsProf={setDetailsProf} setSelectedProf={setSelectedProf} />}
      {updateProf && <UpdateProf detailsProf={updateProf} setUpdateProf={setUpdateProf} />}
      {selectedProf && <AffectToTeacher lang={lang} cours={detailsProf?.cours} selectedProf={selectedProf} setSelectedProf={setSelectedProf} />}
    </div>
  )
}

export const GroupeBody = ({groupes, lang}) => {
  let spinner = () => {}

  const [layout, setLayout] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const [details, setDetails] = useState(false)
  const [update, setUpdate] = useState(null)
  const [createS, setCreateS] = useState(false)

  const [deleteBtn, setDeleteBtn] = useState(false)


  return (
    <div>
      <FilteBox text={lang?.placeholder} lang={lang} setSearchTerm={setSearchTerm} layout={layout} setLayout={setLayout} />

        <div className='mt-6 flex flex-wrap justify-center'>
          {SearchFun(groupes, 'name', searchTerm)?.map((item,key)=>(
            <GroupeCard data={item} key={key} setDetails={setDetails} />
          ))}
        </div>

        {deleteBtn && <Alert yesFun={()=> DeleteData(null, spinner, null, null, `/groupe/destroy/${deleteBtn}`)} noFun={()=> setDeleteBtn(false)} bg={false} />}

        {details && <GroupesDetails data={details} lang={lang} setDetails={setDetails} setUpdate={setUpdate} setAffect={setCreateS} setDeleteBtn={setDeleteBtn} />}
        {update && <UpdateGroupe data={update} setUpdate={setUpdate} />}
        {createS && <CreateStudent lang={lang} setCreateBtn={setCreateS} />}
    </div>
  )
}