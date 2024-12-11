import express from "express";
import { get, add, update, updatePut, deleteCourse } from "../controller/courseCtrl.js";
import { authenticate, verifyToken } from "../utils/utils.js";

const router = express.Router();

router.get("/courseList", get);
router.get("/courseList/:page/:pageSize", get);
router.post("/addCourse", verifyToken, add);
router.patch("/updateCourse", verifyToken, update);
router.put("/compUpdateCourse", verifyToken, updatePut);
router.delete("/deleteCourse/:id", verifyToken, deleteCourse);

export default router;