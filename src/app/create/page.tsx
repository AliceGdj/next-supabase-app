import Navbar from "../../components/Navbar";
import { AddForm } from "./add-form";

const Create = () => {
  return (
    <div>
      <Navbar />
      <div className="page create">
        <AddForm />
      </div>
    </div>
  )
};

export default Create;
