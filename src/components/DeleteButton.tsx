"use client";

import { handleDelete } from '../app/actions';
import Image from 'next/image';


const DeleteButton = ({ id } : { id: string }) => {
    return (
        <Image src="/delete.svg" height={25} width={25} alt="delete" onClick={() => handleDelete(id)}/>
    );
};

export default DeleteButton;
