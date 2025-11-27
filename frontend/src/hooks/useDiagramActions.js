
import axios from "axios";
import { useAlert } from "../contexts/AlertContext";

export const useDiagramActions = () => {
  const { successAlert, errorAlert, setIsLoading } = useAlert();

  const createNewDiagram = async (diagramName) => {

    setIsLoading(true);
    
    const diagramData = {
      flowData: {
        nodes: [],
        edges: [],
        viewport: {
          x: 0,
          y: 0,
          zoom: 1,
        },

        diagramName: diagramName,
      },
    };

    try {
      const response = await axios.post("/diagram/create-diagram", diagramData);
      setIsLoading(false);
      successAlert("Diagrama criado com successo!");
      return response;
    } catch (error) {
      setIsLoading(false);
      errorAlert("Erro ao criar o diagrama. Tente novamente.");
    }
  };

  const fetchDiagram = async (diagramId) => {
    setIsLoading(true);
    
    try {
      const response = await axios.get(`/diagram/${diagramId}`);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      errorAlert("Erro ao carregar o diagrama. Tente novamente.");
    
    }
  };

  const deleteDiagram = async (diagramId) => {
    setIsLoading(true);
    
    try {
      await axios.delete(`/diagram/delete-diagram/${diagramId}`);
      setIsLoading(false);
      successAlert("Diagrama deletado com successo!");
    } catch (error) {
      console.error("Error deleting diagram:", error);
      setIsLoading(false);
      errorAlert("Erro ao deletar o diagrama. Tente novamente.");
    }
  };

  const formatDiagramToJSON = (toObject, diagramName) => {
    const flowData = toObject();

    const serializableNodes = flowData.nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        iconComponent: undefined,
        iconId: node.data.iconId || node.data.id,
      },
    }));

    const flowCode = {
      flowData: {
        nodes: serializableNodes,
        edges: flowData.edges,
        viewport: flowData.viewport,
        diagramName: diagramName,
      },
    };

    return flowCode;
  };

  const saveFlowData = async (id, toObject, diagramName) => {
    const flowCode = formatDiagramToJSON(toObject, diagramName);
    setIsLoading(true);

    try {
      await axios.put(`/diagram/save-diagram/${id}`, flowCode);
      setIsLoading(false);
      successAlert("Diagrama salvo com successo!");
    } catch (error) {
      setIsLoading(false);
      errorAlert("Erro ao salvar o diagrama. Tente novamente.");  
    }
  };

  return {
    createNewDiagram,
    fetchDiagram,
    deleteDiagram,
    saveFlowData,
  };
};
