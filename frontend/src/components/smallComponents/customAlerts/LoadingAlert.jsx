const LoadingAlert = ({ t }) => {
  return (
    <div 
     className={`${ t.visible ? 'animate-custom-enter' : 'animate-custom-leave'}
     max-w-md w-full bg-white border-2 border-yellow-400 shadow-lg rounded-lg pointer-events-auto flex flex-row z-50`}>
        <div className='flex flex-row flex-1 justify-start font-bold items-center text-yellow-400 gap-4 p-4'>
            <Spinner />
            <span className='text-gray-800 text-md'>Carregando Dados...</span>
        </div>
    </div>
  )
}

function Spinner() {
  return (
    <span className="inline-block w-7 h-7 align-middle">
      <svg className="animate-spin" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#FACC15" strokeWidth="4" />
        <path className="opacity-75" fill="#FACC15" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </span>
  )
}

export default LoadingAlert
