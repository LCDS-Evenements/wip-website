import { ReactElement } from 'react';
import { Footer } from './footer';

const App = (): ReactElement => {
  return (
    <div className="bg-[#0C0A09] w-screen h-screen flex items-center justify-center flex-col gap-4 relative">
      <span className="text-3xl text-white">Prochainement...</span>
      <span className="text-3xl">🤫</span>
      <Footer />
    </div>
  )
};

export default App
