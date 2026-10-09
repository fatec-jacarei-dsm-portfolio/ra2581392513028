const DADOS = {
    perfil: {
        nome: "Gabrielly Neu",
        titulo: "Estudante de Desenvolvimento de Software Multiplataforma",
        localizacao: "Jacareí, SP",
        sobre: "Tenho 20 anos, resido em Jacareí e sou entusiasta de inovações tecnológicas e livros de ficção. Cursei dois semestres de Mecatrônica, durante os quais adquiri conhecimentos sobre resistência dos materiais e programação de sistemas lógicos. Possuo nível intermediário em língua inglesa, sou torcedora do Corinthians e, atualmente, minha principal área de interesse é a Análise de Sistemas.",
        linkedin: "https://www.linkedin.com/in/gabrielly-neu-753906239",
        github: "https://github.com/gabriellyneu"
    },

    idiomas: [
        { nome: "Inglês", nivel: "Intermediário" }
    ],

    habilidades: [
        "Metodologias ágeis (Scrum)",
        "JavaScript",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Docker"
    ],

    formacao: [
        {
            titulo: "Desenvolvimento de Software Multiplataforma",
            instituicao: "Fatec Jacareí",
            periodo: "2025 – Em andamento"
        },
        {
            titulo: "Mecatrônica",
            instituicao: "Dois semestres cursados",
            periodo: ""
        }
    ],

    projetos: [
        {
            id: "lead-comercial",
            tipo: "academico",
            titulo: "Sistema de Gestão de Ciclo de Vida de Leads Comerciais",
            papel: "Backend e banco de dados",
            resumo: "Sistema web para gestão do ciclo de vida de leads comerciais, com controle por equipe, loja e perfil de usuário e vitrine pública de veículos com fluxo de aprovação.",
            descricao: [
                "Sistema web para gestão completa do ciclo de vida de um lead comercial — captação, qualificação, negociação e fechamento — com controle por equipe, loja e perfil de usuário. Inclui vitrine pública de veículos com fluxo de aprovação.",
                "Atuei no desenvolvimento do backend e do banco de dados, responsável pela modelagem das entidades, implementação das regras de negócio e das rotas da API, garantindo a integridade das informações e o controle de acesso por perfil."
            ],
            tecnologias: ["Backend", "Banco de dados", "Controle de acesso", "Fluxo de aprovação"],
            imagem: null,
            codigo: "https://github.com/NexussDev/abp-3-valle-leads-system"
        },
        {
            id: "desenvolvimento-web",
            tipo: "academico",
            titulo: "Desenvolvimento Web Acadêmico",
            papel: "Product Owner",
            resumo: "Site para consulta de horários e salas de aula universitárias, integrando dados em tempo real via banco de dados.",
            descricao: [
                "Site para consulta de horários e salas de aula universitárias, desenvolvido com HTML, CSS e JavaScript, integrando dados em tempo real via banco de dados. Voltado para facilitar o acesso de estudantes às informações acadêmicas de forma prática e acessível.",
                "Atuei como Product Owner. Fui responsável por definir e priorizar os requisitos do projeto e garantir que o produto final resolvesse as necessidades dos estudantes. Minha colaboração foi essencial para assegurar que a solução fosse prática, acessível e focada na experiência do usuário."
            ],
            tecnologias: ["HTML", "CSS", "JavaScript", "Banco de dados"],
            imagem: "./assets/images/project1.png",
            codigo: "https://github.com/CodeMasters-dsm/Projeto"
        },
        {
            id: "react-typescript",
            tipo: "academico",
            titulo: "Aplicação em React com TypeScript",
            papel: "Desenvolvimento individual",
            resumo: "Aplicação web para manipulação e visualização de dados em tempo real, com gerenciamento de estado via React Context.",
            descricao: [
                "Desenvolvimento de um aplicativo web com React e TypeScript, focado na manipulação e visualização de dados em tempo real. O aplicativo permite que o usuário insira números separados por espaços, que são exibidos de forma dinâmica em componentes visuais.",
                "O projeto foi desenvolvido individualmente, por isso, decidi focar na criação de uma interface limpa e responsiva, utilizando o React Context para um gerenciamento de estado eficiente."
            ],
            tecnologias: ["React", "TypeScript", "React Context"],
            imagem: null,
            codigo: "https://github.com/gabriellyneu/Projetos/tree/main/react%20context/front"
        },
        {
            id: "quiz",
            tipo: "academico",
            titulo: "Quiz Interativo",
            papel: "Desenvolvimento individual",
            resumo: "Site de quiz com cinco perguntas de múltipla escolha e feedback imediato sobre o desempenho do usuário.",
            descricao: [
                "Um site de Quiz Interativo desenvolvido totalmente por mim, focado em testar conhecimentos do usuário. O projeto apresenta uma série de cinco perguntas de múltipla escolha.",
                "Ao final, após o envio das respostas, o sistema processa as escolhas e exibe o número total de acertos, fornecendo um feedback imediato e direto sobre a performance do usuário. A interface foi pensada para ser limpa e fácil de navegar."
            ],
            tecnologias: ["HTML", "CSS", "JavaScript"],
            imagem: "./assets/images/project3.png",
            codigo: "https://github.com/gabriellyneu/Projetos/tree/main/quiz"
        },
        {
            id: "limnologia",
            tipo: "academico",
            titulo: "Aplicação Web para visualização e disseminação de dados limnológicos",
            papel: "Team Development",
            resumo: "Aplicação para consulta de dados de um instituto de pesquisa, com gráficos interativos, tabelas filtráveis e rotas GET.",
            descricao: [
                "Desenvolvimento de um aplicativo web com React e TypeScript, voltado para facilitar a visualização de dados de um instituto de pesquisa. O sistema permite que pesquisadores, estudantes e demais usuários consultem informações limnológicas por meio de gráficos interativos, tabelas filtráveis e visualizações intuitivas.",
                "Eu atuava no Team Development e pude contribuir diretamente para a estruturação da aplicação, incluindo a criação de rotas GET para consumo de dados da API, implementação de filtros avançados para aprimorar a busca por parâmetros específicos e melhorias gerais na lógica de tratamento das informações. Além disso, participei da organização do código, correção de bugs e aprimoramento da experiência do usuário."
            ],
            tecnologias: ["React", "TypeScript", "API"],
            imagem: "./assets/images/project4.png",
            codigo: "https://github.com/ExceptionH4ndlers/ABP_2DSM"
        }
    ]
};