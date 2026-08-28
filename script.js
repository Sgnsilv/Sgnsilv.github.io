const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const languageToggle = document.getElementById("language-toggle");
const languageFlag = document.getElementById("language-flag");


// ==========================================================
// THEME
// ==========================================================

function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);

    themeIcon.classList.toggle("fa-sun", !isLight);
    themeIcon.classList.toggle("fa-moon", isLight);

    localStorage.setItem("theme", theme);
}


function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }

    const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;

    applyTheme(prefersLight ? "light" : "dark");
}


themeToggle.addEventListener("click", () => {

    const isLight =
        document.body.classList.contains("light-theme");

    applyTheme(isLight ? "dark" : "light");

});


loadTheme();


// ==========================================================
// LANGUAGE
// ==========================================================

const translations = {

    en: {
        navAbout: "About",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",

        heroEyebrow:
            "Computer Engineering · Software · AI",

        heroTitle:
            "Hi, I'm Sara.",

        heroSubtitle:
            "I build software and explore intelligent systems.",

        heroDescription:
            "Computer Engineering student working across full-stack development, artificial intelligence, algorithms and real-world engineering problems.",

        viewProjects:
            "View Projects",

        aboutTitle:
            "About",

        about1:
            "I'm a Computer Engineering student at UFRN with a technical background in Mechatronics and hands-on experience in full-stack software development.",

        about2:
            "My professional and academic experience spans software engineering, artificial intelligence, machine learning, graph algorithms, robotics and digital signal processing.",

        about3:
            "I enjoy turning complex problems into practical solutions and exploring how software and intelligent systems can solve real-world problems.",

        experienceTitle:
            "Experience",

        experienceSoftwareTitle:
            "Software Development Scholarship",

        experienceSoftwarePlace:
            "UFRN / PROPESQ · In collaboration with JFRN",

        experienceSoftware1:
            "Develop and maintain institutional full-stack applications using Angular, TypeScript, Java and Spring Boot within an agile Scrum team.",

        experienceSoftware2:
            "I also contribute to AI-powered solutions involving RAG, hybrid retrieval, vector search, LLMs, audio transcription and automated document analysis.",

        researchTitle:
            "Undergraduate Research · Bioinformatics",

        researchDescription:
            "Conducted undergraduate research on the application of deep learning techniques to genomic classification of SARS-CoV-2 variants, developing experience with Python, data processing and machine learning.",

        skillsTitle:
            "Skills",

        softwareDevelopment:
            "Software Development",

        engineering:
            "Engineering",

        projectsTitle:
            "Featured Projects",

        moradaSubtitle:
            "Condominium Management Platform",

        moradaDescription:
            "Independently developed a web platform for condominium management featuring authentication, role-based access, common-area reservations, announcements, document management, lost & found and visitor management.",

        rideSmartSubtitle:
            "Urban Route Optimization with Graphs",

        rideSmartDescription:
            "Urban mobility optimization project using real road-network data from Natal, Brazil. Pedestrian and vehicle networks are modeled as graphs to evaluate pickup strategies under different traffic conditions.",

        thesisSubtitle:
            "Academic Text Mining",

        thesisDescription:
            "Text-mining pipeline developed to analyze technological trends in Computer Engineering undergraduate theses from UFRN using NLP, TF-IDF and NMF.",

        mandaladakaSubtitle:
            "Restaurant Management System",

        mandaladakaDescription:
            "Full-stack restaurant management application developed as part of a team, supporting table, order and payment management through an integrated web interface, REST API and relational database.",

        educationTitle:
            "Education",

        computerEngineering:
            "Computer Engineering",

        mechatronics:
            "Technical Degree in Mechatronics",

        writingTitle:
            "Writing",

        comingSoon:
            "Coming soon",

        writingHeading:
            "Technical notes, experiments and things I learn while building.",

        writingDescription:
            "I'm preparing articles about algorithms, software engineering, artificial intelligence and computer engineering projects.",

        contactTitle:
            "Let's connect",

        contactHeading:
            "Interested in software, AI or an engineering problem?",

        contactDescription:
            "Feel free to reach out.",

        availability:
            "Open to opportunities",

        resume:
            "Resume",

        footer:
            "Designed & built by Sara Silva.",

        backToTop:
            "Back to top"
    },


    pt: {
        navAbout:
            "Sobre",

        navExperience:
            "Experiência",

        navProjects:
            "Projetos",

        navContact:
            "Contato",

        heroEyebrow:
            "Engenharia da Computação · Software · IA",

        heroTitle:
            "Oi, eu sou Sara.",

        heroSubtitle:
            "Desenvolvo software e exploro sistemas inteligentes.",

        heroDescription:
            "Estudante de Engenharia da Computação atuando com desenvolvimento full-stack, inteligência artificial, algoritmos e problemas reais de engenharia.",

        viewProjects:
            "Ver projetos",

        aboutTitle:
            "Sobre",

        about1:
            "Sou estudante de Engenharia da Computação na UFRN, com formação técnica em Mecatrônica e experiência prática em desenvolvimento de software full-stack.",

        about2:
            "Minha experiência profissional e acadêmica envolve engenharia de software, inteligência artificial, aprendizado de máquina, algoritmos em grafos, robótica e processamento digital de sinais.",

        about3:
            "Gosto de transformar problemas complexos em soluções práticas e explorar como software e sistemas inteligentes podem resolver problemas do mundo real.",

        experienceTitle:
            "Experiência",

        experienceSoftwareTitle:
            "Bolsista de Desenvolvimento de Software",

        experienceSoftwarePlace:
            "UFRN / PROPESQ · Em colaboração com a JFRN",

        experienceSoftware1:
            "Desenvolvo e mantenho aplicações institucionais full-stack utilizando Angular, TypeScript, Java e Spring Boot em uma equipe ágil Scrum.",

        experienceSoftware2:
            "Também contribuo com soluções baseadas em inteligência artificial envolvendo RAG, busca híbrida, busca vetorial, LLMs, transcrição de áudio e análise automatizada de documentos.",

        researchTitle:
            "Iniciação Científica · Bioinformática",

        researchDescription:
            "Desenvolvi pesquisa de iniciação científica envolvendo técnicas de deep learning para classificação genômica de variantes do SARS-CoV-2, utilizando Python, processamento de dados e aprendizado de máquina.",

        skillsTitle:
            "Tecnologias",

        softwareDevelopment:
            "Desenvolvimento de Software",

        engineering:
            "Engenharia",

        projectsTitle:
            "Projetos em Destaque",

        moradaSubtitle:
            "Plataforma de Gestão Condominial",

        moradaDescription:
            "Desenvolvi de forma independente uma plataforma web para gestão de condomínios com autenticação, controle de acesso por perfil, reservas de áreas comuns, comunicados, documentos, achados e perdidos e gerenciamento de visitantes.",

        rideSmartSubtitle:
            "Otimização de Rotas Urbanas com Grafos",

        rideSmartDescription:
            "Projeto de otimização de mobilidade urbana utilizando dados reais da malha viária de Natal. Redes de pedestres e veículos são modeladas como grafos para avaliar estratégias de embarque em diferentes condições de trânsito.",

        thesisSubtitle:
            "Mineração de Textos Acadêmicos",

        thesisDescription:
            "Pipeline de mineração de textos desenvolvido para analisar tendências tecnológicas em trabalhos de conclusão de curso de Engenharia da Computação da UFRN utilizando NLP, TF-IDF e NMF.",

        mandaladakaSubtitle:
            "Sistema de Gestão de Restaurantes",

        mandaladakaDescription:
            "Aplicação full-stack para gestão de restaurantes desenvolvida em equipe, oferecendo controle de mesas, pedidos e pagamentos por meio de uma interface web integrada a uma API REST e banco de dados relacional.",

        educationTitle:
            "Formação",

        computerEngineering:
            "Engenharia da Computação",

        mechatronics:
            "Técnico em Mecatrônica",

        writingTitle:
            "Artigos",

        comingSoon:
            "Em breve",

        writingHeading:
            "Notas técnicas, experimentos e coisas que aprendo enquanto desenvolvo.",

        writingDescription:
            "Estou preparando artigos sobre algoritmos, engenharia de software, inteligência artificial e projetos de Engenharia da Computação.",

        contactTitle:
            "Vamos conversar",

        contactHeading:
            "Interessado em software, IA ou algum problema de engenharia?",

        contactDescription:
            "Fique à vontade para entrar em contato.",

        availability:
            "Aberta a oportunidades",

        resume:
            "Currículo",

        footer:
            "Projetado e desenvolvido por Sara Silva.",

        backToTop:
            "Voltar ao topo"
    }

};


// ==========================================================
// APPLY LANGUAGE
// ==========================================================

function applyLanguage(language) {

    const translationsForLanguage =
        translations[language];

    document.querySelectorAll("[data-i18n]")
        .forEach(element => {

            const translationKey =
                element.dataset.i18n;

            const translatedText =
                translationsForLanguage[translationKey];

            if (translatedText) {
                element.textContent = translatedText;
            }

        });


    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : "en";


    /*
     * The flag represents the language you can switch TO.
     *
     * Current English -> show Brazilian flag.
     * Current Portuguese -> show UK flag.
     */

    languageFlag.textContent =
        language === "en"
            ? "🇧🇷"
            : "🇬🇧";


    languageToggle.title =
        language === "en"
            ? "Português"
            : "English";


    languageToggle.setAttribute(
        "aria-label",
        language === "en"
            ? "Mudar para português"
            : "Switch to English"
    );


    localStorage.setItem(
        "language",
        language
    );

}


// ==========================================================
// LANGUAGE TOGGLE
// ==========================================================

function loadLanguage() {

    const savedLanguage =
        localStorage.getItem("language");

    if (savedLanguage) {
        applyLanguage(savedLanguage);
        return;
    }

    /*
     * Site defaults to English.
     */
    applyLanguage("en");

}


languageToggle.addEventListener(
    "click",
    () => {

        const currentLanguage =
            localStorage.getItem("language") || "en";

        const newLanguage =
            currentLanguage === "en"
                ? "pt"
                : "en";

        applyLanguage(newLanguage);

    }
);


loadLanguage();