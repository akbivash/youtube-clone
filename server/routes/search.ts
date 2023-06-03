import { Router } from "express";

const { getSearchResultsWithId } = require("../controllers/search");
const { getSearchResultsWithKeyword } = require("../controllers/search")

var router = Router();

router.get("/:keyword", getSearchResultsWithKeyword);
router.get("/related/:id", getSearchResultsWithId);

module.exports = router;
