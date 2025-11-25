import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='absolute top-0 left-0 w-full bg-linear-to-br from-blue-950 to-blue-800 shadow-lg z-50 select-none'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
        <div className='flex justify-between items-center h-16'>
           
          <div 
            onClick={() => navigate('/')} 
            className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'
          >
            <span className="material-symbols-outlined text-white text-3xl">architecture</span>
            <span className='text-xl font-bold text-white'>ProjectBuilder</span>
          </div>

           
          <div className='hidden md:flex items-center gap-8'>
            <button 
              onClick={() => navigate('/create-diagram')} 
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Criar Projeto
            </button>
            <a 
              href='#details'  
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Recursos
            </a>
            <a 
              href='#guide'  
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Como Funciona
            </a>
          </div>

              
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white p-2'
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        
        {isMenuOpen && (
          <div className='md:hidden pb-4 flex flex-col gap-4 border-t border-blue-700 pt-4'>
            <button 
              onClick={() => {
                navigate('/create-diagram');
                setIsMenuOpen(false);
              }} 
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left'
            >
              Criar Projeto
            </button>
            <a 
              href='#details'
              onClick={() => setIsMenuOpen(false)}
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left cursor-pointer'
            >
              Recursos
            </a>
            <a 
              href='#guide'
              onClick={() => setIsMenuOpen(false)}
              className='text-gray-200 hover:text-blue-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left cursor-pointer'
            >
              Como Funciona
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
