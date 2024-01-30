import { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <div 
      style={{backgroundImage: "url('./background.png')"}} 
      className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat font-remaid gap-2 relative overflow-hidden"
    >
      <img className="absolute sm:top-4 top-6" src="./guirlande.png" alt="guirlande" />
      <img className="sm:w-1/4 w-2/3" src="./logo.png" alt="logo cuicuitedays" />
      <p className="text-white text-2xl">Site en cours de construction...</p>
      <img className="hidden sm:block animate-spin-slow delay-150 absolute w-[7%] top-6 left-6" src="./flower.png" alt="fleur" />
      <img className="hidden sm:block animate-spin-slow delay-100 absolute w-[7%] top-6 right-6" src="./flower.png" alt="fleur" />
      <img className="hidden sm:block animate-spin-slow delay-150 absolute w-[7%] bottom-6 left-6" src="./flower.png" alt="fleur" />
      <img className="hidden sm:block animate-spin-slow delay-100 absolute w-[7%] bottom-6 right-6" src="./flower.png" alt="fleur" />
      <div className="absolute bottom-6 rounded-3xl bg-white/20 backdrop-blur-md py-4 px-4 flex items-center gap-3 border-2 border-white">
        <div className="w-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a target='_blank' href="https://www.instagram.com/cuicuitedays/">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
        <div className="bg-[#4267B2] p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a target='_blank' href="https://www.facebook.com/people/Les-Cuicuitedays/100089684250095/?mibextid=LQQJ4d">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
        <div className="bg-black p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a target='_blank' href="https://www.tiktok.com/@cuicuitedays">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          </a>
        </div>
        <div className="bg-[#77E472] p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a target='_blank' href="https://linktr.ee/cuicuitedays">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linktree" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" />
              <path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" />
            </svg>
          </a>
        </div>
        <div className="bg-[#FF0000] p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a target='_blank' href="https://www.youtube.com/@lescuicuitedays">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a>
        </div>
        {/* <div className="bg-[#0e76a8] p-2 rounded-full border-2 border-transparent hover:border-white cursor-pointer flex items-center justify-center">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  )
};

export default App
