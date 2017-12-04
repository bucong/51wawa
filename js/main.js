//toggle事件
$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggle.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggle );
};
//抓娃娃
//聊天收起展示
$('.chat label').toggle(function(){
	$(this).addClass('fa-angle-up').removeClass('fa-angle-down');
	$('.chat ul').hide();
},function(){
	$(this).addClass('fa-angle-down').removeClass('fa-angle-up');
	$('.chat ul').show();
})

//关闭结果窗口
$('.result h5 img').click(function(){
	$('.result').hide();
})

//充值
$('.recharge ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})

//娃娃详情
$('.detail .tab div').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.detail .content .list').eq($(this).index()).show().siblings().hide();
})

//客服
$('#kefu').keyup(function(e){
	if(e.keyCode==13){
		var kefu=$(this).val();
		$('.kefu ul').append('<li class="right"><span>'+kefu+'</span></li>');
		$(this).val('');
		$(document).scrollTop($(document).height()-$(window).height()); 
	}
})
