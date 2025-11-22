import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useDiagram } from '../contexts/DiagramContext';

const A4_WIDTH_MM = 210;

/**
 * Exporta um elemento React Flow para um arquivo PDF, com suporte a múltiplas páginas.
 * @param {HTMLElement} element - A referência do contêiner React Flow (obtida via useRef).
 */


export const exportDiagramAsPDF = async (element) => {
    console.log('exportDiagramAsPDF called' + element);
    if (!element) return;

    console.log('Starting exportDiagramAsPDF...');

    const { diagramName } = useDiagram();

    // Captura o elemento como uma imagem usando html2canvas
    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    });
    const imgData = canvas.toDataURL('image/png');

    // Cria um novo documento PDF
    const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
    });

    // Calcula as dimensões da imagem no PDF mantendo a proporção
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = A4_WIDTH_MM;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Adiciona a imagem ao PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Salva o PDF
    pdf.save(`${diagramName || 'diagram'}.pdf`);
};

export default exportDiagramAsPDF;