const express = require("express");
const contacts  = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavoerite);

    router.route("/:id")
    .get(contacts.fiindAllFavorite)

router.route("/:id")
    .get(contacts.findOne)
    .get(contacts.update)
    .delete(contacts.delete);

module.exports = router;