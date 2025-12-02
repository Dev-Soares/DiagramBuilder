import startTutorial from '../../utils/tutorial';
import { useState, useEffect } from 'react';

const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

const TutorialButton = () => {

  const [screenType, setScreenType] = useState(isMobileDevice() ? 'mobile' : 'desktop');

    return (
        <div className="flex flex-col justify-start items-start mb-6 gap-2 opacity-0 animate-fadeIn w-full relative">
            <button onClick={() => startTutorial(screenType)} className='w-full h-auto flex justify-start items-center gap-1 md:gap-2 lg:gap-3 text-yellow-400 font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg
                        hover:text-white hover:translate-y-[-2px] transition-all duration-600'>
                <span className='material-symbols-outlined'>help</span> Como Funciona
            </button>
        </div>
    )
}

export default TutorialButton
