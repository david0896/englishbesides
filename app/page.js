import Head from 'next/head';
import Countdown from "./component/countdown";
import FormEmail from "./component/formEmail";
import { TbChartHistogram, TbAlarm, TbAlignBoxLeftTop, TbCircleCheckFilled, TbMoodPuzzled } from "react-icons/tb";
import Videoplayer from "./component/videoplayer";

export default function Home() {

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <div className="relative">
        <img src="https://i.postimg.cc/T1LrC3cD/bg-banner-english-besides.png" className="w-full lg:-mt-32 aspect-video" alt="Banner english besides"/>
        <div className="absolute inset-0 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-9/12 lg:mx-auto">
            <div className="p-8 space-y-5 col-span-3 -mb-16 lg:mb-0">
              <div className="flex space-x-4 items-center">
                <span className="py-1 px-3 lg:py-2 lg:px-6 bg-[#fc00fc] rounded-3xl text-white font-semibold text-sm lg:text-base">Gratis</span> 
                <p className="font-semibold text-[#6e5467] text-sm lg:text-base">Curso online</p>
              </div>
              <h1 className=" text-[#6e5467] font-[900] text-base lg:text-5xl uppercase lg:leading-[3.5rem] w-2/4 lg:w-full">
                cumple tu sueño de <span className="text-[#fc00fc]">hablar inglés</span> con fluidez
              </h1>
              <p className="hidden lg:block text-[#6e5467] lg:font-medium w-4/5">
                Comunícate con confianza en cualquier situación. Hablar inglés con fluidez te dará la seguridad que necesitas para expresarte sin miedo.
              </p>
              <FormEmail/>
            </div>
            <div className="p-8 col-span-2 hidden lg:grid content-end">
              <div className="grid grid-cols-5 rounded-lg border-solid border-2 border-[#fc00fc]">
                <div className="col-span-2 bg-[#fc00fc]/60 backdrop-blur-sm">
                  <div className="bg-[#fc00fc] p-2 h-full border-solid border-2 border-[#ffffff] rounded-lg">
                    <p className=" text-white font-bold text-center text-3xl">Julio 15 <span className="block font-normal text-base">Siguiente clase</span></p>
                  </div>
                </div>
                <div className=" col-span-3 p-2 bg-[#fc00fc]/60 backdrop-blur-sm">
                  <Countdown/>
                </div>
                <div className=" col-span-5 p-2 bg-[#fc00fc]/60 backdrop-blur-sm border-t-2 border-solid border-[#fc00fc]">
                  <p className=" text-white font-medium">Próxima clase: Agosto 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* countdown mobile version */}
      <div className="grid grid-cols-1 lg:hidden p-4 content-center mt-7">
        <div className="grid grid-cols-5 rounded-lg border-solid border-2 border-[#fc00fc]">
          <div className="col-span-2 p-2 bg-[#fc00fc] border-solid border-2 border-[#ffffff] rounded-lg">
            <p className=" text-white font-bold text-center text-3xl">Julio 15 <span className="block font-normal text-base">Siguiente clase</span></p>
          </div>
          <div className=" col-span-3 p-2 bg-[#fc00fc]/60">
            <Countdown/>
          </div>
          <div className=" col-span-5 p-2 bg-[#fc00fc]/60 border-t-2 border-solid border-[#fc00fc]">
            <p className=" text-white font-medium">Próxima clase: Agosto 12</p>
          </div>
        </div>
      </div>
      <div className=" -mt-20 relative hidden lg:block">
        <div className="mx-auto w-9/12 p-4">
          <div className="grid grid-cols-3 gap-3 rounded-xl p-4 text-white bg-[#fc00fc]">
            <div className="p-4 flex items-center justify-center border-r-4 border-solid border-white">
              <TbChartHistogram className=" text-5xl mr-2"/>
              <p className="">Nivel de habilidad
                <span className="block font-bold text-2xl">Basico</span>
              </p>
            </div>
            <div className="p-4 flex items-center justify-center border-r-4 border-solid border-white">
              <TbAlarm className=" text-5xl mr-2"/>
              <p className="">Tiempo de duración
                <span className="block font-bold text-2xl">5 horas</span>
              </p>
            </div>
            <div className="p-4 flex items-center justify-center">
              <TbAlignBoxLeftTop className=" text-5xl mr-2"/>
              <p className="">Prerequisitos
                <span className="block font-bold text-2xl">Ninguno</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10" id="seccion1">
        <div className=" mx-auto w-9/12">
          <h2 className="text-[#6e5467] text-center text-base lg:text-3xl font-semibold">Gana confianza y <span className="text-[#fc00fc]">supera tu miedo</span> a hablar inglés</h2>
          <div className=" grid grid-cols-1 lg:grid-cols-5 gap-7 lg:gap-20 mt-14 mb-16">
            <div className=" col-span-3">
              <h3 className="text-[#fc00fc] lg:text-xl font-semibold mb-2">¿Eres principiante en el inglés?</h3>
              <p className="text-[#6e5467]">Este curso está diseñado especialmente para ti. Te guiaremos desde los cimientos del idioma hasta un nivel básico de conversación, permitiéndote comunicarte con confianza en situaciones cotidianas.</p>
            </div>
            <div className=" col-span-2">
              <h3 className="text-[#fc00fc] lg:text-xl font-semibold mb-2">Habilidades que ganarás</h3>
              <ul className="list-disc text-[#fc00fc]">
                <li><p className="text-[#6e5467]">Seguir instrucciones básicas</p></li>
                <li><p className="text-[#6e5467]">Expresar necesidades básicas</p></li>
                <li><p className="text-[#6e5467]">hacer y responder preguntas básicas</p></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Videoplayer/>
          </div>
        </div>
      </div>
      <div className=" mt-24 mb-14 h-40 overflow-hidden bg-gradient-to-r from-[#d803d9] to-[#5905da]">
        <div className="mx-auto w-9/12">
          <div className=" grid col-span-1 lg:grid-cols-5">
            <div className=" col-span-3 p-4 h-40 grid content-center">
              <p className=" text-white pb-2 block">
                Regístrate ahora y asegura tu lugar en nuestro curso gratuito de inglés
               </p>
               <div>
                <FormEmail/>
               </div>
            </div>
            <div className=" col-span-2 hidden lg:grid justify-items-end">
              <img className=" w-72 h-72 object-cover opacity-30" src="https://i.postimg.cc/25YvG4SN/Screenshot-20240603-161937-removebg-preview.png" alt="Curso de ingles"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10" id="seccion2">
        <div className=" mx-auto w-9/12">
          <h2 className="text-[#6e5467] text-center text-base lg:text-3xl font-semibold"><span className="text-[#fc00fc]">Resumen</span> del curso</h2>
          <p className="text-[#6e5467] mb-16 text-center">No te pierdas la oportunidad de descubrir todo lo que nuestro curso de inglés tiene para ti</p>
          {/* accordion */}
          <div className="join join-vertical w-full mb-10">
            <div className=" border border-[#fc00fc]">
              <div className="collapse-title text-xl flex items-center">
                <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#fc00fc]">
              <input type="radio" name="my-accordion-4" defaultChecked /> 
              <div className="collapse-title flex items-center space-x-2">
                <TbCircleCheckFilled className="lg:text-4xl text-[#fc00fc]"/>
                <div>
                  <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
                  <p className="text-[#6e5467]">Da tus primeros pasos hacia la fluidez de hablar en inglés</p>
                </div>
              </div>
              <div className="collapse-content "> 
                <ul className="list-disc text-[#fc00fc] ml-6 my-4">
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#fc00fc]">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title flex items-center space-x-2">
                <TbCircleCheckFilled className="lg:text-4xl text-[#fc00fc]"/>
                <div>
                  <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
                  <p className="text-[#6e5467]">Da tus primeros pasos hacia la fluidez de hablar en inglés</p>
                </div>
              </div>
              <div className="collapse-content "> 
                <ul className="list-disc text-[#fc00fc] ml-6 my-4">
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li><li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#fc00fc]">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title flex items-center space-x-2">
                <TbCircleCheckFilled className="lg:text-4xl text-[#fc00fc]"/>
                <div>
                  <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
                  <p className="text-[#6e5467]">Da tus primeros pasos hacia la fluidez de hablar en inglés</p>
                </div>
              </div>
              <div className="collapse-content "> 
                <ul className="list-disc text-[#fc00fc] ml-6 my-4">
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#fc00fc]">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title flex items-center space-x-2">
                <TbCircleCheckFilled className="lg:text-4xl text-[#fc00fc]"/>
                <div>
                  <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
                  <p className="text-[#6e5467]">Da tus primeros pasos hacia la fluidez de hablar en inglés</p>
                </div>
              </div>
              <div className="collapse-content "> 
                <ul className="list-disc text-[#fc00fc] ml-6 my-4">
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#fc00fc]">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title flex items-center space-x-2">
                <TbCircleCheckFilled className="lg:text-4xl text-[#fc00fc]"/>
                <div>
                  <h3 className="text-[#6e5467] lg:text-xl font-semibold mb-2">Programa de estudio</h3>
                  <p className="text-[#6e5467]">Da tus primeros pasos hacia la fluidez de hablar en inglés</p>
                </div>
              </div>
              <div className="collapse-content "> 
                <ul className="list-disc text-[#fc00fc] ml-6 my-4">
                  <li>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                      <p className="text-[#6e5467]">Seguir instrucciones básicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10" id="seccion3">
        <div className=" mx-auto w-9/12">
          <div className=" grid grid-cols-1 lg:grid-cols-5">
            <div className=" col-span-3 grid justify-items-center mb-6 lg:mb-0">
              <img src="https://i.postimg.cc/cLSw37Pw/Untitled-1.png" alt="Mosaico de alumnos" className=" lg:w-[35rem] lg:h-[35rem]"/>
            </div>
            <div className=" col-span-2 grid content-center">
              <h2 className="text-[#6e5467] text-base lg:text-3xl font-semibold mb-5">En que <span className="text-[#fc00fc]">favorece</span> saber otro idioma como el inglés</h2>
              <p className="text-[#6e5467] mb-3">
                Este curso introductorio de inglés te proporcionará las herramientas que necesitas para comunicarte de manera efectiva en inglés. Aprenderás  conceptos básicos como frases y expresiones cotidianas.
              </p>
              <p className="text-[#6e5467]">
                Aprender inglés no solo te abre las puertas a un mundo de oportunidades profesionales y de viajes, sino que también te brinda beneficios invaluables para tu desarrollo personal e intelectual.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 h-40 overflow-hidden bg-gradient-to-r from-[#d803d9] to-[#5905da]">
        <div className="mx-auto w-9/12">
          <div className=" grid col-span-1 lg:grid-cols-5">
            <div className=" col-span-3 p-4 h-40 grid content-center">
              <p className=" text-white pb-2 block">
                Regístrate ahora y asegura tu lugar en nuestro curso gratuito de inglés
               </p>
               <div>
                <FormEmail/>
               </div>
            </div>
            <div className=" col-span-2 hidden lg:grid justify-items-end">
              <img className=" w-72 h-72 object-cover opacity-30" src="https://i.postimg.cc/25YvG4SN/Screenshot-20240603-161937-removebg-preview.png" alt="Curso de ingles"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20" id="seccion4">
        <div className=" mx-auto w-9/12">
          <h2 className="text-[#6e5467] text-center text-base lg:text-3xl font-semibold mb-14"><span className="text-[#fc00fc]">Preguntas</span> frecuentes</h2>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta uno?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta dos?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta tres?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta uno?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta dos?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#6e5467] mb-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title flex items-center space-x-2 text-xl font-medium text-white">
              <TbMoodPuzzled className="lg:text-4xl"/>
              <p>¿Pregunta tres?</p>
            </div>
            <div className="collapse-content text-white"> 
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
