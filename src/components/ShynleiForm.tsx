"use client";

import { FormEvent, useState } from "react";
import { getGeoData } from "@/lib/api/geo-service";

export default function ShynleiForm() {
  const [name, setName] = useState("");
  const [intention, setIntention] = useState("");
  const [role, setRole] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    return name.trim() !== "" && intention.trim() !== "" && role.trim() !== "";
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setIsFormValid(validateForm());
  };

  const handleIntentionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIntention(value);
    setIsFormValid(validateForm());
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRole(value);
    setIsFormValid(validateForm());
  };

  const checkIpSum = async () => {
    try {
      const response = await getGeoData();

      if (response.isOkay) {
        alert("OK");
      } else {
        alert("KO");
      }
    } catch (error) {
      console.error("Error checking IP:", error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      checkIpSum();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Nom et prénom :
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="w-full p-3 border-b-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="intention" className="block mb-2 font-medium">
          Mon intention :
        </label>
        <input
          type="text"
          id="intention"
          value={intention}
          onChange={handleIntentionChange}
          className="w-full p-3 border-b-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
          placeholder="L'intention, l'objectif de ce Shynleï"
          required
        />
      </div>

      <div>
        <label htmlFor="role" className="block mb-2 font-medium">
          Mon rêl
        </label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={handleRoleChange}
          className="w-full p-3 border-b-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full p-3 rounded-lg text-white font-medium ${
          isFormValid
            ? "bg-teal-500 hover:bg-teal-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        EXPRIMER MES RÊVES &gt;
      </button>
    </form>
  );
}
