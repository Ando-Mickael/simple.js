const router = require("express").Router();
const crudController = require("../controllers/crud.controller");

router.get("/:table/", crudController.findAll);
router.get("/:table/:id", crudController.findById);
router.post("/:table/", crudController.save);
router.put("/:table/:id", crudController.updateOne);
router.delete("/:table/:id", crudController.deleteOne);

module.exports = router;