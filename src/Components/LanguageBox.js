import { setLang } from "./Functions"

export const FooterBox = () => {

    const langs =[
        {
            "label":"English",
            "sub":"en"
        },
        {
            "label":"Francais",
            "sub":"fr"
        },
        {
            "label":"اللغة العربية",
            "sub":"ar"
        }
    ]

    return (
        <div className=" absolute bottom-10 left-0 mx-auto w-full flex flex-row space-x-4 justify-center">
            {langs.map((item,key)=>(
                <button key={key} onClick={()=> setLang(item?.sub)}> {item?.label} </button>
            ))}
        </div>
    )
}

export const FooterBox2 = ({style}) => {
    const langs =[
        {
            "label":"English",
            "sub":"en"
        },
        {
            "label":"Francais",
            "sub":"fr"
        },
        {
            "label":"اللغة العربية",
            "sub":"ar"
        }
    ]

    return (
        langs.map((item,key)=>(
            <button  className={`opacity-60 hover:opacity-100 ${style}`} key={key} onClick={()=> setLang(item?.sub)}> {item?.label} </button>
        ))
    )
}