import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4dfae8ee-693d-4cc3-ab67-50e13d706c21",
    }
    // 4dfae8ee-693d-4cc3-ab67-50e13d706c21   add90d80-6378-4132-a247-c0a874835df3
});

export const usersAPI = {

    requestUsers(currentPage = 1, pageSize = 100) {
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
        console.warn("Obsolete method. Please profileAPI object.")
       return profileAPI.getProfile(userId);
            
    },
    
    
    
}
export const profileAPI = {
    getProfile(userId) {
       return instance.get(`profile/` + userId);    
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
            return instance.put(`profile/status`, {status: status});
    }
    
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    },
}

