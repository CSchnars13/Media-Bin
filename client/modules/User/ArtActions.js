import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ALBUM_ART = 'ADD_ALBUM_ART';

export function addAlbumArt(albumTitle, medArt, lgArt){
  var albumArt = {title:albumTitle, medArt: medArt, lgArt: lgArt};
  return{
    type: ADD_ALBUM_ART,
          albumArt
  };
}

export function getAlbumArtRequest(albumName){
  return (dispatch) => {
    return callApi(`album/${albumName}`).then(res => {
      dispatch(addAlbumArt(albumName, res.medArt, res.lgArt));
    });
  };
}