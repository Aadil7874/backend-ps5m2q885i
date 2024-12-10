import express from "express";
import { get, add, update, updatePut, deleteCourse } from "../controller/courseCtrl.js";

const router = express.Router();

router.get("/courseList", get);
router.get("/courseList/:page/:pageSize", get);
router.post("/addCourse", add);
router.patch("/updateCourse", update);
router.put("/compUpdateCourse", updatePut);
router.delete("/deleteCourse/:id", deleteCourse);

export default router;