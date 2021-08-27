import { Request, Response } from 'express'
import sharp from 'sharp'
import * as dotenv from 'dotenv';
import {uploadtos3} from '../utils/aws'

dotenv.config()

class fileUploadcontrollers {
  
    public async uploadfile(req: Request, res: Response) {
      
       try{
        let promises = []
        if (req.files['images'] ) {

            for (const file of req.files['images']) {
              const img = sharp(file.buffer)
                const resizeImg = img.resize(640, 480).jpeg({ quality: 85, chromaSubsampling: '4:4:4' })
                const bufImg = await resizeImg.toBuffer()
                promises.push(uploadtos3(bufImg, file.originalname))
            }
           

        }
       if( req.files['videos']){
        for (const file of req.files['videos']){
            console.log(file)
           promises.push(uploadtos3(file.buffer, file.originalname))

        }

       }
        let urls = await Promise.all(promises)

        res.send(urls)
       }catch(err){
           console.log(err)
       }


    }

}
export const fileUploadcontroller = new fileUploadcontrollers()