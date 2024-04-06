import Link from "next/link";
import supabase from '../config/supabaseClient';


export default function HomePage() {
  console.log("===== supabase =====");
  console.log(supabase);

  return (
    <main>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link href="/">Home</Link>
        <Link href="/create">Create New Smoothie</Link>
      </nav>
    </main>
  );
};
