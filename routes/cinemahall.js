import  express  from "express";
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("Hello this is cinemahall endpoint");
})

export default router;