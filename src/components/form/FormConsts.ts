export const ACTIONS = {
    INPUT: "input",
    BLUR: "blur",
    SUBMIT: "submit",
};

export const initialState = {
    value: {
        name: "",
        age: "",
        salary: "",
    },
    valid: {
        name: null,
        age: null,
        salary: null,
    },
};


export const CONDITIONS = {
    NAME: {
        MIN: 5,
        MAX: 50
    },
    AGE: {
        MIN: 17,
        MAX: 65,
    },
    SALARY: {
        MIN: 2000,
        MAX: 100000,
    }
}