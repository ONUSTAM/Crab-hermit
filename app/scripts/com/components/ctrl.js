'use strict';

function componentsCtrl () {

  function outLogKV (Id, key, val) {
    // <div id="[Id]"><p>
    //   <span class="h6">[key] : </span>
    //   <span>[val]</span>
    // </p></div>
    $(Id)
      .append(
        $('<span/>')
        .append(
          $('<span/>')
            .text(key + ' : ')
        )
        .append(
          $('<span/>')
            .text(val)
        )
        .append(
          $('<br/>')
        )
      );
  }

  function outuptEatch (Id, Obj, outLog) {
    _.each(Obj, function(val, key) {
      outLog(Id, key, val);
    });
  }

  function stylePicker () {
    var $color, $combined, $h1, $size, $text, bind, color, size, text;

    $h1 = $('h1');
    $text = $('.text>input');
    $size = $('.size>input');
    $color = $('.color>input');
    $combined = $('#combined');

    text = new Rx.BehaviorSubject($text.val());
    size = new Rx.BehaviorSubject($size.val());
    color = new Rx.BehaviorSubject($color.val());

    text.subscribe(function (val) {
      $h1.text(val);
    });

    size.subscribe(function (val) {
      $h1.css('font-size', val + 'px');
    });

    color.subscribe(function (val) {
      $h1.css('color', val);
    });

    function bind (eType, elem, subject) {
      Rx.Observable.fromEvent(elem, eType).subscribe(function (e) {
        subject.onNext(e.target.value);
      });
    }

    text.combineLatest(size, color, function (eText, eSize, eColor) {
      return 'eText: ' + eText + '<br>eSize: ' + eSize + 'px<br>eColor: ' + eColor;
      }).subscribe(function (val) {
        return $combined.html(val);
      });

    bind('keyup', $text, text);
    bind('keyup change', $size, size);
    bind('change', $color, color);
  }

  function clickAltkey () {
    var clickStream = Rx.Observable.fromEvent(document, 'mouseup');
    clickStream
        .buffer(clickStream.throttle(250))
        .map(function(x) {return x.length; })
        .filter(function(n) {return n >= 2; })
        .subscribe(function(n) {console.log(n + 'click'); });

    var btnClicks = Rx.Observable.fromEvent($('#btn'), 'click');
    btnClicks
        .filter(function (value) {
            return value.altKey;
        })
        .subscribe(function () {
            console.log('Altキーを押しながらクリックしたね！');
        });
  }

  // init
  (function(){
    outuptEatch( '#uAgent', uAgent(), outLogKV );

    DigitalClock('#digitalClock');

    clickAltkey();

    stylePicker();
  })();
}
