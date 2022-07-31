const jwttoken = '6bc43ea8423a9db4eca8332f9516eeadfa44c5794dc7c93f8bbbb9a625d4d22fd09ef0'
import jwt from 'jsonwebtoken'
import { Createerror } from './Createerror.js'
export const verifyToken = (req,res,next) => {
    const token1 = req.cookies.acess_token
    if(!token1){
        return (next(Createerror(404,"You are not authenticated")))
    }
    jwt.verify(token1,jwttoken,(err,Finduser)=>{
        if(err) {
            return(next(Createerror(403,"Token is not correct")))
        }
        req.user = Finduser;
        next()
    })

}