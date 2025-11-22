import React from 'react'
import toast from 'react-hot-toast'

const ErrorAlert = ({ t, message }) => {
  return (
    <div 
     className={`${
        t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
     } max-w-md w-full bg-white border-2 border-red-700 shadow-lg rounded-lg pointer-events-auto flex flex-row z-50`}>
        
        <div className='flex flex-row flex-1 justify-start font-bold items-center text-red-700 gap-2 p-4'>
            <span className='material-symbols-outlined text-4xl!'>error</span>
            <span className='text-gray-800 text-md'>{message || 'Ocorreu um erro inesperado.'}</span>
        </div>

        <div className='flex border-l border-gray-200'>
            <button 
              onClick={() => toast.dismiss(t.id)} 
              className='px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-red-700 transition-colors duration-400 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer'>
              Fechar
            </button>
        </div>
    </div>
  )
}

export default ErrorAlert
