import {createSelector} from "reselect"

const selectDirectory = state =>state.sections 
export const selectSections = createSelector([selectDirectory] ,(directory)=>directory.sections)