

const GetDiagram = () => {

    const [projectName, setProjectName] = useState('')

    return (
        <>
            <main className='flex flex-col justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8 bg-gray-900'>
                <Navbar />
                <form  className='flex flex-col justify-center items-center max-w-full gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-lg mt-16 select-none w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] pt-15'>
                    <div className="text-center space-y-3 border-b border-blue-600 pb-6 w-full">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                            Project Builder
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg font-medium">
                            Acesse seu Projeto Existente
                        </p>

                    </div>
                    <div className="w-full h-auto flex flex-col gap-4">
                        <label htmlFor="projectName"
                            className="text-lg text-black self-start font-semibold"
                        >ID do Projeto</label>
                        <input
                            id="projectName"
                            type="text"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            placeholder="Ex: abc123def456"
                            className="w-full px-4 py-3 bg-gray-300 rounded-lg focus:border-blue-500 focus:bg-gray-400 transition-colors "
                            maxLength={30}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-blue-600 to bg-blue-950 text-white font-bold p-3 px-6 rounded-xl md:text-lg lg:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-105 transition-transform duration-500 border-none" >
                        <span className="material-symbols-outlined"> add_circle </span> Acessar Projeto
                    </button>
                </form>
            </main>
        </>
  )
}

export default GetDiagram
