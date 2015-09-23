riot.tag('footer', '<div class="footer"> <span class="info"> info@blacklabeldata.io </span> </div>', 'footer , [riot-tag="footer"] { width: 100%; text-align: center; position: fixed; bottom: 30%; font-family: monospace; font-size: 1.4rem; color: #fff; } footer .info , [riot-tag="footer"] .info { font-size: 1.1rem; letter-spacing: 3px; opacity: 0; }', function(opts) {


});

riot.tag('header', '<div id="headWrap"> <div class="logo" name="logo"> <span id="logoTxt" class="logoTxt" name="logoTxt">Black Label Data</span> </div> <div class="email" name="email"> info@blacklabeldata.io </div> </div>', 'header , [riot-tag="header"] { width: 100%; position: fixed; left: 0; top: 0; z-index: 999; } header .logo , [riot-tag="header"] .logo { font-family: "impactLabel"; font-size: 5rem; text-align: left; } header .logoTxt , [riot-tag="header"] .logoTxt { background-color: #fff; margin-left: 30px; } header .email , [riot-tag="header"] .email { font-size: 1.1rem; font-family: monospace; color: #fff; letter-spacing: 3px; margin-top: -34px; margin-right: 30px; float: right; } header #headWrap , [riot-tag="header"] #headWrap { opacity: 0; padding-top: 15px; } }', function(opts) {
  var self = this;


  var logo = this.logo;

  var logoTxt = this.logoTxt;
  var nextTxt = this.nextTxt;
  var email = this.email;
  var mt = '0';

  var w = window.innerWidth;
  var h = window.innerHeight;

  var fadeIn = function(tgt) {
    var j = 0;

    var fi = setInterval( function(){

      if(j >= 1) {
        clearInterval(fi);
      }
      tgt.style.opacity = j;
      j = j+0.01;

    }, 10);
  }

  this.on('mount', function() {

  });

  this.on('update', function() {

    if(w <= 1000) { // "Black Label Data" won't fit
      logoTxt.innerHTML = 'BLD';
      email.style.marginTop = '5px';
      email.style.fontSize = '0.8rem';
      email.style.marginRight = '15px';
    }













  });

  window.onresize = function(event) {
    self.update();
  };

  
});

riot.tag('intro', '<div class="intro" name="intro"> <span id="introTxt" class="introTxt" name="introTxt"></span> <span name="nextTxt" class="nextTxt"></span> </div> <div class="email" name="email"> info@blacklabeldata.io </div> <audio autoplay> <source src="./assets/av/typewriter.ogg" type="audio/ogg"> Your browser does not support the audio element. </audio>', 'intro , [riot-tag="intro"] { } intro .intro , [riot-tag="intro"] .intro { font-family: "impactLabel"; font-size: 5rem; width: 100%; text-align: center; } intro .introTxt , [riot-tag="intro"] .introTxt { background-color: #fff; } intro .nextTxt , [riot-tag="intro"] .nextTxt { background-color: #fff; } intro .email , [riot-tag="intro"] .email { font-size: 1.1rem; font-family: monospace; color: #fff; letter-spacing: 3px; opacity: 0; margin-top: -36px; margin-right: 30px; float: right; } }', function(opts) {
  var self = this;

  var intro = this.intro;
  var introTxt = this.introTxt;
  var nextTxt = this.nextTxt;
  var email = this.email;
  var mt = '0';

  var w = window.innerWidth;
  var h = window.innerHeight;

  var fadeIn = function(tgt) {
    var j = 0;

    var fi = setInterval( function(){

      if(j >= 1) {
        clearInterval(fi);
      }
      tgt.style.opacity = j;
      j = j+0.01;

    }, 10);
  }

  this.on('mount', function() {

    var str = "Black Label Data";
    var i = 0;

    var inc = setInterval( function() {
      introTxt.innerHTML += str[i];
      i++;
      if(i === str.length) {
        clearInterval(inc);
      }
    }, 160);

    var rearrange = setTimeout( function() {

      var translate = setInterval( function() {
        if(mt <= 60){
          clearInterval(translate);
          intro.style.marginTop = '60px';

          if(w < 1000) { // smaller Screen
            introTxt.innerHTML = 'BLD';
          }
        }

        mt -= 15;
        intro.style.marginTop = mt + 'px';

      }, 20);

  }, 4300);


    var makeRoom4Header = setTimeout( function() {

      intro.style.display = 'none';

      var hw = document.getElementById('headWrap');
      fadeIn(hw);
      hw.style.backgroundColor = '#000';

      var revealContent = setTimeout( function() {
        var pitch = document.getElementById('pitch');
        fadeIn(pitch);
      }, 500);

    }, 5000);

  });

  this.on('update', function() {

    if(w >= 610) { // Bigger Screen
      mt = h/3;
      intro.style.marginTop = mt + 'px';
    } else { // Portrait Mode
      mt = h/5.5;
      intro.style.marginTop = mt + 'px';
    }

    if(w < 811 && h < 456) {
      mt = h/8;
      intro.style.marginTop = mt + 'px';
    }

  });

  window.onresize = function(event) {
    self.update();
  };

  
});

riot.tag('pitch', '<div name="pitch" class="pitch" id="pitch"> </div> <div name="hook" class="hook"> <p> If building the tools to analyze your data is not the best use of your talent, get in touch with us. </p> <p class="mainhook"> We&#8217;d love to help you <br> Do what you do best. </p> </div>', 'pitch , [riot-tag="pitch"] { } pitch .pitch , [riot-tag="pitch"] .pitch { margin-top: 180px; padding: 10px; font-size: 8rem; font-family: "bricks"; color: #fff; opacity: 0; text-align: left; } pitch .hook , [riot-tag="pitch"] .hook { opacity: 0; margin-top: 0; padding: 60px; font-size: 3rem; font-family: impactLabelReversed; color: #DDD; } pitch .hook p , [riot-tag="pitch"] .hook p { padding: 60px; } pitch .mainhook , [riot-tag="pitch"] .mainhook { font-size: 4rem; text-align: center; }', function(opts) {

    var fadeIn = function(tgt) {
      var j = 0;

      var fi = setInterval( function(){

        if(j >= 1) {
          clearInterval(fi);
        }
        tgt.style.opacity = j;
        j = j+0.01;

      }, 10);
    }

    var pitch = this.pitch;
    var hook = this.hook;

    var p = 'You want to follow your yellow brick road, not build it yourself. We want to help expedite your adventures.';

    var ps = p.split(" ")

    var k = 0;      // iterator
    var ml = 200;  // margin left
    var w = window.innerWidth
    var inc = 100; // increment

    var t = 400; // time
    var c = 255; // color

    var wait = setTimeout( function() {

      var walk = setInterval( function() {







        pitch.innerHTML += '<div style="margin-left: ' + ml + 'px; color: rgba(255,255,' + c + ',1)">' + ps[k] + '</div>';

        k++;
        ml += inc;
        c -= 14;
        if(ml > w-500 || ml < 200) {
          inc = -inc;
        }
        if(k === ps.length) {
          clearInterval(walk);
        }


      }, t);

    }, 6600);

    var finish = setTimeout(function() {
      pitch.style.display = "none";
      fadeIn(hook);
    }, 20000);

  
});
