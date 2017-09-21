import {actionTypes} from '../../../constants/actions';

export const fetchNotes = () => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH,
    payload: ["aaa","bbbb"]
  })
}
