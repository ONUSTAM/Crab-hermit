// ページ別に読み込むモジュールや、functionを設定します

// 第一引数はURLのパス部分にマッチする正規表現
function dispatcher (path, func) {
    dispatcher.path_func = dispatcher.path_func || []
    if (func) return dispatcher.path_func.push([path, func]);
    for(var i = 0, l = dispatcher.path_func.length; i < l; ++i) { // >
        var func = dispatcher.path_func[i];
        var match = path.match(func[0]);
        match && func[1](match);
    };
};
// dispatcher(/index.html, function(){
//   $(function(){
//     // XXXXX();
//   });
// });
//dispatcher(location.pathname);
