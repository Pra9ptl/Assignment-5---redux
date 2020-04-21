const initialStore = {
    persons: []
}

const reducer = (state = initialStore, action) => {

    if (action.type === 'ADD_PERSON') {
        const p = {
            id: Math.random(),
            name: 'Jarvis',
            age: Math.floor(Math.random() * 40)
        }
        return {
            ...state,
            persons: state.persons.concat({ p })
        }
    }

    if (action.type === 'DELETE_PERSON') {
        console.log("Deleted")
        const updatedArray = state.persons.filter(person => person.p.id !== action.delElId);
        return {
            ...state,
            persons: updatedArray
        }
    }

    return state;
}

export default reducer;