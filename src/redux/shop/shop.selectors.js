import {createSelector} from "reselect";


const selectShop = state =>state.shop;
export const  selectCollection = createSelector([selectShop] ,shop=>shop.collections)
export const selectCollectionsForPreview = createSelector([selectCollection], collections=> collections ?Object.keys(collections).map(key=>collections[key]):[])
//export const selectCollectionItem = collectionId=>createSelector([selectCollection], collections=>collections.find(collection=>collection.id === collectionIdMap[collectionId]))

export const selectCollectionItem = collectionUrlParam =>
createSelector(
  [selectCollection],
  collections=> collections?collections[collectionUrlParam]:{}
);
export const selectIsFetching = createSelector([selectShop] , shop=>shop.isFetching) 
export const selectCollectionisLoaded = createSelector([selectShop] , shop=> !!shop.collections)