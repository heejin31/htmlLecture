$(document).ready(function(){
$(".thumbs em").hide();
$(".thumbs a").click(function(){
		$("#caption").remove();
		var path = $(this).attr("href");
		$("#largeImg > img").attr({ src: path });
		var msg = $(this).next("em").text();  /* next(em) ���� ���� ��� �� em ��常 ����*/
	
	$("#largeImg").append("<div id='caption'></div>");
	$("#largeImg #caption").text(msg);
	//console.log($("#largeImg #caption").css("height"));
	var posy=$("#largeImg #caption").height()+25; /* �ڸ��� ���̴� ���� �������� ���� �̹Ƿ� ���⿡ ĸ�ǰ� ���� �̹�����
	 ����, �е�, �������� ���� �� ���� ������ ��� ��. ������ ĸ���� �е��� ��, �Ʒ� 10px�� ���� �̹����� �е� �Ʒ��� 5 */
	$("#largeImg #caption").animate({top:"-="+posy+"px"},300)  /* ĸ���� top ��ġ�� ���� ��ġ���� ĸ���� ���̿� 25�� ����
	������ 0.3�ʸ��� �ڿ������� �ø�.*/
	return false;
});
});
