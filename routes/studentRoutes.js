const express=require("express");
const {createStudent,getAllStudent, updateStudent, deleteStudent}=require("../controllers/studentController");

const router = express.Router();
router.post("/",createStudent);
router.get("/",getAllStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router;