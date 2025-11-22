import { useState, useRef, useEffect } from 'react';

const SelectArchitecture = ({ selectedArchitecture, setSelectedArchitecture }) => {

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  const containerRef = useRef(null);

  // fecha ao clicar fora
  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setIsSelectOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className='w-full h-auto flex justify-start items-start flex-col cursor-pointer'>
      <div ref={containerRef} className='relative w-[80%] cursor-pointer'>
        <button
          onClick={() => setIsSelectOpen((s) => !s)}
          className='w-full h-auto p-2 px-4 bg-white flex justify-between items-center rounded-xl border-2 border-gray-200 shadow-md max-h-16 cursor-pointer'
          type="button"
        >
          {selectedArchitecture === 'aws' ? (
            <img src='/aws-icon.webp' className='max-w-[15%]' alt="AWS" />
          ) : (
            <img src='/azure-icon.png' className='max-w-[15%]' alt="Azure" />
          )}
          <span className="material-symbols-outlined">
            {isSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          </span>
        </button>

        {isSelectOpen && (
          <div
            className='absolute left-0 top-full mt-2 w-full bg-white rounded-xl shadow-lg z-50 overflow-hidden cursor-pointer'
            role="menu"
          >
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-gray-100 cursor-pointer'
              onClick={() => { setSelectedArchitecture('aws'); setIsSelectOpen(false); }}
              type="button"
            >
              <img src='/aws-icon.webp' className='h-10 w-10' alt="AWS" />
              <span>AWS</span>
            </button>

            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-gray-100 cursor-pointer'
              onClick={() => { setSelectedArchitecture('azure'); setIsSelectOpen(false); }}
              type="button"
            >
              <img src='/azure-icon.png' className='h-10 w-10' alt="Azure" />
              <span>Azure</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectArchitecture;

