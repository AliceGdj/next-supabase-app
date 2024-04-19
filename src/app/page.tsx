import supabase from "../config/supabaseClient";
import SmoothieCard from "../components/SmoothieCard";
import { Smoothie } from "../types";
import Navbar from "../components/Navbar";

export default async function Home() {  
  const { data: smoothies } = await supabase.from('smoothies').select('id, title, method, rating');

  if (!smoothies) {
    console.log("No smoothies found.")
  }

  return (
    <main>
      <Navbar />
      <div className="page home">
        <h2>Homepage</h2>
        {!smoothies && (
          <p>No smoothies found.</p>
        )}
        {smoothies && (
          <div className="smoothie">
            {/* TODO LATER order-by buttons */}
            <div className="smoothie-grid">
              {smoothies.map((smoothie: Smoothie) => (
                <SmoothieCard key={smoothie.id} smoothie={smoothie} />
              ))}              
            </div>
          </div>
        )}
        
      </div>
    </main>
  );
};
