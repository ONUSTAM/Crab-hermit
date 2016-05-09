  "use strict";

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
      return 'Chrome';
    } else if ( is.firefox() ){
      return 'Firefox';
    } else if ( is.opera() ){
      return 'Opera';
    } else if ( is.safari() ){
      return 'Safari';
    } else {
      return '???';
    }
  };
  function isOs () {
    if ( is.ios() ) {
      return 'iOS';
    } else if ( is.iphone() ) {
      return 'iPhone';
    } else if ( is.ipad() ) {
      return 'iPad';
    } else if ( is.ipod() ) {
      return 'iPod';
    } else if ( is.android() ) {
      return 'Android';
    } else if ( is.androidPhone() ) {
      return 'AndroidPhone';
    } else if ( is.windows() ) {
      return 'Windows';
    } else if ( is.mac() ) {
      return 'Mac';
    } else if ( is.linux() ) {
      return 'Linux';
    } else {
      return '???';
    }
  };
  function isType () {
    if ( is.desktop() ) {
      return 'Desktop';
    } else if ( is.mobile() ) {
      return 'Mobile';
    } else {
      return '???';
    }
  };
