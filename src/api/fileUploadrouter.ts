import {Router} from "express";

import { fileUploadcontroller } from "./file.controller";
import Auth from "../utils/auth"
import upload from '../utils/multer'


const fileUploadRouter = Router()
const fileUpload = upload.fields([
    { name: 'images', maxCount: 4 },
    { name: 'videos', maxCount: 3 },
  ]);
fileUploadRouter.post('/upload',Auth.verifyKey,fileUpload,fileUploadcontroller.uploadfile
)
fileUploadRouter.post('/getkey',Auth.generateKey)

export {fileUploadRouter}

