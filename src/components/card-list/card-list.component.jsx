import React from 'react';

import { Card } from '../card-list/card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
            {
            props.Vaccine.map(Vaccine => (
            <Card key={Vaccine.id} Vaccine={Vaccine}/>
            ))} 
    </div>
);