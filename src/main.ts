import './style.css'

interface Project {
    title: string
    description: string
    technologies: string[]
    linkGithub: string
    linkDeploy: string
    image: string
}

const myProjects: Project[] = [
    {
        title: "Tasks App",
        description: "The project was designed to improve organization and productivity, allowing users to create, filter, and track task progress efficiently.",
        technologies: ["React",
            "TypeScript", "Tailwind"],
        linkGithub: "https://github.com/rebecafloriano/tasks-app",
        linkDeploy: "https://tasks-app-blue.vercel.app",
        image: new URL("./assets/tasks-desktop.png", import.meta.url).href
    },
    {
        title: "Collab Clinic",
        description: "Clinica Collab (Appointments Engine) is a data-driven, real-time medical workspace engineered to centralize, track, and streamline clinical scheduling pipelines. Powered by active cloud streams and strict operational validations, the engine completely replaces legacy static calendars with an optimized, real-time grid designed for maximum daily throughput.",
        technologies: ["React", "TypeScript", "Tailwind", "Firebase"],
        linkGithub: "https://github.com/rebecafloriano/appointments",
        linkDeploy: "https://appointments-five-flame.vercel.app/",
        image: new URL("./assets/screen.png", import.meta.url).href
    },
    {
        title: "Employee Management",
        description: "The application allows you to perform all CRUD operations (Create, Read, Update, and Delete) by consuming a real API in the cloud.",
        technologies: ["React", "Tailwind", "TypeScript"],
        linkGithub: "https://github.com/rebecafloriano/user-directory",
        linkDeploy: "https://rebecafloriano.github.io/user-directory/",
        image: new URL("./assets/user-directory-lg - cópia.png", import.meta.url).href
    },
    {
        title: "Newsletter Subscription Form",
        description: "A professional, accessible, and responsive newsletter subscription form",
        technologies: ["React", "Tailwind", "TypeScript"],
        linkGithub: "https://github.com/rebecafloriano/form-newsletter/tree/main",
        linkDeploy: "https://rebecafloriano.github.io/form-newsletter/",
        image: new URL("./assets/screenshot - cópia.png", import.meta.url).href
    },
    {
        title: "Simple Card Sync",
        description: "A professional, dynamic, and responsive digital business card generator. This project allows users to create, customize, and instantly export their business cards with a real-time preview.",
        technologies: ["React", "TypeScript", "Tailwind"],
        linkGithub: "https://github.com/rebecafloriano/simple-card-sync",
        linkDeploy: "https://rebecafloriano.github.io/simple-card-sync/",
        image: new URL("./assets/tela-cartao.png", import.meta.url).href
    },
    {
        title: "Mosquito Killer Game",
        description: "Interactive desktop application built to consolidate pure logic and dynamic DOM manipulation.",
        technologies: ["HTML", "CSS3", "JavaScript"],
        linkGithub: "https://github.com/rebecafloriano/jogo_mata_mosquitos",
        linkDeploy: "https://rebecafloriano.github.io/jogo_mata_mosquitos/",
        image: new URL("./assets/mosquito1.png", import.meta.url).href
    },

]



declare const lucide: { createIcons: () => void };

function renderizarProjetos(): void {
    const container = document.getElementById("projects-container") as HTMLDivElement | null;
    if (!container) return;

    container.innerHTML = myProjects.map((project: Project): string => {
        // Gera as badges de tecnologia dinamicamente
        const tagsHTML = project.technologies
            .map((tech: string) => {
                let icone = "code-2";
                if (tech.toLowerCase() === "typescript") icone = "file-type-2";
                if (tech.toLowerCase() === "javascript") icone = "braces";
                if (tech.toLowerCase() === "react") return `<span class="flex items-center gap-2 bg-emerald-400/5 text-cyan-50 border border-emerald-400/20 px-3 py-1.5 rounded-sm text-sm font-mono"><i data-lucide="atom" class="w-4 h-4 shrink-0 animate-[spin_20s_linear_infinite]"></i>React</span>`;
                if (tech.toLowerCase() === "tailwind") icone = "wind";
                if (tech.toLowerCase() === "css3") icone = "palette";

                return `<span class="flex items-center gap-2 bg-emerald-400/5 text-cyan-50 border border-emerald-400/20 px-3 py-1.5 rounded-sm text-sm font-mono">
                  <i data-lucide="${icone}" class="w-4 h-4 shrink-0"></i>
                  ${tech}
                </span>`;
            }).join("");


        return `
       <div class="text-white bg-[#4253a6d8] p-4 rounded-2xl flex flex-col gap-3 border border-emerald-300 w-full">
            <div class="w-full h-48 overflow-hidden rounded-lg mb-3">
                <img class="w-full h-full object-cover object-top" src="${project.image}" alt="${project.title} preview">
            </div>
              <div>
                <h3 class="text-emerald-300 font-bold text-lg md:text-xl">${project.title}</h3>
              <p class="text-cyan-50 text-sm md:text-md font-extralight line-clamp-2 min-h-10 mb-4">
                 ${project.description}
                </p>
              </div>

              <div class="flex flex-wrap justify-center md:flex-row gap-2">
              ${tagsHTML}
            </div>
              <div class="flex justify-between pt-3">
                <a class="border border-emerald-300 rounded-sm px-2 py-1 text-sm text-emerald-300 font-semibold animate-pulse" target="_blank" href="${project.linkGithub}">View code</a>
                <a class="border border-emerald-300 rounded-sm px-2 py-1 text-sm text-emerald-300 font-semibold animate-pulse" target="_blank" href="${project.linkDeploy}">Visit Site</a>
              </div>
            </div>
    `;
    }).join("");

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener("DOMContentLoaded", renderizarProjetos);