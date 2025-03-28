export type Project = {
    name: string;
    link?: string; 
    date?: string;
    image?: string; 
    tools?: string[]; 
    description?: string; 
    skills: { competence: string; value: number; }[];
};

export type ProjectCategorie = {
    title: string;
    projects: Project[];
};

export type Categorie = {
    [key: string]: ProjectCategorie;
};
