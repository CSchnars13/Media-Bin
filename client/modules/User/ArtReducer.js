import {ADD_ALBUM_ART} from './ArtActions';

// Initial State
const initialState = { data: [] };

const ArtReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM_ART :
      return {
        data: [action.albumArt, ...state.data],
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all users

export const getAllArt = (state) => state.art.data;

export const getAlbumArt = (state, title) => state.art.data.filter(title => albumArt.title === title)[0];

// Export Reducer
export default ArtReducer;