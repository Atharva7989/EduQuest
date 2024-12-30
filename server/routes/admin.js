import express from 'express';
import { isAdmin, isAuth } from '../middlewares/isAuth.js';
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllStats } from '../controllers/admin.js';
import { uploadFiles } from '../middlewares/multer.js';
import { getMyCourses } from '../controllers/course.js';

const router = express.Router();

router.post('/course/new',isAuth,isAdmin,uploadFiles,createCourse);
router.post('/course/:id',isAuth,isAdmin,uploadFiles,addLecture);
router.delete('/course/:id',isAuth,isAdmin, deleteCourse);
router.delete('/lecture/:id',isAuth,isAdmin,deleteLecture); 
router.get('/stats',isAuth , isAdmin ,getAllStats);
// router.get('/mycourse',isAuth , isAdmin ,getMyCourses);

export default router;