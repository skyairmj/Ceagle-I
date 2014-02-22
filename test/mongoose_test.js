console.log('mongoose_test start');
var MongooseUtil = require('../service/MongooseUtil.js');


function test_insert(){
	var pipeline1 = {"gut":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":true,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"ems":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":true,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"north":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}]},"app":{"jobs":[{"name":"jruby-launcher","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-launcher/939/"}}]}}}}}} ;
	var pipeline2 = {"gut":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"FAILED","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"ems":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"north":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}]},"app":{"jobs":[{"name":"jruby-launcher","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-launcher/939/"}}]}}}}}} ;
	var pipeline3 = {"gut":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"ems":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"FAILED","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}],"submodules":{"north":{"jobs":[{"name":"jruby-rack-dist","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-rack-dist/1038/"}}]},"app":{"jobs":[{"name":"jruby-launcher","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"result":"SUCCESS","url":"http://ci.jruby.org/job/jruby-launcher/939/"}}]}}}}}} ;
//	var pipeline4 = {"GUT产品网管持续集成":{"jobs":[{"name":"GUT_AUTO_CLEAN_SERVER","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":625,"number":73,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_CLEAN_SERVER/73/"}},{"name":"GUT_AUTO_DEPLOY_CLIENT_32","buildable":true,"healthReport":[{"score":20}],"lastBuild":{"building":false,"duration":1031609,"number":91,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_CLIENT_32/91/"}},{"name":"GUT_AUTO_DEPLOY_SERVER_125","buildable":true,"healthReport":[{"score":40}],"lastBuild":{"building":false,"duration":17732922,"number":53,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_SERVER_125/53/"}},{"name":"GUT_AUTO_DEPLOY_SERVER_60.1","buildable":true,"healthReport":[{"score":40}],"lastBuild":{"building":false,"duration":17185234,"number":100,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_SERVER_60.1/100/"}},{"name":"AutoTest_EMS_Log_CreateOMMagent_32","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":469,"number":74,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/AutoTest_EMS_Log_CreateOMMagent_32/74/"}},{"name":"AutoTest_EMS_GUT_smoketest_32","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":453,"number":77,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/AutoTest_EMS_GUT_smoketest_32/77/"}}],"submodules":{"EMS子项目持续集成":{"jobs":[{"name":"GUT_AUTO_DEPLOY_REDUCE_STEP","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":328,"number":87,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_REDUCE_STEP/87/"}},{"name":"GUT_AUTO_DEPLOY_CLENT_WITHOUT_DOWNLOAD_33","buildable":true,"healthReport":[{"score":80}],"lastBuild":{"building":false,"duration":1020063,"number":12,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_CLENT_WITHOUT_DOWNLOAD_33/12/"}},{"name":"GUT_AUTO_DEPLOY_WITHOUT_DB","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"duration":3071641,"number":88,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/GUT_AUTO_DEPLOY_WITHOUT_DB/88/"}},{"name":"AutoTest_EMS_Log_CreateOMMagent_33","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":672,"number":56,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/AutoTest_EMS_Log_CreateOMMagent_33/56/"}},{"name":"AutoTest_EMS_GUT_smoketest_33","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":234,"number":58,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/AutoTest_EMS_GUT_smoketest_33/58/"}}],"submodules":{"GUT_OMMR应用":{"jobs":[{"name":"APP_AG_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":166781,"number":35,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_AG_BUILD_V12.13.40/35/"}},{"name":"APP_GSM_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":673922,"number":61,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_GSM_BUILD_V12.13.40/61/"}},{"name":"APP_GUT_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":281765,"number":50,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_GUT_BUILD_V12.13.40/50/"}},{"name":"APP_ITC_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":126797,"number":27,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_ITC_BUILD_V12.13.40/27/"}},{"name":"APP_TD_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":322562,"number":46,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_TD_BUILD_V12.13.40/46/"}},{"name":"APP_UMTSV3_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":462563,"number":64,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_UMTSV3_BUILD_V12.13.40/64/"}},{"name":"APP_UMTSV4_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":224609,"number":54,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_UMTSV4_BUILD_V12.13.40/54/"}},{"name":"APP_UROP_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":68750,"number":70,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_UROP_BUILD_V12.13.40/70/"}}]},"GUT_OMMB应用":{"jobs":[{"name":"APP_GOMMCB_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":45657,"number":73,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_GOMMCB_BUILD_V12.13.40/73/"}},{"name":"APP_GSMB_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":55500,"number":18,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_GSMB_BUILD_V12.13.40/18/"}},{"name":"APP_MEDIATOR_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":397765,"number":22,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_MEDIATOR_BUILD_V12.13.40/22/"}},{"name":"APP_SDR_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":284750,"number":24,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_SDR_BUILD_V12.13.40/24/"}},{"name":"APP_SDRMGR_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":492110,"number":245,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_SDRMGR_BUILD_V12.13.40/245/"}},{"name":"APP_TDB_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":80}],"lastBuild":{"building":false,"duration":47078,"number":33,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_TDB_BUILD_V12.13.40/33/"}},{"name":"APP_UMTSOMMB_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":201516,"number":25,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_UMTSOMMB_BUILD_V12.13.40/25/"}},{"name":"APP_UOMMCB_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":113969,"number":40,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_UOMMCB_BUILD_V12.13.40/40/"}}]},"迁站":{"jobs":[{"name":"APP_GUTST_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":11188,"number":23,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_GUTST_BUILD_V12.13.40/23/"}},{"name":"APP_OMMRTST_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":22125,"number":60,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_OMMRTST_BUILD_V12.13.40/60/"}},{"name":"APP_TTST_BUILD_V12.13.40","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":12719,"number":20,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/APP_TTST_BUILD_V12.13.40/20/"}}]},"GUT北向":{"jobs":[{"name":"ems-naf-gut-buildTest-V12.13.40","buildable":true,"healthReport":[{"score":100},{"score":100}],"lastBuild":{"building":false,"duration":200109,"number":214,"result":"SUCCESS","url":"http://10.62.57.220:8080/job/ems-naf-gut-buildTest-V12.13.40/214/"}}]}}},"OMMR子项目持续集成":{"jobs":[{"name":"AutoTest","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":0,"number":145,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/AutoTest/145/"}},{"name":"OMMR(R4V1213)_makeVersion","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":336797,"number":131,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_makeVersion/131/"}},{"name":"ZXM-OMMR(V12.13)_V4_Server_Install","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":483891,"number":157,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/ZXM-OMMR(V12.13)_V4_Server_Install/157/"}},{"name":"ZXM-OMMR(V12.13)_V4_Client","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":166454,"number":158,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/ZXM-OMMR(V12.13)_V4_Client/158/"}},{"name":"ZXM-OMMR(V12.13)_V4_Server_Start","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":131563,"number":115,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/ZXM-OMMR(V12.13)_V4_Server_Start/115/"}},{"name":"atp","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":180985,"number":164,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/atp/164/"}}],"submodules":{"地面":{"jobs":[{"name":"OMMR(R4V1213)_dev","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":84500,"number":254,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_dev/254/"},"alias":"dev"}]},"无线":{"jobs":[{"name":"OMMR(R4V1213)_rrc","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":113250,"number":123,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_rrc/123/"},"alias":"rrc"}]},"动态":{"jobs":[{"name":"OMMR(R4V1213)_ddm","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":285890,"number":208,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_ddm/208/"},"alias":"动态"}]},"性能":{"jobs":[{"name":"OMMR(R4V1213)_pft","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":34343,"number":128,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_pft/128/"},"alias":"性能"}]},"通用":{"jobs":[{"name":"OMMR(R4V1213)_quickConf","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":18281,"number":111,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_quickConf/111/"},"alias":"快配"},{"name":"OMMR(R4V1213)_mml","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":65422,"number":35,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_mml/35/"},"alias":"人机命令"},{"name":"OMMR(R4V1213)_groovy","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":86500,"number":144,"result":"SUCCESS","url":"http://10.62.100.161/jenkins/job/OMMR(R4V1213)_groovy/144/"},"alias":"约束"}]}}},"OMMB子项目持续集成":{"jobs":[{"name":"01_GU-OMMB_AutoAssemble","buildable":true,"healthReport":[{"score":60}],"lastBuild":{"building":false,"duration":1199234,"number":77,"result":"SUCCESS","url":"http://10.9.176.81:8181/CI/job/01_GU-OMMB_AutoAssemble/77/"}},{"name":"02_GU-OMMB_AutoInstall","buildable":true,"healthReport":[{"score":0}],"lastBuild":{"building":false,"duration":589062,"number":99,"result":"FAILURE","url":"http://10.9.176.81:8181/CI/job/02_GU-OMMB_AutoInstall/99/"}},{"name":"03_GU-OMMB_PrepareTest","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":221594,"number":110,"result":"SUCCESS","url":"http://10.9.176.81:8181/CI/job/03_GU-OMMB_PrepareTest/110/"}},{"name":"04_GU-OMMB_AutoTest","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":true,"duration":0,"number":153,"result":null,"url":"http://10.9.176.81:8181/CI/job/04_GU-OMMB_AutoTest/153/"}},{"name":"05_GU-OMMB_CodeCover","buildable":true,"healthReport":[{"score":100}],"lastBuild":{"building":false,"duration":7945766,"number":107,"result":"ABORTED","url":"http://10.9.176.81:8181/CI/job/05_GU-OMMB_CodeCover/107/"}}],"submodules":{}}}}};

	MongooseUtil.createRecord(new Date(2014,1,11),JSON.stringify(pipeline1));
	MongooseUtil.createRecord(new Date(2014,1,12),JSON.stringify(pipeline2));
	MongooseUtil.createRecord(new Date(2014,1,13),JSON.stringify(pipeline3));
//	MongooseUtil.createRecord(new Date(2014,1,14),JSON.stringify(pipeline4));

}

function print(e,data){
	data.forEach(function(obj){
		console.log(obj);
	});
}

function test_find(){
//MongooseUtil.findAll(print);
	var date_start = new Date(2014,1,12);
	var date_end = new Date(2014,1,14);
	MongooseUtil.findByDate(date_start,print)
	// MongooseUtil.findBetweenDate(date_start,date_end,print);
}
//MongooseUtil.deleteAll();
//test_insert();
test_find();