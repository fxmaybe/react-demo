import { type } from "./../action";
const initialState = {
    collapsed: false
}

export default (state = initialState, action) => {
    switch (action) {
        case type.TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: action.collapsed
            };
            break;
        default:
            break;
    }
}