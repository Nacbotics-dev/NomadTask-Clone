import './loader.css'

export function Loader(){
    return(
        <div className="flex justify-center items-center w-full h-full m-auto">
            <div className="loader"></div>
        </div>
    )
}


export function ButtonLoader(){
    return(
        <div className='min-h-[44px] min-w-[180px]'>
            <Loader/>
        </div>
    )
}