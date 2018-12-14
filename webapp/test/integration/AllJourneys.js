/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"test/routing-sample/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test/routing-sample/test/integration/pages/ViewFrom",
	"test/routing-sample/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test.routing-sample.view.",
		autoWait: true
	});
});