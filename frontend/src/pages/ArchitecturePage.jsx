import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useAlert } from "../contexts/AlertContext"
import { useDiagramActions } from "../hooks/useDiagramActions.js"

const ArchitecturePage = () => {
    const navigate = useNavigate()
    const { createToken } = useAuth()
    const { createNewDiagram } = useDiagramActions()
    const { errorAlert } = useAlert()

    const handleSelectArchitecture = async (architecture) => {
        try {
            const diagram = await createNewDiagram();
            const newToken = await createToken(diagram.data.id);

            if (newToken) {
                navigate(`/diagram/${diagram.data.id}`, {
                    state: { initialArchitecture: architecture }
                });
            } else {
                throw new Error('Token generation failed');
            }
        } catch (error) {
            console.error('Error generating access link:', error);
            errorAlert('Erro ao gerar o link de acesso. Tente novamente.');
        }   
    }

    return (
        <>
        <main className='flex justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8'>
            <div className='flex flex-col justify-center items-center max-w-full gap-8 sm:gap-12'>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2">
                    Passo 1: Escolha a arquitetura para seu MVP
                </h1>
                
                {/* Container dos Botões - Aumentado para telas menores */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                    
                    {/* Botão AWS */}
                    <button 
                        onClick={() => handleSelectArchitecture('aws')}
                        className="w-56 sm:w-60 md:w-64 lg:w-80
                                   h-40 sm:h-44 md:h-48 lg:h-64
                                   border-2 border-gray-300 
                                   hover:border-orange-600 hover:bg-orange-100 
                                   hover:scale-105 transition-all duration-300 ease-out 
                                   p-6 sm:p-8 md:p-10 lg:p-16
                                   flex justify-center items-center flex-col 
                                   gap-3 sm:gap-4 md:gap-5 lg:gap-6
                                   rounded-xl cursor-pointer
                                   shadow-md hover:shadow-lg"
                    >
                        <img 
                            src="aws-icon.webp" 
                            alt="AWS Logo" 
                            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                        />
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-center">
                            AWS
                        </h2>
                    </button>

                    {/* Botão Azure */}
                    <button 
                        onClick={() => handleSelectArchitecture('azure')}
                        className="w-56 sm:w-60 md:w-64 lg:w-80
                                   h-40 sm:h-44 md:h-48 lg:h-64
                                   border-2 border-gray-300 
                                   hover:border-blue-600 hover:bg-blue-100 
                                   hover:scale-105 transition-all duration-300 ease-out 
                                   p-6 sm:p-8 md:p-10 lg:p-16
                                   flex justify-center items-center flex-col 
                                   gap-3 sm:gap-4 md:gap-5 lg:gap-6
                                   rounded-xl cursor-pointer
                                   shadow-md hover:shadow-lg"
                    >
                        <img 
                            src="azure-icon.png" 
                            alt="Azure Logo" 
                            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                        />
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-center">
                            Azure
                        </h2>
                    </button>
                </div>
            </div>
        </main>
        </>
    )
}

export default ArchitecturePage
