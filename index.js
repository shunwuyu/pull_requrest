var dropload = $('.inner').dropload({
  domUp : {
      domClass   : 'dropload-up',
      domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
      domUpdate  : '<div class="dropload-update">↑释放更新</div>',
      domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
  },
  domDown : {
      domClass   : 'dropload-down',
      domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
      domUpdate  : '<div class="dropload-update">↓释放加载</div>',
      domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
  },
  loadUpFn : function(me){
      alert("上拉刷新操作");
      me.resetload();
  },
  loadDownFn : function(me){
       alert("下拉刷新操作");
       me.resetload();
  }
});
