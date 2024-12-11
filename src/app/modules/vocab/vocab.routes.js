const { Router } = require("express");
const { VocabControllers } = require("./vocab.controller");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/", VocabControllers.getAllVocab);
router.post("/", auth, VocabControllers.createVocab);
router.patch("/:id", VocabControllers.updateVocab);
router.delete("/:id", VocabControllers.deleteVocab);

module.exports = {
  VocabRouters: router,
};
