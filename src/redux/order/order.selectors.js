import { createSelector } from 'reselect'   

const selectOrder = state => state.order;

export const selectCollections  =  createSelector(
    [selectOrder],
    order => order.collections
);