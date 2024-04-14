import Style from './loader.module.css'
export default function Loading(){
    return(
        <main className=" h-screen bg-black text-white flex items-center justify-center">
            <div id={Style.GlowDiv} className=" flex rounded-full items-center justify-center relative  overflow-hidden bg-cyan-300 h-40 w-40 ">


                  <div id={Style.rotatedDiv} className=' z-0 absolute  h-full w-52'>
                   
                  </div>

                <div className=' h-32 w-32 bg-black overflow-hidden z-50 rounded-full'>

                </div>
            </div>
        </main>
    )
}