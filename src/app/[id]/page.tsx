import Navbar from "@/components/Navbar";
import supabase from "../../config/supabaseClient";
import { UpdateForm } from "./update-form";
import { RedirectType, redirect } from "next/navigation";

const Update = async ({ params }: { params: { id: string } }) => {
  const { data: smoothie, error } = await supabase
    .from('smoothies')
    .select()
    .eq('id', params.id)
    .single(); // return directly one object (and not an array of one object)
  
  if (error || !smoothie) {
    redirect('/', RedirectType.replace); // replace the current entry in the history stack instead of adding a new one
  }
  if (!smoothie) {
    return;  
  }


  return (
    <div>
      <Navbar />
      <div className="page update">
        <h2>Update - {params.id}</h2>
        <UpdateForm smoothie={smoothie}/>
      </div>
    </div>
  )
}

export default Update;