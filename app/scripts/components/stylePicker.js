'use strict';

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
