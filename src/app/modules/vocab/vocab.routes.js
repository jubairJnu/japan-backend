const { Router } = require("express");
const { VocabControllers } = require("./vocab.controller");

const router = Router();

router.get("/", VocabControllers.getAllVocab);
router.post("/", VocabControllers.createVocab);
router.patch("/:id", VocabControllers.updateVocab);
router.delete("/:id", VocabControllers.deleteVocab);

module.exports = {
  VocabRouters: router,
};
