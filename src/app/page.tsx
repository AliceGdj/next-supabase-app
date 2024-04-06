import Link from "next/link";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

export default function HomePage() {
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
