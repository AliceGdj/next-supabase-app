"use client";

import { useState } from 'react';
import { Smoothie } from '../types';
import { handleOrderBy } from '../app/actions';
import SmoothieCard from './SmoothieCard';

const SmoothieList = ({ smoothies } : { smoothies: Smoothie[] }) => {
    const [selectedFilter, setFilter] = useState('created_at');
    const [orderSmoothies, setOrderSmoothies] = useState(smoothies);
    const filterString = ['created_at', 'title', 'rating'];

    const orderedSmoothies = async (str: string) => {
        const data = await handleOrderBy(str);
        if (data) {
            setOrderSmoothies(data);
        }
        return;
    }

    return (
        <div className="smoothie">
            <div className='order-by'>
                <p>Order by:</p>
                {filterString.map((str) => (
                    <button 
                        key={str}
                        onClick={() => {
                            orderedSmoothies(str);
                            setFilter(str);
                        }}
                        >{str}
                    </button>
                ))}
                {selectedFilter && (
                    <p>You selected: {selectedFilter}</p>
                )}
            </div>
            <div className="smoothie-grid">
                {orderSmoothies.map((el: Smoothie) => (
                    <SmoothieCard key={el.id} smoothie={el} />
                ))}
            </div>
        </div>
    );
};

export default SmoothieList;
