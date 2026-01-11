import { Router } from "express";

const router = Router();

router.get("/get-data", async (req, res) => {
  try {
    return res.json(200).send("okay");
  } catch (error) {
    return res.json(500).send("server  error");
  }
});

export default router;
