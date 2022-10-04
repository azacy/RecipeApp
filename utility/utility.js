import  jwt  from "jsonwebtoken";

 export const generateToken = (id) => {
    return jwt.sign({id}, "56A56251436C044434190BE8198969EFD4303C24893331B3A04B8F85D5388500", {
        expiresIn: '30d'
    })
 }