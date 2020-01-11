export const banks = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BANKS_SUCCESS':
            return [
                ...action.banks
            ]
        default:
            return state
    }
}