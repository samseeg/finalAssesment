// import axios from 'axios';

// const initialState = {
//     user: {},
//     currentUser: {},
//     posts: [],
//     comments: []
// }

// const GET_USER_INFO = 'GET_USER_INFO';

// export function getUserInfo() {
//     const userData = axios.get('/auth/me')
//         .then(res => {
//             return res.data
//         })
//     return {
//         type: GET_USER_INFO,
//         payload: userData
//     }
// }


// export default function reducer(state = initialState, action) {
//     // console.log(action)
//     switch (action.type) {
//         case GET_USER_INFO + '_FULFILLED':
//             // console.log(this.state.user)
//             return Object.assign({}, state, { user: action.payload })

//         default:
//             return state;
//     }
// }