ngApp.controller('myValidatorController', function($scope) {

	$scope.urlValidator = serverDirectURL;
	$scope.urlCaptcha = serverCaptchaURL;
	$scope.captchaEnabled = captchaEnabled;
	$scope.betaBanner = betaBanner;
	$scope.labelStaging = labelStaging;
	$scope.serverToken = serverToken;
	$scope.environment = environment;

	$.ajaxSetup({
		cache: false
	});
	
	// Show/Hide captcha
	if ($scope.captchaEnabled == true) {
		$("#metadata-upload-file").hide();
		$("#buttonStart").prop("disabled", true);
		$("#captchaContainer").show();
	} else {
		$("#metadata-upload-file").show();
		$("#buttonStart").prop("disabled", true);
		$("#captchaContainer").hide();
	}
	
	// Show/Hide Beta banner
	if ($scope.betaBanner == true) {
		$("#betaBanner").show();
	} else {
		$("#betaBanner").hide();
	}
	
	//Show STAGING label
	if ($scope.labelStaging == true) {
		$(document).prop('title', "[STAGING] " + $(document).prop('title'));
	}

	$scope.roundNumber = function(i) {
		return Math.round(i + 0.4);
	}

	$("#verifyCaptcha").click(function() {
		dataCaptcha = {
			sid: document.querySelectorAll("input[name='wt_captcha_sid']")[0].value,
			answer: document.querySelectorAll("input[name='wt_captcha_answer']")[0].value
		};
		$.ajax({
			type: "POST",
			url: $scope.urlCaptcha,
			data: dataCaptcha,
			success: function(data) {
				$("#metadata-upload-file").show();
				$("#buttonStart").prop("disabled", true);
				$("#captchaContainer").hide();
			},
			error: function(errMsg) {
				$("#metadata-upload-file").hide();
				$("#buttonStart").prop("disabled", true);
				$("#captchaContainer").show();
				$wt.render("captcha", {
					"service": "captcha",
					"show": {
						"invalid": true
					}
				});
			}
		});
	});

	$scope.selectMetadataRecords = function(metadataRecords) {
		$scope.select.metadataRecords = metadataRecords;
		if (metadataRecords == "metadata_dataset") {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
			$("#metadata-20-dataset-options-3").prop("checked", true);
			$("#metadata-20-dataset-options-4").prop("checked", true);
			$("#metadata-20-dataset-options-5").prop("checked", false);
			$("#metadata-20-dataset-options-6").prop("checked", true);
			$scope.select.metadataAdvancedCommonRequirementsDataset = true;
			$scope.select.metadataAdvancedConformanceClass1 = true;
			$scope.select.metadataAdvancedConformanceClass2 = true;
			$scope.select.metadataAdvancedConformanceClass2b = true;
			$scope.select.metadataAdvancedConformanceClass2c = false;
			$scope.select.metadataAdvancedConformanceClass8 = true;
		}
		if (metadataRecords == "networkservice") {
			$("#metadata-20-networkservice-options-1").prop("checked", true);
			$("#metadata-20-networkservice-options-2").prop("checked", true);
			$("#metadata-20-networkservice-options-3").prop("checked", true);
			$scope.select.metadataAdvancedCommonRequirementsNetworkService = true;
			$scope.select.metadataAdvancedConformanceClass3 = true;
			$scope.select.metadataAdvancedConformanceClass4 = true;
		}
		if (metadataRecords == "spatialdataservice") {
			$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-2").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-3").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
			$scope.select.metadataAdvancedCommonRequirementsNetworkService = true;
			$scope.select.metadataAdvancedConformanceClass3 = true;
			$scope.select.metadataAdvancedConformanceClass5 = true;
			$scope.select.metadataAdvancedConformanceClass6 = false;
			$scope.select.metadataAdvancedConformanceClass7 = false;
		}
		$scope.prefillLabel();
	}

	$scope.runTest = function() {
		$scope.restservice.testsuiteid = [];
		// METADATA
		if ($scope.select.typeResource == "metadata") {
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "1.3") && ($scope.select.metadataRecords == "-") && ($scope.select.metadataAdvancedOptions === false)) $scope.restservice.testsuiteid = "EID9a31ecfc-6673-43c0-9a31-b4595fb53a98";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "1.3") && ($scope.select.metadataRecords == "-") && ($scope.select.metadataAdvancedOptions === true) && ($scope.select.metadataAdvancedInteroperability == true)) $scope.restservice.testsuiteid = "EID9a31ecfc-6673-43c0-9a31-b4595fb53a98";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "1.3") && ($scope.select.metadataRecords == "-") && ($scope.select.metadataAdvancedOptions === true) && ($scope.select.metadataAdvancedInteroperability == false) && ($scope.select.metadataAdvancedInspireProfile == true)) $scope.restservice.testsuiteid = "EIDec7323d5-d8f0-4cfe-b23a-b826df86d58c";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "1.3") && ($scope.select.metadataRecords == "-") && ($scope.select.metadataAdvancedOptions === true) && ($scope.select.metadataAdvancedInteroperability == false) && ($scope.select.metadataAdvancedInspireProfile == false)) $scope.restservice.testsuiteid = "EIDe3500038-e37c-4dcf-806c-6bc82d585b3b";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "metadata_dataset") && ($scope.select.metadataAdvancedOptions === false)) {
				arrayTestsuiteid = [];
				arrayTestsuiteid.push("EID2be1480a-fe42-40b2-9420-eb0e69385c80");
				arrayTestsuiteid.push("EID0b86f7a3-2947-4841-823d-6a00d8e06d70");
				arrayTestsuiteid.push("EID7cceba68-e575-4429-9959-1b6b3d201b6d");
				$scope.restservice.testsuiteid = arrayTestsuiteid;
			}
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "metadata_dataset") && ($scope.select.metadataAdvancedOptions === true)) {
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === false) && ($scope.select.metadataAdvancedConformanceClass2b === true) && ($scope.select.metadataAdvancedConformanceClass2c === true)) {
					arrayTestsuiteid = [];
					arrayTestsuiteid.push("EID0b86f7a3-2947-4841-823d-6a00d8e06d70");
					arrayTestsuiteid.push("EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b");
					$scope.restservice.testsuiteid = arrayTestsuiteid;
				}
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === true) && ($scope.select.metadataAdvancedConformanceClass2b === true) && ($scope.select.metadataAdvancedConformanceClass2c === true)) {
					arrayTestsuiteid = [];
					arrayTestsuiteid.push("EID2be1480a-fe42-40b2-9420-eb0e69385c80");
					arrayTestsuiteid.push("EID0b86f7a3-2947-4841-823d-6a00d8e06d70");
					arrayTestsuiteid.push("EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b");
					$scope.restservice.testsuiteid = arrayTestsuiteid;
				}
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === true) && ($scope.select.metadataAdvancedConformanceClass2b === true) && ($scope.select.metadataAdvancedConformanceClass2c !== true)) {
					arrayTestsuiteid = [];
					arrayTestsuiteid.push("EID2be1480a-fe42-40b2-9420-eb0e69385c80");
					arrayTestsuiteid.push("EID0b86f7a3-2947-4841-823d-6a00d8e06d70");
					$scope.restservice.testsuiteid = arrayTestsuiteid;
				}
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === true) && ($scope.select.metadataAdvancedConformanceClass2b !== true) && ($scope.select.metadataAdvancedConformanceClass2c === true)) {
					arrayTestsuiteid = [];
					arrayTestsuiteid.push("EID0b86f7a3-2947-4841-823d-6a00d8e06d70");
					arrayTestsuiteid.push("EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b");
					$scope.restservice.testsuiteid = arrayTestsuiteid;
				}

				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === false) && ($scope.select.metadataAdvancedConformanceClass2b === true) && ($scope.select.metadataAdvancedConformanceClass2c === false)) $scope.restservice.testsuiteid = "EID0b86f7a3-2947-4841-823d-6a00d8e06d70";
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === true) && ($scope.select.metadataAdvancedConformanceClass2b === false) && ($scope.select.metadataAdvancedConformanceClass2c === false)) $scope.restservice.testsuiteid = "EID2be1480a-fe42-40b2-9420-eb0e69385c80";
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === false) && ($scope.select.metadataAdvancedConformanceClass2b === false) && ($scope.select.metadataAdvancedConformanceClass2c === false)) $scope.restservice.testsuiteid = "EIDe4a95862-9cc9-436b-9fdd-a0115d342350";
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === false) && ($scope.select.metadataAdvancedConformanceClass2 === false) && ($scope.select.metadataAdvancedConformanceClass2b === false) && ($scope.select.metadataAdvancedConformanceClass2c === false)) $scope.restservice.testsuiteid = "EID59692c11-df86-49ad-be7f-94a1e1ddd8da";
				if (($scope.select.metadataAdvancedCommonRequirementsDataset === true) && ($scope.select.metadataAdvancedConformanceClass1 === true) && ($scope.select.metadataAdvancedConformanceClass2 === false) && ($scope.select.metadataAdvancedConformanceClass2b === false) && ($scope.select.metadataAdvancedConformanceClass2c === true)) $scope.restservice.testsuiteid = "EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b";
				
				console.log($scope.select.metadataAdvancedConformanceClass8 === true)
				if($scope.select.metadataAdvancedConformanceClass8 === true){
					if (typeof $scope.restservice.testsuiteid === 'string') {
						$scope.restservice.testsuiteid = [$scope.restservice.testsuiteid];
					}
					$scope.restservice.testsuiteid.push("EID7cceba68-e575-4429-9959-1b6b3d201b6d");
				}
	
				console.log('ETS selected: ' + $scope.restservice.testsuiteid)
			}
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "networkservice") && ($scope.select.metadataAdvancedOptions === false)) $scope.restservice.testsuiteid = "EID606587df-65a8-4b7b-9eee-e0d94daaa42a";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "networkservice") && ($scope.select.metadataAdvancedOptions === true)) {
				if (($scope.select.metadataAdvancedCommonRequirementsNetworkService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass4 === true)) $scope.restservice.testsuiteid = "EID606587df-65a8-4b7b-9eee-e0d94daaa42a";
				if (($scope.select.metadataAdvancedCommonRequirementsNetworkService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass4 === false)) $scope.restservice.testsuiteid = "EID8f869e23-c9e9-4e86-8dca-be30ff421229";
				if (($scope.select.metadataAdvancedCommonRequirementsNetworkService === true) && ($scope.select.metadataAdvancedConformanceClass3 === false) && ($scope.select.metadataAdvancedConformanceClass4 === false)) $scope.restservice.testsuiteid = "EID59692c11-df86-49ad-be7f-94a1e1ddd8da";
			}
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "spatialdataservice") && ($scope.select.metadataAdvancedOptions === false)) $scope.restservice.testsuiteid = "EID8db54d8a-8578-4959-b891-5394d9f53a28";
			if (($scope.select.typeResource == "metadata") && ($scope.select.metadataVersion == "2.0") && ($scope.select.metadataRecords == "spatialdataservice") && ($scope.select.metadataAdvancedOptions === true)) {
				if (($scope.select.metadataAdvancedCommonRequirementsSpatialDataService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass5 === true) && ($scope.select.metadataAdvancedConformanceClass6 === false) && ($scope.select.metadataAdvancedConformanceClass7 === false)) $scope.restservice.testsuiteid = "EID8db54d8a-8578-4959-b891-5394d9f53a28";
				if (($scope.select.metadataAdvancedCommonRequirementsSpatialDataService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass5 === true) && ($scope.select.metadataAdvancedConformanceClass6 === true) && ($scope.select.metadataAdvancedConformanceClass7 === true)) $scope.restservice.testsuiteid = "EIDa593a7ad-42d9-46d0-985d-9dff3e684428";
				if (($scope.select.metadataAdvancedCommonRequirementsSpatialDataService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass5 === true) && ($scope.select.metadataAdvancedConformanceClass6 === true) && ($scope.select.metadataAdvancedConformanceClass7 === false)) $scope.restservice.testsuiteid = "EID7514777a-6cb8-499c-acd5-912496dc84e9";
				if (($scope.select.metadataAdvancedCommonRequirementsSpatialDataService === true) && ($scope.select.metadataAdvancedConformanceClass3 === true) && ($scope.select.metadataAdvancedConformanceClass5 === false) && ($scope.select.metadataAdvancedConformanceClass6 === false) && ($scope.select.metadataAdvancedConformanceClass7 === false)) $scope.restservice.testsuiteid = "EID8f869e23-c9e9-4e86-8dca-be30ff421229";
				if (($scope.select.metadataAdvancedCommonRequirementsSpatialDataService === true) && ($scope.select.metadataAdvancedConformanceClass3 === false) && ($scope.select.metadataAdvancedConformanceClass5 === false) && ($scope.select.metadataAdvancedConformanceClass6 === false) && ($scope.select.metadataAdvancedConformanceClass7 === false)) $scope.restservice.testsuiteid = "EID59692c11-df86-49ad-be7f-94a1e1ddd8da";
			}
		}
		// VIEW SERVICE
		if ($scope.select.typeResource == "viewservice") {
			if (($scope.select.typeResource == "viewservice") && ($scope.select.viewServiceType == "WMS")) $scope.restservice.testsuiteid = "EIDeec9d674-d94b-4d8d-b744-1309c6cae1d2";
			if (($scope.select.typeResource == "viewservice") && ($scope.select.viewServiceType == "WTMS")) $scope.restservice.testsuiteid = "EID550ceacf-b3cb-47a0-b2dd-d3edb18344a9";
		}
		// DOWNLOAD SERVICE
		$("#text-input-url").attr("placeholder", "http://example.service.url/context?service=[SERVICE]&request=GetCapabilities");
		if ($scope.select.typeResource == "downloadservice") {
			console.log($scope.select.typeResource);
			console.log($scope.select.downloadServiceType);
			console.log($scope.select.downloadSubServiceType);
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct23")) $scope.restservice.testsuiteid = ["EIDed2d3501-d700-4ff9-b9bf-070dece8ddbd","EID174edf55-699b-446c-968c-1892a4d8d5bd"];
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct3")) $scope.restservice.testsuiteid = "EIDed2d3501-d700-4ff9-b9bf-070dece8ddbd";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct2")&& ($scope.environment == "PROD")) $scope.restservice.testsuiteid = ["EID95a1b6fc-2b55-3d43-9502-3b8b605bda10","EID174edf55-699b-446c-968c-1892a4d8d5bd"];
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct2") && ($scope.environment == "STAGING")) $scope.restservice.testsuiteid = ["EID95a1b6fc-2b55-3d43-9502-3b8b605bda10","EID174edf55-699b-446c-968c-1892a4d8d5bd"];
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct1") && ($scope.environment == "PROD")) $scope.restservice.testsuiteid = "EID95a1b6fc-2b55-3d43-9502-3b8b605bda10";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "direct1") && ($scope.environment == "STAGING")) $scope.restservice.testsuiteid = "EID95a1b6fc-2b55-3d43-9502-3b8b605bda10";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WFS") && ($scope.select.downloadSubServiceType == "predefined")) $scope.restservice.testsuiteid = "EID174edf55-699b-446c-968c-1892a4d8d5bd";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "PDA")) $scope.restservice.testsuiteid = "EID11571c92-3940-4f42-a6cd-5e2b1c6f4d93";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "WCS")) $scope.restservice.testsuiteid = "EID074570ad-d720-47b3-af79-d54201793404";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "SOS")) $scope.restservice.testsuiteid = "EID0ff73873-5601-41ff-8d92-3fb1fbba3cf2";
			if (($scope.select.typeResource == "downloadservice") && ($scope.select.downloadServiceType == "OGC")) {
				$("#text-input-url").attr("placeholder", "http://example.service.url");
				$scope.restservice.testsuiteid = "EIDc543e1ad-465d-3162-ac1a-badef588dc76";
			}
		}
		// DISCOVERY SERVICE
		if ($scope.select.typeResource == "discoveryservice") {
			if (($scope.select.typeResource == "discoveryservice") && ($scope.select.discoveryServiceType == "CSW")) $scope.restservice.testsuiteid = "EIDc837298f-a10e-42d1-88f2-f1415cbbb463";
		}
		// DATA SET
		if ($scope.select.typeResource == "dataset") {
			arrayTestsuiteid = [];
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType == "CCS")) {
				if ($("#dataset-ccs-options-5").prop("checked") == true) arrayTestsuiteid.push("EID63f586f0-080c-493b-8ca2-9919427440cc");
				if ($("#dataset-ccs-options-4").prop("checked") == true) arrayTestsuiteid.push("EID499937ea-0590-42d2-bd7a-1cafff35ecdb");
				if ($("#dataset-ccs-options-3").prop("checked") == true) arrayTestsuiteid.push("EID09820daf-62b2-4fa3-a95f-56a0d2b7c4d8");
				if ($("#dataset-ccs-options-2").prop("checked") == true) arrayTestsuiteid.push("EID61070ae8-13cb-4303-a340-72c8b877b00a");
				if (($("#dataset-ccs-options-2").prop("checked") == false) && ($("#dataset-ccs-options-3").prop("checked") == false) && ($("#dataset-ccs-options-4").prop("checked") == false) && ($("#dataset-ccs-options-5").prop("checked") == false)) arrayTestsuiteid.push("EID545f9e49-009b-4114-9333-7ca26413b5d4");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("AD"))) {
				if ($("#dataset-ad-options-10").prop("checked") == true) arrayTestsuiteid.push("EID6985a681-fd81-4448-83e8-061758b9ca8c");
				if ($("#dataset-ad-options-8").prop("checked") == true) arrayTestsuiteid.push("EID334bbd38-378d-4a44-8a19-5d00df919ec0");
				if ($("#dataset-ad-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9c31fa6e-1fab-4345-bf29-6d2c129de312");
				if ($("#dataset-ad-options-4").prop("checked") == true) arrayTestsuiteid.push("EID8aaef94b-6a4d-47ab-a5d0-70ad5cb28b08");
				if (($("#dataset-ad-options-10").prop("checked") == false) && ($("#dataset-ad-options-8").prop("checked") == false) && ($("#dataset-ad-options-6").prop("checked") == false) && ($("#dataset-ad-options-4").prop("checked") == false)) arrayTestsuiteid.push("EIDe6800faf-2e56-47df-831a-75a96b35f33d");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("AU") && $scope.select.subAdminUnits.includes("AU"))) {
				if ($("#dataset-au-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDcafb75f8-5deb-4cca-89df-d3189322e97f");
				if ($("#dataset-au-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDee28b75e-5c80-4370-838d-ab1b18e30b13");
				if ($("#dataset-au-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDacc5931c-4ff0-499f-b916-3cda1603456b");
				if ($("#dataset-au-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDddecef4b-89a3-4f9d-9246-a50b588fa5a2");
				if (($("#dataset-au-options-10").prop("checked") == false) && ($("#dataset-au-options-8").prop("checked") == false) && ($("#dataset-au-options-6").prop("checked") == false) && ($("#dataset-au-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID47c569bc-677d-4ce3-8411-e2b29189332a");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("AU") && $scope.select.subAdminUnits.includes("MU"))) {
				if ($("#dataset-mu-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDcafb75f8-5deb-4cca-89df-d3189322e97f");
				if ($("#dataset-mu-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDee28b75e-5c80-4370-838d-ab1b18e30b13");
				if ($("#dataset-mu-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDacc5931c-4ff0-499f-b916-3cda1603456b");
				if ($("#dataset-mu-options-4").prop("checked") == true) arrayTestsuiteid.push("EID117562c2-d6e1-4345-9f7b-cba229cf6685");
				if (($("#dataset-mu-options-10").prop("checked") == false) && ($("#dataset-mu-options-8").prop("checked") == false) && ($("#dataset-mu-options-6").prop("checked") == false) && ($("#dataset-mu-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID47c569bc-677d-4ce3-8411-e2b29189332a");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("CP"))) {
				if ($("#dataset-cp-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDdbcc48ae-6871-4444-8e95-547bc22aacb2");
				if ($("#dataset-cp-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDc4fbae00-3070-49fa-b803-24c66c31ac70");
				if ($("#dataset-cp-options-6").prop("checked") == true) arrayTestsuiteid.push("EID92032cdb-db88-42aa-96c0-70a1af9e68b1");
				if ($("#dataset-cp-options-4").prop("checked") == true) arrayTestsuiteid.push("EID1f9bc92a-5879-4e9b-bcbe-1d2d0cab0aab");
				if (($("#dataset-cp-options-10").prop("checked") == false) && ($("#dataset-cp-options-8").prop("checked") == false) && ($("#dataset-cp-options-6").prop("checked") == false) && ($("#dataset-cp-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID18b742d0-15eb-421f-bbec-7c8c5cf7ee1a");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("GN"))) {
				if ($("#dataset-gn-options-10").prop("checked") == true) arrayTestsuiteid.push("EID1620bd27-b881-48a2-bf2b-301541e035f4");
				if ($("#dataset-gn-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDc3379b85-853e-4a35-8c3d-b64191d94587");
				if ($("#dataset-gn-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDa32f76c7-f1d3-4d70-83ef-d51d2545fa2e");
				if ($("#dataset-gn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID0fc46305-c623-422b-b7d7-251c3b86eb7f");
				if (($("#dataset-gn-options-10").prop("checked") == false) && ($("#dataset-gn-options-8").prop("checked") == false) && ($("#dataset-gn-options-6").prop("checked") == false) && ($("#dataset-gn-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID02b7b0cb-429a-4f4e-b0db-988464fb9496");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("HY") && $scope.select.subHydro.includes("HN"))) {
				if ($("#dataset-hn-options-10").prop("checked") == true) arrayTestsuiteid.push("EID122b2f38-302f-4271-9653-69cf86fcb5c4");
				if ($("#dataset-hn-options-8").prop("checked") == true) arrayTestsuiteid.push("EID893b7541-c9cb-4e0a-9f84-5d55cad1866c");
				if ($("#dataset-hn-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDd0b58f38-98ae-43a8-a787-9a5084c60267");
				if ($("#dataset-hn-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDe008001b-5233-4081-a1ae-515d7702ce02");
				if (($("#dataset-hn-options-10").prop("checked") == false) && ($("#dataset-hn-options-8").prop("checked") == false) && ($("#dataset-hn-options-6").prop("checked") == false) && ($("#dataset-hn-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID81b070d3-b17f-430b-abee-456268346912");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("OI"))) {
				if ($("#dataset-oi-options-10").prop("checked") == true) arrayTestsuiteid.push("EID1b65c0d1-6374-4638-a489-86ba4d5c39d6");
				if ($("#dataset-oi-options-8").prop("checked") == true) arrayTestsuiteid.push("EID3476ab51-fd62-4b19-a563-f3c05373c2ed");
				if ($("#dataset-oi-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDdd6d5c5f-6d38-45a1-b85d-b9f2606bff2d");
				if ($("#dataset-oi-options-4").prop("checked") == true) arrayTestsuiteid.push("EID46af85e3-f8cc-4812-b8b7-36d99897084c");
				if (($("#dataset-oi-options-10").prop("checked") == false) && ($("#dataset-oi-options-8").prop("checked") == false) && ($("#dataset-oi-options-6").prop("checked") == false) && ($("#dataset-oi-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID2151146d-da46-4242-9471-0918db59abb5");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("HY") && $scope.select.subHydro.includes("HPW"))) {
				if ($("#dataset-hpw-options-10").prop("checked") == true) arrayTestsuiteid.push("EID122b2f38-302f-4271-9653-69cf86fcb5c4");
				if ($("#dataset-hpw-options-8").prop("checked") == true) arrayTestsuiteid.push("EID893b7541-c9cb-4e0a-9f84-5d55cad1866c");
				if ($("#dataset-hpw-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDd0b58f38-98ae-43a8-a787-9a5084c60267");
				if ($("#dataset-hpw-options-4").prop("checked") == true) arrayTestsuiteid.push("EID45133c90-1929-405c-867d-9648b0620bf7");
				if (($("#dataset-hpw-options-10").prop("checked") == false) && ($("#dataset-hpw-options-8").prop("checked") == false) && ($("#dataset-hpw-options-6").prop("checked") == false) && ($("#dataset-hpw-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID81b070d3-b17f-430b-abee-456268346912");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("PS"))) {
				if ($("#dataset-ps-options-10").prop("checked") == true) arrayTestsuiteid.push("EID828410c1-53f2-4683-bded-481ad9d4d3e9");
				if ($("#dataset-ps-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDb529e8fa-b9f8-4758-acea-1d2af744599f");
				if ($("#dataset-ps-options-6").prop("checked") == true) arrayTestsuiteid.push("EID7831c8b4-f666-4534-838a-137b30bfecbe");
				if ($("#dataset-ps-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4c53a8c7-7cac-4531-982b-d03eb48ffa77");
				if (($("#dataset-ps-options-10").prop("checked") == false) && ($("#dataset-ps-options-8").prop("checked") == false) && ($("#dataset-ps-options-6").prop("checked") == false) && ($("#dataset-ps-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID8222c253-8468-4b94-a46b-2d1af1698a65");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("TN")) && $scope.select.subTransport.includes("ATN")) {
				if ($("#dataset-atn-options-11").prop("checked") == true) arrayTestsuiteid.push("EID9d35024d-9dd7-43a9-afff-d5aea5f51595");
				if ($("#dataset-atn-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDdf5db9a4-b15f-4193-a6ff-6e9951af46f5");
				if ($("#dataset-atn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID733af9a0-312b-4f71-9aa2-977cd2134d23");
				if ($("#dataset-atn-options-5").prop("checked") == true) arrayTestsuiteid.push("EID6800c834-b4e0-4631-9209-73530fb9ccee");

				if (($("#dataset-atn-options-11").prop("checked") == false) && ($("#dataset-atn-options-9").prop("checked") == false) && ($("#dataset-atn-options-7").prop("checked") == false) && ($("#dataset-atn-options-5").prop("checked") == false)) {
					if ($("#dataset-atn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4441cbde-371f-4899-90b3-145f4fd08ebc");
					if ($("#dataset-atn-options-4").prop("checked") == false) {
						if ($("#dataset-atn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID9af1c865-1cf0-43ff-9250-069df01b0948");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("TN")) && $scope.select.subTransport.includes("CTN")) {
				if ($("#dataset-ctn-options-11").prop("checked") == true) arrayTestsuiteid.push("EID9d35024d-9dd7-43a9-afff-d5aea5f51595");
				if ($("#dataset-ctn-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDdf5db9a4-b15f-4193-a6ff-6e9951af46f5");
				if ($("#dataset-ctn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID733af9a0-312b-4f71-9aa2-977cd2134d23");
				if ($("#dataset-ctn-options-5").prop("checked") == true) arrayTestsuiteid.push("EID731621b9-2daa-49fd-99ef-9279b7f335b5");

				if (($("#dataset-ctn-options-11").prop("checked") == false) && ($("#dataset-ctn-options-9").prop("checked") == false) && ($("#dataset-ctn-options-7").prop("checked") == false) && ($("#dataset-ctn-options-5").prop("checked") == false)) {
					if ($("#dataset-ctn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4441cbde-371f-4899-90b3-145f4fd08ebc");
					if ($("#dataset-ctn-options-4").prop("checked") == false) {
						if ($("#dataset-ctn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID9af1c865-1cf0-43ff-9250-069df01b0948");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("TN")) && $scope.select.subTransport.includes("RATN")) {
				if ($("#dataset-ratn-options-11").prop("checked") == true) arrayTestsuiteid.push("EID9d35024d-9dd7-43a9-afff-d5aea5f51595");
				if ($("#dataset-ratn-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDdf5db9a4-b15f-4193-a6ff-6e9951af46f5");
				if ($("#dataset-ratn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID733af9a0-312b-4f71-9aa2-977cd2134d23");
				if ($("#dataset-ratn-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDe2610a9f-6432-489d-8238-92b1193e7a3d");

				if (($("#dataset-ratn-options-11").prop("checked") == false) && ($("#dataset-ratn-options-9").prop("checked") == false) && ($("#dataset-ratn-options-7").prop("checked") == false) && ($("#dataset-ratn-options-5").prop("checked") == false)) {
					if ($("#dataset-ratn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4441cbde-371f-4899-90b3-145f4fd08ebc");
					if ($("#dataset-ratn-options-4").prop("checked") == false) {
						if ($("#dataset-ratn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID9af1c865-1cf0-43ff-9250-069df01b0948");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("TN")) && $scope.select.subTransport.includes("ROTN")) {
				if ($("#dataset-rotn-options-11").prop("checked") == true) arrayTestsuiteid.push("EID9d35024d-9dd7-43a9-afff-d5aea5f51595");
				if ($("#dataset-rotn-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDdf5db9a4-b15f-4193-a6ff-6e9951af46f5");
				if ($("#dataset-rotn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID733af9a0-312b-4f71-9aa2-977cd2134d23");
				if ($("#dataset-rotn-options-5").prop("checked") == true) arrayTestsuiteid.push("EID14986e54-74c4-43b0-979b-d0d3e5cd0e8c");

				if (($("#dataset-rotn-options-11").prop("checked") == false) && ($("#dataset-rotn-options-9").prop("checked") == false) && ($("#dataset-rotn-options-7").prop("checked") == false) && ($("#dataset-rotn-options-5").prop("checked") == false)) {
					if ($("#dataset-rotn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4441cbde-371f-4899-90b3-145f4fd08ebc");
					if ($("#dataset-rotn-options-4").prop("checked") == false) {
						if ($("#dataset-rotn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID9af1c865-1cf0-43ff-9250-069df01b0948");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("TN")) && $scope.select.subTransport.includes("WTN")) {
				if ($("#dataset-wtn-options-11").prop("checked") == true) arrayTestsuiteid.push("EID9d35024d-9dd7-43a9-afff-d5aea5f51595");
				if ($("#dataset-wtn-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDdf5db9a4-b15f-4193-a6ff-6e9951af46f5");
				if ($("#dataset-wtn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID733af9a0-312b-4f71-9aa2-977cd2134d23");
				if ($("#dataset-wtn-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDeb35a20f-188d-4fd3-aee1-dd07eb3c3efa");

				if (($("#dataset-wtn-options-11").prop("checked") == false) && ($("#dataset-wtn-options-9").prop("checked") == false) && ($("#dataset-wtn-options-7").prop("checked") == false) && ($("#dataset-wtn-options-5").prop("checked") == false)) {
					if ($("#dataset-wtn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4441cbde-371f-4899-90b3-145f4fd08ebc");
					if ($("#dataset-wtn-options-4").prop("checked") == false) {
						if ($("#dataset-wtn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID9af1c865-1cf0-43ff-9250-069df01b0948");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("EL")) && $scope.select.subElevation.includes("EGC")) {
				if ($("#dataset-egc-options-11").prop("checked") == true) arrayTestsuiteid.push("EID2d8c64ab-c402-4fae-af50-84e7803d42e2");
				if ($("#dataset-egc-options-9").prop("checked") == true) arrayTestsuiteid.push("EID0db5c897-46df-4d6d-926d-434d9f23963a");
				if ($("#dataset-egc-options-7").prop("checked") == true) arrayTestsuiteid.push("EID35fe82ad-e02c-42d3-bc36-c14d0ac2b508");
				if ($("#dataset-egc-options-5").prop("checked") == true) arrayTestsuiteid.push("EID6b5cfe6b-f72a-4fec-8d77-036d9fb41dcd");

				if (($("#dataset-egc-options-11").prop("checked") == false) && ($("#dataset-egc-options-9").prop("checked") == false) && ($("#dataset-egc-options-7").prop("checked") == false) && ($("#dataset-egc-options-5").prop("checked") == false)) {
					if ($("#dataset-egc-options-4").prop("checked") == true) arrayTestsuiteid.push("EID8756ae77-c118-4bfe-8133-2020ff344fb3");
					if ($("#dataset-egc-options-4").prop("checked") == false) {
						if ($("#dataset-egc-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDa29e2923-f49c-4b51-84ce-fff856027448");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("EL")) && $scope.select.subElevation.includes("ETIN")) {
				if ($("#dataset-etin-options-11").prop("checked") == true) arrayTestsuiteid.push("EID2d8c64ab-c402-4fae-af50-84e7803d42e2");
				if ($("#dataset-etin-options-9").prop("checked") == true) arrayTestsuiteid.push("EID0db5c897-46df-4d6d-926d-434d9f23963a");
				if ($("#dataset-etin-options-7").prop("checked") == true) arrayTestsuiteid.push("EID35fe82ad-e02c-42d3-bc36-c14d0ac2b508");
				if ($("#dataset-etin-options-5").prop("checked") == true) arrayTestsuiteid.push("EID658d0b59-5f43-429b-a882-b27025f31c1a");

				if (($("#dataset-etin-options-11").prop("checked") == false) && ($("#dataset-etin-options-9").prop("checked") == false) && ($("#dataset-etin-options-7").prop("checked") == false) && ($("#dataset-etin-options-5").prop("checked") == false)) {
					if ($("#dataset-etin-options-4").prop("checked") == true) arrayTestsuiteid.push("EID8756ae77-c118-4bfe-8133-2020ff344fb3");
					if ($("#dataset-etin-options-4").prop("checked") == false) {
						if ($("#dataset-etin-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDa29e2923-f49c-4b51-84ce-fff856027448");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("EL")) && $scope.select.subElevation.includes("EVE")) {
				if ($("#dataset-eve-options-11").prop("checked") == true) arrayTestsuiteid.push("EID2d8c64ab-c402-4fae-af50-84e7803d42e2");
				if ($("#dataset-eve-options-9").prop("checked") == true) arrayTestsuiteid.push("EID0db5c897-46df-4d6d-926d-434d9f23963a");
				if ($("#dataset-eve-options-7").prop("checked") == true) arrayTestsuiteid.push("EID35fe82ad-e02c-42d3-bc36-c14d0ac2b508");
				if ($("#dataset-eve-options-5").prop("checked") == true) arrayTestsuiteid.push("EID745ac51c-50d1-4854-95c7-1e7a8f09e7ae");

				if (($("#dataset-eve-options-11").prop("checked") == false) && ($("#dataset-eve-options-9").prop("checked") == false) && ($("#dataset-eve-options-7").prop("checked") == false) && ($("#dataset-eve-options-5").prop("checked") == false)) {
					if ($("#dataset-eve-options-4").prop("checked") == true) arrayTestsuiteid.push("EID8756ae77-c118-4bfe-8133-2020ff344fb3");
					if ($("#dataset-eve-options-4").prop("checked") == false) {
						if ($("#dataset-eve-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDa29e2923-f49c-4b51-84ce-fff856027448");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("GE")) && $scope.select.subGeology.includes("GE")) {
				if ($("#dataset-ge-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDef6e011f-7aac-43eb-91b3-30f95632c3ab");
				if ($("#dataset-ge-options-8").prop("checked") == true) arrayTestsuiteid.push("EID50cf0786-dc31-481a-bef7-3a6cde0f34d6");
				if ($("#dataset-ge-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDa3416537-7350-4d7f-be33-694c83fef287");
				if ($("#dataset-ge-options-4").prop("checked") == true) arrayTestsuiteid.push("EID6ccde16b-c593-4f2c-b69c-497f92cdc544");
				if (($("#dataset-ge-options-10").prop("checked") == false) && ($("#dataset-ge-options-8").prop("checked") == false) && ($("#dataset-ge-options-6").prop("checked") == false) && ($("#dataset-ge-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID5ff0b3a6-d3b3-473f-941f-35f08f9418b1");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("GE")) && $scope.select.subGeology.includes("GEO")) {
				if ($("#dataset-geo-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDef6e011f-7aac-43eb-91b3-30f95632c3ab");
				if ($("#dataset-geo-options-8").prop("checked") == true) arrayTestsuiteid.push("EID50cf0786-dc31-481a-bef7-3a6cde0f34d6");
				if ($("#dataset-geo-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDa3416537-7350-4d7f-be33-694c83fef287");
				if ($("#dataset-geo-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDe7376545-7848-4e62-8ba0-581451828830");
				if (($("#dataset-geo-options-10").prop("checked") == false) && ($("#dataset-geo-options-8").prop("checked") == false) && ($("#dataset-geo-options-6").prop("checked") == false) && ($("#dataset-geo-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID5ff0b3a6-d3b3-473f-941f-35f08f9418b1");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("GE")) && $scope.select.subGeology.includes("HYD")) {
				if ($("#dataset-hyd-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDef6e011f-7aac-43eb-91b3-30f95632c3ab");
				if ($("#dataset-hyd-options-8").prop("checked") == true) arrayTestsuiteid.push("EID50cf0786-dc31-481a-bef7-3a6cde0f34d6");
				if ($("#dataset-hyd-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDa3416537-7350-4d7f-be33-694c83fef287");
				if ($("#dataset-hyd-options-4").prop("checked") == true) arrayTestsuiteid.push("EID0073dac9-bed1-4f2f-8644-19e0e42f7ede");
				if (($("#dataset-hyd-options-10").prop("checked") == false) && ($("#dataset-hyd-options-8").prop("checked") == false) && ($("#dataset-hyd-options-6").prop("checked") == false) && ($("#dataset-hyd-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID5ff0b3a6-d3b3-473f-941f-35f08f9418b1");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LC")) && $scope.select.subLandcover.includes("LCR")) {
				if ($("#dataset-lcr-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDadbb8d1c-4da0-4dda-a2c0-0b1f5b8113bb");
				if ($("#dataset-lcr-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDf9b9c323-4a77-4417-ac30-c1c532d7baf9");
				if ($("#dataset-lcr-options-7").prop("checked") == true) arrayTestsuiteid.push("EIDf67a480e-616b-4cd5-b94b-8b729dfaae27");
				if ($("#dataset-lcr-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDcb4bc4b6-eea1-4de3-a55b-c82a90724e12");

				if (($("#dataset-lcr-options-11").prop("checked") == false) && ($("#dataset-lcr-options-9").prop("checked") == false) && ($("#dataset-lcr-options-7").prop("checked") == false) && ($("#dataset-lcr-options-5").prop("checked") == false)) {
					if ($("#dataset-lcr-options-4").prop("checked") == true) arrayTestsuiteid.push("EID6495f817-cfa0-4bb9-9f45-811c59a4d691");
					if ($("#dataset-lcr-options-4").prop("checked") == false) {
						if ($("#dataset-lcr-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDd1d0409d-d60f-4c95-8efd-83149b47f10f");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LC")) && $scope.select.subLandcover.includes("LCV")) {
				if ($("#dataset-lcv-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDadbb8d1c-4da0-4dda-a2c0-0b1f5b8113bb");
				if ($("#dataset-lcv-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDf9b9c323-4a77-4417-ac30-c1c532d7baf9");
				if ($("#dataset-lcv-options-7").prop("checked") == true) arrayTestsuiteid.push("EIDf67a480e-616b-4cd5-b94b-8b729dfaae27");
				if ($("#dataset-lcv-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDe0c5fb24-9216-40b1-951e-6188b4c43c6c");

				if (($("#dataset-lcv-options-11").prop("checked") == false) && ($("#dataset-lcv-options-9").prop("checked") == false) && ($("#dataset-lcv-options-7").prop("checked") == false) && ($("#dataset-lcv-options-5").prop("checked") == false)) {
					if ($("#dataset-lcv-options-4").prop("checked") == true) arrayTestsuiteid.push("EID6495f817-cfa0-4bb9-9f45-811c59a4d691");
					if ($("#dataset-lcv-options-4").prop("checked") == false) {
						if ($("#dataset-lcv-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDd1d0409d-d60f-4c95-8efd-83149b47f10f");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("AF"))) {
				if ($("#dataset-af-options-10").prop("checked") == true) arrayTestsuiteid.push("EID2d2491df-b01e-4527-a089-82d6ffa88a80");
				if ($("#dataset-af-options-8").prop("checked") == true) arrayTestsuiteid.push("EID36dec890-a302-442e-ae35-1edcfa5ca4dd");
				if ($("#dataset-af-options-6").prop("checked") == true) arrayTestsuiteid.push("EID1ca3be4d-1953-45c7-960c-4e87dd1bc487");
				if ($("#dataset-af-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDd718e45d-8cdb-4876-957a-51a35ba9fafa");
				if (($("#dataset-af-options-10").prop("checked") == false) && ($("#dataset-af-options-8").prop("checked") == false) && ($("#dataset-af-options-6").prop("checked") == false) && ($("#dataset-af-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID2e792ebf-e98e-42d3-850d-80bbb0b568b9");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("AM"))) {
				if ($("#dataset-am-options-10").prop("checked") == true) arrayTestsuiteid.push("EID39f95104-d438-4462-a9d6-6e9ae25b261c");
				if ($("#dataset-am-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDf55d5e5a-e6be-4ab7-85b8-d8fedc129c65");
				if ($("#dataset-am-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDf104fc10-9445-11ea-bb37-0242ac130002");
				if ($("#dataset-am-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDbc6635ae-84a6-11ea-bc55-0242ac130003");
				if (($("#dataset-am-options-10").prop("checked") == false) && ($("#dataset-am-options-8").prop("checked") == false) && ($("#dataset-am-options-6").prop("checked") == false) && ($("#dataset-am-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0f7a4498-83bb-11ea-bc55-0242ac130003");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("ACMF"))) {
				if ($("#dataset-acmf-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDe714b79c-6219-4177-acb3-e01ac8f4549d");
				if ($("#dataset-acmf-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDac70176c-224c-47ea-864a-b53344a2dec8");
				if ($("#dataset-acmf-options-6").prop("checked") == true) arrayTestsuiteid.push("EID8736653c-eee8-4546-a802-ec62f1792262");
				if ($("#dataset-acmf-options-4").prop("checked") == true) arrayTestsuiteid.push("EID850a0120-7637-4aef-84aa-5673832e518a");
				if (($("#dataset-acmf-options-10").prop("checked") == false) && ($("#dataset-acmf-options-8").prop("checked") == false) && ($("#dataset-acmf-options-6").prop("checked") == false) && ($("#dataset-acmf-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID7bc56fcd-d29d-4a71-b6d1-c283e6b63b2c");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("BR"))) {
				if ($("#dataset-br-options-10").prop("checked") == true) arrayTestsuiteid.push("EID0dc28d32-e8cf-448d-a30d-8c3ba3a1252e");
				if ($("#dataset-br-options-8").prop("checked") == true) arrayTestsuiteid.push("EID973da927-87eb-42b2-b549-477b9ee5d0bb");
				if ($("#dataset-br-options-6").prop("checked") == true) arrayTestsuiteid.push("EID8aa895c0-a43a-40bb-85c7-479f66d24630");
				if ($("#dataset-br-options-4").prop("checked") == true) arrayTestsuiteid.push("EID01d98e39-6f16-4f8c-b776-6a2ce81efeba");
				if (($("#dataset-br-options-10").prop("checked") == false) && ($("#dataset-br-options-8").prop("checked") == false) && ($("#dataset-br-options-6").prop("checked") == false) && ($("#dataset-br-options-4").prop("checked") == false)) arrayTestsuiteid.push("EIDaa467ffe-2837-4e62-baba-09f9fcfd2600");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("BU")) && $scope.select.subBuildings.includes("BU2D")) {
				if ($("#dataset-bu2d-options-11").prop("checked") == true) arrayTestsuiteid.push("EID32fda995-1c2e-4a62-ab3b-d0fca47ecc8b");
				if ($("#dataset-bu2d-options-9").prop("checked") == true) arrayTestsuiteid.push("EID519a1f46-1e52-4a86-8d53-23fb39000665");
				if ($("#dataset-bu2d-options-7").prop("checked") == true) arrayTestsuiteid.push("EID22fd29c0-97a2-48d0-89e9-ef92e59eb5ca");
				if ($("#dataset-bu2d-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDcdb18aec-6d6f-48cf-90d9-c6472a0883cd");

				if (($("#dataset-bu2d-options-11").prop("checked") == false) && ($("#dataset-bu2d-options-9").prop("checked") == false) && ($("#dataset-bu2d-options-7").prop("checked") == false) && ($("#dataset-bu2d-options-5").prop("checked") == false)) {
					if ($("#dataset-bu2d-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDeab289c0-47c0-4b4f-bd11-1f49ecd21878");
					if ($("#dataset-bu2d-options-4").prop("checked") == false) {
						if ($("#dataset-bu2d-options-3").prop("checked") == true) arrayTestsuiteid.push("EID4f7e4a81-3bab-4058-b528-afec8d6e980d");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("BU")) && $scope.select.subBuildings.includes("BU3D")) {
				if ($("#dataset-bu3d-options-11").prop("checked") == true) arrayTestsuiteid.push("EID32fda995-1c2e-4a62-ab3b-d0fca47ecc8b");
				if ($("#dataset-bu3d-options-9").prop("checked") == true) arrayTestsuiteid.push("EID519a1f46-1e52-4a86-8d53-23fb39000665");
				if ($("#dataset-bu3d-options-7").prop("checked") == true) arrayTestsuiteid.push("EID22fd29c0-97a2-48d0-89e9-ef92e59eb5ca");
				if ($("#dataset-bu3d-options-5").prop("checked") == true) arrayTestsuiteid.push("EID97868e65-3205-4dae-be56-651278005ccc");

				if (($("#dataset-bu3d-options-11").prop("checked") == false) && ($("#dataset-bu3d-options-9").prop("checked") == false) && ($("#dataset-bu3d-options-7").prop("checked") == false) && ($("#dataset-bu3d-options-5").prop("checked") == false)) {
					if ($("#dataset-bu3d-options-4").prop("checked") == true) arrayTestsuiteid.push("EID45e5267c-ab6e-4bb7-a6b3-ee7b7ec5e053");
					if ($("#dataset-bu3d-options-4").prop("checked") == false) {
						if ($("#dataset-bu3d-options-3").prop("checked") == true) arrayTestsuiteid.push("EID94fdd1a9-68bf-4a0a-aa89-76659436a676");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("ER")) && $scope.select.subEnergy.includes("ERCOV")) {
				if ($("#dataset-ercov-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDb87f5e2e-72d8-40e5-a0fd-34e3829f9426");
				if ($("#dataset-ercov-options-9").prop("checked") == true) arrayTestsuiteid.push("EID018c7222-6d56-4b4b-8df3-ac511914fe85");
				if ($("#dataset-ercov-options-7").prop("checked") == true) arrayTestsuiteid.push("EIDfad66155-f16c-4e9a-8c6c-a010f3c6de11");
				if ($("#dataset-ercov-options-5").prop("checked") == true) arrayTestsuiteid.push("EID599aa296-6000-452f-9b97-18d0565f6b36");

				if (($("#dataset-ercov-options-11").prop("checked") == false) && ($("#dataset-ercov-options-9").prop("checked") == false) && ($("#dataset-ercov-options-7").prop("checked") == false) && ($("#dataset-ercov-options-5").prop("checked") == false)) {
					if ($("#dataset-ercov-options-4").prop("checked") == true) arrayTestsuiteid.push("EID9b6e3765-3744-40ee-98ec-243ac978915f");
					if ($("#dataset-ercov-options-4").prop("checked") == false) {
						if ($("#dataset-ercov-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDe009440c-e545-4227-9967-aff1b26f8c81");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("ER")) && $scope.select.subEnergy.includes("ERVEC")) {
				if ($("#dataset-ervec-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDb87f5e2e-72d8-40e5-a0fd-34e3829f9426");
				if ($("#dataset-ervec-options-9").prop("checked") == true) arrayTestsuiteid.push("EID018c7222-6d56-4b4b-8df3-ac511914fe85");
				if ($("#dataset-ervec-options-7").prop("checked") == true) arrayTestsuiteid.push("EIDfad66155-f16c-4e9a-8c6c-a010f3c6de11");
				if ($("#dataset-ervec-options-5").prop("checked") == true) arrayTestsuiteid.push("EID0901c212-8b06-4c29-b648-c411678b9369");

				if (($("#dataset-ervec-options-11").prop("checked") == false) && ($("#dataset-ervec-options-9").prop("checked") == false) && ($("#dataset-ervec-options-7").prop("checked") == false) && ($("#dataset-ervec-options-5").prop("checked") == false)) {
					if ($("#dataset-ervec-options-4").prop("checked") == true) arrayTestsuiteid.push("EID9b6e3765-3744-40ee-98ec-243ac978915f");
					if ($("#dataset-ervec-options-4").prop("checked") == false) {
						if ($("#dataset-ervec-options-3").prop("checked") == true) arrayTestsuiteid.push("EIDe009440c-e545-4227-9967-aff1b26f8c81");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("EF"))) {
				if ($("#dataset-ef-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDe5722015-702d-40a6-8279-78428d3ca1a7");
				if ($("#dataset-ef-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDc043fc5e-723e-4982-a10c-feb352c934fb");
				if ($("#dataset-ef-options-6").prop("checked") == true) arrayTestsuiteid.push("EID80cb9b2a-a487-4d0f-afa6-337eb387996b");
				if ($("#dataset-ef-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDe2bf686d-a8bd-4cfd-b02b-dc902e910b37");
				if (($("#dataset-ef-options-10").prop("checked") == false) && ($("#dataset-ef-options-8").prop("checked") == false) && ($("#dataset-ef-options-6").prop("checked") == false) && ($("#dataset-ef-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID7f414964-eafa-499e-950b-b93d0c2d691b");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("HB"))) {
				if ($("#dataset-hb-options-10").prop("checked") == true) arrayTestsuiteid.push("EID3db69eef-77dc-4a16-8a0a-aed7f97e2eb5");
				if ($("#dataset-hb-options-8").prop("checked") == true) arrayTestsuiteid.push("EID4b42762d-46e9-4807-9eb0-584a41f75b79");
				if ($("#dataset-hb-options-6").prop("checked") == true) arrayTestsuiteid.push("EID3b5f31e2-f75f-4127-a5db-81b6b64fd06c");
				if ($("#dataset-hb-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDdc4332a0-e79e-4e15-a9f6-32425fb1389c");
				if (($("#dataset-hb-options-10").prop("checked") == false) && ($("#dataset-hb-options-8").prop("checked") == false) && ($("#dataset-hb-options-6").prop("checked") == false) && ($("#dataset-hb-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID1c48f426-e247-4a87-aa94-4336e17bc492");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("HH"))) {
				if ($("#dataset-hh-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDdbbf0296-ee64-411e-9c22-3936136fec51");
				if ($("#dataset-hh-options-8").prop("checked") == true) arrayTestsuiteid.push("EID3743813e-6dda-4d25-8600-27bcc608a8c7");
				if ($("#dataset-hh-options-6").prop("checked") == true) arrayTestsuiteid.push("EID716281da-f3ab-4d8f-8221-78e489d48b64");
				if ($("#dataset-hh-options-4").prop("checked") == true) arrayTestsuiteid.push("EID41be0eb2-c9cd-47f7-8e47-18d2622bd26a");
				if (($("#dataset-hh-options-10").prop("checked") == false) && ($("#dataset-hh-options-8").prop("checked") == false) && ($("#dataset-hh-options-6").prop("checked") == false) && ($("#dataset-hh-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID1e5b036c-e041-4721-ae47-f1a8842970db");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LU")) && $scope.select.subLandUse.includes("ELU")) {
				if ($("#dataset-elu-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDda4c0f98-f97a-44ad-9366-cef577cf809a");
				if ($("#dataset-elu-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDa4bf4091-b26d-4e13-ab94-4d26ea10a625");
				if ($("#dataset-elu-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9251e31c-1318-4f52-afe5-900eb16f5647");
				if ($("#dataset-elu-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDa3ffd06a-5652-4719-8707-13f738747a8c");
				if (($("#dataset-elu-options-10").prop("checked") == false) && ($("#dataset-elu-options-8").prop("checked") == false) && ($("#dataset-elu-options-6").prop("checked") == false) && ($("#dataset-elu-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0163e019-90b6-4dd9-8c9c-d2d1d7fc5f69");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LU")) && $scope.select.subLandUse.includes("GELU")) {
				if ($("#dataset-gelu-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDda4c0f98-f97a-44ad-9366-cef577cf809a");
				if ($("#dataset-gelu-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDa4bf4091-b26d-4e13-ab94-4d26ea10a625");
				if ($("#dataset-gelu-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9251e31c-1318-4f52-afe5-900eb16f5647");
				if ($("#dataset-gelu-options-4").prop("checked") == true) arrayTestsuiteid.push("EID6fcca21c-fba1-4fe5-b2f0-d6aa1be45d67");
				if (($("#dataset-gelu-options-10").prop("checked") == false) && ($("#dataset-gelu-options-8").prop("checked") == false) && ($("#dataset-gelu-options-6").prop("checked") == false) && ($("#dataset-gelu-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0163e019-90b6-4dd9-8c9c-d2d1d7fc5f69");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LU")) && $scope.select.subLandUse.includes("PLU")) {
				if ($("#dataset-plu-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDda4c0f98-f97a-44ad-9366-cef577cf809a");
				if ($("#dataset-plu-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDa4bf4091-b26d-4e13-ab94-4d26ea10a625");
				if ($("#dataset-plu-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9251e31c-1318-4f52-afe5-900eb16f5647");
				if ($("#dataset-plu-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDeefb2267-a0ca-40b4-87ee-a286ff6dd97f");
				if (($("#dataset-plu-options-10").prop("checked") == false) && ($("#dataset-plu-options-8").prop("checked") == false) && ($("#dataset-plu-options-6").prop("checked") == false) && ($("#dataset-plu-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0163e019-90b6-4dd9-8c9c-d2d1d7fc5f69");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("LU")) && $scope.select.subLandUse.includes("SELU")) {
				if ($("#dataset-selu-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDda4c0f98-f97a-44ad-9366-cef577cf809a");
				if ($("#dataset-selu-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDa4bf4091-b26d-4e13-ab94-4d26ea10a625");
				if ($("#dataset-selu-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9251e31c-1318-4f52-afe5-900eb16f5647");
				if ($("#dataset-selu-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDba63bc6d-c67c-48b1-b7ee-654e6fffa0bd");
				if (($("#dataset-selu-options-10").prop("checked") == false) && ($("#dataset-selu-options-8").prop("checked") == false) && ($("#dataset-selu-options-6").prop("checked") == false) && ($("#dataset-selu-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0163e019-90b6-4dd9-8c9c-d2d1d7fc5f69");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("MR"))) {
				if ($("#dataset-mr-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDcd930d18-2ad2-48d8-ac82-75f8af6733b6");
				if ($("#dataset-mr-options-8").prop("checked") == true) arrayTestsuiteid.push("EID0ac8bdce-710a-4287-92ca-6444cbbb2263");
				if ($("#dataset-mr-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDd2d1c565-7bdb-4da5-b13b-5b1f14e6aed1");
				if ($("#dataset-mr-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDda904b41-b762-4aca-8af4-204f427ba3e8");
				if (($("#dataset-mr-options-10").prop("checked") == false) && ($("#dataset-mr-options-8").prop("checked") == false) && ($("#dataset-mr-options-6").prop("checked") == false) && ($("#dataset-mr-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID1b45ee05-c7f1-471c-89a4-5e603ce3f056");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("NZ"))) {
				if ($("#dataset-nz-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDf62fe181-52f2-4212-b925-fc7ac8bfb2a1");
				if ($("#dataset-nz-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDe3d08307-45ad-4797-9074-ced0147797b5");
				if ($("#dataset-nz-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDc1386fc3-eb79-41dc-a2ff-9ca48e0576eb");
				if ($("#dataset-nz-options-4").prop("checked") == true) arrayTestsuiteid.push("EID5aab5d8a-e432-47dd-b072-7cbf520035be");
				if (($("#dataset-nz-options-10").prop("checked") == false) && ($("#dataset-nz-options-8").prop("checked") == false) && ($("#dataset-nz-options-6").prop("checked") == false) && ($("#dataset-nz-options-4").prop("checked") == false)) arrayTestsuiteid.push("EIDeca530d8-a4c0-421a-b1c3-4409fe31e10b");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("OF"))) {
				if ($("#dataset-of-options-10").prop("checked") == true) arrayTestsuiteid.push("EID6827884c-c30d-464d-9ee7-3b9874b83c7f");
				if ($("#dataset-of-options-8").prop("checked") == true) arrayTestsuiteid.push("EID7f3dd0a4-a0af-4fd6-a507-fee53db7742d");
				if ($("#dataset-of-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDaaec0d06-e36d-41db-bc3c-b425466435e5");
				if ($("#dataset-of-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDc030d752-2559-4ef2-9267-2d7d844720aa");
				if (($("#dataset-of-options-10").prop("checked") == false) && ($("#dataset-of-options-8").prop("checked") == false) && ($("#dataset-of-options-6").prop("checked") == false) && ($("#dataset-of-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID62825579-45ef-4ec3-8669-4f95a3ac60da");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("PD"))) {
				if ($("#dataset-pd-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDc6b969f1-c2a8-4335-bc28-2ae8ee0fe20c");
				if ($("#dataset-pd-options-8").prop("checked") == true) arrayTestsuiteid.push("EID81d6a9b3-508e-4164-9d66-449cdf383f90");
				if ($("#dataset-pd-options-6").prop("checked") == true) arrayTestsuiteid.push("EID9f025400-9f65-4916-92ed-a99db86f014c");
				if ($("#dataset-pd-options-4").prop("checked") == true) arrayTestsuiteid.push("EID3c3f870f-7727-4e1d-bd84-dd93cf55df73");
				if (($("#dataset-pd-options-10").prop("checked") == false) && ($("#dataset-pd-options-8").prop("checked") == false) && ($("#dataset-pd-options-6").prop("checked") == false) && ($("#dataset-pd-options-4").prop("checked") == false)) arrayTestsuiteid.push("EIDe58828f5-8627-42da-9af9-6bf6aef93670");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("PF"))) {
				if ($("#dataset-pf-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDf2f51782-2f19-410b-ad4d-163a76f79043");
				if ($("#dataset-pf-options-8").prop("checked") == true) arrayTestsuiteid.push("EID11b40303-35ce-4e23-bebd-f97a026daf3d");
				if ($("#dataset-pf-options-6").prop("checked") == true) arrayTestsuiteid.push("EIDc4ed72f4-c06a-4deb-a9ee-5d3bfa8a0423");
				if ($("#dataset-pf-options-4").prop("checked") == true) arrayTestsuiteid.push("EIDe0956e54-bac0-4273-ba55-150b5cf37627");
				if (($("#dataset-pf-options-10").prop("checked") == false) && ($("#dataset-pf-options-8").prop("checked") == false) && ($("#dataset-pf-options-6").prop("checked") == false) && ($("#dataset-pf-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID0c7efa5c-1628-4ee6-a670-726e7ebf8feb");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("SR"))) {
				if ($("#dataset-sr-options-10").prop("checked") == true) arrayTestsuiteid.push("EID3ff69f66-15f7-4e67-b75f-342d96866332");
				if ($("#dataset-sr-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDe1fd673d-7c18-44af-a59c-a95f44a82a8a");
				if ($("#dataset-sr-options-6").prop("checked") == true) arrayTestsuiteid.push("EID80294b80-ac86-479d-a2cd-af07878c508a");
				if ($("#dataset-sr-options-4").prop("checked") == true) arrayTestsuiteid.push("EID793a9c8e-c24a-4b90-ad1e-9a5f12339d7a");
				if (($("#dataset-sr-options-10").prop("checked") == false) && ($("#dataset-sr-options-8").prop("checked") == false) && ($("#dataset-sr-options-6").prop("checked") == false) && ($("#dataset-sr-options-4").prop("checked") == false)) arrayTestsuiteid.push("EIDbfc36eb3-18f0-4284-9dae-6159f59866bc");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("SO"))) {
				if ($("#dataset-so-options-10").prop("checked") == true) arrayTestsuiteid.push("EID6f90ab57-9b10-4f67-859a-fd62d75f32c2");
				if ($("#dataset-so-options-8").prop("checked") == true) arrayTestsuiteid.push("EID28051c99-ff98-480c-b8c1-b502333cc3cd");
				if ($("#dataset-so-options-6").prop("checked") == true) arrayTestsuiteid.push("EID480f945a-d0c8-4582-a1fe-775cea3d1f48");
				if ($("#dataset-so-options-4").prop("checked") == true) arrayTestsuiteid.push("EID09b2bdfc-54fd-4884-b9bd-59f18dff358b");
				if (($("#dataset-so-options-10").prop("checked") == false) && ($("#dataset-so-options-8").prop("checked") == false) && ($("#dataset-so-options-6").prop("checked") == false) && ($("#dataset-so-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID31880338-6fe3-486c-8f3e-7086a20490c4");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("SD"))) {
				if ($("#dataset-sd-options-10").prop("checked") == true) arrayTestsuiteid.push("EIDeed6bc26-210e-4280-9346-9b5ac9850e41");
				if ($("#dataset-sd-options-8").prop("checked") == true) arrayTestsuiteid.push("EIDc7ec6434-6d55-4ec4-bf48-5c5dd5760a53");
				if ($("#dataset-sd-options-6").prop("checked") == true) arrayTestsuiteid.push("EID069ca302-e21c-4727-93db-0b79ebef88fb");
				if ($("#dataset-sd-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4a6ad3fe-8ae8-467e-a6e4-aef6bdff8a66");
				if (($("#dataset-sd-options-10").prop("checked") == false) && ($("#dataset-sd-options-8").prop("checked") == false) && ($("#dataset-sd-options-6").prop("checked") == false) && ($("#dataset-sd-options-4").prop("checked") == false)) arrayTestsuiteid.push("EID42d4a7f6-361d-49c5-b88e-0a456908707e");
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("SU")) && $scope.select.subStatistical.includes("SUGRID")) {
				if ($("#dataset-sugrid-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDe5ce9075-371e-4c8d-97e1-017e3b72e14a");
				if ($("#dataset-sugrid-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDc513fcc8-8e0a-4ed6-b29f-bfba96cc0fb8");
				if ($("#dataset-sugrid-options-7").prop("checked") == true) arrayTestsuiteid.push("EID94a1fde1-c547-4d77-9cd4-5e454f54416d");
				if ($("#dataset-sugrid-options-5").prop("checked") == true) arrayTestsuiteid.push("EID529582ee-f03f-4386-acd3-b880c26bcb31");

				if (($("#dataset-sugrid-options-11").prop("checked") == false) && ($("#dataset-sugrid-options-9").prop("checked") == false) && ($("#dataset-sugrid-options-7").prop("checked") == false) && ($("#dataset-sugrid-options-5").prop("checked") == false)) {
					if ($("#dataset-sugrid-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4a8fffca-2603-4a16-b8e4-6e2c659e50be");
					if ($("#dataset-sugrid-options-4").prop("checked") == false) {
						if ($("#dataset-sugrid-options-3").prop("checked") == true) arrayTestsuiteid.push("EID7d36c5e8-5bbe-4af6-9c37-3038f6282ae1");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("SU")) && $scope.select.subStatistical.includes("SUVECTOR")) {
				if ($("#dataset-suvector-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDe5ce9075-371e-4c8d-97e1-017e3b72e14a");
				if ($("#dataset-suvector-options-9").prop("checked") == true) arrayTestsuiteid.push("EIDc513fcc8-8e0a-4ed6-b29f-bfba96cc0fb8");
				if ($("#dataset-suvector-options-7").prop("checked") == true) arrayTestsuiteid.push("EID94a1fde1-c547-4d77-9cd4-5e454f54416d");
				if ($("#dataset-suvector-options-5").prop("checked") == true) arrayTestsuiteid.push("EID33a36524-2997-4ac5-9eb4-0d7ea7008122");

				if (($("#dataset-suvector-options-11").prop("checked") == false) && ($("#dataset-suvector-options-9").prop("checked") == false) && ($("#dataset-suvector-options-7").prop("checked") == false) && ($("#dataset-suvector-options-5").prop("checked") == false)) {
					if ($("#dataset-suvector-options-4").prop("checked") == true) arrayTestsuiteid.push("EID4a8fffca-2603-4a16-b8e4-6e2c659e50be");
					if ($("#dataset-suvector-options-4").prop("checked") == false) {
						if ($("#dataset-suvector-options-3").prop("checked") == true) arrayTestsuiteid.push("EID7d36c5e8-5bbe-4af6-9c37-3038f6282ae1");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USASGS")) {
				if ($("#dataset-usasgs-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-usasgs-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-usasgs-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-usasgs-options-5").prop("checked") == true) arrayTestsuiteid.push("EID042b6fb7-14ea-42b9-81df-3c1fdf8a960c");

				if (($("#dataset-usasgs-options-11").prop("checked") == false) && ($("#dataset-usasgs-options-9").prop("checked") == false) && ($("#dataset-usasgs-options-7").prop("checked") == false) && ($("#dataset-usasgs-options-5").prop("checked") == false)) {
						if ($("#dataset-usasgs-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USEN")) {
				if ($("#dataset-usen-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-usen-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-usen-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-usen-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDc69d4020-0305-422e-a7d9-46f7966fd789");

				if (($("#dataset-usen-options-11").prop("checked") == false) && ($("#dataset-usen-options-9").prop("checked") == false) && ($("#dataset-usen-options-7").prop("checked") == false) && ($("#dataset-usen-options-5").prop("checked") == false)) {
					if ($("#dataset-usen-options-4").prop("checked") == true) arrayTestsuiteid.push("EID127eed5c-621d-4bbe-8633-cdc21c25d664");
					if ($("#dataset-usen-options-4").prop("checked") == false) {
						if ($("#dataset-usen-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USEMF")) {
				if ($("#dataset-usemf-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-usemf-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-usemf-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-usemf-options-5").prop("checked") == true) arrayTestsuiteid.push("EID955c8cf0-0608-4586-9866-316766d79bc1");

				if (($("#dataset-usemf-options-11").prop("checked") == false) && ($("#dataset-usemf-options-9").prop("checked") == false) && ($("#dataset-usemf-options-7").prop("checked") == false) && ($("#dataset-usemf-options-5").prop("checked") == false)) {
						if ($("#dataset-usemf-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USOGCN")) {
				if ($("#dataset-usogcn-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-usogcn-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-usogcn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-usogcn-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDdf1616e0-04f3-4662-baa7-4fe88ac94035");

				if (($("#dataset-usogcn-options-11").prop("checked") == false) && ($("#dataset-usogcn-options-9").prop("checked") == false) && ($("#dataset-usogcn-options-7").prop("checked") == false) && ($("#dataset-usogcn-options-5").prop("checked") == false)) {
					if ($("#dataset-usogcn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID127eed5c-621d-4bbe-8633-cdc21c25d664");
					if ($("#dataset-usogcn-options-4").prop("checked") == false) {
						if ($("#dataset-usogcn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USSN")) {
				if ($("#dataset-ussn-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-ussn-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-ussn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-ussn-options-5").prop("checked") == true) arrayTestsuiteid.push("EID9222fa32-a20b-4792-8945-6dcabd912654");

				if (($("#dataset-ussn-options-11").prop("checked") == false) && ($("#dataset-ussn-options-9").prop("checked") == false) && ($("#dataset-ussn-options-7").prop("checked") == false) && ($("#dataset-ussn-options-5").prop("checked") == false)) {
					if ($("#dataset-ussn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID127eed5c-621d-4bbe-8633-cdc21c25d664");
					if ($("#dataset-ussn-options-4").prop("checked") == false) {
						if ($("#dataset-ussn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USTN")) {
				if ($("#dataset-ustn-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-ustn-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-ustn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-ustn-options-5").prop("checked") == true) arrayTestsuiteid.push("EID5a3043d1-ba13-4423-838a-c487e22653d3");

				if (($("#dataset-ustn-options-11").prop("checked") == false) && ($("#dataset-ustn-options-9").prop("checked") == false) && ($("#dataset-ustn-options-7").prop("checked") == false) && ($("#dataset-ustn-options-5").prop("checked") == false)) {
					if ($("#dataset-ustn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID127eed5c-621d-4bbe-8633-cdc21c25d664");
					if ($("#dataset-ustn-options-4").prop("checked") == false) {
						if ($("#dataset-ustn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
					}
				}
			}
			if (($scope.select.typeResource == "dataset") && ($scope.select.datasetType.includes("US")) && $scope.select.subUtility.includes("USWN")) {
				if ($("#dataset-uswn-options-11").prop("checked") == true) arrayTestsuiteid.push("EIDa52ff667-7079-40c8-941a-5f3f918825af");
				if ($("#dataset-uswn-options-9").prop("checked") == true) arrayTestsuiteid.push("EID7b22de70-15f8-4b83-aba1-cc8f3ce59aa5");
				if ($("#dataset-uswn-options-7").prop("checked") == true) arrayTestsuiteid.push("EID8663f6c2-beef-4118-b8fc-67bcca0b2885");
				if ($("#dataset-uswn-options-5").prop("checked") == true) arrayTestsuiteid.push("EIDb64a59e3-5187-4279-801d-fe78e0a79e7a");

				if (($("#dataset-uswn-options-11").prop("checked") == false) && ($("#dataset-uswn-options-9").prop("checked") == false) && ($("#dataset-uswn-options-7").prop("checked") == false) && ($("#dataset-uswn-options-5").prop("checked") == false)) {
					if ($("#dataset-uswn-options-4").prop("checked") == true) arrayTestsuiteid.push("EID127eed5c-621d-4bbe-8633-cdc21c25d664");
					if ($("#dataset-uswn-options-4").prop("checked") == false) {
						if ($("#dataset-uswn-options-3").prop("checked") == true) arrayTestsuiteid.push("EID59c0e67e-4add-40a8-aee2-78c8fb5d2618");
					}
				}
			}
			$scope.restservice.testsuiteid = arrayTestsuiteid;
		}
		console.log($scope.restservice.testsuiteid);
	}


	$scope.prefillLabel = function() {
		$scope.runTest();
		var testSuiteId = $scope.restservice.testsuiteid;
		var testSuiteDesc = "-";
		// METADATA
		if (testSuiteId == "EIDe3500038-e37c-4dcf-806c-6bc82d585b3b") testSuiteDesc = "Conformance Class XML encoding of ISO 19115/19119 metadata";
		if (testSuiteId == "EIDec7323d5-d8f0-4cfe-b23a-b826df86d58c") testSuiteDesc = "Conformance Class INSPIRE Profile based on EN ISO 19115 and EN ISO 19119";
		if (testSuiteId == "EID9a31ecfc-6673-43c0-9a31-b4595fb53a98") testSuiteDesc = "Conformance class Metadata for interoperability";
		if (testSuiteId == "EID59692c11-df86-49ad-be7f-94a1e1ddd8da") testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
		if (testSuiteId == "EIDe4a95862-9cc9-436b-9fdd-a0115d342350") testSuiteDesc = "Conformance Class 1: Baseline metadata for data sets and data set series";
		if (testSuiteId == "EID2be1480a-fe42-40b2-9420-eb0e69385c80") testSuiteDesc = "Conformance Class 2: INSPIRE data sets and data set series interoperability metadata";
		if (testSuiteId == "EID0b86f7a3-2947-4841-823d-6a00d8e06d70") testSuiteDesc = "Conformance Class 2b: INSPIRE data sets and data set series metadata for Monitoring";
		if (testSuiteId == "EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b") testSuiteDesc = "Conformance Class 2c: INSPIRE data sets and data set series metadata for IACS";
		if (testSuiteId == "EID59692c11-df86-49ad-be7f-94a1e1ddd8da") testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
		if (testSuiteId == "EID8f869e23-c9e9-4e86-8dca-be30ff421229") testSuiteDesc = "Conformance Class 3: INSPIRE Spatial Data Service baseline metadata";
		if (testSuiteId == "EID606587df-65a8-4b7b-9eee-e0d94daaa42a") testSuiteDesc = "Conformance Class 4: INSPIRE Network Services metadata";
		if (testSuiteId == "EID59692c11-df86-49ad-be7f-94a1e1ddd8da") testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
		if (testSuiteId == "EID8f869e23-c9e9-4e86-8dca-be30ff421229") testSuiteDesc = "Conformance Class 3: INSPIRE Spatial Data Service baseline metadata.";
		if (testSuiteId == "EID8db54d8a-8578-4959-b891-5394d9f53a28") testSuiteDesc = "Conformance Class 5: INSPIRE Invocable Spatial Data Services metadata";
		if (testSuiteId == "EID7514777a-6cb8-499c-acd5-912496dc84e9") testSuiteDesc = "Conformance Class 6: INSPIRE Interoperable Spatial Data Services metadata";
		if (testSuiteId == "EIDa593a7ad-42d9-46d0-985d-9dff3e684428") testSuiteDesc = "Conformance Class 7: INSPIRE Harmonised Spatial Data Services metadata";
		if (testSuiteId == "EID7cceba68-e575-4429-9959-1b6b3d201b6d") testSuiteDesc = "Conformance Class 8: INSPIRE data sets and data set series linked service metadata";
		if (testSuiteId == "EIDeec9d674-d94b-4d8d-b744-1309c6cae1d2") testSuiteDesc = "Conformance Class View Service WMS";
		if (testSuiteId == "EID550ceacf-b3cb-47a0-b2dd-d3edb18344a9") testSuiteDesc = "Conformance Class View Service WMTS";
		if (testSuiteId == "EID95a1b6fc-2b55-3d43-9502-3b8b605bda10") testSuiteDesc = "WFS 2.0 (OGC 09-025r2/ISO 19142) Conformance Test Suite";
		if (testSuiteId == "EID174edf55-699b-446c-968c-1892a4d8d5bd") testSuiteDesc = "Conformance Class Pre-defined WFS";
		if (testSuiteId == "EIDed2d3501-d700-4ff9-b9bf-070dece8ddbd") testSuiteDesc = "Conformance Class Direct WFS";
		if (testSuiteId == "EID11571c92-3940-4f42-a6cd-5e2b1c6f4d93") testSuiteDesc = "Conformance Class Pre-defined Atom";
		if (testSuiteId == "EID074570ad-d720-47b3-af79-d54201793404") testSuiteDesc = "Conformance Class Download Service WCS Core";
		if (testSuiteId == "EID0ff73873-5601-41ff-8d92-3fb1fbba3cf2") testSuiteDesc = "Conformance Class Download Service Pre-defined SOS";
		if (testSuiteId == "EIDc543e1ad-465d-3162-ac1a-badef588dc76") testSuiteDesc = "Conformance Class OGC API - Features";
		if (testSuiteId == "EIDc837298f-a10e-42d1-88f2-f1415cbbb463") testSuiteDesc = "Conformance Class Discovery Service CSW";
		if (testSuiteId == "EID545f9e49-009b-4114-9333-7ca26413b5d4") testSuiteDesc = "Conformance Class INSPIRE GML encoding";
		if (testSuiteId == "EID61070ae8-13cb-4303-a340-72c8b877b00a") testSuiteDesc = "Conformance Class Data consistency";
		if (testSuiteId == "EID09820daf-62b2-4fa3-a95f-56a0d2b7c4d8") testSuiteDesc = "Conformance Class INSPIRE GML application schemas";
		if (testSuiteId == "EID499937ea-0590-42d2-bd7a-1cafff35ecdb") testSuiteDesc = "Conformance Class Information accessibility";
		if (testSuiteId == "EID63f586f0-080c-493b-8ca2-9919427440cc") testSuiteDesc = "Conformance Class Reference systems";
		if (Array.isArray(testSuiteId)) {
			if (testSuiteId.includes("EIDe3500038-e37c-4dcf-806c-6bc82d585b3b")) testSuiteDesc = "Conformance Class XML encoding of ISO 19115/19119 metadata";
			if (testSuiteId.includes("EIDec7323d5-d8f0-4cfe-b23a-b826df86d58c")) testSuiteDesc = "Conformance Class INSPIRE Profile based on EN ISO 19115 and EN ISO 19119";
			if (testSuiteId.includes("EID9a31ecfc-6673-43c0-9a31-b4595fb53a98")) vtestSuiteDesc = "Conformance class Metadata for interoperability";
			if (testSuiteId.includes("EID59692c11-df86-49ad-be7f-94a1e1ddd8da")) testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
			if (testSuiteId.includes("EIDe4a95862-9cc9-436b-9fdd-a0115d342350")) testSuiteDesc = "Conformance Class 1: Baseline metadata for data sets and data set series";
			if (testSuiteId.includes("EID2be1480a-fe42-40b2-9420-eb0e69385c80")) testSuiteDesc = "Conformance Class 2: INSPIRE data sets and data set series interoperability metadata";
			if (testSuiteId.includes("EID0b86f7a3-2947-4841-823d-6a00d8e06d70")) testSuiteDesc = "Conformance Class 2b: INSPIRE data sets and data set series metadata for Monitoring";
			if (testSuiteId.includes("EID1067d6b2-3bb1-4e71-8ce1-a744c9bd5a3b")) testSuiteDesc = "Conformance Class 2c: INSPIRE data sets and data set series metadata for IACS";
			if (testSuiteId.includes("EID59692c11-df86-49ad-be7f-94a1e1ddd8da")) testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
			if (testSuiteId.includes("EID8f869e23-c9e9-4e86-8dca-be30ff421229")) testSuiteDesc = "Conformance Class 3: INSPIRE Spatial Data Service baseline metadata";
			if (testSuiteId.includes("EID606587df-65a8-4b7b-9eee-e0d94daaa42a")) testSuiteDesc = "Conformance Class 4: INSPIRE Network Services metadata";
			if (testSuiteId.includes("EID59692c11-df86-49ad-be7f-94a1e1ddd8da")) testSuiteDesc = "Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records";
			if (testSuiteId.includes("EID8f869e23-c9e9-4e86-8dca-be30ff421229")) testSuiteDesc = "Conformance Class 3: INSPIRE Spatial Data Service baseline metadata.";
			if (testSuiteId.includes("EID8db54d8a-8578-4959-b891-5394d9f53a28")) testSuiteDesc = "Conformance Class 5: INSPIRE Invocable Spatial Data Services metadata";
			if (testSuiteId.includes("EID7514777a-6cb8-499c-acd5-912496dc84e9")) testSuiteDesc = "Conformance Class 6: INSPIRE Interoperable Spatial Data Services metadata";
			if (testSuiteId.includes("EIDa593a7ad-42d9-46d0-985d-9dff3e684428")) testSuiteDesc = "Conformance Class 7: INSPIRE Harmonised Spatial Data Services metadata";
			if (testSuiteId.includes("EID7cceba68-e575-4429-9959-1b6b3d201b6d")) testSuiteDesc = "Conformance Class 8: INSPIRE data sets and data set series linked service metadata";
			if (testSuiteId.includes("EIDeec9d674-d94b-4d8d-b744-1309c6cae1d2")) testSuiteDesc = "Conformance Class View Service WMS";
			if (testSuiteId.includes("EID550ceacf-b3cb-47a0-b2dd-d3edb18344a9")) testSuiteDesc = "Conformance Class View Service WMTS";
			if (testSuiteId.includes("EID95a1b6fc-2b55-3d43-9502-3b8b605bda10")) testSuiteDesc = "WFS 2.0 (OGC 09-025r2/ISO 19142) Conformance Test Suite";
			if (testSuiteId.includes("EID174edf55-699b-446c-968c-1892a4d8d5bd")) testSuiteDesc = "Conformance Class Pre-defined WFS";
			if (testSuiteId.includes("EIDed2d3501-d700-4ff9-b9bf-070dece8ddbd")) testSuiteDesc = "Conformance Class Direct WFS";
			if (testSuiteId.includes("EID11571c92-3940-4f42-a6cd-5e2b1c6f4d93")) testSuiteDesc = "Conformance Class Pre-defined Atom";
			if (testSuiteId.includes("EID074570ad-d720-47b3-af79-d54201793404")) testSuiteDesc = "Conformance Class Download Service WCS Core";
			if (testSuiteId.includes("EID0ff73873-5601-41ff-8d92-3fb1fbba3cf2")) testSuiteDesc = "Conformance Class Download Service Pre-defined SOS";
			if (testSuiteId.includes("EIDc543e1ad-465d-3162-ac1a-badef588dc76")) testSuiteDesc = "Conformance Class OGC API - Features";
			if (testSuiteId.includes("EIDc837298f-a10e-42d1-88f2-f1415cbbb463")) testSuiteDesc = "Conformance Class Discovery Service CSW";
			if (testSuiteId.includes("EID545f9e49-009b-4114-9333-7ca26413b5d4")) testSuiteDesc = "Conformance Class INSPIRE GML encoding";
			if (testSuiteId.includes("EID61070ae8-13cb-4303-a340-72c8b877b00a")) testSuiteDesc = "Conformance Class Data consistency";
			if (testSuiteId.includes("EID09820daf-62b2-4fa3-a95f-56a0d2b7c4d8")) testSuiteDesc = "Conformance Class INSPIRE GML application schemas";
			if (testSuiteId.includes("EID499937ea-0590-42d2-bd7a-1cafff35ecdb")) testSuiteDesc = "Conformance Class Information accessibility";
			if (testSuiteId.includes("EID63f586f0-080c-493b-8ca2-9919427440cc")) testSuiteDesc = "Conformance Class Reference systems";
		}
		
		console.log(testSuiteId);
		// VIEW SERVICE
		if (testSuiteId == "EIDeec9d674-d94b-4d8d-b744-1309c6cae1d2") testSuiteDesc = "Conformance Class View Service WMS";
		if (testSuiteId == "EID550ceacf-b3cb-47a0-b2dd-d3edb18344a9") testSuiteDesc = "Conformance Class View Service WMTS";
		// DOWNLOAD SERVICE
		if (testSuiteId == "EIDed2d3501-d700-4ff9-b9bf-070dece8ddbd") testSuiteDesc = "Conformance Class Direct WFS";
		if (testSuiteId == "EID174edf55-699b-446c-968c-1892a4d8d5bd") testSuiteDesc = "Conformance Class Pre-defined WFS";
		if (testSuiteId == "EID11571c92-3940-4f42-a6cd-5e2b1c6f4d93") testSuiteDesc = "Conformance Class Pre-defined Atom";
		if (testSuiteId == "EID074570ad-d720-47b3-af79-d54201793404") testSuiteDesc = "Conformance Class Download Service WCS Core";
		if (testSuiteId == "EID0ff73873-5601-41ff-8d92-3fb1fbba3cf2") testSuiteDesc = "Conformance Class Download Service Pre-defined SOS";
		// DISCOVERY SERVICE
		if (testSuiteId == "EIDc837298f-a10e-42d1-88f2-f1415cbbb463") testSuiteDesc = "Conformance Class Discovery Service CSW";
		// DATASET
		if (($scope.select.datasetType == 'CCS') && (Array.isArray(testSuiteId))) testSuiteDesc = "Common conformance classes";
		if (($scope.select.datasetType.includes('AD')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Addresses (AD)";
		if (($scope.select.datasetType.includes('AU')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Administrative Units (AU)";
		if (($scope.select.datasetType.includes('CP')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Cadastral parcels (CP)";
		if (($scope.select.datasetType.includes('GN')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Geographical names (GN)";
		if (($scope.select.datasetType.includes('HY')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Hydrography (HY)";
		if (($scope.select.datasetType.includes('PS')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Protected sites (PS)";
		if (($scope.select.datasetType.includes('TN')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex I - Transport networks (TN)";
		if (($scope.select.datasetType.includes('EL')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex II - Elevation (EL)";
		if (($scope.select.datasetType.includes('GE')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex II - Geology (GE)";
		if (($scope.select.datasetType.includes('LC')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex II - Land Cover (LC)";
		if (($scope.select.datasetType.includes('OI')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex II - Orthoimagery (OI)";
		if (($scope.select.datasetType.includes('AF')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Agricultural and aquaculture facilities (AF)";
		if (($scope.select.datasetType.includes('AM')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Area management / restriction / regulation zones & reporting units (AM)";
		if (($scope.select.datasetType.includes('ACMF')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Atmospheric conditions and Meteorological geographical features (AC-MF)";
		if (($scope.select.datasetType.includes('BR')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Bio-geographical regions (BR)";
		if (($scope.select.datasetType.includes('BU')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Buildings (BU)";
		if (($scope.select.datasetType.includes('ER')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Energy Resources (ER)";
		if (($scope.select.datasetType.includes('EF')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Environmental monitoring Facilities (EF)";
		if (($scope.select.datasetType.includes('HB')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Habitats and biotopes (HB)";
		if (($scope.select.datasetType.includes('HH')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Human health and safety (HH)";
		if (($scope.select.datasetType.includes('LU')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Land Use (LU)";
		if (($scope.select.datasetType.includes('MR')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Mineral Resources (MR)";
		if (($scope.select.datasetType.includes('NZ')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Natural risk zones (NZ)";
		if (($scope.select.datasetType.includes('OF')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Oceanographic geographical features (OF)";
		if (($scope.select.datasetType.includes('PD')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Population distribution and demography (PD)";
		if (($scope.select.datasetType.includes('PF')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Production and industrial facilities (PF)";
		if (($scope.select.datasetType.includes('SR')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Sea regions (SR)";
		if (($scope.select.datasetType.includes('SO')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Soil (SO)";
		if (($scope.select.datasetType.includes('SD')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Species distribution (SD)";
		if (($scope.select.datasetType.includes('SU')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Statistical units (SU)";
		if (($scope.select.datasetType.includes('US')) && (Array.isArray(testSuiteId))) testSuiteDesc = "Annex III - Utility and governmental services (US)";
		var d = new Date();
		var currHours = ("0" + d.getHours()).slice(-2);
		var currMinutes = ("0" + d.getMinutes()).slice(-2);
		var currDay = ("0" + d.getDate()).slice(-2);
		var currMonth = ("0" + (d.getMonth() + 1)).slice(-2);
		var currYear = d.getFullYear();
		testSuiteDesc = "Test run on " + currHours + ":" + currMinutes + " - " + currDay + "." + currMonth + "." + currYear + " with test suite " + testSuiteDesc;
		$("#text-label-report").val(testSuiteDesc);
	}

	$("#metadata-version-2").prop("checked", true);
	$("#metadata-records-1").prop("checked", true);
	$("#metadata-13-options-0").prop("checked", true);
	$("#metadata-13-options-1").prop("checked", true);
	$("#metadata-13-options-2").prop("checked", true);
	$("#metadata-20-dataset-options-1").prop("checked", true);
	$("#metadata-20-dataset-options-2").prop("checked", true);
	$("#metadata-20-dataset-options-3").prop("checked", true);
	$("#metadata-20-dataset-options-4").prop("checked", true);
	$("#metadata-20-dataset-options-5").prop("checked", false);
	$("#metadata-20-dataset-options-6").prop("checked", true);
	$("#metadata-20-networkservice-options-1").prop("checked", true);
	$("#metadata-20-networkservice-options-2").prop("checked", true);
	$("#metadata-20-networkservice-options-3").prop("checked", true);
	$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
	$("#metadata-20-spatialdataservice-options-2").prop("checked", true);
	$("#metadata-20-spatialdataservice-options-3").prop("checked", true);
	$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
	$("#metadata-20-spatialdataservice-options-5").prop("checked", false);

	$("#viewservice-version-1").prop("checked", true);

	$scope.select = {};
	$scope.select.typeResource = "metadata";
	$scope.select.metadataVersion = "2.0";
	$scope.select.metadataRecords = "metadata_dataset";
	$scope.select.visibleMetadataRecords = true;
	$scope.select.metadataAdvancedOptions = false;
	$scope.select.metadataAdvancedXMLEncoding = true;
	$scope.select.metadataAdvancedInspireProfile = true;
	$scope.select.metadataAdvancedInteroperability = true;
	$scope.select.metadataAdvancedCommonRequirementsDataset = true;
	$scope.select.metadataAdvancedConformanceClass1 = true;
	$scope.select.metadataAdvancedConformanceClass2 = true;
	$scope.select.metadataAdvancedConformanceClass2b = true;
	$scope.select.metadataAdvancedConformanceClass2c = false;
	$scope.select.metadataAdvancedConformanceClass8 = true;
	$scope.select.metadataAdvancedCommonRequirementsNetworkService = true;
	$scope.select.metadataAdvancedConformanceClass3 = true;
	$scope.select.metadataAdvancedConformanceClass4 = true;
	$scope.select.metadataAdvancedCommonRequirementsSpatialDataService = true;
	$scope.select.metadataAdvancedConformanceClass5 = true;
	$scope.select.metadataAdvancedConformanceClass6 = false;
	$scope.select.metadataAdvancedConformanceClass7 = false;
	$scope.select.fileUploadType = "upload";
	$scope.inputTypeForTest = "upload";
	$scope.restservice = {};
	$scope.restservice.testsuiteid = "";
	$("#text-label-report").val("Conformance class 'Metadata for interoperability'");
	$scope.selectedOptionsAnnex1 = [];
	$scope.selectedOptionsAnnex2 = [];
	$scope.selectedOptionsAnnex3 = [];

	$scope.select.viewServiceType = "WMS";
	$scope.select.downloadServiceType = "WFS";
	$scope.select.downloadSubServiceType = "direct2";
	$scope.select.discoveryServiceType = "CSW";
	//$scope.select.datasetType = 'CCS';
	$scope.select.datasetType = '-';

	$("#text-input-url").change(function() {
		if ($("#text-input-url").val().trim() != "") {
			$("#buttonStart").prop("disabled", false);
		} else {
			$("#buttonStart").prop("disabled", true);
		}
	});

	$scope.chooseFileUploadMode = function() {
		$scope.select.fileUploadType = $("#file-upload-id option:selected").val();
		console.log($("#uploadTestObjectId").val());
		if ($scope.select.fileUploadType == 'remote') {
			$("#uploadCell").removeClass("rTableCell50big");
			$("#uploadCell").addClass("rTableCell50");
			if ($("#text-input-url").val().trim() != "") {
				$("#buttonStart").prop("disabled", false);
			} else {
				$("#buttonStart").prop("disabled", true);
			}
		} else {
			$("#uploadCell").removeClass("rTableCell50");
			$("#uploadCell").addClass("rTableCell50big");
			if ($("#uploadTestObjectId").val().trim() != "") {
				$("#buttonStart").prop("disabled", false);
			} else {
				$("#buttonStart").prop("disabled", true);
			}
		}
	}

	$("#file-upload-id").val('upload');
	$scope.chooseFileUploadMode();

	$scope.selectTypeResource = function(typeResource) {
		$scope.select.typeResource = typeResource;
		if (typeResource == "metadata") {
			$scope.select.datasetType = '-';
			$("#file-upload-id option[value='remote']").remove();
			$("#file-upload-id option[value='upload']").remove();
			$('#file-upload-id').append("<option value='upload'>File upload</option>");
			$('#file-upload-id').append("<option value='remote'>Remote file</option>");
			$scope.select.fileUploadType = "upload";
			$scope.inputTypeForTest = "upload";
			$("#file-upload-multiple").removeAttr('disabled');
			$("#uploadCell").removeClass("rTableCell50");
			$("#uploadCell").addClass("rTableCell50big");
			$("#metadata-version-2").click();
		}
		if (typeResource == "viewservice") {
			$("#viewservice-version-1").click();
			$scope.select.fileUploadType = "remote";
			$scope.inputTypeForTest = "remote";
			$("#file-upload-id option[value='upload']").remove();
			$("#file-upload-id option[value='remote']").remove();
			$('#file-upload-id').append("<option value='remote'>Service URL</option>");
			$("#uploadCell").removeClass("rTableCell50big");
			$("#uploadCell").addClass("rTableCell50");
		}
		if (typeResource == "downloadservice") {
			$("#downloadservice-version-1").click();
			$("#downloadservice-wfs-records-1").click();
			$scope.select.fileUploadType = "remote";
			$scope.inputTypeForTest = "remote";
			$("#file-upload-id option[value='upload']").remove();
			$("#file-upload-id option[value='remote']").remove();
			$('#file-upload-id').append("<option value='remote'>Service URL</option>");
			$("#uploadCell").removeClass("rTableCell50big");
			$("#uploadCell").addClass("rTableCell50");
		}
		if (typeResource == "discoveryservice") {
			$("#discoveryservice-version-1").click();
			$scope.select.fileUploadType = "remote";
			$scope.inputTypeForTest = "remote";
			$("#file-upload-id option[value='upload']").remove();
			$("#file-upload-id option[value='remote']").remove();
			$('#file-upload-id').append("<option value='remote'>Service URL</option>");
			$("#uploadCell").removeClass("rTableCell50big");
			$("#uploadCell").addClass("rTableCell50");
		}
		if (typeResource == "dataset") {
			$("#file-upload-id option[value='remote']").remove();
			$("#file-upload-id option[value='upload']").remove();
			$('#file-upload-id').append("<option value='upload'>File upload</option>");
			$('#file-upload-id').append("<option value='remote'>Remote file</option>");
			$scope.select.fileUploadType = "upload";
			$scope.inputTypeForTest = "upload";
			$("#file-upload-multiple").removeAttr('disabled');
			$("#uploadCell").removeClass("rTableCell50");
			$("#uploadCell").addClass("rTableCell50big");
			$("#dataset-version-1").click();
			$scope.checkAnnexSelected();
			$scope.prefillLabel();
		}
	}

	$scope.checkAnnexSelected = function() {
		var selectedAnnex1, selectedAnnex2, selectedAnnex3;
		if (!$("#select-annex-1 option:selected").length) {
			selectedAnnex1 = 0;
		} else {
			selectedAnnex1 = $("#select-annex-1 option:selected").length;
		}
		if (!$("#select-annex-2 option:selected").length) {
			selectedAnnex2 = 0;
		} else {
			selectedAnnex2 = $("#select-annex-2 option:selected").length;
		}
		if (!$("#select-annex-3 option:selected").length) {
			selectedAnnex3 = 0;
		} else {
			selectedAnnex3 = $("#select-annex-3 option:selected").length;
		}
		console.log(selectedAnnex3);
		var selectedAnnex = selectedAnnex1 + selectedAnnex2 + selectedAnnex3;
		if (selectedAnnex == 0) {
			$scope.select.datasetType = "CCS";
			$scope.selectDatasetType('CCS');
		} else {
			$scope.select.datasetType = [];
			console.log($scope.select.datasetType);
			if (selectedAnnex1 > 0) {
				if ($scope.selectedOptionsAnnex1.includes("1")) {
					$scope.select.datasetType.push("AD");
					$scope.selectDatasetType('AD');
				}
				if ($scope.selectedOptionsAnnex1.includes("2")) {
					$scope.select.datasetType.push("AU");
					$("#adminunits-version-1").prop("checked", true);
					$scope.selectSubAdminUnits();
					$scope.selectDatasetType('AU');
				}
				if ($scope.selectedOptionsAnnex1.includes("3")) {
					$scope.select.datasetType.push("CP");
					$scope.selectDatasetType('CP');
				}
				if ($scope.selectedOptionsAnnex1.includes("4")) {
					$scope.select.datasetType.push("GN");
					$scope.selectDatasetType('GN');
				}
				if ($scope.selectedOptionsAnnex1.includes("5")) {
					$scope.select.datasetType.push("HY");
					$("#hydro-version-1").prop("checked", true);
					$scope.selectSubHydro();
					$scope.selectDatasetType('HN');
				}
				if ($scope.selectedOptionsAnnex1.includes("6")) {
					$scope.select.datasetType.push("PS");
					$scope.selectDatasetType('PS');
				}
				if ($scope.selectedOptionsAnnex1.includes("7")) {
					$scope.select.datasetType.push("TN");
					$("#transport-version-1").prop("checked", true);
					$scope.selectSubTransport();
					$scope.selectDatasetType('ATN');
				}
			}
			if (selectedAnnex2 > 0) {
				if ($scope.selectedOptionsAnnex2.includes("1")) {
					$scope.select.datasetType.push("EL");
					$("#elevation-version-1").prop("checked", true);
					$scope.selectSubElevation();
					$scope.selectDatasetType('EGC');
				}
				if ($scope.selectedOptionsAnnex2.includes("2")) {
					$scope.select.datasetType.push("GE");
					$("#geology-version-1").prop("checked", true);
					$scope.selectSubGeology();
					$scope.selectDatasetType('GE');
				}
				if ($scope.selectedOptionsAnnex2.includes("3")) {
					$scope.select.datasetType.push("LC");
					$("#landcover-version-1").prop("checked", true);
					$scope.selectSubLandcover();
					$scope.selectDatasetType('LCR');
				}
				if ($scope.selectedOptionsAnnex2.includes("4")) {
					$scope.select.datasetType.push("OI");
					$scope.selectDatasetType('OI');
				}
			}
			if (selectedAnnex3 > 0) {
				if ($scope.selectedOptionsAnnex3.includes("0")) {
					$scope.select.datasetType.push("AF");
					$scope.selectDatasetType('AF');
				}
				if ($scope.selectedOptionsAnnex3.includes("1")) {
					$scope.select.datasetType.push("ACMF");
					$scope.selectDatasetType('ACMF');
				}
				if ($scope.selectedOptionsAnnex3.includes("2")) {
					$scope.select.datasetType.push("AM");
					$scope.selectDatasetType('AM');
				}
				if ($scope.selectedOptionsAnnex3.includes("3")) {
					$scope.select.datasetType.push("BR");
					$scope.selectDatasetType('BR');
				}
				if ($scope.selectedOptionsAnnex3.includes("4")) {
					$scope.select.datasetType.push("BU");
					$("#buildings-version-1").prop("checked", true);
					$scope.selectSubBuildings();
					$scope.selectDatasetType('BU2D');
				}
				if ($scope.selectedOptionsAnnex3.includes("5")) {
					$scope.select.datasetType.push("ER");
					$("#energy-version-1").prop("checked", true);
					$scope.selectSubEnergy();
					$scope.selectDatasetType('ERCOV');
				}
				if ($scope.selectedOptionsAnnex3.includes("6")) {
					$scope.select.datasetType.push("EF");
					$scope.selectDatasetType('EF');
				}
				if ($scope.selectedOptionsAnnex3.includes("7")) {
					$scope.select.datasetType.push("HB");
					$scope.selectDatasetType('HB');
				}
				if ($scope.selectedOptionsAnnex3.includes("8")) {
					$scope.select.datasetType.push("HH");
					$scope.selectDatasetType('HH');
				}
				if ($scope.selectedOptionsAnnex3.includes("9")) {
					$scope.select.datasetType.push("LU");
					$("#landuse-version-1").prop("checked", true);
					$scope.selectSubLandUse();
					$scope.selectDatasetType('ELU');
				}
				if ($scope.selectedOptionsAnnex3.includes("10")) {
					$scope.select.datasetType.push("MR");
					$scope.selectDatasetType('MR');
				}
				if ($scope.selectedOptionsAnnex3.includes("11")) {
					$scope.select.datasetType.push("NZ");
					$scope.selectDatasetType('NZ');
				}
				if ($scope.selectedOptionsAnnex3.includes("12")) {
					$scope.select.datasetType.push("OF");
					$scope.selectDatasetType('OF');
				}
				if ($scope.selectedOptionsAnnex3.includes("13")) {
					$scope.select.datasetType.push("PD");
					$scope.selectDatasetType('PD');
				}
				if ($scope.selectedOptionsAnnex3.includes("14")) {
					$scope.select.datasetType.push("PF");
					$scope.selectDatasetType('PF');
				}
				if ($scope.selectedOptionsAnnex3.includes("15")) {
					$scope.select.datasetType.push("SR");
					$scope.selectDatasetType('SR');
				}
				if ($scope.selectedOptionsAnnex3.includes("16")) {
					$scope.select.datasetType.push("SO");
					$scope.selectDatasetType('SO');
				}
				if ($scope.selectedOptionsAnnex3.includes("17")) {
					$scope.select.datasetType.push("SD");
					$scope.selectDatasetType('SD');
				}
				if ($scope.selectedOptionsAnnex3.includes("18")) {
					$scope.select.datasetType.push("SU");
					$("#statistical-version-1").prop("checked", true);
					$scope.selectSubStatistical();
					$scope.selectDatasetType('SUGRID');
				}
				if ($scope.selectedOptionsAnnex3.includes("19")) {
					$scope.select.datasetType.push("US");
					$("#utility-version-1").prop("checked", true);
					$scope.selectSubUtility();
					$scope.selectDatasetType('USASGS');
				}
			}
			console.log($scope.select.datasetType);
			console.log($scope.selectedOptionsAnnex1);
			console.log($scope.selectedOptionsAnnex2);
			console.log($scope.selectedOptionsAnnex3);
		}
		$scope.runTest();
	}

	$scope.selectSubAdminUnits = function() {
		$scope.select.subAdminUnits = [];
		if (!$("#adminunits-version-1").prop("checked") && !$("#adminunits-version-2").prop("checked")) $("#adminunits-version-1").prop("checked", true);
		if ($("#adminunits-version-1").prop("checked")) {
			$scope.select.subAdminUnits.push("AU");
			$scope.selectDatasetType("AU");
		}
		if ($("#adminunits-version-2").prop("checked")) {
			$scope.select.subAdminUnits.push("MU");
			$scope.selectDatasetType("MU");
		}
		console.log($scope.select.subAdminUnits);
	}

	$scope.selectSubHydro = function() {
		$scope.select.subHydro = [];
		if (!$("#hydro-version-1").prop("checked") && !$("#hydro-version-2").prop("checked")) $("#hydro-version-1").prop("checked", true);
		if ($("#hydro-version-1").prop("checked")) {
			$scope.select.subHydro.push("HN");
			$scope.selectDatasetType("HN");
		}
		if ($("#hydro-version-2").prop("checked")) {
			$scope.select.subHydro.push("HPW");
			$scope.selectDatasetType("HPW");
		}
		console.log($scope.select.subHydro);
	}

	$scope.selectSubTransport = function() {
		$scope.select.subTransport = [];
		if (!$("#transport-version-1").prop("checked") && !$("#transport-version-2").prop("checked") && !$("#transport-version-3").prop("checked") && !$("#transport-version-4").prop("checked") && !$("#transport-version-5").prop("checked")) $("#transport-version-1").prop("checked", true);
		if ($("#transport-version-1").prop("checked")) {
			$scope.select.subTransport.push("ATN");
			$scope.selectDatasetType("ATN");
		}
		if ($("#transport-version-2").prop("checked")) {
			$scope.select.subTransport.push("CTN");
			$scope.selectDatasetType("CTN");
		}
		if ($("#transport-version-3").prop("checked")) {
			$scope.select.subTransport.push("RATN");
			$scope.selectDatasetType("RATN");
		}
		if ($("#transport-version-4").prop("checked")) {
			$scope.select.subTransport.push("ROTN");
			$scope.selectDatasetType("ROTN");
		}
		if ($("#transport-version-5").prop("checked")) {
			$scope.select.subTransport.push("WTN");
			$scope.selectDatasetType("WTN");
		}
		console.log($scope.select.subTransport);
	}

	$scope.selectSubElevation = function() {
		$scope.select.subElevation = [];
		if (!$("#elevation-version-1").prop("checked") && !$("#elevation-version-2").prop("checked") && !$("#elevation-version-3").prop("checked")) $("#elevation-version-1").prop("checked", true);
		if ($("#elevation-version-1").prop("checked")) {
			$scope.select.subElevation.push("EGC");
			$scope.selectDatasetType("EGC");
		}
		if ($("#elevation-version-2").prop("checked")) {
			$scope.select.subElevation.push("ETIN");
			$scope.selectDatasetType("ETIN");
		}
		if ($("#elevation-version-3").prop("checked")) {
			$scope.select.subElevation.push("EVE");
			$scope.selectDatasetType("EVE");
		}
		console.log($scope.select.subElevation);
	}

	$scope.selectSubGeology = function() {
		$scope.select.subGeology = [];
		if (!$("#geology-version-1").prop("checked") && !$("#geology-version-2").prop("checked") && !$("#geology-version-3").prop("checked")) $("#geology-version-1").prop("checked", true);
		if ($("#geology-version-1").prop("checked")) {
			$scope.select.subGeology.push("GE");
			$scope.selectDatasetType("GE");
		}
		if ($("#geology-version-2").prop("checked")) {
			$scope.select.subGeology.push("GEO");
			$scope.selectDatasetType("GEO");
		}
		if ($("#geology-version-3").prop("checked")) {
			$scope.select.subGeology.push("HYD");
			$scope.selectDatasetType("HYD");
		}
		console.log($scope.select.subGeology);
	}

	$scope.selectSubLandcover = function() {
		$scope.select.subLandcover = [];
		if (!$("#landcover-version-1").prop("checked") && !$("#landcover-version-2").prop("checked")) $("#landcover-version-1").prop("checked", true);
		if ($("#landcover-version-1").prop("checked")) {
			$scope.select.subLandcover.push("LCR");
			$scope.selectDatasetType("LCR");
		}
		if ($("#landcover-version-2").prop("checked")) {
			$scope.select.subLandcover.push("LCV");
			$scope.selectDatasetType("LCV");
		}
		console.log($scope.select.subLandcover);
	}

	$scope.selectSubBuildings = function() {
		$scope.select.subBuildings = [];
		if (!$("#buildings-version-1").prop("checked") && !$("#buildings-version-2").prop("checked")) $("#buildings-version-1").prop("checked", true);
		if ($("#buildings-version-1").prop("checked")) {
			$scope.select.subBuildings.push("BU2D");
			$scope.selectDatasetType("BU2D");
		}
		if ($("#buildings-version-2").prop("checked")) {
			$scope.select.subBuildings.push("BU3D");
			$scope.selectDatasetType("BU3D");
		}
		console.log($scope.select.subBuildings);
	}

	$scope.selectSubEnergy = function() {
		$scope.select.subEnergy = [];
		if (!$("#energy-version-1").prop("checked") && !$("#energy-version-2").prop("checked")) $("#energy-version-1").prop("checked", true);
		if ($("#energy-version-1").prop("checked")) {
			$scope.select.subEnergy.push("ERCOV");
			$scope.selectDatasetType("ERCOV");
		}
		if ($("#energy-version-2").prop("checked")) {
			$scope.select.subEnergy.push("ERVEC");
			$scope.selectDatasetType("ERVEC");
		}
		console.log($scope.select.subEnergy);
	}

	$scope.selectSubLandUse = function() {
		$scope.select.subLandUse = [];
		if (!$("#landuse-version-1").prop("checked") && !$("#landuse-version-2").prop("checked") && !$("#landuse-version-3").prop("checked") && !$("#landuse-version-4").prop("checked")) $("#landuse-version-1").prop("checked", true);
		if ($("#landuse-version-1").prop("checked")) {
			$scope.select.subLandUse.push("ELU");
			$scope.selectDatasetType("ELU");
		}
		if ($("#landuse-version-2").prop("checked")) {
			$scope.select.subLandUse.push("GELU");
			$scope.selectDatasetType("GELU");
		}
		if ($("#landuse-version-3").prop("checked")) {
			$scope.select.subLandUse.push("PLU");
			$scope.selectDatasetType("PLU");
		}
		if ($("#landuse-version-4").prop("checked")) {
			$scope.select.subLandUse.push("SELU");
			$scope.selectDatasetType("SELU");
		}
		console.log($scope.select.subLandUse);
	}

	$scope.selectSubStatistical = function() {
		$scope.select.subStatistical = [];
		if (!$("#statistical-version-1").prop("checked") && !$("#statistical-version-2").prop("checked")) $("#statistical-version-1").prop("checked", true);
		if ($("#statistical-version-1").prop("checked")) {
			$scope.select.subStatistical.push("SUGRID");
			$scope.selectDatasetType("SUGRID");
		}
		if ($("#statistical-version-2").prop("checked")) {
			$scope.select.subStatistical.push("SUVECTOR");
			$scope.selectDatasetType("SUVECTOR");
		}
		console.log($scope.select.subStatistical);
	}

	$scope.selectSubUtility = function() {
		$scope.select.subUtility = [];
		if (!$("#utility-version-1").prop("checked") && !$("#utility-version-2").prop("checked") && !$("#utility-version-3").prop("checked") && !$("#utility-version-4").prop("checked") && !$("#utility-version-5").prop("checked") && !$("#utility-version-6").prop("checked") && !$("#utility-version-7").prop("checked")) $("#utility-version-1").prop("checked", true);
		if ($("#utility-version-1").prop("checked")) {
			$scope.select.subUtility.push("USASGS");
			$scope.selectDatasetType("USASGS");
		}
		if ($("#utility-version-2").prop("checked")) {
			$scope.select.subUtility.push("USEN");
			$scope.selectDatasetType("USEN");
		}
		if ($("#utility-version-3").prop("checked")) {
			$scope.select.subUtility.push("USEMF");
			$scope.selectDatasetType("USEMF");
		}
		if ($("#utility-version-4").prop("checked")) {
			$scope.select.subUtility.push("USOGCN");
			$scope.selectDatasetType("USOGCN");
		}
		if ($("#utility-version-5").prop("checked")) {
			$scope.select.subUtility.push("USSN");
			$scope.selectDatasetType("USSN");
		}
		if ($("#utility-version-6").prop("checked")) {
			$scope.select.subUtility.push("USTN");
			$scope.selectDatasetType("USTN");
		}
		if ($("#utility-version-7").prop("checked")) {
			$scope.select.subUtility.push("USWN");
			$scope.selectDatasetType("USWN");
		}
		console.log($scope.select.subUtility);
	}

	$scope.selectMetadataVersion = function(metadataVersion) {
		$scope.select.metadataVersion = metadataVersion;
		$scope.select.visibleMetadataRecords = true;
		if (metadataVersion == "1.3") {
			$scope.select.visibleMetadataRecords = false;
			$scope.select.metadataRecords = "-";
			$("#metadata-13-options-0").prop("checked", true);
			$("#metadata-13-options-1").prop("checked", true);
			$("#metadata-13-options-2").prop("checked", true);
			$scope.select.metadataAdvancedInspireProfile = true;
			$scope.select.metadataAdvancedInteroperability = true;
		} else {
			$("#metadata-records-1").prop("checked", true);
			$scope.select.metadataRecords = "metadata_dataset";
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
			$("#metadata-20-dataset-options-3").prop("checked", true);
			$scope.select.metadataAdvancedCommonRequirementsDataset = true;
			$scope.select.metadataAdvancedConformanceClass1 = true;
			$scope.select.metadataAdvancedConformanceClass2 = true;
		}
		$scope.prefillLabel();
	}

	$scope.selectMetadataOptions = function() {
		$scope.select.metadataAdvancedOptions = !$scope.select.metadataAdvancedOptions;
		$scope.prefillLabel();
	}

	// Medata version 1.3
	$scope.selectMetadataAdvancedXMLencoding = function() {
		$("#metadata-13-options-0").prop("checked", true);
		console.log($("#metadata-13-options-0").prop("checked"));
		$scope.select.metadataAdvancedXMLEncoding = $("#metadata-13-options-0").prop("checked");
		$scope.select.metadataAdvancedInspireProfile = $("#metadata-13-options-1").prop("checked");
		$scope.select.metadataAdvancedInteroperability = $("#metadata-13-options-2").prop("checked");
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedInspireProfile = function() {
		console.log($("#metadata-13-options-1").prop("checked"));
		if ($("#metadata-13-options-1").prop("checked")) {
			$("#metadata-13-options-1").prop("checked", true);
			$("#metadata-13-options-2").prop("checked", false);
		} else {
			$("#metadata-13-options-1").prop("checked", false);
			$("#metadata-13-options-2").prop("checked", false);
		}
		console.log($("#metadata-13-options-1").prop("checked"));
		$scope.select.metadataAdvancedXMLEncoding = $("#metadata-13-options-0").prop("checked");
		$scope.select.metadataAdvancedInspireProfile = $("#metadata-13-options-1").prop("checked");
		$scope.select.metadataAdvancedInteroperability = $("#metadata-13-options-2").prop("checked");
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedInteroperability = function() {
		console.log($("#metadata-13-options-2").prop("checked"));
		if ($("#metadata-13-options-2").prop("checked")) $("#metadata-13-options-1").prop("checked", true);
		$scope.select.metadataAdvancedXMLEncoding = $("#metadata-13-options-0").prop("checked");
		$scope.select.metadataAdvancedInspireProfile = $("#metadata-13-options-1").prop("checked");
		$scope.select.metadataAdvancedInteroperability = $("#metadata-13-options-2").prop("checked");
		$scope.prefillLabel();
	}

	// Medata version 2.0 - Dataset
	$scope.selectMetadataAdvancedCommonRequirementsDataset = function() {
		$("#metadata-20-dataset-options-1").prop("checked", true);
		console.log($("#metadata-20-dataset-options-1").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsDataset = $("#metadata-20-dataset-options-1").prop("checked");
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass1ds = function() {
		if ($("#metadata-20-dataset-options-2").prop("checked") == true) {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-3").prop("checked", false);
		} else {
			$("#metadata-20-dataset-options-3").prop("checked", false);
			$("#metadata-20-dataset-options-4").prop("checked", false);
			$("#metadata-20-dataset-options-5").prop("checked", false);
			$("#metadata-20-dataset-options-6").prop("checked", false);
		}
		$scope.updateDataSet();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass2ds = function() {
		if ($("#metadata-20-dataset-options-3").prop("checked") == true) {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
		}
		$scope.updateDataSet();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass2bds = function() {
		if ($("#metadata-20-dataset-options-4").prop("checked") == true) {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
		} else {
			if ($("#metadata-20-dataset-options-5").prop("checked") == true) {
				$("#metadata-20-dataset-options-1").prop("checked", true);
				$("#metadata-20-dataset-options-2").prop("checked", true);
			}
		}
		$scope.updateDataSet();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass2cds = function() {
		if ($("#metadata-20-dataset-options-5").prop("checked") == true) {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
		} else {
			if ($("#metadata-20-dataset-options-4").prop("checked") == true) {
				$("#metadata-20-dataset-options-1").prop("checked", true);
				$("#metadata-20-dataset-options-2").prop("checked", true);
			}
		}
		$scope.updateDataSet();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass8ds = function() {
		if ($("#metadata-20-dataset-options-6").prop("checked") == true) {
			$("#metadata-20-dataset-options-1").prop("checked", true);
			$("#metadata-20-dataset-options-2").prop("checked", true);
		}
		$scope.updateDataSet();
		$scope.prefillLabel();
	}

	$scope.updateDataSet = function() {
		console.log($("#metadata-20-dataset-options-1").prop("checked"));
		console.log($("#metadata-20-dataset-options-2").prop("checked"));
		console.log($("#metadata-20-dataset-options-3").prop("checked"));
		console.log($("#metadata-20-dataset-options-4").prop("checked"));
		console.log($("#metadata-20-dataset-options-6").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsDataset = $("#metadata-20-dataset-options-1").prop("checked");
		$scope.select.metadataAdvancedConformanceClass1 = $("#metadata-20-dataset-options-2").prop("checked");
		$scope.select.metadataAdvancedConformanceClass2 = $("#metadata-20-dataset-options-3").prop("checked");
		$scope.select.metadataAdvancedConformanceClass2b = $("#metadata-20-dataset-options-4").prop("checked");
		$scope.select.metadataAdvancedConformanceClass2c = $("#metadata-20-dataset-options-5").prop("checked");
		$scope.select.metadataAdvancedConformanceClass8 = $("#metadata-20-dataset-options-6").prop("checked");
		$scope.prefillLabel();
	}

	// Medata version 2.0 - Networkservice
	$scope.selectMetadataAdvancedCommonRequirementsNetworkService = function() {
		$("#metadata-20-networkservice-options-1").prop("checked", true);
		console.log($("#metadata-20-networkservice-options-1").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsNetworkService = $("#metadata-20-networkservice-options-1").prop("checked");
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass3ns = function() {
		if ($("#metadata-20-networkservice-options-2").prop("checked") == true) {
			$("#metadata-20-networkservice-options-1").prop("checked", true);
			$("#metadata-20-networkservice-options-3").prop("checked", false);
		} else {
			$("#metadata-20-networkservice-options-3").prop("checked", false);
		}
		$scope.updateNetworkService();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass4ns = function() {
		if ($("#metadata-20-networkservice-options-3").prop("checked") == true) {
			$("#metadata-20-networkservice-options-1").prop("checked", true);
			$("#metadata-20-networkservice-options-2").prop("checked", true);
		}
		$scope.updateNetworkService();
		$scope.prefillLabel();
	}

	$scope.updateNetworkService = function() {
		console.log($("#metadata-20-networkservice-options-1").prop("checked"));
		console.log($("#metadata-20-networkservice-options-2").prop("checked"));
		console.log($("#metadata-20-networkservice-options-3").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsNetworkService = $("#metadata-20-networkservice-options-1").prop("checked");
		$scope.select.metadataAdvancedConformanceClass3 = $("#metadata-20-networkservice-options-2").prop("checked");
		$scope.select.metadataAdvancedConformanceClass4 = $("#metadata-20-networkservice-options-3").prop("checked");
		$scope.prefillLabel();
	}

	// Medata version 2.0 - Spatialdataservice
	$scope.selectMetadataAdvancedCommonRequirementsSpatialDataService = function() {
		$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
		console.log($("#metadata-20-spatialdataservice-options-1").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsSpatialDataService = $("#metadata-20-spatialdataservice-options-1").prop("checked");
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass3sds = function() {
		if ($("#metadata-20-spatialdataservice-options-2").prop("checked") == true) {
			$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-3").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		} else {
			$("#metadata-20-spatialdataservice-options-3").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		}
		$scope.updateSpatialDataService();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass5sds = function() {
		if ($("#metadata-20-spatialdataservice-options-3").prop("checked") == true) {
			$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-2").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		} else {
			$("#metadata-20-spatialdataservice-options-4").prop("checked", false);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		}
		$scope.updateSpatialDataService();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass6sds = function() {
		if ($("#metadata-20-spatialdataservice-options-4").prop("checked") == true) {
			$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-2").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-3").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		} else {
			$("#metadata-20-spatialdataservice-options-5").prop("checked", false);
		}
		$scope.updateSpatialDataService();
		$scope.prefillLabel();
	}

	$scope.selectMetadataAdvancedConformanceClass7sds = function() {
		if ($("#metadata-20-spatialdataservice-options-5").prop("checked") == true) {
			$("#metadata-20-spatialdataservice-options-1").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-2").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-3").prop("checked", true);
			$("#metadata-20-spatialdataservice-options-4").prop("checked", true);
		}
		$scope.updateSpatialDataService();
		$scope.prefillLabel();
	}

	$scope.updateSpatialDataService = function() {
		console.log($("#metadata-20-spatialdataservice-options-1").prop("checked"));
		console.log($("#metadata-20-spatialdataservice-options-2").prop("checked"));
		console.log($("#metadata-20-spatialdataservice-options-3").prop("checked"));
		console.log($("#metadata-20-spatialdataservice-options-4").prop("checked"));
		console.log($("#metadata-20-spatialdataservice-options-5").prop("checked"));
		$scope.select.metadataAdvancedCommonRequirementsSpatialDataService = $("#metadata-20-spatialdataservice-options-1").prop("checked");
		$scope.select.metadataAdvancedConformanceClass3 = $("#metadata-20-spatialdataservice-options-2").prop("checked");
		$scope.select.metadataAdvancedConformanceClass5 = $("#metadata-20-spatialdataservice-options-3").prop("checked");
		$scope.select.metadataAdvancedConformanceClass6 = $("#metadata-20-spatialdataservice-options-4").prop("checked");
		$scope.select.metadataAdvancedConformanceClass7 = $("#metadata-20-spatialdataservice-options-5").prop("checked");
		$scope.prefillLabel();
	}

	// VIEW SERVICE
	$scope.selectViewServiceType = function(viewServiceType) {
		$scope.select.viewServiceType = viewServiceType;
		if (viewServiceType == "WMS") $("#viewservice-wms-options-1").prop("checked", true);
		if (viewServiceType == "WTMS") $("#viewservice-wtms-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	$scope.selectViewServiceWMSAdvanced = function() {
		$("#viewservice-wms-options-1").prop("checked", true);
	}

	$scope.selectViewServiceWTMSAdvanced = function() {
		$("#viewservice-wtms-options-1").prop("checked", true);
	}

	// DOWNLOAD SERVICE
	$scope.selectDownloadServiceType = function(downloadServiceType) {
		$scope.select.downloadServiceType = downloadServiceType;
		if (downloadServiceType == "WFS") {
			$("#downloadservice-direct-options-1").prop("checked", true);
			$("#downloadservice-direct-options-2").prop("checked", true);
		}
		if (downloadServiceType == "PDA") $("#downloadservice-pda-options-1").prop("checked", true); // ........
		if (downloadServiceType == "SOS") $("#downloadservice-sos-options-1").prop("checked", true);
		if (downloadServiceType == "WCS") $("#downloadservice-wcs-options-1").prop("checked", true);
		if (downloadServiceType == "OGC") $("#downloadservice-ogc-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	$scope.selectDownloadWFSServiceType = function(downloadSubServiceType) {
		$scope.select.downloadSubServiceType = downloadSubServiceType;
		if (downloadSubServiceType == "direct23") {
			$("#downloadservice-direct-options-1").prop("checked", true);
			$("#downloadservice-direct-options-2").prop("checked", true);
			$("#downloadservice-direct-options-3").prop("checked", true);
		}
		if (downloadSubServiceType == "direct2") {
			$("#downloadservice-direct-options-1").prop("checked", true);
			$("#downloadservice-direct-options-2").prop("checked", true);
		}
		if (downloadSubServiceType == "direct3") {
			$("#downloadservice-direct-options-1").prop("checked", true);
			$("#downloadservice-direct-options-3").prop("checked", true);
		}
		if (downloadSubServiceType == "predefined") $("#downloadservice-predefined-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	$scope.selectViewDownloadServiceAdvanced = function(type) {
		console.log(type);
		if (type == 'direct1') {
			$("#downloadservice-direct-options-1").prop("checked", true);
		}
		if (type != 'predefined') {
			$scope.select.downloadSubServiceType = "direct1";			
			if ($("#downloadservice-direct-options-3").prop("checked") && $("#downloadservice-direct-options-2").prop("checked")) {
				$scope.select.downloadSubServiceType = "direct23";
			} 
			else if ($("#downloadservice-direct-options-3").prop("checked")) {
				$scope.select.downloadSubServiceType = "direct3";				
			} 
			else if ($("#downloadservice-direct-options-2").prop("checked")) {
				$scope.select.downloadSubServiceType = "direct2";
			} 
		}

		//$("#downloadservice-direct-options-2").prop("checked", true);
		if (type == 'predefined') $("#downloadservice-predefined-options-1").prop("checked", true);
		if (type == 'pda') $("#downloadservice-pda-options-1").prop("checked", true);
		if (type == 'sos') $("#downloadservice-sos-options-1").prop("checked", true);
		if (type == 'wcs') $("#downloadservice-wcs-options-1").prop("checked", true);
		if (type == 'ogc') $("#downloadservice-ogc-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	// DISCOVERY SERVICE
	$scope.selectDiscoveryServiceType = function(discoveryServiceType) {
		$scope.select.discoveryServiceType = discoveryServiceType;
		$("#discoveryservice-csw-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	$scope.selectDiscoveryServiceCSWAdvanced = function() {
		$("#discoveryservice-csw-options-1").prop("checked", true);
		$scope.prefillLabel();
	}

	// DATA SET
	$scope.selectDatasetType = function(datasetType) {
		console.log(datasetType);
		if (datasetType == 'CCS') {
			$("#dataset-ccs-options-5").prop("checked", true);
			$scope.selectDatasetCCSAdvanced('reference_systems');
			$("#dataset-ccs-options-4").prop("checked", true);
			$scope.selectDatasetCCSAdvanced('information_accessibility');
			$("#dataset-ccs-options-3").prop("checked", true);
			$scope.selectDatasetCCSAdvanced('gml_application_schemas');
			$("#dataset-ccs-options-2").prop("checked", true);
			$scope.selectDatasetCCSAdvanced('data_consistency');
		}
		if (datasetType == 'AD') {
			$scope.select.atLeastOneAD = 0;
			$("#dataset-ad-options-10").prop("checked", true);
			$scope.selectDatasetAnnexADAdvanced('reference_systems_addresses');
			$("#dataset-ad-options-8").prop("checked", true);
			$scope.selectDatasetAnnexADAdvanced('information_accessibility_addresses');
			$("#dataset-ad-options-6").prop("checked", true);
			$scope.selectDatasetAnnexADAdvanced('data_consistency_addresses');
			$("#dataset-ad-options-4").prop("checked", true);
			$scope.selectDatasetAnnexADAdvanced('application_schema_addresses_simple');
			$("#dataset-ad-options-3").prop("checked", true);
			$scope.selectDatasetAnnexADAdvanced('gml_application_schemas_addresses');
		}
		if (datasetType == 'AU') {
			$scope.select.atLeastOneAU = 0;
			$("#dataset-au-options-10").prop("checked", true);
			$scope.selectDatasetAnnexAUAdvanced('reference_systems_adminunits');
			$("#dataset-au-options-8").prop("checked", true);
			$scope.selectDatasetAnnexAUAdvanced('information_accessibility_adminunits');
			$("#dataset-au-options-6").prop("checked", true);
			$scope.selectDatasetAnnexAUAdvanced('data_consistency_adminunits');
			$("#dataset-au-options-4").prop("checked", true);
			$scope.selectDatasetAnnexAUAdvanced('application_schema_adminunits');
			$("#dataset-au-options-3").prop("checked", true);
			$scope.selectDatasetAnnexAUAdvanced('gml_application_schemas_adminunits');
		}
		if (datasetType == 'MU') {
			$scope.select.atLeastOneMU = 0;
			$("#dataset-mu-options-10").prop("checked", true);
			$scope.selectDatasetAnnexMUAdvanced('reference_systems_adminunits');
			$("#dataset-mu-options-8").prop("checked", true);
			$scope.selectDatasetAnnexMUAdvanced('information_accessibility_adminunits');
			$("#dataset-mu-options-6").prop("checked", true);
			$scope.selectDatasetAnnexMUAdvanced('data_consistency_adminunits');
			$("#dataset-mu-options-4").prop("checked", true);
			$scope.selectDatasetAnnexMUAdvanced('application_schema_adminunits');
			$("#dataset-mu-options-3").prop("checked", true);
			$scope.selectDatasetAnnexMUAdvanced('gml_application_schemas_adminunits');
		}
		if (datasetType == 'CP') {
			$scope.select.atLeastOneCP = 0;
			$("#dataset-cp-options-10").prop("checked", true);
			$scope.selectDatasetAnnexCPAdvanced('reference_systems_cadastral');
			$("#dataset-cp-options-8").prop("checked", true);
			$scope.selectDatasetAnnexCPAdvanced('information_accessibility_cadastral');
			$("#dataset-cp-options-6").prop("checked", true);
			$scope.selectDatasetAnnexCPAdvanced('data_consistency_cadastral');
			$("#dataset-cp-options-4").prop("checked", true);
			$scope.selectDatasetAnnexCPAdvanced('application_schema_cadastral');
			$("#dataset-cp-options-3").prop("checked", true);
			$scope.selectDatasetAnnexCPAdvanced('gml_application_schemas_cadastral');
		}
		if (datasetType == 'GN') {
			$scope.select.atLeastOneGN = 0;
			$("#dataset-gn-options-10").prop("checked", true);
			$scope.selectDatasetAnnexGNAdvanced('reference_systems_geonames');
			$("#dataset-gn-options-8").prop("checked", true);
			$scope.selectDatasetAnnexGNAdvanced('information_accessibility_geonames');
			$("#dataset-gn-options-6").prop("checked", true);
			$scope.selectDatasetAnnexGNAdvanced('data_consistency_geonames');
			$("#dataset-gn-options-4").prop("checked", true);
			$scope.selectDatasetAnnexGNAdvanced('application_schema_geonames');
			$("#dataset-gn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexGNAdvanced('gml_application_schemas_geonames');
		}
		if (datasetType == 'HN') {
			$scope.select.atLeastOneHN = 0;
			$("#dataset-hn-options-10").prop("checked", true);
			$scope.selectDatasetAnnexHNAdvanced('reference_systems_hydro');
			$("#dataset-hn-options-8").prop("checked", true);
			$scope.selectDatasetAnnexHNAdvanced('information_accessibility_hydro');
			$("#dataset-hn-options-6").prop("checked", true);
			$scope.selectDatasetAnnexHNAdvanced('data_consistency_hydro');
			$("#dataset-hn-options-4").prop("checked", true);
			$scope.selectDatasetAnnexHNAdvanced('application_schema_hydro');
			$("#dataset-hn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexHNAdvanced('gml_application_schemas_hydro');
		}
		if (datasetType == 'HPW') {
			$scope.select.atLeastOneHPW = 0;
			$("#dataset-hpw-options-10").prop("checked", true);
			$scope.selectDatasetAnnexHPWAdvanced('reference_systems_hydrowater');
			$("#dataset-hpw-options-8").prop("checked", true);
			$scope.selectDatasetAnnexHPWAdvanced('information_accessibility_hydrowater');
			$("#dataset-hpw-options-6").prop("checked", true);
			$scope.selectDatasetAnnexHPWAdvanced('data_consistency_hydrowater');
			$("#dataset-hpw-options-4").prop("checked", true);
			$scope.selectDatasetAnnexHPWAdvanced('application_schema_hydrowater');
			$("#dataset-hpw-options-3").prop("checked", true);
			$scope.selectDatasetAnnexHPWAdvanced('gml_application_schemas_hydrowater');
		}
		if (datasetType == 'PS') {
			$scope.select.atLeastOnePS = 0;
			$("#dataset-ps-options-10").prop("checked", true);
			$scope.selectDatasetAnnexPSAdvanced('reference_systems_protsites');
			$("#dataset-ps-options-8").prop("checked", true);
			$scope.selectDatasetAnnexPSAdvanced('information_accessibility_protsites');
			$("#dataset-ps-options-6").prop("checked", true);
			$scope.selectDatasetAnnexPSAdvanced('data_consistency_protsites');
			$("#dataset-ps-options-4").prop("checked", true);
			$scope.selectDatasetAnnexPSAdvanced('application_schema_protsites');
			$("#dataset-ps-options-3").prop("checked", true);
			$scope.selectDatasetAnnexPSAdvanced('gml_application_schemas_protsites');
		}
		if (datasetType == 'ATN') {
			$scope.select.atLeastOneATN = 0;
			$("#dataset-atn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexATNAdvanced('reference_systems_transport');
			$("#dataset-atn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexATNAdvanced('information_accessibility_transport');
			$("#dataset-atn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexATNAdvanced('data_consistency_transport');
			$("#dataset-atn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexATNAdvanced('application_schema_airtransport');
			$("#dataset-atn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexATNAdvanced('gml_application_schemas_transport');
		}
		if (datasetType == 'CTN') {
			$scope.select.atLeastOneCTN = 0;
			$("#dataset-ctn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexCTNAdvanced('reference_systems_transport');
			$("#dataset-ctn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexCTNAdvanced('information_accessibility_transport');
			$("#dataset-ctn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexCTNAdvanced('data_consistency_transport');
			$("#dataset-ctn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexCTNAdvanced('application_schema_cabletransport');
			$("#dataset-ctn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexCTNAdvanced('gml_application_schemas_transport');
		}
		if (datasetType == 'RATN') {
			$scope.select.atLeastOneRATN = 0;
			$("#dataset-ratn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexRATNAdvanced('reference_systems_transport');
			$("#dataset-ratn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexRATNAdvanced('information_accessibility_transport');
			$("#dataset-ratn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexRATNAdvanced('data_consistency_transport');
			$("#dataset-ratn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexRATNAdvanced('application_schema_railtransport');
			$("#dataset-ratn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexRATNAdvanced('gml_application_schemas_transport');
		}
		if (datasetType == 'ROTN') {
			$scope.select.atLeastOneROTN = 0;
			$("#dataset-rotn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexROTNAdvanced('reference_systems_transport');
			$("#dataset-rotn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexROTNAdvanced('information_accessibility_transport');
			$("#dataset-rotn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexROTNAdvanced('data_consistency_transport');
			$("#dataset-rotn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexROTNAdvanced('application_schema_roadtransport');
			$("#dataset-rotn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexROTNAdvanced('gml_application_schemas_transport');
		}
		if (datasetType == 'WTN') {
			$scope.select.atLeastOneWTN = 0;
			$("#dataset-wtn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexWTNAdvanced('reference_systems_transport');
			$("#dataset-wtn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexWTNAdvanced('information_accessibility_transport');
			$("#dataset-wtn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexWTNAdvanced('data_consistency_transport');
			$("#dataset-wtn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexWTNAdvanced('application_schema_watertransport');
			$("#dataset-wtn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexWTNAdvanced('gml_application_schemas_transport');
		}
		if (datasetType == 'EGC') {
			$scope.select.atLeastOneEGC = 0;
			$("#dataset-egc-options-11").prop("checked", true);
			$scope.selectDatasetAnnexEGCAdvanced('reference_systems_elevation');
			$("#dataset-egc-options-9").prop("checked", true);
			$scope.selectDatasetAnnexEGCAdvanced('information_accessibility_elevation');
			$("#dataset-egc-options-7").prop("checked", true);
			$scope.selectDatasetAnnexEGCAdvanced('data_consistency_elevation');
			$("#dataset-egc-options-5").prop("checked", true);
			$scope.selectDatasetAnnexEGCAdvanced('application_schema_elevationgrid');
			$("#dataset-egc-options-3").prop("checked", true);
			$scope.selectDatasetAnnexEGCAdvanced('gml_application_schemas_elevation');
		}
		if (datasetType == 'ETIN') {
			$scope.select.atLeastOneETIN = 0;
			$("#dataset-etin-options-11").prop("checked", true);
			$scope.selectDatasetAnnexETINAdvanced('reference_systems_elevation');
			$("#dataset-etin-options-9").prop("checked", true);
			$scope.selectDatasetAnnexETINAdvanced('information_accessibility_elevation');
			$("#dataset-etin-options-7").prop("checked", true);
			$scope.selectDatasetAnnexETINAdvanced('data_consistency_elevation');
			$("#dataset-etin-options-5").prop("checked", true);
			$scope.selectDatasetAnnexETINAdvanced('application_schema_elevationtin');
			$("#dataset-etin-options-3").prop("checked", true);
			$scope.selectDatasetAnnexETINAdvanced('gml_application_schemas_elevation');
		}
		if (datasetType == 'EVE') {
			$scope.select.atLeastOneEVE = 0;
			$("#dataset-eve-options-11").prop("checked", true);
			$scope.selectDatasetAnnexEVEAdvanced('reference_systems_elevation');
			$("#dataset-eve-options-9").prop("checked", true);
			$scope.selectDatasetAnnexEVEAdvanced('information_accessibility_elevation');
			$("#dataset-eve-options-7").prop("checked", true);
			$scope.selectDatasetAnnexEVEAdvanced('data_consistency_elevation');
			$("#dataset-eve-options-5").prop("checked", true);
			$scope.selectDatasetAnnexEVEAdvanced('application_schema_elevationvector');
			$("#dataset-eve-options-3").prop("checked", true);
			$scope.selectDatasetAnnexEVEAdvanced('gml_application_schemas_elevation');
		}
		if (datasetType == 'GE') {
			$scope.select.atLeastOneGE = 0;
			$("#dataset-ge-options-10").prop("checked", true);
			$scope.selectDatasetAnnexGEAdvanced('reference_systems_geology');
			$("#dataset-ge-options-8").prop("checked", true);
			$scope.selectDatasetAnnexGEAdvanced('information_accessibility_geology');
			$("#dataset-ge-options-6").prop("checked", true);
			$scope.selectDatasetAnnexGEAdvanced('data_consistency_geology');
			$("#dataset-ge-options-4").prop("checked", true);
			$scope.selectDatasetAnnexGEAdvanced('application_schema_geology');
			$("#dataset-ge-options-3").prop("checked", true);
			$scope.selectDatasetAnnexGEAdvanced('gml_application_schemas_geology');
		}
		if (datasetType == 'GEO') {
			$scope.select.atLeastOneGEO = 0;
			$("#dataset-geo-options-10").prop("checked", true);
			$scope.selectDatasetAnnexGEOAdvanced('reference_systems_geology');
			$("#dataset-geo-options-8").prop("checked", true);
			$scope.selectDatasetAnnexGEOAdvanced('information_accessibility_geology');
			$("#dataset-geo-options-6").prop("checked", true);
			$scope.selectDatasetAnnexGEOAdvanced('data_consistency_geology');
			$("#dataset-geo-options-4").prop("checked", true);
			$scope.selectDatasetAnnexGEOAdvanced('application_schema_geophysics');
			$("#dataset-geo-options-3").prop("checked", true);
			$scope.selectDatasetAnnexGEOAdvanced('gml_application_schemas_geology');
		}
		if (datasetType == 'HYD') {
			$scope.select.atLeastOneHYD = 0;
			$("#dataset-hyd-options-10").prop("checked", true);
			$scope.selectDatasetAnnexHYDAdvanced('reference_systems_geology');
			$("#dataset-hyd-options-8").prop("checked", true);
			$scope.selectDatasetAnnexHYDAdvanced('information_accessibility_geology');
			$("#dataset-hyd-options-6").prop("checked", true);
			$scope.selectDatasetAnnexHYDAdvanced('data_consistency_geology');
			$("#dataset-hyd-options-4").prop("checked", true);
			$scope.selectDatasetAnnexHYDAdvanced('application_schema_hydrogeology');
			$("#dataset-hyd-options-3").prop("checked", true);
			$scope.selectDatasetAnnexHYDAdvanced('gml_application_schemas_geology');
		}
		if (datasetType == 'OI') {
			$scope.select.atLeastOneOI = 0;
			$("#dataset-oi-options-10").prop("checked", true);
			$scope.selectDatasetAnnexOIAdvanced('reference_systems_orthoimagery');
			$("#dataset-oi-options-8").prop("checked", true);
			$scope.selectDatasetAnnexOIAdvanced('information_accessibility_orthoimagery');
			$("#dataset-oi-options-6").prop("checked", true);
			$scope.selectDatasetAnnexOIAdvanced('data_consistency_orthoimagery');
			$("#dataset-oi-options-4").prop("checked", true);
			$scope.selectDatasetAnnexOIAdvanced('application_schema_orthoimagery');
			$("#dataset-oi-options-3").prop("checked", true);
			$scope.selectDatasetAnnexOIAdvanced('gml_application_schemas_orthoimagery');
		}
		if (datasetType == 'LCR') {
			$scope.select.atLeastOneLCR = 0;
			$("#dataset-lcr-options-11").prop("checked", true);
			$scope.selectDatasetAnnexLCRAdvanced('reference_systems_landcover');
			$("#dataset-lcr-options-9").prop("checked", true);
			$scope.selectDatasetAnnexLCRAdvanced('information_accessibility_landcover');
			$("#dataset-lcr-options-7").prop("checked", true);
			$scope.selectDatasetAnnexLCRAdvanced('data_consistency_landcover');
			$("#dataset-lcr-options-5").prop("checked", true);
			$scope.selectDatasetAnnexLCRAdvanced('application_schema_landcover_raster');
			$("#dataset-lcr-options-3").prop("checked", true);
			$scope.selectDatasetAnnexLCRAdvanced('gml_application_schemas_landcover');
		}
		if (datasetType == 'LCV') {
			$scope.select.atLeastOneLCV = 0;
			$("#dataset-lcv-options-11").prop("checked", true);
			$scope.selectDatasetAnnexLCVAdvanced('reference_systems_landcover');
			$("#dataset-lcv-options-9").prop("checked", true);
			$scope.selectDatasetAnnexLCVAdvanced('information_accessibility_landcover');
			$("#dataset-lcv-options-7").prop("checked", true);
			$scope.selectDatasetAnnexLCVAdvanced('data_consistency_landcover');
			$("#dataset-lcv-options-5").prop("checked", true);
			$scope.selectDatasetAnnexLCVAdvanced('application_schema_landcover_vector');
			$("#dataset-lcv-options-3").prop("checked", true);
			$scope.selectDatasetAnnexLCVAdvanced('gml_application_schemas_landcover');
		}
		if (datasetType == 'AF') {
			$scope.select.atLeastOneAF = 0;
			$("#dataset-af-options-10").prop("checked", true);
			$scope.selectDatasetAnnexAFAdvanced('reference_systems_agricultural');
			$("#dataset-af-options-8").prop("checked", true);
			$scope.selectDatasetAnnexAFAdvanced('information_accessibility_agricultural');
			$("#dataset-af-options-6").prop("checked", true);
			$scope.selectDatasetAnnexAFAdvanced('data_consistency_agricultural');
			$("#dataset-af-options-4").prop("checked", true);
			$scope.selectDatasetAnnexAFAdvanced('application_schema_agricultural');
			$("#dataset-af-options-3").prop("checked", true);
			$scope.selectDatasetAnnexAFAdvanced('gml_application_schemas_agricultural');
		}
		if (datasetType == 'AM') {
			$scope.select.atLeastOneAM = 0;
			$("#dataset-am-options-10").prop("checked", true);
			$scope.selectDatasetAnnexAMAdvanced('reference_systems_areamanagement');
			$("#dataset-am-options-8").prop("checked", true);
			$scope.selectDatasetAnnexAMAdvanced('information_accessibility_areamanagement');
			$("#dataset-am-options-6").prop("checked", true);
			$scope.selectDatasetAnnexAMAdvanced('data_consistency_areamanagement');
			$("#dataset-am-options-4").prop("checked", true);
			$scope.selectDatasetAnnexAMAdvanced('application_schema_areamanagement');
			$("#dataset-am-options-3").prop("checked", true);
			$scope.selectDatasetAnnexAMAdvanced('gml_application_schemas_areamanagement');
		}
		if (datasetType == 'ACMF') {
			$scope.select.atLeastOneACMF = 0;
			$("#dataset-acmf-options-10").prop("checked", true);
			$scope.selectDatasetAnnexACMFAdvanced('reference_systems_atmospheric');
			$("#dataset-acmf-options-8").prop("checked", true);
			$scope.selectDatasetAnnexACMFAdvanced('information_accessibility_atmospheric');
			$("#dataset-acmf-options-6").prop("checked", true);
			$scope.selectDatasetAnnexACMFAdvanced('data_consistency_atmospheric');
			$("#dataset-acmf-options-4").prop("checked", true);
			$scope.selectDatasetAnnexACMFAdvanced('application_schema_atmospheric');
			$("#dataset-acmf-options-3").prop("checked", true);
			$scope.selectDatasetAnnexACMFAdvanced('gml_application_schemas_atmospheric');
		}
		if (datasetType == 'BR') {
			$scope.select.atLeastOneBR = 0;
			$("#dataset-br-options-10").prop("checked", true);
			$scope.selectDatasetAnnexBRAdvanced('reference_systems_biogeographical');
			$("#dataset-br-options-8").prop("checked", true);
			$scope.selectDatasetAnnexBRAdvanced('information_accessibility_biogeographical');
			$("#dataset-br-options-6").prop("checked", true);
			$scope.selectDatasetAnnexBRAdvanced('data_consistency_biogeographical');
			$("#dataset-br-options-4").prop("checked", true);
			$scope.selectDatasetAnnexBRAdvanced('application_schema_biogeographical');
			$("#dataset-br-options-3").prop("checked", true);
			$scope.selectDatasetAnnexBRAdvanced('gml_application_schemas_biogeographical');
		}
		if (datasetType == 'BU2D') {
			$scope.select.atLeastOneBU2D = 0;
			$("#dataset-bu2d-options-11").prop("checked", true);
			$scope.selectDatasetAnnexBU2DAdvanced('reference_systems_buildings');
			$("#dataset-bu2d-options-9").prop("checked", true);
			$scope.selectDatasetAnnexBU2DAdvanced('information_accessibility_buildings');
			$("#dataset-bu2d-options-7").prop("checked", true);
			$scope.selectDatasetAnnexBU2DAdvanced('data_consistency_buildings');
			$("#dataset-bu2d-options-5").prop("checked", true);
			$scope.selectDatasetAnnexBU2DAdvanced('application_schema_buildings_2d');
			$("#dataset-bu2d-options-3").prop("checked", true);
			$scope.selectDatasetAnnexBU2DAdvanced('gml_application_schemas_buildings');
		}
		if (datasetType == 'BU3D') {
			$scope.select.atLeastOneBU3D = 0;
			$("#dataset-bu3d-options-11").prop("checked", true);
			$scope.selectDatasetAnnexBU3DAdvanced('reference_systems_buildings');
			$("#dataset-bu3d-options-9").prop("checked", true);
			$scope.selectDatasetAnnexBU3DAdvanced('information_accessibility_buildings');
			$("#dataset-bu3d-options-7").prop("checked", true);
			$scope.selectDatasetAnnexBU3DAdvanced('data_consistency_buildings');
			$("#dataset-bu3d-options-5").prop("checked", true);
			$scope.selectDatasetAnnexBU3DAdvanced('application_schema_buildings_3d');
			$("#dataset-bu3d-options-3").prop("checked", true);
			$scope.selectDatasetAnnexBU3DAdvanced('gml_application_schemas_buildings');
		}
		if (datasetType == 'ERCOV') {
			$scope.select.atLeastOneERCOV = 0;
			$("#dataset-ercov-options-11").prop("checked", true);
			$scope.selectDatasetAnnexERCOVAdvanced('reference_systems_energy');
			$("#dataset-ercov-options-9").prop("checked", true);
			$scope.selectDatasetAnnexERCOVAdvanced('information_accessibility_energy');
			$("#dataset-ercov-options-7").prop("checked", true);
			$scope.selectDatasetAnnexERCOVAdvanced('data_consistency_energy');
			$("#dataset-ercov-options-5").prop("checked", true);
			$scope.selectDatasetAnnexERCOVAdvanced('application_schema_energy_coverage');
			$("#dataset-ercov-options-3").prop("checked", true);
			$scope.selectDatasetAnnexERCOVAdvanced('gml_application_schemas_energy');
		}
		if (datasetType == 'ERVEC') {
			$scope.select.atLeastOneERVEC = 0;
			$("#dataset-ervec-options-11").prop("checked", true);
			$scope.selectDatasetAnnexERVECAdvanced('reference_systems_energy');
			$("#dataset-ervec-options-9").prop("checked", true);
			$scope.selectDatasetAnnexERVECAdvanced('information_accessibility_energy');
			$("#dataset-ervec-options-7").prop("checked", true);
			$scope.selectDatasetAnnexERVECAdvanced('data_consistency_energy');
			$("#dataset-ervec-options-5").prop("checked", true);
			$scope.selectDatasetAnnexERVECAdvanced('application_schema_energy_vector');
			$("#dataset-ervec-options-3").prop("checked", true);
			$scope.selectDatasetAnnexERVECAdvanced('gml_application_schemas_energy');
		}
		if (datasetType == 'EF') {
			$scope.select.atLeastOneEF = 0;
			$("#dataset-ef-options-10").prop("checked", true);
			$scope.selectDatasetAnnexEFAdvanced('reference_systems_environmental');
			$("#dataset-ef-options-8").prop("checked", true);
			$scope.selectDatasetAnnexEFAdvanced('information_accessibility_environmental');
			$("#dataset-ef-options-6").prop("checked", true);
			$scope.selectDatasetAnnexEFAdvanced('data_consistency_environmental');
			$("#dataset-ef-options-4").prop("checked", true);
			$scope.selectDatasetAnnexEFAdvanced('application_schema_environmental');
			$("#dataset-ef-options-3").prop("checked", true);
			$scope.selectDatasetAnnexEFAdvanced('gml_application_schemas_environmental');
		}
		if (datasetType == 'HB') {
			$scope.select.atLeastOneHB = 0;
			$("#dataset-hb-options-10").prop("checked", true);
			$scope.selectDatasetAnnexHBAdvanced('reference_systems_habitats');
			$("#dataset-hb-options-8").prop("checked", true);
			$scope.selectDatasetAnnexHBAdvanced('information_accessibility_habitats');
			$("#dataset-hb-options-6").prop("checked", true);
			$scope.selectDatasetAnnexHBAdvanced('data_consistency_habitats');
			$("#dataset-hb-options-4").prop("checked", true);
			$scope.selectDatasetAnnexHBAdvanced('application_schema_habitats');
			$("#dataset-hb-options-3").prop("checked", true);
			$scope.selectDatasetAnnexHBAdvanced('gml_application_schemas_habitats');
		}
		if (datasetType == 'HH') {
			$scope.select.atLeastOneHH = 0;
			$("#dataset-hh-options-10").prop("checked", true);
			$scope.selectDatasetAnnexHHAdvanced('reference_systems_human');
			$("#dataset-hh-options-8").prop("checked", true);
			$scope.selectDatasetAnnexHHAdvanced('information_accessibility_human');
			$("#dataset-hh-options-6").prop("checked", true);
			$scope.selectDatasetAnnexHHAdvanced('data_consistency_human');
			$("#dataset-hh-options-4").prop("checked", true);
			$scope.selectDatasetAnnexHHAdvanced('application_schema_human');
			$("#dataset-hh-options-3").prop("checked", true);
			$scope.selectDatasetAnnexHHAdvanced('gml_application_schemas_human');
		}
		if (datasetType == 'ELU') {
			$scope.select.atLeastOneELU = 0;
			$("#dataset-elu-options-10").prop("checked", true);
			$scope.selectDatasetAnnexELUAdvanced('reference_systems_landuse');
			$("#dataset-elu-options-8").prop("checked", true);
			$scope.selectDatasetAnnexELUAdvanced('information_accessibility_landuse');
			$("#dataset-elu-options-6").prop("checked", true);
			$scope.selectDatasetAnnexELUAdvanced('data_consistency_landuse');
			$("#dataset-elu-options-4").prop("checked", true);
			$scope.selectDatasetAnnexELUAdvanced('application_schema_landuse');
			$("#dataset-elu-options-3").prop("checked", true);
			$scope.selectDatasetAnnexELUAdvanced('gml_application_schemas_landuse');
		}
		if (datasetType == 'GELU') {
			$scope.select.atLeastOneGELU = 0;
			$("#dataset-gelu-options-10").prop("checked", true);
			$scope.selectDatasetAnnexGELUAdvanced('reference_systems_landuse');
			$("#dataset-gelu-options-8").prop("checked", true);
			$scope.selectDatasetAnnexGELUAdvanced('information_accessibility_landuse');
			$("#dataset-gelu-options-6").prop("checked", true);
			$scope.selectDatasetAnnexGELUAdvanced('data_consistency_landuse');
			$("#dataset-gelu-options-4").prop("checked", true);
			$scope.selectDatasetAnnexGELUAdvanced('application_schema_landuse');
			$("#dataset-gelu-options-3").prop("checked", true);
			$scope.selectDatasetAnnexGELUAdvanced('gml_application_schemas_landuse');
		}
		if (datasetType == 'PLU') {
			$scope.select.atLeastOnePLU = 0;
			$("#dataset-plu-options-10").prop("checked", true);
			$scope.selectDatasetAnnexPLUAdvanced('reference_systems_landuse');
			$("#dataset-plu-options-8").prop("checked", true);
			$scope.selectDatasetAnnexPLUAdvanced('information_accessibility_landuse');
			$("#dataset-plu-options-6").prop("checked", true);
			$scope.selectDatasetAnnexPLUAdvanced('data_consistency_landuse');
			$("#dataset-plu-options-4").prop("checked", true);
			$scope.selectDatasetAnnexPLUAdvanced('application_schema_landuse');
			$("#dataset-plu-options-3").prop("checked", true);
			$scope.selectDatasetAnnexPLUAdvanced('gml_application_schemas_landuse');
		}
		if (datasetType == 'SELU') {
			$scope.select.atLeastOneSELU = 0;
			$("#dataset-selu-options-10").prop("checked", true);
			$scope.selectDatasetAnnexSELUAdvanced('reference_systems_landuse');
			$("#dataset-selu-options-8").prop("checked", true);
			$scope.selectDatasetAnnexSELUAdvanced('information_accessibility_landuse');
			$("#dataset-selu-options-6").prop("checked", true);
			$scope.selectDatasetAnnexSELUAdvanced('data_consistency_landuse');
			$("#dataset-selu-options-4").prop("checked", true);
			$scope.selectDatasetAnnexSELUAdvanced('application_schema_landuse');
			$("#dataset-selu-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSELUAdvanced('gml_application_schemas_landuse');
		}
		if (datasetType == 'MR') {
			$scope.select.atLeastOneMR = 0;
			$("#dataset-mr-options-10").prop("checked", true);
			$scope.selectDatasetAnnexMRAdvanced('reference_systems_mineral');
			$("#dataset-mr-options-8").prop("checked", true);
			$scope.selectDatasetAnnexMRAdvanced('information_accessibility_mineral');
			$("#dataset-mr-options-6").prop("checked", true);
			$scope.selectDatasetAnnexMRAdvanced('data_consistency_mineral');
			$("#dataset-mr-options-4").prop("checked", true);
			$scope.selectDatasetAnnexMRAdvanced('application_schema_mineral');
			$("#dataset-mr-options-3").prop("checked", true);
			$scope.selectDatasetAnnexMRAdvanced('gml_application_schemas_mineral');
		}
		if (datasetType == 'NZ') {
			$scope.select.atLeastOneNZ = 0;
			$("#dataset-nz-options-10").prop("checked", true);
			$scope.selectDatasetAnnexNZAdvanced('reference_systems_riskzones');
			$("#dataset-nz-options-8").prop("checked", true);
			$scope.selectDatasetAnnexNZAdvanced('information_accessibility_riskzones');
			$("#dataset-nz-options-6").prop("checked", true);
			$scope.selectDatasetAnnexNZAdvanced('data_consistency_riskzones');
			$("#dataset-nz-options-4").prop("checked", true);
			$scope.selectDatasetAnnexNZAdvanced('application_schema_riskzones');
			$("#dataset-nz-options-3").prop("checked", true);
			$scope.selectDatasetAnnexNZAdvanced('gml_application_schemas_riskzones');
		}
		if (datasetType == 'OF') {
			$scope.select.atLeastOneOF = 0;
			$("#dataset-of-options-10").prop("checked", true);
			$scope.selectDatasetAnnexOFAdvanced('reference_systems_oceanographic');
			$("#dataset-of-options-8").prop("checked", true);
			$scope.selectDatasetAnnexOFAdvanced('information_accessibility_oceanographic');
			$("#dataset-of-options-6").prop("checked", true);
			$scope.selectDatasetAnnexOFAdvanced('data_consistency_oceanographic');
			$("#dataset-of-options-4").prop("checked", true);
			$scope.selectDatasetAnnexOFAdvanced('application_schema_oceanographic');
			$("#dataset-of-options-3").prop("checked", true);
			$scope.selectDatasetAnnexOFAdvanced('gml_application_schemas_oceanographic');
		}
		if (datasetType == 'PD') {
			$scope.select.atLeastOnePD = 0;
			$("#dataset-pd-options-10").prop("checked", true);
			$scope.selectDatasetAnnexPDAdvanced('reference_systems_population');
			$("#dataset-pd-options-8").prop("checked", true);
			$scope.selectDatasetAnnexPDAdvanced('information_accessibility_population');
			$("#dataset-pd-options-6").prop("checked", true);
			$scope.selectDatasetAnnexPDAdvanced('data_consistency_population');
			$("#dataset-pd-options-4").prop("checked", true);
			$scope.selectDatasetAnnexPDAdvanced('application_schema_population');
			$("#dataset-pd-options-3").prop("checked", true);
			$scope.selectDatasetAnnexPDAdvanced('gml_application_schemas_population');
		}
		if (datasetType == 'PF') {
			$scope.select.atLeastOnePF = 0;
			$("#dataset-pf-options-10").prop("checked", true);
			$scope.selectDatasetAnnexPFAdvanced('reference_systems_facilities');
			$("#dataset-pf-options-8").prop("checked", true);
			$scope.selectDatasetAnnexPFAdvanced('information_accessibility_facilities');
			$("#dataset-pf-options-6").prop("checked", true);
			$scope.selectDatasetAnnexPFAdvanced('data_consistency_facilities');
			$("#dataset-pf-options-4").prop("checked", true);
			$scope.selectDatasetAnnexPFAdvanced('application_schema_facilities');
			$("#dataset-pf-options-3").prop("checked", true);
			$scope.selectDatasetAnnexPFAdvanced('gml_application_schemas_facilities');
		}
		if (datasetType == 'SR') {
			$scope.select.atLeastOneSR = 0;
			$("#dataset-sr-options-10").prop("checked", true);
			$scope.selectDatasetAnnexSRAdvanced('reference_systems_searegions');
			$("#dataset-sr-options-8").prop("checked", true);
			$scope.selectDatasetAnnexSRAdvanced('information_accessibility_searegions');
			$("#dataset-sr-options-6").prop("checked", true);
			$scope.selectDatasetAnnexSRAdvanced('data_consistency_searegions');
			$("#dataset-sr-options-4").prop("checked", true);
			$scope.selectDatasetAnnexSRAdvanced('application_schema_searegions');
			$("#dataset-sr-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSRAdvanced('gml_application_schemas_searegions');
		}
		if (datasetType == 'SO') {
			$scope.select.atLeastOneSO = 0;
			$("#dataset-so-options-10").prop("checked", true);
			$scope.selectDatasetAnnexSOAdvanced('reference_systems_soil');
			$("#dataset-so-options-8").prop("checked", true);
			$scope.selectDatasetAnnexSOAdvanced('information_accessibility_soil');
			$("#dataset-so-options-6").prop("checked", true);
			$scope.selectDatasetAnnexSOAdvanced('data_consistency_soil');
			$("#dataset-so-options-4").prop("checked", true);
			$scope.selectDatasetAnnexSOAdvanced('application_schema_soil');
			$("#dataset-so-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSOAdvanced('gml_application_schemas_soil');
		}
		if (datasetType == 'SD') {
			$scope.select.atLeastOneSD = 0;
			$("#dataset-sd-options-10").prop("checked", true);
			$scope.selectDatasetAnnexSDAdvanced('reference_systems_species');
			$("#dataset-sd-options-8").prop("checked", true);
			$scope.selectDatasetAnnexSDAdvanced('information_accessibility_species');
			$("#dataset-sd-options-6").prop("checked", true);
			$scope.selectDatasetAnnexSDAdvanced('data_consistency_species');
			$("#dataset-sd-options-4").prop("checked", true);
			$scope.selectDatasetAnnexSDAdvanced('application_schema_species');
			$("#dataset-sd-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSDAdvanced('gml_application_schemas_species');
		}
		if (datasetType == 'SUGRID') {
			$scope.select.atLeastOneSUGRID = 0;
			$("#dataset-sugrid-options-11").prop("checked", true);
			$scope.selectDatasetAnnexSUGRIDAdvanced('reference_systems_statistical');
			$("#dataset-sugrid-options-9").prop("checked", true);
			$scope.selectDatasetAnnexSUGRIDAdvanced('information_accessibility_statistical');
			$("#dataset-sugrid-options-7").prop("checked", true);
			$scope.selectDatasetAnnexSUGRIDAdvanced('data_consistency_statistical');
			$("#dataset-sugrid-options-5").prop("checked", true);
			$scope.selectDatasetAnnexSUGRIDAdvanced('application_schema_statistical_grid');
			$("#dataset-sugrid-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSUGRIDAdvanced('gml_application_schemas_statistical');
		}
		if (datasetType == 'SUVECTOR') {
			$scope.select.atLeastOneSUVECTOR = 0;
			$("#dataset-suvector-options-11").prop("checked", true);
			$scope.selectDatasetAnnexSUVECTORAdvanced('reference_systems_statistical');
			$("#dataset-suvector-options-9").prop("checked", true);
			$scope.selectDatasetAnnexSUVECTORAdvanced('information_accessibility_statistical');
			$("#dataset-suvector-options-7").prop("checked", true);
			$scope.selectDatasetAnnexSUVECTORAdvanced('data_consistency_statistical');
			$("#dataset-suvector-options-5").prop("checked", true);
			$scope.selectDatasetAnnexSUVECTORAdvanced('application_schema_statistical_vector');
			$("#dataset-suvector-options-3").prop("checked", true);
			$scope.selectDatasetAnnexSUVECTORAdvanced('gml_application_schemas_statistical');
		}
		if (datasetType == 'USASGS') {
			$scope.select.atLeastOneUSASGS = 0;
			$("#dataset-usasgs-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSASGSAdvanced('reference_systems_utility');
			$("#dataset-usasgs-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSASGSAdvanced('information_accessibility_utility');
			$("#dataset-usasgs-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSASGSAdvanced('data_consistency_utility');
			$("#dataset-usasgs-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSASGSAdvanced('application_schema_utility');
			$("#dataset-usasgs-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSASGSAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USEN') {
			$scope.select.atLeastOneUSEN = 0;
			$("#dataset-usen-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSENAdvanced('reference_systems_utility');
			$("#dataset-usen-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSENAdvanced('information_accessibility_utility');
			$("#dataset-usen-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSENAdvanced('data_consistency_utility');
			$("#dataset-usen-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSENAdvanced('application_schema_electricity');
			$("#dataset-usen-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSENAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USEMF') {
			$scope.select.atLeastOneUSEMF = 0;
			$("#dataset-usemf-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSEMFAdvanced('reference_systems_utility');
			$("#dataset-usemf-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSEMFAdvanced('information_accessibility_utility');
			$("#dataset-usemf-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSEMFAdvanced('data_consistency_utility');
			$("#dataset-usemf-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSEMFAdvanced('application_schema_environmental');
			$("#dataset-usemf-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSEMFAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USOGCN') {
			$scope.select.atLeastOneUSOGCN = 0;
			$("#dataset-usogcn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSOGCNAdvanced('reference_systems_utility');
			$("#dataset-usogcn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSOGCNAdvanced('information_accessibility_utility');
			$("#dataset-usogcn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSOGCNAdvanced('data_consistency_utility');
			$("#dataset-usogcn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSOGCNAdvanced('application_schema_oilgaschem');
			$("#dataset-usogcn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSOGCNAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USSN') {
			$scope.select.atLeastOneUSSN = 0;
			$("#dataset-ussn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSSNAdvanced('reference_systems_utility');
			$("#dataset-ussn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSSNAdvanced('information_accessibility_utility');
			$("#dataset-ussn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSSNAdvanced('data_consistency_utility');
			$("#dataset-ussn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSSNAdvanced('application_schema_sewer');
			$("#dataset-ussn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSSNAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USTN') {
			$scope.select.atLeastOneUSTN = 0;
			$("#dataset-ustn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSTNAdvanced('reference_systems_utility');
			$("#dataset-ustn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSTNAdvanced('information_accessibility_utility');
			$("#dataset-ustn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSTNAdvanced('data_consistency_utility');
			$("#dataset-ustn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSTNAdvanced('application_schema_thermal');
			$("#dataset-ustn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSTNAdvanced('gml_application_schemas_utility');
		}
		if (datasetType == 'USWN') {
			$scope.select.atLeastOneUSWN = 0;
			$("#dataset-uswn-options-11").prop("checked", true);
			$scope.selectDatasetAnnexUSWNAdvanced('reference_systems_utility');
			$("#dataset-uswn-options-9").prop("checked", true);
			$scope.selectDatasetAnnexUSWNAdvanced('information_accessibility_utility');
			$("#dataset-uswn-options-7").prop("checked", true);
			$scope.selectDatasetAnnexUSWNAdvanced('data_consistency_utility');
			$("#dataset-uswn-options-5").prop("checked", true);
			$scope.selectDatasetAnnexUSWNAdvanced('application_schema_water');
			$("#dataset-uswn-options-3").prop("checked", true);
			$scope.selectDatasetAnnexUSWNAdvanced('gml_application_schemas_utility');
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetCCSAdvanced = function(type) {
		$scope.select.datasetTypeAdvanced = type;
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ccs-options-1").prop("checked");
			$("#dataset-ccs-options-1").prop("checked", !currState);
		}
		if (type == 'data_consistency') {
			if ($("#dataset-ccs-options-2").prop("checked") == true) {
				$("#dataset-ccs-options-1").prop("checked", true);
			}
		}
		if (type == 'gml_application_schemas') {
			if ($("#dataset-ccs-options-3").prop("checked") == true) {
				$("#dataset-ccs-options-1").prop("checked", true);
			}
		}
		if (type == 'information_accessibility') {
			if ($("#dataset-ccs-options-4").prop("checked") == true) {
				$("#dataset-ccs-options-1").prop("checked", true);
			}
		}
		if (type == 'reference_systems') {
			if ($("#dataset-ccs-options-5").prop("checked") == true) {
				$("#dataset-ccs-options-1").prop("checked", true);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexADAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ad-options-1").prop("checked");
			$("#dataset-ad-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ad-options-2").prop("checked");
			$("#dataset-ad-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_addresses') {
			if ($("#dataset-ad-options-4").prop("checked") == true) {
				$("#dataset-ad-options-3").prop("checked", true);
			} else {
				$("#dataset-ad-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_addresses_simple') {
			if ($("#dataset-ad-options-4").prop("checked") == true) {
				$scope.select.atLeastOneAD++;
				$("#dataset-ad-options-3").prop("checked", true);
				$("#dataset-ad-options-2").prop("checked", true);
				$("#dataset-ad-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAD--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ad-options-5").prop("checked");
			$("#dataset-ad-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_addresses') {
			if ($("#dataset-ad-options-6").prop("checked") == true) {
				$scope.select.atLeastOneAD++;
				$("#dataset-ad-options-5").prop("checked", true);
				$("#dataset-ad-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAD--;
				$("#dataset-ad-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ad-options-7").prop("checked");
			$("#dataset-ad-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_addresses') {
			if ($("#dataset-ad-options-8").prop("checked") == true) {
				$scope.select.atLeastOneAD++;
				$("#dataset-ad-options-7").prop("checked", true);
				$("#dataset-ad-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAD--;
				$("#dataset-ad-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ad-options-9").prop("checked");
			$("#dataset-ad-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_addresses') {
			if ($("#dataset-ad-options-10").prop("checked") == true) {
				$scope.select.atLeastOneAD++;
				$("#dataset-ad-options-9").prop("checked", true);
				$("#dataset-ad-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAD--;
				$("#dataset-ad-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexAUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-au-options-1").prop("checked");
			$("#dataset-au-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-au-options-2").prop("checked");
			$("#dataset-au-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_adminunits') {
			if ($("#dataset-au-options-4").prop("checked") == true) {
				$("#dataset-au-options-3").prop("checked", true);
			} else {
				$("#dataset-au-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_adminunits') {
			if ($("#dataset-au-options-4").prop("checked") == true) {
				$scope.select.atLeastOneAU++;
				$("#dataset-au-options-3").prop("checked", true);
				$("#dataset-au-options-2").prop("checked", true);
				$("#dataset-au-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-au-options-5").prop("checked");
			$("#dataset-au-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_adminunits') {
			if ($("#dataset-au-options-6").prop("checked") == true) {
				$scope.select.atLeastOneAU++;
				$("#dataset-au-options-5").prop("checked", true);
				$("#dataset-au-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAU--;
				$("#dataset-au-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-au-options-7").prop("checked");
			$("#dataset-au-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_adminunits') {
			if ($("#dataset-au-options-8").prop("checked") == true) {
				$scope.select.atLeastOneAU++;
				$("#dataset-au-options-7").prop("checked", true);
				$("#dataset-au-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAU--;
				$("#dataset-au-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-au-options-9").prop("checked");
			$("#dataset-au-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_adminunits') {
			if ($("#dataset-au-options-10").prop("checked") == true) {
				$scope.select.atLeastOneAU++;
				$("#dataset-au-options-9").prop("checked", true);
				$("#dataset-au-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAU--;
				$("#dataset-au-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexMUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-mu-options-1").prop("checked");
			$("#dataset-mu-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-mu-options-2").prop("checked");
			$("#dataset-mu-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_adminunits') {
			if ($("#dataset-mu-options-4").prop("checked") == true) {
				$("#dataset-mu-options-3").prop("checked", true);
			} else {
				$("#dataset-mu-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_adminunits') {
			if ($("#dataset-mu-options-4").prop("checked") == true) {
				$scope.select.atLeastOneMU++;
				$("#dataset-mu-options-3").prop("checked", true);
				$("#dataset-mu-options-2").prop("checked", true);
				$("#dataset-mu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-mu-options-5").prop("checked");
			$("#dataset-mu-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_adminunits') {
			if ($("#dataset-mu-options-6").prop("checked") == true) {
				$scope.select.atLeastOneMU++;
				$("#dataset-mu-options-5").prop("checked", true);
				$("#dataset-mu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMU--;
				$("#dataset-mu-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-mu-options-7").prop("checked");
			$("#dataset-mu-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_adminunits') {
			if ($("#dataset-mu-options-8").prop("checked") == true) {
				$scope.select.atLeastOneMU++;
				$("#dataset-mu-options-7").prop("checked", true);
				$("#dataset-mu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMU--;
				$("#dataset-mu-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-mu-options-9").prop("checked");
			$("#dataset-mu-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_adminunits') {
			if ($("#dataset-mu-options-10").prop("checked") == true) {
				$scope.select.atLeastOneMU++;
				$("#dataset-mu-options-9").prop("checked", true);
				$("#dataset-mu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMU--;
				$("#dataset-mu-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexCPAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-cp-options-1").prop("checked");
			$("#dataset-cp-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-cp-options-2").prop("checked");
			$("#dataset-cp-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_cadastral') {
			if ($("#dataset-cp-options-4").prop("checked") == true) {
				$("#dataset-cp-options-3").prop("checked", true);
			} else {
				$("#dataset-cp-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_cadastral') {
			if ($("#dataset-cp-options-4").prop("checked") == true) {
				$scope.select.atLeastOneCP++;
				$("#dataset-cp-options-3").prop("checked", true);
				$("#dataset-cp-options-2").prop("checked", true);
				$("#dataset-cp-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCP--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-cp-options-5").prop("checked");
			$("#dataset-cp-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_cadastral') {
			if ($("#dataset-cp-options-6").prop("checked") == true) {
				$scope.select.atLeastOneCP++;
				$("#dataset-cp-options-5").prop("checked", true);
				$("#dataset-cp-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCP--;
				$("#dataset-cp-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ad-options-7").prop("checked");
			$("#dataset-cp-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_cadastral') {
			if ($("#dataset-cp-options-8").prop("checked") == true) {
				$scope.select.atLeastOneCP++;
				$("#dataset-cp-options-7").prop("checked", true);
				$("#dataset-cp-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCP--;
				$("#dataset-cp-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-cp-options-9").prop("checked");
			$("#dataset-cp-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_cadastral') {
			if ($("#dataset-cp-options-10").prop("checked") == true) {
				$scope.select.atLeastOneCP++;
				$("#dataset-cp-options-9").prop("checked", true);
				$("#dataset-cp-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCP--;
				$("#dataset-cp-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexGNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-gn-options-1").prop("checked");
			$("#dataset-gn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-gn-options-2").prop("checked");
			$("#dataset-gn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_geonames') {
			if ($("#dataset-gn-options-4").prop("checked") == true) {
				$("#dataset-gn-options-3").prop("checked", true);
			} else {
				$("#dataset-gn-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_geonames') {
			if ($("#dataset-gn-options-4").prop("checked") == true) {
				$scope.select.atLeastOneGN++;
				$("#dataset-gn-options-3").prop("checked", true);
				$("#dataset-gn-options-2").prop("checked", true);
				$("#dataset-gn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-gn-options-5").prop("checked");
			$("#dataset-gn-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_geonames') {
			if ($("#dataset-gn-options-6").prop("checked") == true) {
				$scope.select.atLeastOneGN++;
				$("#dataset-gn-options-5").prop("checked", true);
				$("#dataset-gn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGN--;
				$("#dataset-gn-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-gn-options-7").prop("checked");
			$("#dataset-gn-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_geonames') {
			if ($("#dataset-gn-options-8").prop("checked") == true) {
				$scope.select.atLeastOneGN++;
				$("#dataset-gn-options-7").prop("checked", true);
				$("#dataset-gn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGN--;
				$("#dataset-gn-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-gn-options-9").prop("checked");
			$("#dataset-gn-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_geonames') {
			if ($("#dataset-gn-options-10").prop("checked") == true) {
				$scope.select.atLeastOneGN++;
				$("#dataset-gn-options-9").prop("checked", true);
				$("#dataset-gn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGN--;
				$("#dataset-gn-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexHNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-hn-options-1").prop("checked");
			$("#dataset-hn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-hn-options-2").prop("checked");
			$("#dataset-hn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_hydro') {
			if ($("#dataset-hn-options-4").prop("checked") == true) {
				$("#dataset-hn-options-3").prop("checked", true);
			} else {
				$("#dataset-hn-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_hydro') {
			if ($("#dataset-hn-options-4").prop("checked") == true) {
				$scope.select.atLeastOneHN++;
				$("#dataset-hn-options-3").prop("checked", true);
				$("#dataset-hn-options-2").prop("checked", true);
				$("#dataset-hn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-hn-options-5").prop("checked");
			$("#dataset-hn-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_hydro') {
			if ($("#dataset-hn-options-6").prop("checked") == true) {
				$scope.select.atLeastOneHN++;
				$("#dataset-hn-options-5").prop("checked", true);
				$("#dataset-hn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHN--;
				$("#dataset-hn-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-hn-options-7").prop("checked");
			$("#dataset-hn-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_hydro') {
			if ($("#dataset-hn-options-8").prop("checked") == true) {
				$scope.select.atLeastOneHN++;
				$("#dataset-hn-options-7").prop("checked", true);
				$("#dataset-hn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHN--;
				$("#dataset-hn-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-hn-options-9").prop("checked");
			$("#dataset-hn-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_hydro') {
			if ($("#dataset-hn-options-10").prop("checked") == true) {
				$scope.select.atLeastOneHN++;
				$("#dataset-hn-options-9").prop("checked", true);
				$("#dataset-hn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHN--;
				$("#dataset-hn-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexHPWAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-hpw-options-1").prop("checked");
			$("#dataset-hpw-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-hpw-options-2").prop("checked");
			$("#dataset-hpw-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_hydrowater') {
			if ($("#dataset-hpw-options-4").prop("checked") == true) {
				$("#dataset-hpw-options-3").prop("checked", true);
			} else {
				$("#dataset-hpw-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_hydrowater') {
			if ($("#dataset-hpw-options-4").prop("checked") == true) {
				$scope.select.atLeastOneHPW++;
				$("#dataset-hpw-options-3").prop("checked", true);
				$("#dataset-hpw-options-2").prop("checked", true);
				$("#dataset-hpw-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHPW--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-hpw-options-5").prop("checked");
			$("#dataset-hpw-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_hydrowater') {
			if ($("#dataset-hpw-options-6").prop("checked") == true) {
				$scope.select.atLeastOneHPW++;
				$("#dataset-hpw-options-5").prop("checked", true);
				$("#dataset-hpw-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHPW--;
				$("#dataset-hpw-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-hpw-options-7").prop("checked");
			$("#dataset-hpw-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_hydrowater') {
			if ($("#dataset-hpw-options-8").prop("checked") == true) {
				$scope.select.atLeastOneHPW++;
				$("#dataset-hpw-options-7").prop("checked", true);
				$("#dataset-hpw-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHPW--;
				$("#dataset-hpw-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-hpw-options-9").prop("checked");
			$("#dataset-hpw-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_hydrowater') {
			if ($("#dataset-hpw-options-10").prop("checked") == true) {
				$scope.select.atLeastOneHPW++;
				$("#dataset-hpw-options-9").prop("checked", true);
				$("#dataset-hpw-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHPW--;
				$("#dataset-hpw-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexPSAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ps-options-1").prop("checked");
			$("#dataset-ps-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ps-options-2").prop("checked");
			$("#dataset-ps-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_protsites') {
			if ($("#dataset-ps-options-4").prop("checked") == true) {
				$("#dataset-ps-options-3").prop("checked", true);
			} else {
				$("#dataset-ps-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_protsites') {
			if ($("#dataset-ps-options-4").prop("checked") == true) {
				$scope.select.atLeastOnePS++;
				$("#dataset-ps-options-3").prop("checked", true);
				$("#dataset-ps-options-2").prop("checked", true);
				$("#dataset-ps-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePS--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ps-options-5").prop("checked");
			$("#dataset-ps-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_protsites') {
			if ($("#dataset-ps-options-6").prop("checked") == true) {
				$scope.select.atLeastOnePS++;
				$("#dataset-ps-options-5").prop("checked", true);
				$("#dataset-ps-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePS--;
				$("#dataset-ps-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ps-options-7").prop("checked");
			$("#dataset-ps-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_protsites') {
			if ($("#dataset-ps-options-8").prop("checked") == true) {
				$scope.select.atLeastOnePS++;
				$("#dataset-ps-options-7").prop("checked", true);
				$("#dataset-ps-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePS--;
				$("#dataset-ps-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ps-options-9").prop("checked");
			$("#dataset-ps-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_protsites') {
			if ($("#dataset-ps-options-10").prop("checked") == true) {
				$scope.select.atLeastOnePS++;
				$("#dataset-ps-options-9").prop("checked", true);
				$("#dataset-ps-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePS--;
				$("#dataset-ps-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexATNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-atn-options-1").prop("checked");
			$("#dataset-atn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-atn-options-2").prop("checked");
			$("#dataset-atn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_transport') {
			var currState = $("#dataset-atn-options-3").prop("checked");
			$("#dataset-atn-options-3").prop("checked", true);
			$("#dataset-atn-options-2").prop("checked", true);
			$("#dataset-atn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_transport') {
			console.log($("#dataset-atn-options-4").prop("checked"));
			if ($("#dataset-atn-options-5").prop("checked") == false) {
				if ($("#dataset-atn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneATN++;
					$("#dataset-atn-options-3").prop("checked", true);
					$("#dataset-atn-options-2").prop("checked", true);
					$("#dataset-atn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneATN--;
					$("#dataset-atn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-atn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_airtransport') {
			if ($("#dataset-atn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneATN++;
				$("#dataset-atn-options-4").prop("checked", true);
				$("#dataset-atn-options-3").prop("checked", true);
				$("#dataset-atn-options-2").prop("checked", true);
				$("#dataset-atn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneATN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-atn-options-6").prop("checked");
			$("#dataset-atn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_transport') {
			if ($("#dataset-atn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneATN++;
				$("#dataset-atn-options-6").prop("checked", true);
				$("#dataset-atn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneATN--;
				$("#dataset-atn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-atn-options-8").prop("checked");
			$("#dataset-atn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_transport') {
			if ($("#dataset-atn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneATN++;
				$("#dataset-atn-options-8").prop("checked", true);
				$("#dataset-atn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneATN--;
				$("#dataset-atn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-atn-options-10").prop("checked");
			$("#dataset-atn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_transport') {
			if ($("#dataset-atn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneATN++;
				$("#dataset-atn-options-10").prop("checked", true);
				$("#dataset-atn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneATN--;
				$("#dataset-atn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexCTNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ctn-options-1").prop("checked");
			$("#dataset-ctn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ctn-options-2").prop("checked");
			$("#dataset-ctn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_transport') {
			var currState = $("#dataset-ctn-options-3").prop("checked");
			$("#dataset-ctn-options-3").prop("checked", true);
			$("#dataset-ctn-options-2").prop("checked", true);
			$("#dataset-ctn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_transport') {
			console.log($("#dataset-ctn-options-4").prop("checked"));
			if ($("#dataset-ctn-options-5").prop("checked") == false) {
				if ($("#dataset-ctn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneCTN++;
					$("#dataset-ctn-options-3").prop("checked", true);
					$("#dataset-ctn-options-2").prop("checked", true);
					$("#dataset-ctn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneCTN--;
					$("#dataset-ctn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ctn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_cabletransport') {
			if ($("#dataset-ctn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneCTN++;
				$("#dataset-ctn-options-4").prop("checked", true);
				$("#dataset-ctn-options-3").prop("checked", true);
				$("#dataset-ctn-options-2").prop("checked", true);
				$("#dataset-ctn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCTN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ctn-options-6").prop("checked");
			$("#dataset-ctn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_transport') {
			if ($("#dataset-ctn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneCTN++;
				$("#dataset-ctn-options-6").prop("checked", true);
				$("#dataset-ctn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCTN--;
				$("#dataset-ctn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ctn-options-8").prop("checked");
			$("#dataset-ctn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_transport') {
			if ($("#dataset-ctn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneCTN++;
				$("#dataset-ctn-options-8").prop("checked", true);
				$("#dataset-ctn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCTN--;
				$("#dataset-ctn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ctn-options-10").prop("checked");
			$("#dataset-ctn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_transport') {
			if ($("#dataset-ctn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneCTN++;
				$("#dataset-ctn-options-10").prop("checked", true);
				$("#dataset-ctn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneCTN--;
				$("#dataset-ctn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexRATNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ratn-options-1").prop("checked");
			$("#dataset-ratn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ratn-options-2").prop("checked");
			$("#dataset-ratn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_transport') {
			var currState = $("#dataset-ratn-options-3").prop("checked");
			$("#dataset-ratn-options-3").prop("checked", true);
			$("#dataset-ratn-options-2").prop("checked", true);
			$("#dataset-ratn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_transport') {
			console.log($("#dataset-ratn-options-4").prop("checked"));
			if ($("#dataset-ratn-options-5").prop("checked") == false) {
				if ($("#dataset-ratn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneRATN++;
					$("#dataset-ratn-options-3").prop("checked", true);
					$("#dataset-ratn-options-2").prop("checked", true);
					$("#dataset-ratn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneRATN--;
					$("#dataset-ratn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ratn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_railtransport') {
			if ($("#dataset-ratn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneRATN++;
				$("#dataset-ratn-options-4").prop("checked", true);
				$("#dataset-ratn-options-3").prop("checked", true);
				$("#dataset-ratn-options-2").prop("checked", true);
				$("#dataset-ratn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneRATN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ratn-options-6").prop("checked");
			$("#dataset-ratn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_transport') {
			if ($("#dataset-ratn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneRATN++;
				$("#dataset-ratn-options-6").prop("checked", true);
				$("#dataset-ratn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneRATN--;
				$("#dataset-ratn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ratn-options-8").prop("checked");
			$("#dataset-ratn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_transport') {
			if ($("#dataset-ratn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneRATN++;
				$("#dataset-ratn-options-8").prop("checked", true);
				$("#dataset-ratn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneRATN--;
				$("#dataset-ratn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ratn-options-10").prop("checked");
			$("#dataset-ratn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_transport') {
			if ($("#dataset-ratn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneRATN++;
				$("#dataset-ratn-options-10").prop("checked", true);
				$("#dataset-ratn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneRATN--;
				$("#dataset-ratn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexROTNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-rotn-options-1").prop("checked");
			$("#dataset-rotn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-rotn-options-2").prop("checked");
			$("#dataset-rotn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_transport') {
			var currState = $("#dataset-rotn-options-3").prop("checked");
			$("#dataset-rotn-options-3").prop("checked", true);
			$("#dataset-rotn-options-2").prop("checked", true);
			$("#dataset-rotn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_transport') {
			console.log($("#dataset-rotn-options-4").prop("checked"));
			if ($("#dataset-rotn-options-5").prop("checked") == false) {
				if ($("#dataset-rotn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneROTN++;
					$("#dataset-rotn-options-3").prop("checked", true);
					$("#dataset-rotn-options-2").prop("checked", true);
					$("#dataset-rotn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneROTN--;
					$("#dataset-rotn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-rotn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_roadtransport') {
			if ($("#dataset-rotn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneROTN++;
				$("#dataset-rotn-options-4").prop("checked", true);
				$("#dataset-rotn-options-3").prop("checked", true);
				$("#dataset-rotn-options-2").prop("checked", true);
				$("#dataset-rotn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneROTN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-rotn-options-6").prop("checked");
			$("#dataset-rotn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_transport') {
			if ($("#dataset-rotn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneROTN++;
				$("#dataset-rotn-options-6").prop("checked", true);
				$("#dataset-rotn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneROTN--;
				$("#dataset-rotn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-rotn-options-8").prop("checked");
			$("#dataset-rotn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_transport') {
			if ($("#dataset-rotn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneROTN++;
				$("#dataset-rotn-options-8").prop("checked", true);
				$("#dataset-rotn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneROTN--;
				$("#dataset-rotn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-rotn-options-10").prop("checked");
			$("#dataset-rotn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_transport') {
			if ($("#dataset-rotn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneROTN++;
				$("#dataset-rotn-options-10").prop("checked", true);
				$("#dataset-rotn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneROTN--;
				$("#dataset-rotn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexWTNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-wtn-options-1").prop("checked");
			$("#dataset-wtn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-wtn-options-2").prop("checked");
			$("#dataset-wtn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_transport') {
			var currState = $("#dataset-wtn-options-3").prop("checked");
			$("#dataset-wtn-options-3").prop("checked", true);
			$("#dataset-wtn-options-2").prop("checked", true);
			$("#dataset-wtn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_transport') {
			console.log($("#dataset-wtn-options-4").prop("checked"));
			if ($("#dataset-wtn-options-5").prop("checked") == false) {
				if ($("#dataset-wtn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneWTN++;
					$("#dataset-wtn-options-3").prop("checked", true);
					$("#dataset-wtn-options-2").prop("checked", true);
					$("#dataset-wtn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneWTN--;
					$("#dataset-wtn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-wtn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_watertransport') {
			if ($("#dataset-wtn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneWTN++;
				$("#dataset-wtn-options-4").prop("checked", true);
				$("#dataset-wtn-options-3").prop("checked", true);
				$("#dataset-wtn-options-2").prop("checked", true);
				$("#dataset-wtn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneWTN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-wtn-options-6").prop("checked");
			$("#dataset-wtn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_transport') {
			if ($("#dataset-wtn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneWTN++;
				$("#dataset-wtn-options-6").prop("checked", true);
				$("#dataset-wtn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneWTN--;
				$("#dataset-wtn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-wtn-options-8").prop("checked");
			$("#dataset-wtn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_transport') {
			if ($("#dataset-wtn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneWTN++;
				$("#dataset-wtn-options-8").prop("checked", true);
				$("#dataset-wtn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneWTN--;
				$("#dataset-wtn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-wtn-options-10").prop("checked");
			$("#dataset-wtn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_transport') {
			if ($("#dataset-wtn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneWTN++;
				$("#dataset-wtn-options-10").prop("checked", true);
				$("#dataset-wtn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneWTN--;
				$("#dataset-wtn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexEGCAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-egc-options-1").prop("checked");
			$("#dataset-egc-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-egc-options-2").prop("checked");
			$("#dataset-egc-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_elevation') {
			var currState = $("#dataset-egc-options-3").prop("checked");
			$("#dataset-egc-options-3").prop("checked", true);
			$("#dataset-egc-options-2").prop("checked", true);
			$("#dataset-egc-options-1").prop("checked", true);
		}
		if (type == 'application_schema_elevationbase') {
			console.log($("#dataset-egc-options-4").prop("checked"));
			if ($("#dataset-egc-options-5").prop("checked") == false) {
				if ($("#dataset-egc-options-4").prop("checked") == true) {
					$scope.select.atLeastOneEGC++;
					$("#dataset-egc-options-3").prop("checked", true);
					$("#dataset-egc-options-2").prop("checked", true);
					$("#dataset-egc-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneEGC--;
					$("#dataset-egc-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-egc-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_elevationgrid') {
			if ($("#dataset-egc-options-5").prop("checked") == true) {
				$scope.select.atLeastOneEGC++;
				$("#dataset-egc-options-4").prop("checked", true);
				$("#dataset-egc-options-3").prop("checked", true);
				$("#dataset-egc-options-2").prop("checked", true);
				$("#dataset-egc-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEGC--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-egc-options-6").prop("checked");
			$("#dataset-egc-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_elevation') {
			if ($("#dataset-egc-options-7").prop("checked") == true) {
				$scope.select.atLeastOneEGC++;
				$("#dataset-egc-options-6").prop("checked", true);
				$("#dataset-egc-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEGC--;
				$("#dataset-egc-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-egc-options-8").prop("checked");
			$("#dataset-egc-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_elevation') {
			if ($("#dataset-egc-options-9").prop("checked") == true) {
				$scope.select.atLeastOneEGC++;
				$("#dataset-egc-options-8").prop("checked", true);
				$("#dataset-egc-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEGC--;
				$("#dataset-egc-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-egc-options-10").prop("checked");
			$("#dataset-egc-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_elevation') {
			if ($("#dataset-egc-options-11").prop("checked") == true) {
				$scope.select.atLeastOneEGC++;
				$("#dataset-egc-options-10").prop("checked", true);
				$("#dataset-egc-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEGC--;
				$("#dataset-egc-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexETINAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-etin-options-1").prop("checked");
			$("#dataset-etin-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-etin-options-2").prop("checked");
			$("#dataset-etin-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_elevation') {
			var currState = $("#dataset-etin-options-3").prop("checked");
			$("#dataset-etin-options-3").prop("checked", true);
			$("#dataset-etin-options-2").prop("checked", true);
			$("#dataset-etin-options-1").prop("checked", true);
		}
		if (type == 'application_schema_elevationbase') {
			console.log($("#dataset-etin-options-4").prop("checked"));
			if ($("#dataset-etin-options-5").prop("checked") == false) {
				if ($("#dataset-etin-options-4").prop("checked") == true) {
					$scope.select.atLeastOneETIN++;
					$("#dataset-etin-options-3").prop("checked", true);
					$("#dataset-etin-options-2").prop("checked", true);
					$("#dataset-etin-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneETIN--;
					$("#dataset-etin-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-etin-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_elevationtin') {
			if ($("#dataset-etin-options-5").prop("checked") == true) {
				$scope.select.atLeastOneETIN++;
				$("#dataset-etin-options-4").prop("checked", true);
				$("#dataset-etin-options-3").prop("checked", true);
				$("#dataset-etin-options-2").prop("checked", true);
				$("#dataset-etin-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneETIN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-etin-options-6").prop("checked");
			$("#dataset-etin-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_elevation') {
			if ($("#dataset-etin-options-7").prop("checked") == true) {
				$scope.select.atLeastOneETIN++;
				$("#dataset-etin-options-6").prop("checked", true);
				$("#dataset-etin-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneETIN--;
				$("#dataset-etin-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-etin-options-8").prop("checked");
			$("#dataset-etin-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_elevation') {
			if ($("#dataset-etin-options-9").prop("checked") == true) {
				$scope.select.atLeastOneETIN++;
				$("#dataset-etin-options-8").prop("checked", true);
				$("#dataset-etin-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneETIN--;
				$("#dataset-etin-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-etin-options-10").prop("checked");
			$("#dataset-etin-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_elevation') {
			if ($("#dataset-etin-options-11").prop("checked") == true) {
				$scope.select.atLeastOneETIN++;
				$("#dataset-etin-options-10").prop("checked", true);
				$("#dataset-etin-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneETIN--;
				$("#dataset-etin-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexEVEAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-eve-options-1").prop("checked");
			$("#dataset-eve-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-eve-options-2").prop("checked");
			$("#dataset-eve-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_elevation') {
			var currState = $("#dataset-eve-options-3").prop("checked");
			$("#dataset-eve-options-3").prop("checked", true);
			$("#dataset-eve-options-2").prop("checked", true);
			$("#dataset-eve-options-1").prop("checked", true);
		}
		if (type == 'application_schema_elevationbase') {
			console.log($("#dataset-eve-options-4").prop("checked"));
			if ($("#dataset-eve-options-5").prop("checked") == false) {
				if ($("#dataset-eve-options-4").prop("checked") == true) {
					$scope.select.atLeastOneEVE++;
					$("#dataset-eve-options-3").prop("checked", true);
					$("#dataset-eve-options-2").prop("checked", true);
					$("#dataset-eve-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneEVE--;
					$("#dataset-eve-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-eve-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_elevationvector') {
			if ($("#dataset-eve-options-5").prop("checked") == true) {
				$scope.select.atLeastOneEVE++;
				$("#dataset-eve-options-4").prop("checked", true);
				$("#dataset-eve-options-3").prop("checked", true);
				$("#dataset-eve-options-2").prop("checked", true);
				$("#dataset-eve-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEVE--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-eve-options-6").prop("checked");
			$("#dataset-eve-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_elevation') {
			if ($("#dataset-eve-options-7").prop("checked") == true) {
				$scope.select.atLeastOneEVE++;
				$("#dataset-eve-options-6").prop("checked", true);
				$("#dataset-eve-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEVE--;
				$("#dataset-eve-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-eve-options-8").prop("checked");
			$("#dataset-eve-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_elevation') {
			if ($("#dataset-eve-options-9").prop("checked") == true) {
				$scope.select.atLeastOneEVE++;
				$("#dataset-eve-options-8").prop("checked", true);
				$("#dataset-eve-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEVE--;
				$("#dataset-eve-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-eve-options-10").prop("checked");
			$("#dataset-eve-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_elevation') {
			if ($("#dataset-eve-options-11").prop("checked") == true) {
				$scope.select.atLeastOneEVE++;
				$("#dataset-eve-options-10").prop("checked", true);
				$("#dataset-eve-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEVE--;
				$("#dataset-eve-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexGEAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ge-options-1").prop("checked");
			$("#dataset-ge-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ge-options-2").prop("checked");
			$("#dataset-ge-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_geology') {
			if ($("#dataset-ge-options-4").prop("checked") == true) {
				$("#dataset-ge-options-3").prop("checked", true);
			} else {
				$("#dataset-ge-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_geology') {
			if ($("#dataset-ge-options-4").prop("checked") == true) {
				$scope.select.atLeastOneGE++;
				$("#dataset-ge-options-3").prop("checked", true);
				$("#dataset-ge-options-2").prop("checked", true);
				$("#dataset-ge-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGE--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ge-options-5").prop("checked");
			$("#dataset-ge-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_geology') {
			if ($("#dataset-ge-options-6").prop("checked") == true) {
				$scope.select.atLeastOneGE++;
				$("#dataset-ge-options-5").prop("checked", true);
				$("#dataset-ge-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGE--;
				$("#dataset-ge-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ge-options-7").prop("checked");
			$("#dataset-ge-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_geology') {
			if ($("#dataset-ge-options-8").prop("checked") == true) {
				$scope.select.atLeastOneGE++;
				$("#dataset-ge-options-7").prop("checked", true);
				$("#dataset-ge-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGE--;
				$("#dataset-ge-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ge-options-9").prop("checked");
			$("#dataset-ge-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_geology') {
			if ($("#dataset-ge-options-10").prop("checked") == true) {
				$scope.select.atLeastOneGE++;
				$("#dataset-ge-options-9").prop("checked", true);
				$("#dataset-ge-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGE--;
				$("#dataset-ge-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexGEOAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-geo-options-1").prop("checked");
			$("#dataset-geo-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-geo-options-2").prop("checked");
			$("#dataset-geo-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_geology') {
			if ($("#dataset-geo-options-4").prop("checked") == true) {
				$("#dataset-geo-options-3").prop("checked", true);
			} else {
				$("#dataset-geo-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_geophysics') {
			if ($("#dataset-geo-options-4").prop("checked") == true) {
				$scope.select.atLeastOneGEO++;
				$("#dataset-geo-options-3").prop("checked", true);
				$("#dataset-geo-options-2").prop("checked", true);
				$("#dataset-geo-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGEO--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-geo-options-5").prop("checked");
			$("#dataset-geo-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_geology') {
			if ($("#dataset-geo-options-6").prop("checked") == true) {
				$scope.select.atLeastOneGEO++;
				$("#dataset-geo-options-5").prop("checked", true);
				$("#dataset-geo-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGEO--;
				$("#dataset-geo-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-geo-options-7").prop("checked");
			$("#dataset-geo-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_geology') {
			if ($("#dataset-geo-options-8").prop("checked") == true) {
				$scope.select.atLeastOneGEO++;
				$("#dataset-geo-options-7").prop("checked", true);
				$("#dataset-geo-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGEO--;
				$("#dataset-geo-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-geo-options-9").prop("checked");
			$("#dataset-geo-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_geology') {
			if ($("#dataset-geo-options-10").prop("checked") == true) {
				$scope.select.atLeastOneGEO++;
				$("#dataset-geo-options-9").prop("checked", true);
				$("#dataset-geo-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGEO--;
				$("#dataset-geo-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexHYDAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-hyd-options-1").prop("checked");
			$("#dataset-hyd-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-hyd-options-2").prop("checked");
			$("#dataset-hyd-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_geology') {
			if ($("#dataset-hyd-options-4").prop("checked") == true) {
				$("#dataset-hyd-options-3").prop("checked", true);
			} else {
				$("#dataset-hyd-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_hydrogeology') {
			if ($("#dataset-hyd-options-4").prop("checked") == true) {
				$scope.select.atLeastOneHYD++;
				$("#dataset-hyd-options-3").prop("checked", true);
				$("#dataset-hyd-options-2").prop("checked", true);
				$("#dataset-hyd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHYD--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-hyd-options-5").prop("checked");
			$("#dataset-hyd-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_geology') {
			if ($("#dataset-hyd-options-6").prop("checked") == true) {
				$scope.select.atLeastOneHYD++;
				$("#dataset-hyd-options-5").prop("checked", true);
				$("#dataset-hyd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHYD--;
				$("#dataset-hyd-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-hyd-options-7").prop("checked");
			$("#dataset-hyd-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_geology') {
			if ($("#dataset-hyd-options-8").prop("checked") == true) {
				$scope.select.atLeastOneHYD++;
				$("#dataset-hyd-options-7").prop("checked", true);
				$("#dataset-hyd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHYD--;
				$("#dataset-hyd-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-hyd-options-9").prop("checked");
			$("#dataset-hyd-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_geology') {
			if ($("#dataset-hyd-options-10").prop("checked") == true) {
				$scope.select.atLeastOneHYD++;
				$("#dataset-hyd-options-9").prop("checked", true);
				$("#dataset-hyd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHYD--;
				$("#dataset-hyd-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}




	$scope.selectDatasetAnnexLCRAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-lcr-options-1").prop("checked");
			$("#dataset-lcr-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-lcr-options-2").prop("checked");
			$("#dataset-lcr-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landcover') {
			var currState = $("#dataset-lcr-options-3").prop("checked");
			$("#dataset-lcr-options-3").prop("checked", true);
			$("#dataset-lcr-options-2").prop("checked", true);
			$("#dataset-lcr-options-1").prop("checked", true);
		}
		if (type == 'application_schema_landcover_nomenclature') {
			console.log($("#dataset-lcr-options-4").prop("checked"));
			if ($("#dataset-lcr-options-5").prop("checked") == false) {
				if ($("#dataset-lcr-options-4").prop("checked") == true) {
					$scope.select.atLeastOneLCR++;
					$("#dataset-lcr-options-3").prop("checked", true);
					$("#dataset-lcr-options-2").prop("checked", true);
					$("#dataset-lcr-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneLCR--;
					$("#dataset-lcr-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-lcr-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_landcover_raster') {
			if ($("#dataset-lcr-options-5").prop("checked") == true) {
				$scope.select.atLeastOneLCR++;
				$("#dataset-lcr-options-4").prop("checked", true);
				$("#dataset-lcr-options-3").prop("checked", true);
				$("#dataset-lcr-options-2").prop("checked", true);
				$("#dataset-lcr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCR--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-lcr-options-6").prop("checked");
			$("#dataset-lcr-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_landcover') {
			if ($("#dataset-lcr-options-7").prop("checked") == true) {
				$scope.select.atLeastOneLCR++;
				$("#dataset-lcr-options-6").prop("checked", true);
				$("#dataset-lcr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCR--;
				$("#dataset-lcr-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-lcr-options-8").prop("checked");
			$("#dataset-lcr-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landcover') {
			if ($("#dataset-lcr-options-9").prop("checked") == true) {
				$scope.select.atLeastOneLCR++;
				$("#dataset-lcr-options-8").prop("checked", true);
				$("#dataset-lcr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCR--;
				$("#dataset-lcr-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-lcr-options-10").prop("checked");
			$("#dataset-lcr-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_landcover') {
			if ($("#dataset-lcr-options-11").prop("checked") == true) {
				$scope.select.atLeastOneLCR++;
				$("#dataset-lcr-options-10").prop("checked", true);
				$("#dataset-lcr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCR--;
				$("#dataset-lcr-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexLCVAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-lcv-options-1").prop("checked");
			$("#dataset-lcv-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-lcv-options-2").prop("checked");
			$("#dataset-lcv-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landcover') {
			var currState = $("#dataset-lcv-options-3").prop("checked");
			$("#dataset-lcv-options-3").prop("checked", true);
			$("#dataset-lcv-options-2").prop("checked", true);
			$("#dataset-lcv-options-1").prop("checked", true);
		}
		if (type == 'application_schema_landcover_nomenclature') {
			console.log($("#dataset-lcv-options-4").prop("checked"));
			if ($("#dataset-lcv-options-5").prop("checked") == false) {
				if ($("#dataset-lcv-options-4").prop("checked") == true) {
					$scope.select.atLeastOneLCV++;
					$("#dataset-lcv-options-3").prop("checked", true);
					$("#dataset-lcv-options-2").prop("checked", true);
					$("#dataset-lcv-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneLCV--;
					$("#dataset-lcv-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-lcv-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_landcover_vector') {
			if ($("#dataset-lcv-options-5").prop("checked") == true) {
				$scope.select.atLeastOneLCV++;
				$("#dataset-lcv-options-4").prop("checked", true);
				$("#dataset-lcv-options-3").prop("checked", true);
				$("#dataset-lcv-options-2").prop("checked", true);
				$("#dataset-lcv-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCV--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-lcv-options-6").prop("checked");
			$("#dataset-lcv-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_landcover') {
			if ($("#dataset-lcv-options-7").prop("checked") == true) {
				$scope.select.atLeastOneLCV++;
				$("#dataset-lcv-options-6").prop("checked", true);
				$("#dataset-lcv-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCV--;
				$("#dataset-lcv-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-lcv-options-8").prop("checked");
			$("#dataset-lcv-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landcover') {
			if ($("#dataset-lcv-options-9").prop("checked") == true) {
				$scope.select.atLeastOneLCV++;
				$("#dataset-lcv-options-8").prop("checked", true);
				$("#dataset-lcv-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCV--;
				$("#dataset-lcv-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-lcv-options-10").prop("checked");
			$("#dataset-lcv-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_landcover') {
			if ($("#dataset-lcv-options-11").prop("checked") == true) {
				$scope.select.atLeastOneLCV++;
				$("#dataset-lcv-options-10").prop("checked", true);
				$("#dataset-lcv-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneLCV--;
				$("#dataset-lcv-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexOIAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-oi-options-1").prop("checked");
			$("#dataset-oi-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-oi-options-2").prop("checked");
			$("#dataset-oi-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_orthoimagery') {
			if ($("#dataset-oi-options-4").prop("checked") == true) {
				$("#dataset-oi-options-3").prop("checked", true);
			} else {
				$("#dataset-oi-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_orthoimagery') {
			if ($("#dataset-oi-options-4").prop("checked") == true) {
				$scope.select.atLeastOneOI++;
				$("#dataset-oi-options-3").prop("checked", true);
				$("#dataset-oi-options-2").prop("checked", true);
				$("#dataset-oi-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOI--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-oi-options-5").prop("checked");
			$("#dataset-oi-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_orthoimagery') {
			if ($("#dataset-oi-options-6").prop("checked") == true) {
				$scope.select.atLeastOneOI++;
				$("#dataset-oi-options-5").prop("checked", true);
				$("#dataset-oi-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOI--;
				$("#dataset-oi-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-oi-options-7").prop("checked");
			$("#dataset-oi-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_orthoimagery') {
			if ($("#dataset-oi-options-8").prop("checked") == true) {
				$scope.select.atLeastOneOI++;
				$("#dataset-oi-options-7").prop("checked", true);
				$("#dataset-oi-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOI--;
				$("#dataset-oi-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-oi-options-9").prop("checked");
			$("#dataset-oi-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_orthoimagery') {
			if ($("#dataset-oi-options-10").prop("checked") == true) {
				$scope.select.atLeastOneOI++;
				$("#dataset-oi-options-9").prop("checked", true);
				$("#dataset-oi-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOI--;
				$("#dataset-oi-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexAFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-af-options-1").prop("checked");
			$("#dataset-af-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-af-options-2").prop("checked");
			$("#dataset-af-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_agricultural') {
			if ($("#dataset-af-options-4").prop("checked") == true) {
				$("#dataset-af-options-3").prop("checked", true);
			} else {
				$("#dataset-af-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_agricultural') {
			if ($("#dataset-af-options-4").prop("checked") == true) {
				$scope.select.atLeastOneAF++;
				$("#dataset-af-options-3").prop("checked", true);
				$("#dataset-af-options-2").prop("checked", true);
				$("#dataset-af-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-af-options-5").prop("checked");
			$("#dataset-af-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_agricultural') {
			if ($("#dataset-af-options-6").prop("checked") == true) {
				$scope.select.atLeastOneAF++;
				$("#dataset-af-options-5").prop("checked", true);
				$("#dataset-af-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAF--;
				$("#dataset-af-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-af-options-7").prop("checked");
			$("#dataset-af-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_agricultural') {
			if ($("#dataset-af-options-8").prop("checked") == true) {
				$scope.select.atLeastOneAF++;
				$("#dataset-af-options-7").prop("checked", true);
				$("#dataset-af-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAF--;
				$("#dataset-af-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-af-options-9").prop("checked");
			$("#dataset-af-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_agricultural') {
			if ($("#dataset-af-options-10").prop("checked") == true) {
				$scope.select.atLeastOneAF++;
				$("#dataset-af-options-9").prop("checked", true);
				$("#dataset-af-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAF--;
				$("#dataset-af-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexAMAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-am-options-1").prop("checked");
			$("#dataset-am-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-am-options-2").prop("checked");
			$("#dataset-am-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_areamanagement') {
			if ($("#dataset-am-options-4").prop("checked") == true) {
				$("#dataset-am-options-3").prop("checked", true);
			} else {
				$("#dataset-am-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_areamanagement') {
			if ($("#dataset-am-options-4").prop("checked") == true) {
				$scope.select.atLeastOneAM++;
				$("#dataset-am-options-3").prop("checked", true);
				$("#dataset-am-options-2").prop("checked", true);
				$("#dataset-am-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAM--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-am-options-5").prop("checked");
			$("#dataset-am-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_areamanagement') {
			if ($("#dataset-am-options-6").prop("checked") == true) {
				$scope.select.atLeastOneAM++;
				$("#dataset-am-options-5").prop("checked", true);
				$("#dataset-am-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAM--;
				$("#dataset-am-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-am-options-7").prop("checked");
			$("#dataset-am-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_areamanagement') {
			if ($("#dataset-am-options-8").prop("checked") == true) {
				$scope.select.atLeastOneAM++;
				$("#dataset-am-options-7").prop("checked", true);
				$("#dataset-am-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAM--;
				$("#dataset-am-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-am-options-9").prop("checked");
			$("#dataset-am-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_areamanagement') {
			if ($("#dataset-am-options-10").prop("checked") == true) {
				$scope.select.atLeastOneAM++;
				$("#dataset-am-options-9").prop("checked", true);
				$("#dataset-am-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneAM--;
				$("#dataset-am-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexACMFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-acmf-options-1").prop("checked");
			$("#dataset-acmf-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-acmf-options-2").prop("checked");
			$("#dataset-acmf-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_atmospheric') {
			if ($("#dataset-acmf-options-4").prop("checked") == true) {
				$("#dataset-acmf-options-3").prop("checked", true);
			} else {
				$("#dataset-acmf-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_atmospheric') {
			if ($("#dataset-acmf-options-4").prop("checked") == true) {
				$scope.select.atLeastOneACMF++;
				$("#dataset-acmf-options-3").prop("checked", true);
				$("#dataset-acmf-options-2").prop("checked", true);
				$("#dataset-acmf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneACMF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-acmf-options-5").prop("checked");
			$("#dataset-acmf-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_atmospheric') {
			if ($("#dataset-acmf-options-6").prop("checked") == true) {
				$scope.select.atLeastOneACMF++;
				$("#dataset-acmf-options-5").prop("checked", true);
				$("#dataset-acmf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneACMF--;
				$("#dataset-acmf-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-acmf-options-7").prop("checked");
			$("#dataset-acmf-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_atmospheric') {
			if ($("#dataset-acmf-options-8").prop("checked") == true) {
				$scope.select.atLeastOneACMF++;
				$("#dataset-acmf-options-7").prop("checked", true);
				$("#dataset-acmf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneACMF--;
				$("#dataset-acmf-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-acmf-options-9").prop("checked");
			$("#dataset-acmf-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_atmospheric') {
			if ($("#dataset-acmf-options-10").prop("checked") == true) {
				$scope.select.atLeastOneACMF++;
				$("#dataset-acmf-options-9").prop("checked", true);
				$("#dataset-acmf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneACMF--;
				$("#dataset-acmf-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexBRAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-br-options-1").prop("checked");
			$("#dataset-br-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-br-options-2").prop("checked");
			$("#dataset-br-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_biogeographical') {
			if ($("#dataset-br-options-4").prop("checked") == true) {
				$("#dataset-br-options-3").prop("checked", true);
			} else {
				$("#dataset-br-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_biogeographical') {
			if ($("#dataset-br-options-4").prop("checked") == true) {
				$scope.select.atLeastOneBR++;
				$("#dataset-br-options-3").prop("checked", true);
				$("#dataset-br-options-2").prop("checked", true);
				$("#dataset-br-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBR--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-br-options-5").prop("checked");
			$("#dataset-br-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_biogeographical') {
			if ($("#dataset-br-options-6").prop("checked") == true) {
				$scope.select.atLeastOneBR++;
				$("#dataset-br-options-5").prop("checked", true);
				$("#dataset-br-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBR--;
				$("#dataset-br-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-br-options-7").prop("checked");
			$("#dataset-br-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_biogeographical') {
			if ($("#dataset-br-options-8").prop("checked") == true) {
				$scope.select.atLeastOneBR++;
				$("#dataset-br-options-7").prop("checked", true);
				$("#dataset-br-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBR--;
				$("#dataset-br-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-br-options-9").prop("checked");
			$("#dataset-br-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_biogeographical') {
			if ($("#dataset-br-options-10").prop("checked") == true) {
				$scope.select.atLeastOneBR++;
				$("#dataset-br-options-9").prop("checked", true);
				$("#dataset-br-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBR--;
				$("#dataset-br-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexBU2DAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-bu2d-options-1").prop("checked");
			$("#dataset-bu2d-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-bu2d-options-2").prop("checked");
			$("#dataset-bu2d-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_buildings') {
			var currState = $("#dataset-bu2d-options-3").prop("checked");
			$("#dataset-bu2d-options-3").prop("checked", true);
			$("#dataset-bu2d-options-2").prop("checked", true);
			$("#dataset-bu2d-options-1").prop("checked", true);
		}
		if (type == 'application_schema_buildings') {
			console.log($("#dataset-bu2d-options-4").prop("checked"));
			if ($("#dataset-bu2d-options-5").prop("checked") == false) {
				if ($("#dataset-bu2d-options-4").prop("checked") == true) {
					$scope.select.atLeastOneBU2D++;
					$("#dataset-bu2d-options-3").prop("checked", true);
					$("#dataset-bu2d-options-2").prop("checked", true);
					$("#dataset-bu2d-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneBU2D--;
					$("#dataset-bu2d-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-bu2d-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_buildings_2d') {
			if ($("#dataset-bu2d-options-5").prop("checked") == true) {
				$scope.select.atLeastOneBU2D++;
				$("#dataset-bu2d-options-4").prop("checked", true);
				$("#dataset-bu2d-options-3").prop("checked", true);
				$("#dataset-bu2d-options-2").prop("checked", true);
				$("#dataset-bu2d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU2D--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-bu2d-options-6").prop("checked");
			$("#dataset-bu2d-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_buildings') {
			if ($("#dataset-bu2d-options-7").prop("checked") == true) {
				$scope.select.atLeastOneBU2D++;
				$("#dataset-bu2d-options-6").prop("checked", true);
				$("#dataset-bu2d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU2D--;
				$("#dataset-bu2d-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-bu2d-options-8").prop("checked");
			$("#dataset-bu2d-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_buildings') {
			if ($("#dataset-bu2d-options-9").prop("checked") == true) {
				$scope.select.atLeastOneBU2D++;
				$("#dataset-bu2d-options-8").prop("checked", true);
				$("#dataset-bu2d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU2D--;
				$("#dataset-bu2d-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-bu2d-options-10").prop("checked");
			$("#dataset-bu2d-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_buildings') {
			if ($("#dataset-bu2d-options-11").prop("checked") == true) {
				$scope.select.atLeastOneBU2D++;
				$("#dataset-bu2d-options-10").prop("checked", true);
				$("#dataset-bu2d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU2D--;
				$("#dataset-bu2d-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexBU3DAdvanced = function(type) {
		console.log(type);
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-bu3d-options-1").prop("checked");
			$("#dataset-bu3d-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-bu3d-options-2").prop("checked");
			$("#dataset-bu3d-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_buildings') {
			var currState = $("#dataset-bu3d-options-3").prop("checked");
			$("#dataset-bu3d-options-3").prop("checked", true);
			$("#dataset-bu3d-options-2").prop("checked", true);
			$("#dataset-bu3d-options-1").prop("checked", true);
		}
		if (type == 'application_schema_buildings') {
			console.log($("#dataset-bu3d-options-4").prop("checked"));
			if ($("#dataset-bu3d-options-5").prop("checked") == false) {
				if ($("#dataset-bu3d-options-4").prop("checked") == true) {
					$scope.select.atLeastOneBU3D++;
					$("#dataset-bu3d-options-3").prop("checked", true);
					$("#dataset-bu3d-options-2").prop("checked", true);
					$("#dataset-bu3d-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneBU3D--;
					$("#dataset-bu3d-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-bu3d-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_buildings_3d') {
			if ($("#dataset-bu3d-options-5").prop("checked") == true) {
				$scope.select.atLeastOneBU3D++;
				$("#dataset-bu3d-options-4").prop("checked", true);
				$("#dataset-bu3d-options-3").prop("checked", true);
				$("#dataset-bu3d-options-2").prop("checked", true);
				$("#dataset-bu3d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU3D--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-bu3d-options-6").prop("checked");
			$("#dataset-bu3d-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_buildings') {
			if ($("#dataset-bu3d-options-7").prop("checked") == true) {
				$scope.select.atLeastOneBU3D++;
				$("#dataset-bu3d-options-6").prop("checked", true);
				$("#dataset-bu3d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU3D--;
				$("#dataset-bu3d-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-bu3d-options-8").prop("checked");
			$("#dataset-bu3d-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_buildings') {
			if ($("#dataset-bu3d-options-9").prop("checked") == true) {
				$scope.select.atLeastOneBU3D++;
				$("#dataset-bu3d-options-8").prop("checked", true);
				$("#dataset-bu3d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU3D--;
				$("#dataset-bu3d-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-bu3d-options-10").prop("checked");
			$("#dataset-bu3d-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_buildings') {
			if ($("#dataset-bu3d-options-11").prop("checked") == true) {
				$scope.select.atLeastOneBU3D++;
				$("#dataset-bu3d-options-10").prop("checked", true);
				$("#dataset-bu3d-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneBU3D--;
				$("#dataset-bu3d-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexERCOVAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ercov-options-1").prop("checked");
			$("#dataset-ercov-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ercov-options-2").prop("checked");
			$("#dataset-ercov-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_energy') {
			var currState = $("#dataset-ercov-options-3").prop("checked");
			$("#dataset-ercov-options-3").prop("checked", true);
			$("#dataset-ercov-options-2").prop("checked", true);
			$("#dataset-ercov-options-1").prop("checked", true);
		}
		if (type == 'application_schema_energy') {
			console.log($("#dataset-ercov-options-4").prop("checked"));
			if ($("#dataset-ercov-options-5").prop("checked") == false) {
				if ($("#dataset-ercov-options-4").prop("checked") == true) {
					$scope.select.atLeastOneERCOV++;
					$("#dataset-ercov-options-3").prop("checked", true);
					$("#dataset-ercov-options-2").prop("checked", true);
					$("#dataset-ercov-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneERCOV--;
					$("#dataset-ercov-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ercov-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_energy_coverage') {
			if ($("#dataset-ercov-options-5").prop("checked") == true) {
				$scope.select.atLeastOneERCOV++;
				$("#dataset-ercov-options-4").prop("checked", true);
				$("#dataset-ercov-options-3").prop("checked", true);
				$("#dataset-ercov-options-2").prop("checked", true);
				$("#dataset-ercov-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERCOV--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ercov-options-6").prop("checked");
			$("#dataset-ercov-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_energy') {
			if ($("#dataset-ercov-options-7").prop("checked") == true) {
				$scope.select.atLeastOneERCOV++;
				$("#dataset-ercov-options-6").prop("checked", true);
				$("#dataset-ercov-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERCOV--;
				$("#dataset-ercov-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ercov-options-8").prop("checked");
			$("#dataset-ercov-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_energy') {
			if ($("#dataset-ercov-options-9").prop("checked") == true) {
				$scope.select.atLeastOneERCOV++;
				$("#dataset-ercov-options-8").prop("checked", true);
				$("#dataset-ercov-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERCOV--;
				$("#dataset-ercov-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ercov-options-10").prop("checked");
			$("#dataset-ercov-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_energy') {
			if ($("#dataset-ercov-options-11").prop("checked") == true) {
				$scope.select.atLeastOneERCOV++;
				$("#dataset-ercov-options-10").prop("checked", true);
				$("#dataset-ercov-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERCOV--;
				$("#dataset-ercov-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexERVECAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ervec-options-1").prop("checked");
			$("#dataset-ervec-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ervec-options-2").prop("checked");
			$("#dataset-ervec-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_energy') {
			var currState = $("#dataset-ervec-options-3").prop("checked");
			$("#dataset-ervec-options-3").prop("checked", true);
			$("#dataset-ervec-options-2").prop("checked", true);
			$("#dataset-ervec-options-1").prop("checked", true);
		}
		if (type == 'application_schema_energy') {
			console.log($("#dataset-ervec-options-4").prop("checked"));
			if ($("#dataset-ervec-options-5").prop("checked") == false) {
				if ($("#dataset-ervec-options-4").prop("checked") == true) {
					$scope.select.atLeastOneERVEC++;
					$("#dataset-ervec-options-3").prop("checked", true);
					$("#dataset-ervec-options-2").prop("checked", true);
					$("#dataset-ervec-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneERVEC--;
					$("#dataset-ervec-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ervec-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_energy_vector') {
			if ($("#dataset-ervec-options-5").prop("checked") == true) {
				$scope.select.atLeastOneERVEC++;
				$("#dataset-ervec-options-4").prop("checked", true);
				$("#dataset-ervec-options-3").prop("checked", true);
				$("#dataset-ervec-options-2").prop("checked", true);
				$("#dataset-ervec-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERVEC--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ervec-options-6").prop("checked");
			$("#dataset-ervec-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_energy') {
			if ($("#dataset-ervec-options-7").prop("checked") == true) {
				$scope.select.atLeastOneERVEC++;
				$("#dataset-ervec-options-6").prop("checked", true);
				$("#dataset-ervec-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERVEC--;
				$("#dataset-ervec-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ervec-options-8").prop("checked");
			$("#dataset-ervec-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_energy') {
			if ($("#dataset-ervec-options-9").prop("checked") == true) {
				$scope.select.atLeastOneERVEC++;
				$("#dataset-ervec-options-8").prop("checked", true);
				$("#dataset-ervec-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERVEC--;
				$("#dataset-ervec-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ervec-options-10").prop("checked");
			$("#dataset-ervec-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_energy') {
			if ($("#dataset-ervec-options-11").prop("checked") == true) {
				$scope.select.atLeastOneERVEC++;
				$("#dataset-ervec-options-10").prop("checked", true);
				$("#dataset-ervec-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneERVEC--;
				$("#dataset-ervec-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexEFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ef-options-1").prop("checked");
			$("#dataset-ef-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ef-options-2").prop("checked");
			$("#dataset-ef-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_environmental') {
			if ($("#dataset-ef-options-4").prop("checked") == true) {
				$("#dataset-ef-options-3").prop("checked", true);
			} else {
				$("#dataset-ef-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_environmental') {
			if ($("#dataset-ef-options-4").prop("checked") == true) {
				$scope.select.atLeastOneEF++;
				$("#dataset-ef-options-3").prop("checked", true);
				$("#dataset-ef-options-2").prop("checked", true);
				$("#dataset-ef-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ef-options-5").prop("checked");
			$("#dataset-ef-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_environmental') {
			if ($("#dataset-ef-options-6").prop("checked") == true) {
				$scope.select.atLeastOneEF++;
				$("#dataset-ef-options-5").prop("checked", true);
				$("#dataset-ef-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEF--;
				$("#dataset-ef-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ef-options-7").prop("checked");
			$("#dataset-ef-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_environmental') {
			if ($("#dataset-ef-options-8").prop("checked") == true) {
				$scope.select.atLeastOneEF++;
				$("#dataset-ef-options-7").prop("checked", true);
				$("#dataset-ef-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEF--;
				$("#dataset-ef-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ef-options-9").prop("checked");
			$("#dataset-ef-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_environmental') {
			if ($("#dataset-ef-options-10").prop("checked") == true) {
				$scope.select.atLeastOneEF++;
				$("#dataset-ef-options-9").prop("checked", true);
				$("#dataset-ef-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneEF--;
				$("#dataset-ef-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexHBAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-hb-options-1").prop("checked");
			$("#dataset-hb-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-hb-options-2").prop("checked");
			$("#dataset-hb-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_habitats') {
			if ($("#dataset-hb-options-4").prop("checked") == true) {
				$("#dataset-hb-options-3").prop("checked", true);
			} else {
				$("#dataset-hb-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_habitats') {
			if ($("#dataset-hb-options-4").prop("checked") == true) {
				$scope.select.atLeastOneHB++;
				$("#dataset-hb-options-3").prop("checked", true);
				$("#dataset-hb-options-2").prop("checked", true);
				$("#dataset-hb-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHB--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-hb-options-5").prop("checked");
			$("#dataset-hb-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_habitats') {
			if ($("#dataset-hb-options-6").prop("checked") == true) {
				$scope.select.atLeastOneHB++;
				$("#dataset-hb-options-5").prop("checked", true);
				$("#dataset-hb-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHB--;
				$("#dataset-hb-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-hb-options-7").prop("checked");
			$("#dataset-hb-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_habitats') {
			if ($("#dataset-hb-options-8").prop("checked") == true) {
				$scope.select.atLeastOneHB++;
				$("#dataset-hb-options-7").prop("checked", true);
				$("#dataset-hb-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHB--;
				$("#dataset-hb-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-hb-options-9").prop("checked");
			$("#dataset-hb-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_habitats') {
			if ($("#dataset-hb-options-10").prop("checked") == true) {
				$scope.select.atLeastOneHB++;
				$("#dataset-hb-options-9").prop("checked", true);
				$("#dataset-hb-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHB--;
				$("#dataset-hb-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexHHAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-hh-options-1").prop("checked");
			$("#dataset-hh-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-hh-options-2").prop("checked");
			$("#dataset-hh-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_human') {
			if ($("#dataset-hh-options-4").prop("checked") == true) {
				$("#dataset-hh-options-3").prop("checked", true);
			} else {
				$("#dataset-hh-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_human') {
			if ($("#dataset-hh-options-4").prop("checked") == true) {
				$scope.select.atLeastOneHH++;
				$("#dataset-hh-options-3").prop("checked", true);
				$("#dataset-hh-options-2").prop("checked", true);
				$("#dataset-hh-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHH--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-hh-options-5").prop("checked");
			$("#dataset-hh-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_human') {
			if ($("#dataset-hh-options-6").prop("checked") == true) {
				$scope.select.atLeastOneHH++;
				$("#dataset-hh-options-5").prop("checked", true);
				$("#dataset-hh-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHH--;
				$("#dataset-hh-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-hh-options-7").prop("checked");
			$("#dataset-hh-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_human') {
			if ($("#dataset-hh-options-8").prop("checked") == true) {
				$scope.select.atLeastOneHH++;
				$("#dataset-hh-options-7").prop("checked", true);
				$("#dataset-hh-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHH--;
				$("#dataset-hh-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-hh-options-9").prop("checked");
			$("#dataset-hh-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_human') {
			if ($("#dataset-hh-options-10").prop("checked") == true) {
				$scope.select.atLeastOneHH++;
				$("#dataset-hh-options-9").prop("checked", true);
				$("#dataset-hh-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneHH--;
				$("#dataset-hh-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexELUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-elu-options-1").prop("checked");
			$("#dataset-elu-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-elu-options-2").prop("checked");
			$("#dataset-elu-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landuse') {
			if ($("#dataset-elu-options-4").prop("checked") == true) {
				$("#dataset-elu-options-3").prop("checked", true);
			} else {
				$("#dataset-elu-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_landuse') {
			if ($("#dataset-elu-options-4").prop("checked") == true) {
				$scope.select.atLeastOneELU++;
				$("#dataset-elu-options-3").prop("checked", true);
				$("#dataset-elu-options-2").prop("checked", true);
				$("#dataset-elu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneELU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-elu-options-5").prop("checked");
			$("#dataset-elu-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_landuse') {
			if ($("#dataset-elu-options-6").prop("checked") == true) {
				$scope.select.atLeastOneELU++;
				$("#dataset-elu-options-5").prop("checked", true);
				$("#dataset-elu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneELU--;
				$("#dataset-elu-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-elu-options-7").prop("checked");
			$("#dataset-elu-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landuse') {
			if ($("#dataset-elu-options-8").prop("checked") == true) {
				$scope.select.atLeastOneELU++;
				$("#dataset-elu-options-7").prop("checked", true);
				$("#dataset-elu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneELU--;
				$("#dataset-elu-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-elu-options-9").prop("checked");
			$("#dataset-elu-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_landuse') {
			if ($("#dataset-elu-options-10").prop("checked") == true) {
				$scope.select.atLeastOneELU++;
				$("#dataset-elu-options-9").prop("checked", true);
				$("#dataset-elu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneELU--;
				$("#dataset-elu-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexGELUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-gelu-options-1").prop("checked");
			$("#dataset-gelu-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-gelu-options-2").prop("checked");
			$("#dataset-gelu-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landuse') {
			if ($("#dataset-gelu-options-4").prop("checked") == true) {
				$("#dataset-gelu-options-3").prop("checked", true);
			} else {
				$("#dataset-gelu-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_landuse') {
			if ($("#dataset-gelu-options-4").prop("checked") == true) {
				$scope.select.atLeastOneGELU++;
				$("#dataset-gelu-options-3").prop("checked", true);
				$("#dataset-gelu-options-2").prop("checked", true);
				$("#dataset-gelu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGELU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-gelu-options-5").prop("checked");
			$("#dataset-gelu-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_landuse') {
			if ($("#dataset-gelu-options-6").prop("checked") == true) {
				$scope.select.atLeastOneGELU++;
				$("#dataset-gelu-options-5").prop("checked", true);
				$("#dataset-gelu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGELU--;
				$("#dataset-gelu-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-gelu-options-7").prop("checked");
			$("#dataset-gelu-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landuse') {
			if ($("#dataset-gelu-options-8").prop("checked") == true) {
				$scope.select.atLeastOneGELU++;
				$("#dataset-gelu-options-7").prop("checked", true);
				$("#dataset-gelu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGELU--;
				$("#dataset-gelu-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-gelu-options-9").prop("checked");
			$("#dataset-gelu-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_landuse') {
			if ($("#dataset-gelu-options-10").prop("checked") == true) {
				$scope.select.atLeastOneGELU++;
				$("#dataset-gelu-options-9").prop("checked", true);
				$("#dataset-gelu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneGELU--;
				$("#dataset-gelu-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexPLUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-plu-options-1").prop("checked");
			$("#dataset-plu-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-plu-options-2").prop("checked");
			$("#dataset-plu-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landuse') {
			if ($("#dataset-plu-options-4").prop("checked") == true) {
				$("#dataset-plu-options-3").prop("checked", true);
			} else {
				$("#dataset-plu-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_landuse') {
			if ($("#dataset-plu-options-4").prop("checked") == true) {
				$scope.select.atLeastOnePLU++;
				$("#dataset-plu-options-3").prop("checked", true);
				$("#dataset-plu-options-2").prop("checked", true);
				$("#dataset-plu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePLU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-plu-options-5").prop("checked");
			$("#dataset-plu-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_landuse') {
			if ($("#dataset-plu-options-6").prop("checked") == true) {
				$scope.select.atLeastOnePLU++;
				$("#dataset-plu-options-5").prop("checked", true);
				$("#dataset-plu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePLU--;
				$("#dataset-plu-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-plu-options-7").prop("checked");
			$("#dataset-plu-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landuse') {
			if ($("#dataset-plu-options-8").prop("checked") == true) {
				$scope.select.atLeastOnePLU++;
				$("#dataset-plu-options-7").prop("checked", true);
				$("#dataset-plu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePLU--;
				$("#dataset-plu-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-plu-options-9").prop("checked");
			$("#dataset-plu-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_landuse') {
			if ($("#dataset-plu-options-10").prop("checked") == true) {
				$scope.select.atLeastOnePLU++;
				$("#dataset-plu-options-9").prop("checked", true);
				$("#dataset-plu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePLU--;
				$("#dataset-plu-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSELUAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-selu-options-1").prop("checked");
			$("#dataset-selu-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-selu-options-2").prop("checked");
			$("#dataset-selu-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_landuse') {
			if ($("#dataset-selu-options-4").prop("checked") == true) {
				$("#dataset-selu-options-3").prop("checked", true);
			} else {
				$("#dataset-selu-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_landuse') {
			if ($("#dataset-selu-options-4").prop("checked") == true) {
				$scope.select.atLeastOneSELU++;
				$("#dataset-selu-options-3").prop("checked", true);
				$("#dataset-selu-options-2").prop("checked", true);
				$("#dataset-selu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSELU--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-selu-options-5").prop("checked");
			$("#dataset-selu-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_landuse') {
			if ($("#dataset-selu-options-6").prop("checked") == true) {
				$scope.select.atLeastOneSELU++;
				$("#dataset-selu-options-5").prop("checked", true);
				$("#dataset-selu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSELU--;
				$("#dataset-selu-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-selu-options-7").prop("checked");
			$("#dataset-selu-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_landuse') {
			if ($("#dataset-selu-options-8").prop("checked") == true) {
				$scope.select.atLeastOneSELU++;
				$("#dataset-selu-options-7").prop("checked", true);
				$("#dataset-selu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSELU--;
				$("#dataset-selu-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-selu-options-9").prop("checked");
			$("#dataset-selu-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_landuse') {
			if ($("#dataset-selu-options-10").prop("checked") == true) {
				$scope.select.atLeastOneSELU++;
				$("#dataset-selu-options-9").prop("checked", true);
				$("#dataset-selu-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSELU--;
				$("#dataset-selu-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexMRAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-mr-options-1").prop("checked");
			$("#dataset-mr-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-mr-options-2").prop("checked");
			$("#dataset-mr-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_mineral') {
			if ($("#dataset-mr-options-4").prop("checked") == true) {
				$("#dataset-mr-options-3").prop("checked", true);
			} else {
				$("#dataset-mr-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_mineral') {
			if ($("#dataset-mr-options-4").prop("checked") == true) {
				$scope.select.atLeastOneMR++;
				$("#dataset-mr-options-3").prop("checked", true);
				$("#dataset-mr-options-2").prop("checked", true);
				$("#dataset-mr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMR--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-mr-options-5").prop("checked");
			$("#dataset-mr-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_mineral') {
			if ($("#dataset-mr-options-6").prop("checked") == true) {
				$scope.select.atLeastOneMR++;
				$("#dataset-mr-options-5").prop("checked", true);
				$("#dataset-mr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMR--;
				$("#dataset-mr-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-mr-options-7").prop("checked");
			$("#dataset-mr-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_mineral') {
			if ($("#dataset-mr-options-8").prop("checked") == true) {
				$scope.select.atLeastOneMR++;
				$("#dataset-mr-options-7").prop("checked", true);
				$("#dataset-mr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMR--;
				$("#dataset-mr-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-mr-options-9").prop("checked");
			$("#dataset-mr-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_mineral') {
			if ($("#dataset-mr-options-10").prop("checked") == true) {
				$scope.select.atLeastOneMR++;
				$("#dataset-mr-options-9").prop("checked", true);
				$("#dataset-mr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneMR--;
				$("#dataset-mr-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexNZAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-nz-options-1").prop("checked");
			$("#dataset-nz-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-nz-options-2").prop("checked");
			$("#dataset-nz-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_riskzones') {
			if ($("#dataset-nz-options-4").prop("checked") == true) {
				$("#dataset-nz-options-3").prop("checked", true);
			} else {
				$("#dataset-nz-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_riskzones') {
			if ($("#dataset-nz-options-4").prop("checked") == true) {
				$scope.select.atLeastOneNZ++;
				$("#dataset-nz-options-3").prop("checked", true);
				$("#dataset-nz-options-2").prop("checked", true);
				$("#dataset-nz-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneNZ--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-nz-options-5").prop("checked");
			$("#dataset-nz-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_riskzones') {
			if ($("#dataset-nz-options-6").prop("checked") == true) {
				$scope.select.atLeastOneNZ++;
				$("#dataset-nz-options-5").prop("checked", true);
				$("#dataset-nz-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneNZ--;
				$("#dataset-nz-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-nz-options-7").prop("checked");
			$("#dataset-nz-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_riskzones') {
			if ($("#dataset-nz-options-8").prop("checked") == true) {
				$scope.select.atLeastOneNZ++;
				$("#dataset-nz-options-7").prop("checked", true);
				$("#dataset-nz-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneNZ--;
				$("#dataset-nz-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-nz-options-9").prop("checked");
			$("#dataset-nz-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_riskzones') {
			if ($("#dataset-nz-options-10").prop("checked") == true) {
				$scope.select.atLeastOneNZ++;
				$("#dataset-nz-options-9").prop("checked", true);
				$("#dataset-nz-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneNZ--;
				$("#dataset-nz-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexOFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-of-options-1").prop("checked");
			$("#dataset-of-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-of-options-2").prop("checked");
			$("#dataset-of-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_oceanographic') {
			if ($("#dataset-of-options-4").prop("checked") == true) {
				$("#dataset-of-options-3").prop("checked", true);
			} else {
				$("#dataset-of-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_oceanographic') {
			if ($("#dataset-of-options-4").prop("checked") == true) {
				$scope.select.atLeastOneOF++;
				$("#dataset-of-options-3").prop("checked", true);
				$("#dataset-of-options-2").prop("checked", true);
				$("#dataset-of-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-of-options-5").prop("checked");
			$("#dataset-of-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_oceanographic') {
			if ($("#dataset-of-options-6").prop("checked") == true) {
				$scope.select.atLeastOneOF++;
				$("#dataset-of-options-5").prop("checked", true);
				$("#dataset-of-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOF--;
				$("#dataset-of-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-of-options-7").prop("checked");
			$("#dataset-of-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_oceanographic') {
			if ($("#dataset-of-options-8").prop("checked") == true) {
				$scope.select.atLeastOneOF++;
				$("#dataset-of-options-7").prop("checked", true);
				$("#dataset-of-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOF--;
				$("#dataset-of-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-of-options-9").prop("checked");
			$("#dataset-of-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_oceanographic') {
			if ($("#dataset-of-options-10").prop("checked") == true) {
				$scope.select.atLeastOneOF++;
				$("#dataset-of-options-9").prop("checked", true);
				$("#dataset-of-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneOF--;
				$("#dataset-of-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexPDAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-pd-options-1").prop("checked");
			$("#dataset-pd-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-pd-options-2").prop("checked");
			$("#dataset-pd-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_population') {
			if ($("#dataset-pd-options-4").prop("checked") == true) {
				$("#dataset-pd-options-3").prop("checked", true);
			} else {
				$("#dataset-pd-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_population') {
			if ($("#dataset-pd-options-4").prop("checked") == true) {
				$scope.select.atLeastOnePD++;
				$("#dataset-pd-options-3").prop("checked", true);
				$("#dataset-pd-options-2").prop("checked", true);
				$("#dataset-pd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePD--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-pd-options-5").prop("checked");
			$("#dataset-pd-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_population') {
			if ($("#dataset-pd-options-6").prop("checked") == true) {
				$scope.select.atLeastOnePD++;
				$("#dataset-pd-options-5").prop("checked", true);
				$("#dataset-pd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePD--;
				$("#dataset-pd-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-pd-options-7").prop("checked");
			$("#dataset-pd-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_population') {
			if ($("#dataset-pd-options-8").prop("checked") == true) {
				$scope.select.atLeastOnePD++;
				$("#dataset-pd-options-7").prop("checked", true);
				$("#dataset-pd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePD--;
				$("#dataset-pd-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-pd-options-9").prop("checked");
			$("#dataset-pd-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_population') {
			if ($("#dataset-pd-options-10").prop("checked") == true) {
				$scope.select.atLeastOnePD++;
				$("#dataset-pd-options-9").prop("checked", true);
				$("#dataset-pd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePD--;
				$("#dataset-pd-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexPFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-pf-options-1").prop("checked");
			$("#dataset-pf-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-pf-options-2").prop("checked");
			$("#dataset-pf-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_facilities') {
			if ($("#dataset-pf-options-4").prop("checked") == true) {
				$("#dataset-pf-options-3").prop("checked", true);
			} else {
				$("#dataset-pf-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_facilities') {
			if ($("#dataset-pf-options-4").prop("checked") == true) {
				$scope.select.atLeastOnePF++;
				$("#dataset-pf-options-3").prop("checked", true);
				$("#dataset-pf-options-2").prop("checked", true);
				$("#dataset-pf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-pf-options-5").prop("checked");
			$("#dataset-pf-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_facilities') {
			if ($("#dataset-pf-options-6").prop("checked") == true) {
				$scope.select.atLeastOnePF++;
				$("#dataset-pf-options-5").prop("checked", true);
				$("#dataset-pf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePF--;
				$("#dataset-pf-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-pf-options-7").prop("checked");
			$("#dataset-pf-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_facilities') {
			if ($("#dataset-pf-options-8").prop("checked") == true) {
				$scope.select.atLeastOnePF++;
				$("#dataset-pf-options-7").prop("checked", true);
				$("#dataset-pf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePF--;
				$("#dataset-pf-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-pf-options-9").prop("checked");
			$("#dataset-pf-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_facilities') {
			if ($("#dataset-pf-options-10").prop("checked") == true) {
				$scope.select.atLeastOnePF++;
				$("#dataset-pf-options-9").prop("checked", true);
				$("#dataset-pf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOnePF--;
				$("#dataset-pf-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSRAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-sr-options-1").prop("checked");
			$("#dataset-sr-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-sr-options-2").prop("checked");
			$("#dataset-sr-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_searegions') {
			if ($("#dataset-sr-options-4").prop("checked") == true) {
				$("#dataset-sr-options-3").prop("checked", true);
			} else {
				$("#dataset-sr-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_searegions') {
			if ($("#dataset-sr-options-4").prop("checked") == true) {
				$scope.select.atLeastOneSR++;
				$("#dataset-sr-options-3").prop("checked", true);
				$("#dataset-sr-options-2").prop("checked", true);
				$("#dataset-sr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSR--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-sr-options-5").prop("checked");
			$("#dataset-sr-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_searegions') {
			if ($("#dataset-sr-options-6").prop("checked") == true) {
				$scope.select.atLeastOneSR++;
				$("#dataset-sr-options-5").prop("checked", true);
				$("#dataset-sr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSR--;
				$("#dataset-sr-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-sr-options-7").prop("checked");
			$("#dataset-sr-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_searegions') {
			if ($("#dataset-sr-options-8").prop("checked") == true) {
				$scope.select.atLeastOneSR++;
				$("#dataset-sr-options-7").prop("checked", true);
				$("#dataset-sr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSR--;
				$("#dataset-sr-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-sr-options-9").prop("checked");
			$("#dataset-sr-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_searegions') {
			if ($("#dataset-sr-options-10").prop("checked") == true) {
				$scope.select.atLeastOneSR++;
				$("#dataset-sr-options-9").prop("checked", true);
				$("#dataset-sr-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSR--;
				$("#dataset-sr-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSOAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-so-options-1").prop("checked");
			$("#dataset-so-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-so-options-2").prop("checked");
			$("#dataset-so-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_soil') {
			if ($("#dataset-so-options-4").prop("checked") == true) {
				$("#dataset-so-options-3").prop("checked", true);
			} else {
				$("#dataset-so-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_soil') {
			if ($("#dataset-so-options-4").prop("checked") == true) {
				$scope.select.atLeastOneSO++;
				$("#dataset-so-options-3").prop("checked", true);
				$("#dataset-so-options-2").prop("checked", true);
				$("#dataset-so-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSO--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-so-options-5").prop("checked");
			$("#dataset-so-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_soil') {
			if ($("#dataset-so-options-6").prop("checked") == true) {
				$scope.select.atLeastOneSO++;
				$("#dataset-so-options-5").prop("checked", true);
				$("#dataset-so-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSO--;
				$("#dataset-so-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-so-options-7").prop("checked");
			$("#dataset-so-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_soil') {
			if ($("#dataset-so-options-8").prop("checked") == true) {
				$scope.select.atLeastOneSO++;
				$("#dataset-so-options-7").prop("checked", true);
				$("#dataset-so-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSO--;
				$("#dataset-so-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-so-options-9").prop("checked");
			$("#dataset-so-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_soil') {
			if ($("#dataset-so-options-10").prop("checked") == true) {
				$scope.select.atLeastOneSO++;
				$("#dataset-so-options-9").prop("checked", true);
				$("#dataset-so-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSO--;
				$("#dataset-so-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSDAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-sd-options-1").prop("checked");
			$("#dataset-sd-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-sd-options-2").prop("checked");
			$("#dataset-sd-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_species') {
			if ($("#dataset-sd-options-4").prop("checked") == true) {
				$("#dataset-sd-options-3").prop("checked", true);
			} else {
				$("#dataset-sd-options-3").prop("checked", true);
			}
		}
		if (type == 'application_schema_species') {
			if ($("#dataset-sd-options-4").prop("checked") == true) {
				$scope.select.atLeastOneSD++;
				$("#dataset-sd-options-3").prop("checked", true);
				$("#dataset-sd-options-2").prop("checked", true);
				$("#dataset-sd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSD--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-sd-options-5").prop("checked");
			$("#dataset-sd-options-5").prop("checked", !currState);
		}
		if (type == 'data_consistency_species') {
			if ($("#dataset-sd-options-6").prop("checked") == true) {
				$scope.select.atLeastOneSD++;
				$("#dataset-sd-options-5").prop("checked", true);
				$("#dataset-sd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSD--;
				$("#dataset-sd-options-5").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-sd-options-7").prop("checked");
			$("#dataset-sd-options-7").prop("checked", !currState);
		}
		if (type == 'information_accessibility_species') {
			if ($("#dataset-sd-options-8").prop("checked") == true) {
				$scope.select.atLeastOneSD++;
				$("#dataset-sd-options-7").prop("checked", true);
				$("#dataset-sd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSD--;
				$("#dataset-sd-options-7").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-sd-options-9").prop("checked");
			$("#dataset-sd-options-9").prop("checked", !currState);
		}
		if (type == 'reference_systems_species') {
			if ($("#dataset-sd-options-10").prop("checked") == true) {
				$scope.select.atLeastOneSD++;
				$("#dataset-sd-options-9").prop("checked", true);
				$("#dataset-sd-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSD--;
				$("#dataset-sd-options-9").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSUGRIDAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-sugrid-options-1").prop("checked");
			$("#dataset-sugrid-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-sugrid-options-2").prop("checked");
			$("#dataset-sugrid-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_statistical') {
			var currState = $("#dataset-sugrid-options-3").prop("checked");
			$("#dataset-sugrid-options-3").prop("checked", true);
			$("#dataset-sugrid-options-2").prop("checked", true);
			$("#dataset-sugrid-options-1").prop("checked", true);
		}
		if (type == 'application_schema_statistical') {
			console.log($("#dataset-sugrid-options-4").prop("checked"));
			if ($("#dataset-sugrid-options-5").prop("checked") == false) {
				if ($("#dataset-sugrid-options-4").prop("checked") == true) {
					$scope.select.atLeastOneSUGRID++;
					$("#dataset-sugrid-options-3").prop("checked", true);
					$("#dataset-sugrid-options-2").prop("checked", true);
					$("#dataset-sugrid-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneSUGRID--;
					$("#dataset-sugrid-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-sugrid-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_statistical_grid') {
			if ($("#dataset-sugrid-options-5").prop("checked") == true) {
				$scope.select.atLeastOneSUGRID++;
				$("#dataset-sugrid-options-4").prop("checked", true);
				$("#dataset-sugrid-options-3").prop("checked", true);
				$("#dataset-sugrid-options-2").prop("checked", true);
				$("#dataset-sugrid-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUGRID--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-sugrid-options-6").prop("checked");
			$("#dataset-sugrid-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_statistical') {
			if ($("#dataset-sugrid-options-7").prop("checked") == true) {
				$scope.select.atLeastOneSUGRID++;
				$("#dataset-sugrid-options-6").prop("checked", true);
				$("#dataset-sugrid-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUGRID--;
				$("#dataset-sugrid-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-sugrid-options-8").prop("checked");
			$("#dataset-sugrid-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_statistical') {
			if ($("#dataset-sugrid-options-9").prop("checked") == true) {
				$scope.select.atLeastOneSUGRID++;
				$("#dataset-sugrid-options-8").prop("checked", true);
				$("#dataset-sugrid-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUGRID--;
				$("#dataset-sugrid-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-sugrid-options-10").prop("checked");
			$("#dataset-sugrid-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_statistical') {
			if ($("#dataset-sugrid-options-11").prop("checked") == true) {
				$scope.select.atLeastOneSUGRID++;
				$("#dataset-sugrid-options-10").prop("checked", true);
				$("#dataset-sugrid-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUGRID--;
				$("#dataset-sugrid-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexSUVECTORAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-suvector-options-1").prop("checked");
			$("#dataset-suvector-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-suvector-options-2").prop("checked");
			$("#dataset-suvector-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_statistical') {
			var currState = $("#dataset-suvector-options-3").prop("checked");
			$("#dataset-suvector-options-3").prop("checked", true);
			$("#dataset-suvector-options-2").prop("checked", true);
			$("#dataset-suvector-options-1").prop("checked", true);
		}
		if (type == 'application_schema_statistical') {
			console.log($("#dataset-suvector-options-4").prop("checked"));
			if ($("#dataset-suvector-options-5").prop("checked") == false) {
				if ($("#dataset-suvector-options-4").prop("checked") == true) {
					$scope.select.atLeastOneSUVECTOR++;
					$("#dataset-suvector-options-3").prop("checked", true);
					$("#dataset-suvector-options-2").prop("checked", true);
					$("#dataset-suvector-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneSUVECTOR--;
					$("#dataset-suvector-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-suvector-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_statistical_vector') {
			if ($("#dataset-suvector-options-5").prop("checked") == true) {
				$scope.select.atLeastOneSUVECTOR++;
				$("#dataset-suvector-options-4").prop("checked", true);
				$("#dataset-suvector-options-3").prop("checked", true);
				$("#dataset-suvector-options-2").prop("checked", true);
				$("#dataset-suvector-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUVECTOR--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-suvector-options-6").prop("checked");
			$("#dataset-suvector-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_statistical') {
			if ($("#dataset-suvector-options-7").prop("checked") == true) {
				$scope.select.atLeastOneSUVECTOR++;
				$("#dataset-suvector-options-6").prop("checked", true);
				$("#dataset-suvector-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUVECTOR--;
				$("#dataset-suvector-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-suvector-options-8").prop("checked");
			$("#dataset-suvector-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_statistical') {
			if ($("#dataset-suvector-options-9").prop("checked") == true) {
				$scope.select.atLeastOneSUVECTOR++;
				$("#dataset-suvector-options-8").prop("checked", true);
				$("#dataset-suvector-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUVECTOR--;
				$("#dataset-suvector-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-suvector-options-10").prop("checked");
			$("#dataset-suvector-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_statistical') {
			if ($("#dataset-suvector-options-11").prop("checked") == true) {
				$scope.select.atLeastOneSUVECTOR++;
				$("#dataset-suvector-options-10").prop("checked", true);
				$("#dataset-suvector-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneSUVECTOR--;
				$("#dataset-suvector-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSASGSAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-usasgs-options-1").prop("checked");
			$("#dataset-usasgs-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-usasgs-options-2").prop("checked");
			$("#dataset-usasgs-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-usasgs-options-3").prop("checked");
			$("#dataset-usasgs-options-3").prop("checked", true);
			$("#dataset-usasgs-options-2").prop("checked", true);
			$("#dataset-usasgs-options-1").prop("checked", true);
		}
		if (type == 'application_schema_utility') {
			if ($("#dataset-usasgs-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSASGS++;
				$("#dataset-usasgs-options-3").prop("checked", true);
				$("#dataset-usasgs-options-2").prop("checked", true);
				$("#dataset-usasgs-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSASGS--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-usasgs-options-6").prop("checked");
			$("#dataset-usasgs-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-usasgs-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSASGS++;
				$("#dataset-usasgs-options-6").prop("checked", true);
				$("#dataset-usasgs-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSASGS--;
				$("#dataset-usasgs-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-usasgs-options-8").prop("checked");
			$("#dataset-usasgs-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-usasgs-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSASGS++;
				$("#dataset-usasgs-options-8").prop("checked", true);
				$("#dataset-usasgs-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSASGS--;
				$("#dataset-usasgs-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-usasgs-options-10").prop("checked");
			$("#dataset-usasgs-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-usasgs-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSASGS++;
				$("#dataset-usasgs-options-10").prop("checked", true);
				$("#dataset-usasgs-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSASGS--;
				$("#dataset-usasgs-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSENAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-usen-options-1").prop("checked");
			$("#dataset-usen-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-usen-options-2").prop("checked");
			$("#dataset-usen-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-usen-options-3").prop("checked");
			$("#dataset-usen-options-3").prop("checked", true);
			$("#dataset-usen-options-2").prop("checked", true);
			$("#dataset-usen-options-1").prop("checked", true);
		}
		if (type == 'application_schema_common') {
			console.log($("#dataset-usen-options-4").prop("checked"));
			if ($("#dataset-usen-options-5").prop("checked") == false) {
				if ($("#dataset-usen-options-4").prop("checked") == true) {
					$scope.select.atLeastOneUSEN++;
					$("#dataset-usen-options-3").prop("checked", true);
					$("#dataset-usen-options-2").prop("checked", true);
					$("#dataset-usen-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneUSEN--;
					$("#dataset-usen-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-usen-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_electricity') {
			if ($("#dataset-usen-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSEN++;
				$("#dataset-usen-options-4").prop("checked", true);
				$("#dataset-usen-options-3").prop("checked", true);
				$("#dataset-usen-options-2").prop("checked", true);
				$("#dataset-usen-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-usen-options-6").prop("checked");
			$("#dataset-usen-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-usen-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSEN++;
				$("#dataset-usen-options-6").prop("checked", true);
				$("#dataset-usen-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEN--;
				$("#dataset-usen-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-usen-options-8").prop("checked");
			$("#dataset-usen-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-usen-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSEN++;
				$("#dataset-usen-options-8").prop("checked", true);
				$("#dataset-usen-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEN--;
				$("#dataset-usen-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-usen-options-10").prop("checked");
			$("#dataset-usen-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-usen-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSEN++;
				$("#dataset-usen-options-10").prop("checked", true);
				$("#dataset-usen-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEN--;
				$("#dataset-usen-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSEMFAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-usemf-options-1").prop("checked");
			$("#dataset-usemf-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-usemf-options-2").prop("checked");
			$("#dataset-usemf-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-usemf-options-3").prop("checked");
			$("#dataset-usemf-options-3").prop("checked", true);
			$("#dataset-usemf-options-2").prop("checked", true);
			$("#dataset-usemf-options-1").prop("checked", true);
		}
		if (type == 'application_schema_environmental') {
			if ($("#dataset-usemf-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSEMF++;
				$("#dataset-usemf-options-3").prop("checked", true);
				$("#dataset-usemf-options-2").prop("checked", true);
				$("#dataset-usemf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEMF--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-usemf-options-6").prop("checked");
			$("#dataset-usemf-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-usemf-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSEMF++;
				$("#dataset-usemf-options-6").prop("checked", true);
				$("#dataset-usemf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEMF--;
				$("#dataset-usemf-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-usemf-options-8").prop("checked");
			$("#dataset-usemf-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-usemf-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSEMF++;
				$("#dataset-usemf-options-8").prop("checked", true);
				$("#dataset-usemf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEMF--;
				$("#dataset-usemf-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-usemf-options-10").prop("checked");
			$("#dataset-usemf-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-usemf-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSEMF++;
				$("#dataset-usemf-options-10").prop("checked", true);
				$("#dataset-usemf-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSEMF--;
				$("#dataset-usemf-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSOGCNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-usogcn-options-1").prop("checked");
			$("#dataset-usogcn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-usogcn-options-2").prop("checked");
			$("#dataset-usogcn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-usogcn-options-3").prop("checked");
			$("#dataset-usogcn-options-3").prop("checked", true);
			$("#dataset-usogcn-options-2").prop("checked", true);
			$("#dataset-usogcn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_common') {
			console.log($("#dataset-usogcn-options-4").prop("checked"));
			if ($("#dataset-usogcn-options-5").prop("checked") == false) {
				if ($("#dataset-usogcn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneUSOGCN++;
					$("#dataset-usogcn-options-3").prop("checked", true);
					$("#dataset-usogcn-options-2").prop("checked", true);
					$("#dataset-usogcn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneUSOGCN--;
					$("#dataset-usogcn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-usogcn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_oilgaschem') {
			if ($("#dataset-usogcn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSOGCN++;
				$("#dataset-usogcn-options-4").prop("checked", true);
				$("#dataset-usogcn-options-3").prop("checked", true);
				$("#dataset-usogcn-options-2").prop("checked", true);
				$("#dataset-usogcn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSOGCN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-usogcn-options-6").prop("checked");
			$("#dataset-usogcn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-usogcn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSOGCN++;
				$("#dataset-usogcn-options-6").prop("checked", true);
				$("#dataset-usogcn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSOGCN--;
				$("#dataset-usogcn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-usogcn-options-8").prop("checked");
			$("#dataset-usogcn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-usogcn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSOGCN++;
				$("#dataset-usogcn-options-8").prop("checked", true);
				$("#dataset-usogcn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSOGCN--;
				$("#dataset-usogcn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-usogcn-options-10").prop("checked");
			$("#dataset-usogcn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-usogcn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSOGCN++;
				$("#dataset-usogcn-options-10").prop("checked", true);
				$("#dataset-usogcn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSOGCN--;
				$("#dataset-usogcn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSSNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ussn-options-1").prop("checked");
			$("#dataset-ussn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ussn-options-2").prop("checked");
			$("#dataset-ussn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-ussn-options-3").prop("checked");
			$("#dataset-ussn-options-3").prop("checked", true);
			$("#dataset-ussn-options-2").prop("checked", true);
			$("#dataset-ussn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_common') {
			console.log($("#dataset-ussn-options-4").prop("checked"));
			if ($("#dataset-ussn-options-5").prop("checked") == false) {
				if ($("#dataset-ussn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneUSSN++;
					$("#dataset-ussn-options-3").prop("checked", true);
					$("#dataset-ussn-options-2").prop("checked", true);
					$("#dataset-ussn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneUSSN--;
					$("#dataset-ussn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ussn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_sewer') {
			if ($("#dataset-ussn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSSN++;
				$("#dataset-ussn-options-4").prop("checked", true);
				$("#dataset-ussn-options-3").prop("checked", true);
				$("#dataset-ussn-options-2").prop("checked", true);
				$("#dataset-ussn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSSN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ussn-options-6").prop("checked");
			$("#dataset-ussn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-ussn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSSN++;
				$("#dataset-ussn-options-6").prop("checked", true);
				$("#dataset-ussn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSSN--;
				$("#dataset-ussn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ussn-options-8").prop("checked");
			$("#dataset-ussn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-ussn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSSN++;
				$("#dataset-ussn-options-8").prop("checked", true);
				$("#dataset-ussn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSSN--;
				$("#dataset-ussn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ussn-options-10").prop("checked");
			$("#dataset-ussn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-ussn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSSN++;
				$("#dataset-ussn-options-10").prop("checked", true);
				$("#dataset-ussn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSSN--;
				$("#dataset-ussn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSTNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-ustn-options-1").prop("checked");
			$("#dataset-ustn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-ustn-options-2").prop("checked");
			$("#dataset-ustn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-ustn-options-3").prop("checked");
			$("#dataset-ustn-options-3").prop("checked", true);
			$("#dataset-ustn-options-2").prop("checked", true);
			$("#dataset-ustn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_common') {
			console.log($("#dataset-ustn-options-4").prop("checked"));
			if ($("#dataset-ustn-options-5").prop("checked") == false) {
				if ($("#dataset-ustn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneUSTN++;
					$("#dataset-ustn-options-3").prop("checked", true);
					$("#dataset-ustn-options-2").prop("checked", true);
					$("#dataset-ustn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneUSTN--;
					$("#dataset-ustn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-ustn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_thermal') {
			if ($("#dataset-ustn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSTN++;
				$("#dataset-ustn-options-4").prop("checked", true);
				$("#dataset-ustn-options-3").prop("checked", true);
				$("#dataset-ustn-options-2").prop("checked", true);
				$("#dataset-ustn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSTN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-ustn-options-6").prop("checked");
			$("#dataset-ustn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-ustn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSTN++;
				$("#dataset-ustn-options-6").prop("checked", true);
				$("#dataset-ustn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSTN--;
				$("#dataset-ustn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-ustn-options-8").prop("checked");
			$("#dataset-ustn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-ustn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSTN++;
				$("#dataset-ustn-options-8").prop("checked", true);
				$("#dataset-ustn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSTN--;
				$("#dataset-ustn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-ustn-options-10").prop("checked");
			$("#dataset-ustn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-ustn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSTN++;
				$("#dataset-ustn-options-10").prop("checked", true);
				$("#dataset-ustn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSTN--;
				$("#dataset-ustn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

	$scope.selectDatasetAnnexUSWNAdvanced = function(type) {
		if (type == 'inspire_gml_encoding') {
			var currState = $("#dataset-uswn-options-1").prop("checked");
			$("#dataset-uswn-options-1").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas') {
			var currState = $("#dataset-uswn-options-2").prop("checked");
			$("#dataset-uswn-options-2").prop("checked", !currState);
		}
		if (type == 'gml_application_schemas_utility') {
			var currState = $("#dataset-uswn-options-3").prop("checked");
			$("#dataset-uswn-options-3").prop("checked", true);
			$("#dataset-uswn-options-2").prop("checked", true);
			$("#dataset-uswn-options-1").prop("checked", true);
		}
		if (type == 'application_schema_common') {
			console.log($("#dataset-uswn-options-4").prop("checked"));
			if ($("#dataset-uswn-options-5").prop("checked") == false) {
				if ($("#dataset-uswn-options-4").prop("checked") == true) {
					$scope.select.atLeastOneUSWN++;
					$("#dataset-uswn-options-3").prop("checked", true);
					$("#dataset-uswn-options-2").prop("checked", true);
					$("#dataset-uswn-options-1").prop("checked", true);
				} else {
					$scope.select.atLeastOneUSWN--;
					$("#dataset-uswn-options-3").prop("checked", true);
				}
			} else {
				$("#dataset-uswn-options-4").prop("checked", true);
			}
		}
		if (type == 'application_schema_water') {
			if ($("#dataset-uswn-options-5").prop("checked") == true) {
				$scope.select.atLeastOneUSWN++;
				$("#dataset-uswn-options-4").prop("checked", true);
				$("#dataset-uswn-options-3").prop("checked", true);
				$("#dataset-uswn-options-2").prop("checked", true);
				$("#dataset-uswn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSWN--;
			}
		}
		if (type == 'data_consistency') {
			var currState = $("#dataset-uswn-options-6").prop("checked");
			$("#dataset-uswn-options-6").prop("checked", !currState);
		}
		if (type == 'data_consistency_utility') {
			if ($("#dataset-uswn-options-7").prop("checked") == true) {
				$scope.select.atLeastOneUSWN++;
				$("#dataset-uswn-options-6").prop("checked", true);
				$("#dataset-uswn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSWN--;
				$("#dataset-uswn-options-6").prop("checked", false);
			}
		}
		if (type == 'information_accessibility') {
			var currState = $("#dataset-uswn-options-8").prop("checked");
			$("#dataset-uswn-options-8").prop("checked", !currState);
		}
		if (type == 'information_accessibility_utility') {
			if ($("#dataset-uswn-options-9").prop("checked") == true) {
				$scope.select.atLeastOneUSWN++;
				$("#dataset-uswn-options-8").prop("checked", true);
				$("#dataset-uswn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSWN--;
				$("#dataset-uswn-options-8").prop("checked", false);
			}
		}
		if (type == 'reference_systems') {
			var currState = $("#dataset-uswn-options-10").prop("checked");
			$("#dataset-uswn-options-10").prop("checked", !currState);
		}
		if (type == 'reference_systems_utility') {
			if ($("#dataset-uswn-options-11").prop("checked") == true) {
				$scope.select.atLeastOneUSWN++;
				$("#dataset-uswn-options-10").prop("checked", true);
				$("#dataset-uswn-options-1").prop("checked", true);
			} else {
				$scope.select.atLeastOneUSWN--;
				$("#dataset-uswn-options-10").prop("checked", false);
			}
		}
		$scope.prefillLabel();
	}

$scope.sendRunRequest = function() {
		//$scope.prefillLabel();
		var testSuiteIdToBeSent;
		var error = false;
		var label = $("#text-label-report").val();
		var testId = $("#uploadTestObjectId").val();
		var remoteFile = $("#text-input-url").val();
		var testSuiteId = $scope.restservice.testsuiteid;
		if (Array.isArray(testSuiteId)) {
			testSuiteIdToBeSent = testSuiteId;
		} else {
			testSuiteIdToBeSent = [];
			testSuiteIdToBeSent.push(testSuiteId);
		}
		if ($scope.inputTypeForTest == "upload") {
			if (testId != "") {
				var testRunRequest = {
					"label": label,
					"executableTestSuiteIds": testSuiteIdToBeSent,
					"arguments": {
						"files_to_test": ".*",
						"tests_to_execute": ".*"
					},
					"testObject": {
						"id": testId
					}
				}
			} else {
				error = true;
				alert("You must upload a file before you can start a test");
			}
		} else {
			if (remoteFile != "") {
				if ($scope.select.typeResource == "metadata") {					
				    if (remoteFile.includes("?")) {
					    var params = remoteFile.split("?");
					    var properties = [];
					    params = params[1];
					    params = params.split("&");
					    properties = params.map(param => {return param.split("=")[0].toLowerCase()});
					    if (!properties.includes("outputschema")) {
							remoteFile = remoteFile + "&outputSchema=http://www.isotc211.org/2005/gmd";
						}
					    if (!properties.includes("elementsetname")) {
							remoteFile = remoteFile + "&elementSetName=full";
						}
					} else {
						remoteFile = remoteFile+"?outputSchema=http://www.isotc211.org/2005/gmd&elementSetName=full";
					}
				}
				var txtUsername = $("#text-input-username").val();
				var txtPassword = $("#text-input-password").val();
				if ($('#file-upload-id').text().includes("Service URL")) {
					var testRunRequest = {
						"label": label,
						"executableTestSuiteIds": testSuiteIdToBeSent,
						"arguments": {},
						"testObject": {
							"username": txtUsername,
							"password": txtPassword,
							"resources": {
								"serviceEndpoint": remoteFile
							}
						}
					}
					
				} else {
					var testRunRequest = {
						"label": label,
						"executableTestSuiteIds": testSuiteIdToBeSent,
						"arguments": {},
						"testObject": {
							"resources": {
								"data": remoteFile
							}
						}
					}
				}
			} else {
				error = true;
				alert("You must specify a remote file before you can start a test");
			}
		}
		if (error == false) {
			$("#buttonStart").prop('disabled', true);
			console.log(JSON.stringify(testRunRequest));
			$(document.body).css({
				'cursor': 'wait'
			});
			var requestJSON = {
				type: "POST",
				url: $scope.urlValidator + "TestRuns",
				data: JSON.stringify(testRunRequest),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(data) {
					console.log(data);
					console.log(data.EtfItemCollection.testRuns.TestRun.id);
					location.href = "../test-run/index.html?id=" + data.EtfItemCollection.testRuns.TestRun.id;
				},
				error: function(errMsg) {
					$(document.body).css({
						'cursor': 'default'
					});
					$("#buttonStart").prop('disabled', false);
					console.log(errMsg);
					var errorMessage = "An error has occured";
					$("#baloonText3").text("ERROR");
					$("#baloonSubText3").text(errorMessage);
					$("#hidingMessage3").fadeIn(3000).animate({
						opacity: 1.0
					}, 2500).fadeOut(12000);
					progress(12, 12, $('#progressBar3'));
				}
			};
			if ($scope.serverToken != "") requestJSON.headers = { 'x-api-key': $scope.serverToken }
			$.ajax(requestJSON);
		}
	}

	$("#type-resource-1").click();
	$scope.prefillLabel();

});
