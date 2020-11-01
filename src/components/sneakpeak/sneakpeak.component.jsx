import React from 'react';
import CollectionItem from '../collectionitem/collectionitem.component';
import './sneakpeak.styles.scss'

const SneakPeak = ({title, items}) => (
    <div className='collection-sneakpeak'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='sneakpeak'>
            {items.filter((item, idx) => idx < 4)
                .map(item => (
                <CollectionItem key={item.id} item ={item} />
                ))}
        </div>

    </div>
)

export default SneakPeak;