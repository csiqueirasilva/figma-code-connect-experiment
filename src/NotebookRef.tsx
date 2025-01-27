import Waitlist from "@/components/sds/Waitlist";

export type NotebookImport = {
    title: string;
    file: () => Promise<typeof import("*.mdx")>;
}

const NotebookRef = [
    {
        "title": "Introdução",
        "file": () => import("./md-files/introducao.mdx")
    },
    {
        "title": "Configuração Figma com SDS",
        "file": () => import("./md-files/figma-code-connect.mdx")
    },
    {
        "title": "Componente conectado",
        "file": () => import("./md-files/conectado.mdx")
    },
    {
        "title": "Configuração no VSCode",
        "file": () => import("./md-files/vscode.mdx")
    },
    {
        "title": "Programando o componente",
        "file": () => import("./md-files/workflow.mdx")
    },
    {
        "title": "Biblioteca compartilhada no Figma",
        "file": () => import("./md-files/sharedsystem.mdx")
    },
    {
        "title": "Conclusões",
        "file": () => import("./md-files/conclusao.mdx")
    },
];

export default NotebookRef;