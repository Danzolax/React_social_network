const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://sun2-3.userapi.com/c855128/v855128129/1fef77/VBLarYUiu-Q.jpg',
        //     followed: true,
        //     fullName: 'Dmitriy',
        //     status: 'hello bitches',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {   id: 2,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg',
        //     followed: false,
        //     fullName: 'Jhon',
        //     status: 'yo',
        //     location: {city: 'New York', country: 'USA'}},
        // {
        //     id: 3,
        //     photoUrl: 'http://loveopium.ru/content/2011/04/4e5747a57833_E209/31.jpg',
        //     followed: true,
        //     fullName: 'Allah',
        //     status: 'bless ukraine!!!',
        //     location: {city: 'Donbass', country: 'Ukraine'}
        // },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            if (state.users.length === 0){
                return {...state, users: action.users}
            }
            return {...state, users: [state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer

