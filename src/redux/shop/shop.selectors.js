import {createSelector} from "reselect";

const collectionIdMap = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const selectShop = state =>state.shop;
export const  selectCollection = createSelector([selectShop] ,shop=>shop.collections)
export const selectCollectionsForPreview = createSelector([selectCollection], collections=> Object.keys(collections).map(key=>collections[key]))
export const selectCollectionItem = collectionId=>createSelector([selectCollection], collections=>collections.find(collection=>collection.id === collectionIdMap[collectionId]))