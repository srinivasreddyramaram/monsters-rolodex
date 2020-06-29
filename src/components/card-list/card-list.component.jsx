import React from 'react';

import './card-list.styles.css'

import { Card } from '../card/card.component';

//CardList is a functional component here
export const CardList = (props) => (
    <div className='card-list'>
        {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);