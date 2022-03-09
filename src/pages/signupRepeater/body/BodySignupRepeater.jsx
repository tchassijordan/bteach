import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Radio from "../../../components/elements/inputs/Radio";

const BodySignupRepeater = () => {
  let [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
    anneeNaissance: "",
    activiteActuelle: "",
    ville: "",
    quartier: "",
    sexe: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-xl mx-auto font-primary">
      <H3 color="#00171f" classe="mb-10 text-center">
        Suivre les étapes pour s'inscrire en tant apprenant qui cherche un
        repétiteur
      </H3>
      <form
        className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="text"
          name="nom"
          id="nom"
          value={formData.nom}
          placeholder="Nom"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="prenom"
          id="prenom"
          value={formData.prenom}
          placeholder="Prenom"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="telephone"
          id="telephone"
          value={formData.telephone}
          placeholder="Teléphone"
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="E-mail"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Mot de passe"
          handleChange={handleChange}
        />
        <Input
          type="date"
          name="anneeNaissance"
          id="anneeNaissance"
          value={formData.anneeNaissance}
          placeholder="Date de naissance"
          handleChange={handleChange}
          icone={<BsFillCalendarDateFill />}
        />
        <Input
          type="text"
          name="activiteActuelle"
          id="activiteActuelle"
          value={formData.activiteActuelle}
          placeholder="Activité actuelle"
          handleChange={handleChange}
        />
        <select
          value={formData.ville}
          onChange={handleChange}
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
        >
          <option value="">Ville</option>
          <option value="Yaounde">Yoaunde</option>
          <option value="Douala">Douala</option>
        </select>
        <select
          value={formData.quartier}
          onChange={handleChange}
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
        >
          <option value="">
            Quartier (choisissez le quartier le plus proche de chez vous)
          </option>
          <option value="Yaounde">Etoudi</option>
          <option value="Douala">Damas</option>
        </select>

        <div className="flex text-gray-400 mb-3">
          <span className="mr-3">Sexe</span>
          {["homme", "femme"].map((sexe) => (
            <Radio
              key={sexe}
              name="sexe"
              id={sexe}
              value={sexe}
              state={formData.sexe}
              handleChange={handleChange}
            />
          ))}
        </div>
        <button className="self-end flex items-center px-4 py-1.5 mb-2 mt-6 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 sm:px-5">
          <span className="text-sm tracking-wide opacity-90">Terminer</span>
        </button>
      </form>
    </div>
  );
};

export default BodySignupRepeater;
