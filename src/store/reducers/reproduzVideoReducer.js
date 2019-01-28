const INITIAL_STATE = {
    video: {}
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'REPRODUZ_VIDEO') {
        return {
            video: action.video
        }
    }
    return state;
}