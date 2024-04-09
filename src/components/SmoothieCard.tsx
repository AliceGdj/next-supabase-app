import { Smoothie } from "../types";

const SmoothieCard = ({ smoothie }: { smoothie: Smoothie }) => {
    return (
        <div className="smoothie-card">
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
        </div>
    );
};

export default SmoothieCard;