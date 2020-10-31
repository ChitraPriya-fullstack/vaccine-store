import React, {Component} from 'react';
import ORDER_DATA from './orderData';
import SneakPeak from '../../components/sneakpeak/sneakpeak.component'

class OrderPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections: ORDER_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            collections.map(({id, ...otherCollectionProps}) => (
                <SneakPeak key={id} {...otherCollectionProps} />
        ))
 
        )
    }
}
export default OrderPage;