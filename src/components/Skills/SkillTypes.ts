export type Competence = {
    competence: string;
    pourcentage: number;
}

export type Section = {
    titre: string;
    description: string;
    competences: Competence[];
}

export type JsonData = {
    Planification: Section;
    "FRONT END": Section;
    "BACK-END": Section;
    "GESTION DONNEES": Section;
    DevOps: Section;
    "UI UX": Section;
}