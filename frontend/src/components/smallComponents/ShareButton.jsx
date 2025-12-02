import { useAlert } from "../../contexts/AlertContext";



const ShareButton = () => {

    const { errorAlert } = useAlert();

    const handleshare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Compartilhar Diagrama',
                text: 'Confira este diagrama que criei!',
                url: window.location.href,
            });
        } else {
            errorAlert('Compartilhamento não suportado neste navegador.');
        }
    };

    return (
        <button onClick={handleshare} className='flex justify-center items-center w-[90%] md:w-[70%] h-auto rounded-xl bg-purple-600
             border-2 border-purple-600 text-white font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg gap-2
             hover:text-purple-600 hover:bg-gray-800 hover:border-purple-500 transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap'>
            <span className="material-symbols-outlined"> share </span>Compartilhar</button>
    )
}

export default ShareButton
