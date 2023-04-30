import { Hospital, Pharmacie } from "~/types";
import centre_hospitalier from "~/assets/centre_hospitalier.jpg";
import cma_lainde from "~/assets/cma_lainde.jpg";
import hopital_general from "~/assets/hopital_general.jpg";
import hopital_regional from "~/assets/hopital_regional.jpg";

export const hospitals: Hospital[] = [
  {
    email: "contact@hrg.cm",
    name: "Hopital général de Garoua",
    telephone: "+237 222 271 261",
    doctors: ["Dr Babong Arnold", "Dr Danmo Jean"],
    services: [
      "Urgence",
      "Radiologie",
      "Pharmacie",
      "Laboratoire",
      "Gynécologie",
      "Cardiologie",
      "Rhumatologie",
      "Pédiatrie",
    ],
    image: hopital_general,
    position: [9.303827, 13.388355],
  },
  {
    email: "contact@hrg.cm",
    name: "Centre Médical de Lainde, Garoua",
    telephone: "+237 229 271 261",
    doctors: ["Dr Djekore Bienvenue"],
    services: [
      "Pharmacie",
      "Laboratoire",
      "Rhumatologie",
      "Pédiatrie",
      "Gynécologie",
    ],
    image: cma_lainde,
  },
  {
    email: "contact@hrg.cm",
    name: "Hopital régionale de Garoua",
    telephone: "+237 224 271 261",
    doctors: ["Dr Vincent Pestalozie"],
    services: [
      "Urgence",
      "Radiologie",
      "Pharmacie",
      "Laboratoire",
      "Cardiologie",
      "Rhumatologie",
      "Pédiatrie",
      "Gynécologie",
    ],
    image: hopital_regional,
  },
  {
    email: "contact@hrg.cm",
    name: "Hopital régionale de Garoua",
    telephone: "+237 224 271 261",
    doctors: ["Dr Vincent Pestalozie"],
    services: [
      "Urgence",
      "Radiologie",
      "Pharmacie",
      "Laboratoire",
      "Cardiologie",
      "Rhumatologie",
      "Pédiatrie",
      "Gynécologie",
    ],
    image: centre_hospitalier,
  },
];

export const pharmacy: Pharmacie[] = [
  {
    telephone: "+237 220 176 870",
    name: "Pharmacie de garoua",
    email: "garoua@pharmacie.cm",
    availableDrugs: ["Paracetamol 500 mg", "Mebendazol", "Albendazole 500mg"],
  },
  {
    telephone: "+237 220 176 870",
    name: "Pharmacie grand marché",
    email: "marche@pharmacie.cm",
    availableDrugs: ["Paracetamol 500 mg", "Furosémide", "Albendazole 500mg"],
  },
  {
    telephone: "+237 220 176 870",
    name: "Pharmacie Mère enfant",
    email: "mere@pharmacie.cm",
    availableDrugs: ["Paracetamol 500 mg", "Rifampicine", "Albendazole 500mg"],
  },
  {
    telephone: "+237 220 176 870",
    name: "Pharmacie d'étoile",
    email: "la_grace@pharmacie.cm",
    availableDrugs: ["Paracetamol 500 mg", "Mebendazol", "Albendazole 500mg"],
  },
];
