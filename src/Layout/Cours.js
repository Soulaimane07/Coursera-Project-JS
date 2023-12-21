import { GetLang } from "../Components/Functions"
import { uploadsURL } from "../Components/Variables"

export const AdminCour = ({item, setDetailsCour, affect, selectedCour, cours, deleteBtn, deleteFun}) => {
    let lang = GetLang()?.data.courses
    let result

    affect === 1 &&(
        result = (
            <button onClick={()=> setDetailsCour(item?.id)} className={`${selectedCour === item.id ? "bg-blue-500 text-white" : "bg-blue-100"} text-left w-full rounded-md px-3 py-3 mb-4 hover:shadow-xl transition-all flex flex-row items-center space-x-4`}>
                <img src={`${uploadsURL}/${item.image}`} className='w-1/4 rounded-md' alt="" />
                <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
            </button>
    ))

    affect === 2 &&(
        result = (
            <div className={`bg-blue-100 text-left mt-2 w-full rounded-md px-3 py-3 mb-4 hover:shadow-xl transition-all flex flex-row items-center space-x-4 justify-between`}>
                <div className="flex flex-row items-center space-x-2">
                    <img src={`${uploadsURL}/${item.image}`} className='w-40 rounded-md' alt="" />
                    <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
                </div>

                {deleteBtn &&
                    <button onClick={deleteFun} className="hover:text-red-600 transition-all">
                        Delete
                    </button>
                }
            </div>
    ))

    affect === 0 &&  ( 
        result = (
        <button onClick={()=> setDetailsCour(item)} className=' bg-blue-100 text-left w-full rounded-md px-6 py-5 mb-4 md:mx-2 hover:shadow-xl transition-all flex flex-col md:flex-row'>
            <img src={`${uploadsURL}/${item.image}`} className='w-full md:w-52 rounded-md mb-4 md:mb-0' alt="" />
            
            <div className='ml-6 w-full'>
                <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
                <p> {item?.desc?.length > 120 ? item?.desc?.substring(0,120)+'...' : item?.desc} </p>
                <div className=' text-sm mt-2'>
                    <p> {lang.startDate}: {item.dateDebut} </p>
                    <p> {lang.endDate}: {item.dateFin} </p>
                </div>
            </div>
        </button>
    ))


    return result
}