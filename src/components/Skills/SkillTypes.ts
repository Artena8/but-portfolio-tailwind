export type Competence = {
    competence : string;
    pourcentage: number;
};

export type Categorie = {
    titre : string;
    description: string;
    icon: string;
    competences: Competence[];
};

export type ListeCompetences = {
    competences: Categorie[];
};
