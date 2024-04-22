import Link from "next/link";
import { Smoothie } from "../types";
import Image from 'next/image';
import DeleteButton from "./DeleteButton";


const SmoothieCard = ({ smoothie }: { smoothie: Smoothie }) => {
    return (
        <div className="smoothie-card">
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
            <div className="buttons">
                <Link href={"/" + smoothie.id}>
                    <Image src="/edit.svg" height={25} width={25} alt="edit"/>
                </Link>
                <DeleteButton id={smoothie.id} />
            </div>
        </div>
    );
};

export default SmoothieCard;