const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPeople,
  createPeoplePost,
  updatePeople,
  deletePeople,
} = require("../controllers/poeple");

// router.get("/", getPeople);

// router.post("/", createPeople);

// router.post("/postman", createPeoplePost);

// router.put("/:id", updatePeople);

// router.delete("/:id", deletePeople);

router.route("/").get(getPeople).post(createPeople);
router.route("/postman").post(createPeoplePost);
router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
