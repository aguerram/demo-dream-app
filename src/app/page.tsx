import Image from "next/image";
import ShynleiForm from "@/components/ShynleiForm";
import FeaturesList from "@/components/FeaturesList";
import features from '@/data/features.json';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left side (form on desktop) */}
        <div className="w-full md:w-1/2 bg-teal-400 text-white p-6 md:p-10 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Logo */}
            <div className="w-16 h-16 bg-white rounded-lg mb-8 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10L10 30" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 10L30 30" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <h1 className="text-3xl font-bold mb-6">Pour commencer...</h1>
            
            <p className="mb-8">
              Faire votre Shynleï, jouer avec, c'est l'occasion d'écouter vos rêves, de les partager et de prendre confiance dans votre richesse.
            </p>
            
            <ShynleiForm />
          </div>
        </div>
        
        {/* Right side (features) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 md:overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Votre Shynleï c'est..</h2>
          
          <p className="mb-8">
            7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider..
          </p>
          
          <FeaturesList features={features} />
        </div>
      </main>
    </div>
  );
}