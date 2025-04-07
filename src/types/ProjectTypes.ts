export type Project = {
    title: string;
    date?: string;
    description?: string; 
    link?: string; 
    logo?: string; 
    tags?: string[]; 
    langages?: string[]; 
    tools?: string[]; 
    screens?: string[]; 
    skills?: { competence: string; type: string; value: number }[];
    friends?: { name: string; url: string }[];
};

export type ProjectCategorie = {
    title: string;
    projects: Project[];
};

export type Categorie = {
    [key: string]: ProjectCategorie;
};
