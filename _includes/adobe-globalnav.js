window.adobeGlobalnavConfig = {
	locale: "en",
	footer: {
		target: document.getElementById("footer_global"),
		excludeNavigation: true
	},
	callbacks: {
		globalnav_ready: function() {
			document.querySelector("#footer_global").style.visibility = "hidden";
			document.querySelector("#AdobeFooterNav").classList.add("has-spectrum-css-customTheme");
		}
	}
};
