import supabase from "../config/supabaseClient";
import Navbar from "../components/Navbar";
import SmoothieList from "../components/SmoothieList";


export default async function Home() {  
  const { data: smoothies, error } = await supabase
    .from('smoothies')
    .select('id, title, method, rating')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.log(error);
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
          <SmoothieList smoothies={smoothies} />
        )}
      </div>
    </main>
  );
};
