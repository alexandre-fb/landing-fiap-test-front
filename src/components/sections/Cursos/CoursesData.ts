export type courseValue = "tecnologia" | "inovacao" | "negocios";

export const courses = [
  { label: "Tecnologia", value: "tecnologia" as courseValue },
  { label: "Inovação", value: "inovacao" as courseValue },
  { label: "Negócios", value: "negocios" as courseValue },
];

export const courseListByCategory: Record<courseValue, { title: string; modality: string }[]> = {
  tecnologia: [
    { title: "Big Data Ecosystem", modality: "remoto • live" },
    { title: "Creating Dashboards for BI", modality: "remoto • live" },
    { title: "Big Data Science - Machine Learning & Data Mining", modality: "remoto • live + multimídia " },
    { title: "Storytelling", modality: " remoto • live" }

  ],
  inovacao: [
    { title: "Inovação 1", modality: "remoto • live" },
    { title: "Inovação 2", modality: "remoto • live + multimídia" },
  ],
  negocios: [
    { title: "Negócios 1", modality: "remoto • live + multimídia" },
    { title: "Negócios 2", modality: "remoto • live" },
  ],
};