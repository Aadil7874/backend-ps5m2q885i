import express from "express";
import { get, add, update, updatePut, deleteCourse } from "../controller/courseCtrl.js";
import { authenticate, isSuperAdmin, verifyToken } from "../utils/utils.js";

const router = express.Router();

// Public API's
router.get("/courseList", get);
router.get("/courseList/:page/:pageSize", get);
// Private API's
router.use(verifyToken)
router.post("/addCourse", isSuperAdmin, add);
router.patch("/updateCourse", update);
router.put("/compUpdateCourse", updatePut);
router.delete("/deleteCourse/:id", isSuperAdmin, deleteCourse);

export default router;