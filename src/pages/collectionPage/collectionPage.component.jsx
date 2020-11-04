import React from 'react';
import CollectionItem from '../../components/collectionitem/collectionitem.component'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/order/order.selectors';

import './collectionPage.styles.scss';
//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
            {
                items.map(item => <CollectionItem className='collection-item'
                key={item.id} item={item}/>)
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);