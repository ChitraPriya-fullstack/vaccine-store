import React from 'react';
import './collections-overview.styles.scss';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import  SneakPeak  from '../sneakpeak/sneakpeak.component';
import { selectCollectionsForPreview } from '../../redux/order/order.selectors';

const CollectionsOverview = ( { collections }) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
        <SneakPeak key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);