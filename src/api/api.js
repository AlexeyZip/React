import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a4dfae8ee-693d-4cc3-ab67-50e13d706c21",
    }
    // a4dfae8ee-693d-4cc3-ab67-50e13d706c21   add90d80-6378-4132-a247-c0a874835df3
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
       return instance.get(`profile/` + userId)
            
    },
    
    // header(id, email, login) {
    //     return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me${id, email, login}`)
    // },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

