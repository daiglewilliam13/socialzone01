export interface action {type: String, payLoad: String}

export const setUsername = (username: string) =>{
    return {type: "login", payLoad: username}
}