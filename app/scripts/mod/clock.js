function DigitalClock (Id) {

  function setTime () {
    $(Id).text( moment().format('YYYY/MM/DD HH:mm:ss ddd') );
  };

  var source = Rx.Observable.create(function (observer) {
      // `onNext`を使って、`num`を1000ミリ秒ずつobserverにプッシュする
      var num = 0;
      var id = setInterval(function () {
          observer.onNext(num++);
      }, 1000);

      // setTimeout(function () {
      //     // 10秒後に、「ストリームが完了した」合図を送る
      //     observer.onCompleted();
      // }, 10000);

      // もちろん、尻ぬぐいの手段を提供しないとダメです
      return function () {
          console.log('disposed');
          clearInterval(id);
      };
  });

  var subscription = source.subscribe(
      function (x) {
          // console.log('onNext: ' + );
          setTime();
      },
      function (e) {
          console.log('onError: ' + e.message);
      },
      function () {
          console.log('onCompleted');
      });

  // init
  $(function(){
    setTime();
  });
};
