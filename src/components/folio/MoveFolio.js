import $ from "jquery"

const MoveFolio = () => {
	return $("folio").on(function() {
		if ($(this).attr("trigger") === "0") {
			$(this).animate({ up: "100px" }, 700);
			$(this).attr("trigger", "1");
		} else {
			$(this).animate({ up: "0px" }, 700);
			$(this).attr("trigger", "0");
		}
	});
};

export default MoveFolio;