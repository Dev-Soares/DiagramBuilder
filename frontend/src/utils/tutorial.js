import introJs from 'intro.js';
import 'intro.js/introjs.css';

const startTutorial = (screenType) => {

        introJs.tour().setOptions({
            steps: screenType === 'desktop' ? [
                {
                    intro: "Bem-vindo ao Project Builder! Vamos começar ?",
                },
                {
                    element: document.querySelector('.react-flow__pane'),
                    intro: "Esta é a área de trabalho onde você pode arrastar e soltar elementos para criar seu diagrama.",
                },
                {
                    element: document.querySelector('#Stacks'),
                    intro: "Estes são alguns dos vários elementos que podem ser inseridos no seu projeto. Clique e arraste qualquer elemento até a área de trabalho para começar a construir seu projeto!",
                    position: 'right'
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Aqui está a barra lateral de edição. Você pode alterar o nome do projeto e salvar seu progresso, entre outras funções.",
                    position: 'bottom'
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Para compartilhar seu projeto, use o botão de copiar ID para compartilhá-lo com seus colegas, ou apenas envie o link da página!",
                    position: 'bottom'
                },
                {
                    intro: "Divirta-se criando seus projetos!",
                }
            ] : [
                {
                    intro: "Bem-vindo ao Project Builder! Vamos começar ?",
                    position: 'left'
                },
                {
                    element: document.querySelector('.react-flow__pane'),
                    intro: "Esta é a área de trabalho onde você pode colocar elementos para criar seu diagrama.",
                },
                {
                    element: document.querySelector('#Stacks'),
                    intro: " Clique em algum elemento para selecioná-lo e depois toque na área de trabalho para adicioná-lo ao seu projeto!",
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Aqui está a barra lateral de edição. Você pode alterar o nome do projeto e salvar seu progresso, entre outras funções.",
                    position: 'bottom'
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Para compartilhar seu projeto, use o botão de copiar ID para compartilhá-lo com seus colegas, ou apenas envie o link da página!",
                    position: 'bottom'
                },
                {
                    intro: "Divirta-se criando seus projetos!",
                },
            ]
        }).start();
    };

    export default startTutorial;