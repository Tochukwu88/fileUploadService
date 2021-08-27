import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

class Auth {
    static async generateKey (req: Request, res: Response){
        
    try{
        const hash =  jwt.sign({payload:req.body.name},process.env.SECRETKEY)
        return res.json({
            key:hash
        })
    }catch(err){
        console.log(err)

    }

    }
    static async verifyKey (req: Request, res: Response,next){
        const hash = req.headers.authorization
        try {
                  
             let decoded = await jwt.verify(hash, process.env.SECRETKEY)
                next()



        } catch (err) {
            return res.status(403).json({
                error: 'please provide a key'
            })
        }

    }
}
export default Auth