import supabase from "../config/supabaseClient";
import Link from "next/link";
import SmoothieCard from "../components/SmoothieCard";
import { Smoothie } from "../types";

export default async function Home() {
  console.log("==== homepage ====")
  
  const { data: smoothies } = await supabase.from('smoothies').select('id, title, method, rating');
  console.log("smoothies", smoothies)

  if (!smoothies) {
    console.log("No smoothies found.")
  }

  return (
    <main>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link href="/">Home</Link>
        <Link href="/create">Create New Smoothie</Link>
      </nav>
      <div className="page home">
        <h2>Homepage</h2>
        {!smoothies && (
          <p>No smoothies found.</p>
        )}
        {smoothies && (
          <div className="smoothie">
            {/* order-by buttons */}
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
