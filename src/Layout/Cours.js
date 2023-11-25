import { uploadsURL } from "../Components/Variables"

export const AdminCour = ({item, key, setDetailsCour}) => {
    return(
        <button onClick={()=> setDetailsCour(item)} key={key} className='bg-gray-300 text-left w-full rounded-md px-6 py-5 mb-4 mx-2 hover:shadow-xl transition-all flex flex-row'>
            <img src={`${uploadsURL}/${item.image}`} className='w-52 rounded-md' />
            
            <div className='ml-6 w-full'>
                <h1 className='text-xl font-medium mb-2'> {item.libelle} </h1>
                <p> {item.desc} </p>
                <div className=' text-sm mt-2'>
                    <p> Date debut: {item.dateDebut} </p>
                    <p> Date fin: {item.dateFin} </p>
                </div>
            </div>
        </button>
    )
}