import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ElementList from '../../components/itemsList/ElementList.jsx';   
import SelectArchitecture from '../smallComponents/SelectArchitecture.jsx';

const ElementsSideBar = () => {

    const location = useLocation();

    const [selectedArchitecture, setSelectedArchitecture] = useState(location.state?.initialArchitecture);

    const onDragStart = (event, el) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify(el));
        event.dataTransfer.effectAllowed = 'move';
    };


    return (
        <aside className='font-bold text-lg lg:w-[30%] xl:w-[25%] bg-gray-300 h-full p-4 overflow-y-auto flex flex-col justify-between no-select'>
            <div className='flex flex-col gap-6 mb-12 m-3'>
                <h3>Arquitetura</h3>
                <SelectArchitecture selectedArchitecture={selectedArchitecture} setSelectedArchitecture={setSelectedArchitecture} />
            </div>
            <div>
                <h2 className='lg:text-lg xl:text-xl m-3'>Elementos</h2>
                <div className='flex flex-col flex-wrap gap-4 my-12 m-3'>
                    <ElementList onDragStart={onDragStart} selectedArchitecture={selectedArchitecture} />
                </div>
            </div>

            
        </aside>
    );
}

export default ElementsSideBar
