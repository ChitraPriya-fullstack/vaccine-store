import React from 'react';
import SneakPeak from '../../components/sneakpeak/sneakpeak.component'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { createStore } from 'redux';
import { selectCollections } from '../../redux/order/order.selectors'

const OrderPage =  ({ collections }) => (
        <div className='order-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                <SneakPeak key={id} {...otherCollectionProps} />
                ))
            }
        </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
});

export default connect(mapStateToProps)(OrderPage);