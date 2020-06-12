import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a4dfae8ee-693d-4cc3-ab67-50e13d706c21",
    }
});

export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}

// export const usersFollowAPI = {
//     getUsers(u){
//         return instance.get(`follow/${u.id}`)
//             .then(response => {
//                 return response.data
//             });
//         }
// }


