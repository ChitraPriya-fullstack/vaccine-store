import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage  from '../collectionPage/collectionPage.component' 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'


const OrderPage =  ({ match }) => (
    <div className='order-page'>
        <Route exact path= {`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default OrderPage;