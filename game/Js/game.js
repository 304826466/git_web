var script_1 =[['市','巿'],['未','末'],['人','入'],['扑','朴'],['荷','菏'],['重','童'],['住','往'],['无','天'],['怕','拍'],['泪','汨'],['岗','岚'],['时','吋'],['市','巿'],['能','熊'],['器','嚣'],['荏','茬'],['鍚','锡'],['扺','抵'],['薄','簿'],['廷','延'],['骛','鹜']];

var script_2 =[['珈','茄'],['大','太'],['用','甩'],['诏','沼'],['帅','师'],['尸','户'],['皿','血'],['今','令'],['坏','环'],['矢','失'],['斤','斥'],['干','于'],['午','牛'],['妯','伷'],['氏','氐'],['茶','荼'],['胄','胃'],['昴','昂'],['毐','毒'],['畲','畲']];

var script_3 =[['花','苑'],['休','体'],['祆','袄'],['违','讳'],['已','己'],['占','古'],['活','话'],['尤','龙'],['给','恰'],['艮','良'],['代','伐'],['刀','刃'],['厂','广'],['篮','蓝'],['耍','耎'],['春','舂'],['辨','辩'],['沓','杳'],['毫','亳'],['瑷','瑗']];

var script_4 =[['白','百'],['风','凤'],['幻','幼'],['桂','佳'],['土','士'],['甲','申'],['设','投'],['石','右'],['喝','渴'],['竞','竟'],['冶','治'],['同','问'],['又','叉'],['贝','见'],['宭','窘'],['瓣','辫'],['街','衔'],['篼','蔸'],['拔','拨'],['祇','祗']];

var script_5 =[['日','曰'],['堤','提'],['银','狠'],['洗','冼'],['灼','妁'],['自','目'],['技','枝'],['爪','瓜'],['候','侯'],['杭','抗'],['准','淮'],['休','体'],['王','玉'],['戊','戉'],['翰','斡'],['兔','免'],['耽','眈'],['篾','蔑'],['暧','暖'],['媛','嫒']];

$(function(){
	$("table").on('click','#yes',function(){
		var grades=$(".game_main").attr("grade");
		$("#Time .left").html("第"+grades+"关");
		changegrade();		
	})
	
	$("#abc").click(function(){
		$(this).hide();
		$(".table_main").show();
		changegrade();			
		fun_timedown(60);	
	})
	
	$(".btn_main .left").click(function(){
		$("#bg").css({'z-index':111});
		$("#bg").html("<div class='clearfix'><img src='image/jiantou.png'> </div><p>请点击右上角</br>点击【分享到朋友圈】</br>测测好友的文盲程度吧。</p> ");
		$("#bg").addClass("guanbi");
		
		
	})
	
	$("#bg").click(function(){
		if($(this).hasClass('guanbi')) {
			$("#bg").css({'z-index':99});
			$("#bg").html("");
		}
	})
	

	
	$(".btn_main .right").click(function(){
		$(".bg_main").hide();
		$("#bg").hide();
		$(".game_main").attr("grade","1");
		var grades=$(".game_main").attr("grade");
		$("#Time .left").html("第"+grades+"关");
		changegrade();		
		fun_timedown(60);									 
	})
})

function fun_timedown(time)
{
    $("#Time .right").html("还剩00:"+time+"秒");
	if(time<10){
		
    $("#Time .right").html("还剩00:0"+time+"秒");
		}
    time = time-1;
    if(time>=0)
    {
        setTimeout("fun_timedown("+time+")",1000);
    }
	else
    {
		var hei=$(window).height();
		$("#bg").height(hei);
		$("#bg").show();
		
		var num1=$(".game_main").attr("grade");
		var num2=parseInt(num1)-1;
		var math=Math.round(num2/2);
		$(".p1").text("你完成了第"+num2+"关！");
		switch (math){
	 		case 1:
			    $("#tit").text("lv0现在的石头也会玩手机了");
				$(".p2").text("lv0现在的石头也会玩手机了");
				$(".head_icon img").attr("src","image/lv0.jpg");
				break;
	  		case 2:
				$("#tit").text("lv1虾兵的战斗力都有5，你还不如它");
				$(".p2").text("lv1虾兵的战斗力都有5，你还不如它");
				$(".head_icon img").attr("src","image/lv1.jpg");
				break;
			case 3:
				$("#tit").text("lv2你的战斗力是被吊打的红孩儿");
				$(".p2").text("lv2你的战斗力是被吊打的红孩儿");
				$(".head_icon img").attr("src","image/lv2.jpg");
				break;
			case 4:
				$("#tit").text("lv3你的战斗力是小钻风，大王叫你去巡山啦");
				$(".p2").text("lv3你的战斗力是小钻风，大王叫你去巡山啦");
				$(".head_icon img").attr("src","image/lv3.jpg");
				break;
			case 5:
				$("#tit").text("lv4你的战斗力是银角大王，叫你一声你敢答应么");
				$(".p2").text("lv4你的战斗力是银角大王，叫你一声你敢答应么");
				$(".head_icon img").attr("src","image/lv4.jpg");
				break;
			case 6:
				$("#tit").text("lv5你的战斗力是牛魔王，赶紧回家给老婆干活去");
				$(".p2").text("lv5你的战斗力是牛魔王，赶紧回家给老婆干活去");
				$(".head_icon img").attr("src","image/lv5.jpg");
				break;
			case 7:
				$("#tit").text("lv6你的战斗力是忧郁的御弟哥哥");
				$(".p2").text("lv6你的战斗力是忧郁的御弟哥哥");
				$(".head_icon img").attr("src","image/lv6.jpg");
				break;
			case 8:
				$("#tit").text("lv7你的战斗力是沙师弟，师傅被妖怪捉走啦");
				$(".p2").text("lv7你的战斗力是沙师弟，师傅被妖怪捉走啦");
				$(".head_icon img").attr("src","image/lv7.jpg");
				break;
			case 9:
				$("#tit").text("lv8你的战斗力是八戒，师傅，我饿");
				$(".p2").text("lv8你的战斗力是八戒，师傅，我饿");
				$(".head_icon img").attr("src","image/lv8.jpg");
				break;
			case 10:
				$("#tit").text("lv9您的战斗力是三只眼的杨戬，确定不算开挂？");
				$(".p2").text("lv9您的战斗力是三只眼的杨戬，确定不算开挂？");
				$(".head_icon img").attr("src","image/lv9.jpg");
				break;
			default :
				$("#tit").text("lv10你的战斗力是火眼金睛的大师兄，特效很酷炫");
				$(".p2").text("lv10你的战斗力是火眼金睛的大师兄，特效很酷炫");
				$(".head_icon img").attr("src","image/lv10.jpg");
				break;
			}
		
		$(".bg_main").show();
    }
}

function changegrade(){
		var oldgrade=$(".game_main").attr("grade");
		var newgrade=parseInt(oldgrade)+1;
		$(".game_main").attr("grade",newgrade);
		$("#game_table").children().remove();
		for (var i=0;i<newgrade&&i<6;i++){
			var $tr=$("<tr id='tr_"+i+"'></tr>");
			$tr.appendTo("#game_table");  
			for (var j=0;j<newgrade&&j<6;j++){
				var math=parseInt(Math.random()*5)+1;
				switch (math)
				  {
				 case 1:
					var $td=$("<td style="+"font-family:SimSun"+"></td>");
					break;
				  case 2:
					var $td=$("<td style="+"font-family:SimHei"+"></td>");
					break;
				  case 3:
					var $td=$("<td style="+"font-family:Microsoft YaHei"+"></td>");
					break;
				  case 4:
					var $td=$("<td style="+"font-family:KaiTi"+"></td>");
					break;
				  case 5:
					var $td=$("<td style="+"font-family:PMingLiU"+"></td>");
					break;
				  case 6:
					var $td=$("<td style="+"font-family:DFKai-SB"+"></td>");
					break;
				  }
				$td.appendTo("#tr_"+i);
			}
		}
		var tableWidth=parseInt($("#game_table").width());
		if(newgrade>6){
			$("#game_table tr").height(tableWidth/6);
			$("#game_table td").width(tableWidth/6);
		}else {
			$("#game_table tr").height(tableWidth/newgrade);
			$("#game_table td").width(tableWidth/newgrade);	
		}
		
		var que=parseInt(Math.random()*5)+1;
		var ques=eval("script_"+que);
		$("#game_table td").text(ques[newgrade-2][0]);
		var x=parseInt($("#game_table td").length);
        var rand = parseInt(Math.random()*x);
		$("#game_table td").eq(rand).text(ques[newgrade-2][1]).attr("id","yes");
}