export type courseValue = "tecnologia" | "inovacao" | "negocios";

export const courses = [
  { label: "Tecnologia", value: "tecnologia" as courseValue },
  { label: "Inovação", value: "inovacao" as courseValue },
  { label: "Negócios", value: "negocios" as courseValue },
];

export const courseListByCategory: Record<courseValue, { title: string; modality: string }[]> = {
  tecnologia: [
    { title: "Conteúdo 1", modality: "Digital" },
    { title: "Conteúdo 2", modality: "Inovação" },
    { title: "Conteúdo 3", modality: "Negócios" },
  ],
  inovacao: [
    { title: "Inovação 1", modality: "Workshop" },
    { title: "Inovação 2", modality: "Online" },
  ],
  negocios: [
    { title: "Negócios 1", modality: "Presencial" },
    { title: "Negócios 2", modality: "EAD" },
  ],
};