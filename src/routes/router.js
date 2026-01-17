import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  try {
    res.send({ data: "hello" });
  } catch (e) {
    console.log(e);
    res.send({ data: e });
  }
});

export default router;
