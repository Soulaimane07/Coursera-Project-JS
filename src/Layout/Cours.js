import { GetLang } from "../Components/Functions"
import { uploadsURL } from "../Components/Variables"

export const AdminCour = ({item, setDetailsCour}) => {
    let lang = GetLang()?.data.courses

    return(
        <button onClick={()=> setDetailsCour(item)} className='bg-gray-300 text-left w-full rounded-md px-6 py-5 mb-4 md:mx-2 hover:shadow-xl transition-all flex flex-col md:flex-row'>
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
}