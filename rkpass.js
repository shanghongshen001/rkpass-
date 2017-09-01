if(window.location.pathname.indexOf("anli")>0){
var a = $("body > table:nth-child(7) > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > script").attr("src");
var index1 = a.indexOf("product_id")+11;
var index2 = a.indexOf("&paper_id=");
var product_id = a.substring(index1,index2);
index1 = a.indexOf("paper_id=") + 9;
index2 = a.indexOf("&tihao");
var paper_id = a.substring(index1,index2);
index1 = a.indexOf("tihao=") + 6;
index2 = a.indexOf("&pass_per_tihao_url");
var tihao = a.substring(index1,index2);
addinfotousertk('anli',product_id,paper_id,tihao,'http://www.rkpass.cn');		
}
else{
var a = $("body > table:nth-child(7) > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > script").attr("src");
var index1 = a.indexOf("product_id")+11;
var index2 = a.indexOf("&paper_id=");
var product_id = a.substring(index1,index2);
index1 = a.indexOf("paper_id=") + 9;
index2 = a.indexOf("&tihao");
var paper_id = a.substring(index1,index2);
index1 = a.indexOf("tihao=") + 6;
index2 = a.indexOf("&pass_per_tihao_url");
var tihao = a.substring(index1,index2);
addinfotousertk('xuanze',product_id,paper_id,tihao,'http://www.rkpass.cn');		
}
