import { createSelector } from 'reselect'   

const selectOrder = state => state.order;

export const selectCollections  =  createSelector(
    [selectOrder],
    order => order.collections
);

export  const  selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);
