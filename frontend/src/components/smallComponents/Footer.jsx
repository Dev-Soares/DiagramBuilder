import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-linear-to-br from-purple-950 to-purple-800 text-white'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 p-8 lg:p-16 max-w-7xl mx-auto'>
                
                <div className='flex flex-col gap-4 lg:max-w-[30%]'>
                    <h3 className='text-2xl font-bold'>ProjectBuilder</h3>
                    
                    <div className='flex gap-4 mt-2'>
                        
                        <p className='hover:text-purple-300 transition-colors'>
                            <span className="material-symbols-outlined text-3xl!">code</span>
                        </p>
                        <a
                            href="https://github.com/bernardosoares30"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                            title="Github"
                        >
                            <FaGithub size={32} />
                        </a>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/bernardosoares30/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold mb-2'>Contato</h4>
                    <a href="mailto:bernardo.soares30@outlook.com" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                        <span className="material-symbols-outlined text-3xl!">mail</span>
                        bernardo.soares30@outlook.com
                    </a>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                        <span className="material-symbols-outlined text-3xl!">location_on</span>
                        Brasil
                    </a>
                    <a href="https://github.com/Dev-Soares" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2
                    text-gray-300 hover:text-white transition-colors ">
                        <FaGithub size={32} />
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/bernardo-soares-150096364/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2
                    text-gray-300 hover:text-white transition-colors ">
                        <FaLinkedin size={32} />
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-purple-700 py-6'>
                <div className='max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300'>
                    <p>© {currentYear} ProjectBuilder.  Todos os direitos reservados.</p>
                    <div className='flex gap-6'>
                        <p href="#" className='hover:text-white transition-colors'>Privacidade</p>
                        <p href="#" className='hover:text-white transition-colors'>Termos de Uso</p>
                        <p href="#" className='hover:text-white transition-colors'>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
