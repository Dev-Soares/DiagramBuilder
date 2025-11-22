import { useState, useEffect } from "react";
import { useDiagram } from "../../contexts/DiagramContext.jsx";
import { useDiagramActions } from "../../hooks/useDiagramActions.js";
import { useReactFlow } from '@xyflow/react';

const DataSideBar = ({id}) => {

  const {
    diagramName,
    updateDiagramName,
    isOpen,
    isEditingNode,
    selectedNode,
    updateNodeData
  } = useDiagram(); // contexto de funcoes do diagrama

  const { saveFlowData } = useDiagramActions(); // contexto de acoes do diagrama


  const [nodeLabel, setNodeLabel] = useState(selectedNode?.data?.label ?? "");
  const [nodeColor, setNodeColor] = useState(selectedNode?.data?.color ?? "");
  const [showContent, setShowContent] = useState(false);
  

   useEffect(() => {
    if (selectedNode) {
      setNodeLabel(selectedNode.data?.label ?? "");
      setNodeColor(selectedNode.data?.color ?? "#FFFFFF");
    } else {
      setNodeLabel("");
      setNodeColor("#FFFFFF");
    }
  }, [selectedNode, isEditingNode]);

  // Aguarda animação da sidebar antes de mostrar conteúdo
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300); // delay maior que duração da transição
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);


  const changeNodeValue = (typeOfChange, e) => {
    const newValue = e.target.value;
    switch (typeOfChange) {
      case "nodeLabel":
        setNodeLabel(newValue);
        updateNodeData(selectedNode.id, { label: newValue });
        break;
      case "nodeColor":
        setNodeColor(newValue);
        updateNodeData(selectedNode.id, { color: newValue });
        break;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const typeOfChange = e.target.id;
    changeNodeValue(typeOfChange, e);
  };

  const { toObject } = useReactFlow();

  const handleSave = () => {
    saveFlowData(id, toObject, diagramName);
  };

  

  

  return (
    <aside className={`font-bold text-lg bg-gray-300 h-full shrink-0 flex flex-col items-center overflow-hidden transition-all duration-500 ease-out ${isOpen ? "w-[25%] xl:w-[20%] p-4" : "w-0"} `}>
      {showContent && isOpen && (
        <>
          <div className='m-3 w-full p-4 opacity-0 animate-fadeIn'>
            <h2 className='text-lg mb-10 whitespace-nowrap'>Diagrama</h2>

            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full flex flex-col gap-4'>
                <label htmlFor="diagramName" className='whitespace-nowrap'>Nome do Diagrama</label>
                <input value={diagramName}
                  onChange={(e) => updateDiagramName(e.target.value)}
                  maxLength={35}
                  type="text" className='w-full bg-white rounded-lg p-2 font-normal input-border' />
              </div>
              <div className='w-full flex flex-row gap-4 justify-center items-center'>
                <button onClick={handleSave}
                  className="flex justify-center items-center lg:w-[95%] xl:w-full xl:min-w-max h-auto rounded-xl bg-green-700
                    border-2 border-green-700 text-white font-bold py-2 px-3 cursor-pointer lg:text-sm xl:text-lg gap-2
                    hover:text-green-700 hover:bg-white transition-all hover:translate-y-[-3px] duration-300 whitespace-nowrap">
                  Salvar Diagrama <span className='material-symbols-outlined text-base'>check</span>
                </button>
              </div>
            </div>
          </div>

          {isEditingNode && selectedNode && (
            <div className='m-3 w-full p-4 opacity-0 animate-fadeIn'>
              <h2 className='text-xl mb-10 whitespace-nowrap'>Modo de Edição</h2>
              <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex flex-col gap-4'>
                  <label htmlFor="nodeLabel" className='whitespace-nowrap'>Nome do Nó</label>
                  <input id="nodeLabel" type="text"
                    value={nodeLabel}
                    onChange={(e) => handleChange(e)}
                    maxLength={20}
                    className='w-full bg-white rounded-lg text-lg p-2 font-normal input-border'
                    disabled={!selectedNode} />
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <label htmlFor="nodeColor" className='whitespace-nowrap'>Cor do Nó</label>
                  <input id="nodeColor" type="color"
                    value={nodeColor}
                    onChange={(e) => handleChange(e)}
                    className='w-[50%] h-12 bg-white rounded-lg p-1'
                    disabled={!selectedNode} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </aside>
  );
};

export default DataSideBar;
