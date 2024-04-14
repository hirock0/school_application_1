"use client"
export default function Syllebus() {

  const onDownload = ()=>{
    const underprocess = document.querySelector("#underProcessing") as HTMLElement;
    underprocess.style.visibility = "visible"
  }
  const onBack =()=>{
    const underprocess = document.querySelector("#underProcessing") as HTMLElement;
    underprocess.style.visibility = "hidden"
  }
  return(
      <main>
          <div>
            <h1 className=" underline underline-offset-4 text-center mt-5">S.S.C Syllebus</h1>
            <div>
                <table className=" w-full text-center mt-5 border">
                  <thead>
                    <tr className=" bg-red-400 border">
                      <td className=" border">Year</td>
                      <td className=" border">Subjects</td>
                      <td className=" border" onClick={onDownload}>PDF</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Science</td>
                      <td className=" border" onClick={onDownload}><button>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Arts</td>
                      <td className=" border" onClick={onDownload}><button>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Commerce</td>
                      <td className=" border" onClick={onDownload}><button>download</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div>
            <h1 className=" underline underline-offset-4 text-center mt-5">J.S.C Syllebus</h1>
            <div>
                <table className=" w-full text-center mt-5 border">
                  <thead>
                    <tr className=" bg-red-400 border">
                      <td className=" border">Year</td>
                      <td className=" border">Subjects</td>
                      <td className=" border">PDF</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Science</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Arts</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Commerce</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div>
            <h1 className=" underline underline-offset-4 text-center mt-5">P.S.C Syllebus</h1>
            <div>
                <table className=" w-full text-center mt-5 border">
                  <thead>
                    <tr className=" bg-red-400 border">
                      <td className=" border">Year</td>
                      <td className=" border">Subjects</td>
                      <td className=" border">PDF</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Science</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Arts</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Commerce</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div>
            <h1 className=" underline underline-offset-4 text-center mt-5">H.S.C Syllebus</h1>
            <div>
                <table className=" w-full text-center mt-5 border">
                  <thead>
                    <tr className=" bg-red-400 border">
                      <td className=" border">Year</td>
                      <td className=" border">Subjects</td>
                      <td className=" border">PDF</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Science</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Arts</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                    <tr className=" border">
                      <td className=" border">2024</td>
                      <td className=" border">Commerce</td>
                      <td className=" border"><button onClick={onDownload}>download</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>


          <div id="underProcessing" className=" invisible flex justify-center pt-10 text-xl text-white bg-black fixed top-0 right-0 left-0  h-screen">
              <button onClick={onBack} className=" w-52 h-8 border  rounded-md bg-red-500  absolute left-4 top-4">Back</button>
              Under Process...
          </div>
      </main>
  )
}
