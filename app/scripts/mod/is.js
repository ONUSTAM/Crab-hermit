$(function(){
  "use strict";
  //To stydy 'is.js'
  // var ar = is.array([]);
  // console.log(ar);

  function uAgent() {
    return {
      browser: isBrowser(),
      os: isOs(),
      type: isType()
    };
  };
  function isBrowser () {
    if ( is.ie() ){
    } else if ( is.chrome() ){
      return 'chrome';
    } else if ( is.firefox() ){
      return 'firefox';
    } else if ( is.opera() ){
      return 'opera';
    } else if ( is.safari() ){
      return 'safari';
    } else {
      return '???';
    }
  };
  function isOs () {
    if ( is.ios() ) {
      return 'ios';
    } else if ( is.iphone() ) {
      return 'iphone';
    } else if ( is.ipad() ) {
      return 'ipad';
    } else if ( is.ipod() ) {
      return 'ipod';
    } else if ( is.android() ) {
      return 'android';
    } else if ( is.androidPhone() ) {
      return 'androidPhone';
    } else if ( is.windows() ) {
      return 'windows';
    } else if ( is.mac() ) {
      return 'mac';
    } else if ( is.linux() ) {
      return 'linux';
    } else {
      return '???';
    }
  };
  function isType () {
    if ( is.desktop() ) {
      return 'desktop';
    } else if ( is.mobile() ) {
      return 'mobile';
    } else {
      return '???';
    }
  };

  console.log(uAgent());
});
