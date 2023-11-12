import { LinkButton } from "../../../Components/Buttons"
import { PrimaryColor, box1Image } from "../../../Components/Variables"

export const Box1 = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row justify-between my-28 px-10 md:px-20 lg:px-60 py-10 ">
            <div className="w-full md:w-1/2">
                <h1 className=" font-bold text-4xl"> Learn Skills From Our Top Instructors </h1>
                <p className="my-4 opacity-80"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer.
                </p>
                
                <div className='buttons flex flex-row items-center space-x-4'>
                    <LinkButton link="/login" text="Log in" bgColor="white" color={PrimaryColor} border={PrimaryColor} width={1} />
                    <LinkButton link="/signup" text="Join for free" bgColor={PrimaryColor} color="white" border={PrimaryColor}width={1}  />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 justify-center md:justify-end flex mb-10 md:mb-0">
                <img src={box1Image} className="max-w-sm md:w-full" />
            </div>
        </div>
    )
}

export const Box2 = () => {
    return(
        <div className="flex text-white flex-col md:flex-row justify-between my-28 px-10 md:px-20 lg:px-60 py-20 md:space-x-6" style={{backgroundColor: "#14213d"}}>
            <div className="w-full md:w-1/2 lg:w-1/3 justify-center md:justify-end flex mb-10 md:mb-0">
                <img src={box1Image} className="max-w-sm md:w-full" />
            </div>
            <div className="w-full md:w-1/2">
                <h1 className=" font-medium text-4xl"> Discover Top Instructors Around The World </h1>
                <p className="my-4 opacity-80"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer.
                </p>
                
                <div className='buttons flex flex-row items-center space-x-4'>
                    <LinkButton link="/courses" text="Discover more" bgColor={PrimaryColor} color="white" border={PrimaryColor} />
                </div>
            </div>
        </div>
    )
}

export const Box3 = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row justify-between my-28 px-10 md:px-20 lg:px-60 py-10">
            <div className="w-full md:w-1/2">
                <h1 className=" font-medium text-4xl"> Browse By Categories </h1>
                <p className="my-4 opacity-80"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer.
                </p>
                
                <div className='buttons flex flex-row items-center space-x-4'>
                    <LinkButton link="/categories" text="All Categories" bgColor="white" color={PrimaryColor} border={PrimaryColor} />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 justify-center md:justify-end flex mb-10 md:mb-0">
                <img src={box1Image} className=" max-w-sm md:w-full" />
            </div>
        </div>
    )
}