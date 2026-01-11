import { Router } from "express";

const router = Router();
router.get("/get-data", async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "okay",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
});

export default router;
