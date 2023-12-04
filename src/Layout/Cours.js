import { GetLang } from "../Components/Functions"
import { uploadsURL } from "../Components/Variables"

export const AdminCour = ({item, setDetailsCour, affect}) => {
    let lang = GetLang()?.data.courses
    let result
    
    affect ?
        result = (
            <button className=' bg-blue-100 text-left w-full rounded-md px-3 py-3 mb-4 hover:shadow-xl transition-all flex flex-row items-center space-x-4'>
                <img src={`${uploadsURL}/${item.image}`} className='w-1/3 rounded-md' />
                <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
            </button>
    )
    :   result = (
        <button onClick={()=> setDetailsCour(item)} className='bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 md:mx-2 hover:shadow-xl transition-all flex flex-col md:flex-row'>
            <img src={`${uploadsURL}/${item.image}`} className='w-full md:w-52 rounded-md mb-4 md:mb-0' />
            
            <div className='ml-6 w-full'>
                <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
                <p> {item?.desc?.length > 120 ? item?.desc?.substring(0,120)+'...' : item?.desc} </p>
                <div className=' text-sm mt-2'>
                    <p> {lang.startDate}: {item.dateDebut} </p>
                    <p> {lang.endDate}: {item.dateFin} </p>
                </div>
            </div>
        </button>
    )


    return result
}