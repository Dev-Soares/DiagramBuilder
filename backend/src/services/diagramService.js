import prisma from '../config/prisma.js';
import axios from 'axios';

const diagramService = {
  
    createDiagram: async (flowData) => {
        return await prisma.diagram.create({
            data: {
                flowData: flowData,
            }
        });
    },

    getDiagramById: async (id) => {
        return await prisma.diagram.findUnique({ where: { id } });
    },

    deleteDiagram: async (id) => {
        return await prisma.diagram.delete({ where: { id } });
    },

    updateDiagram: async (id, flowData) => {
        try {
            return await prisma.diagram.update({ where: { id }, data: { flowData: flowData } });
        } catch (error) {
            console.error("Error updating diagram:", error);
            throw new Error("Failed to update diagram");
        }
        
    },

    postDiagramData: async (id, flowData) => {
        try {
            return await axios.post(`http://external-service/api/diagrams/${id}`,  flowData);
            //vai entrar o parser aqui 
        } catch (error) {
            console.error("Error posting diagram data:", error);
            throw new Error("Failed to post diagram data");
        }
    }


};

export default diagramService;
