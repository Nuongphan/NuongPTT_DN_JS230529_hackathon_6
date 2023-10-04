const initialState = [0, 0, 1]
export const StartQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START":
            console.log("payload",  action.payload);
            state = action.payload;
            return state;
    }
    return state;
};