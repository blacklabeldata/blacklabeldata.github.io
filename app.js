riot.tag('footer', '<div class="footer"> <span class="info"> info@blacklabeldata.io </span> </div>', 'footer , [riot-tag="footer"] { width: 100%; text-align: center; position: fixed; bottom: 30%; font-family: monospace; font-size: 1.4rem; color: #fff; } footer .info , [riot-tag="footer"] .info { font-size: 1.1rem; letter-spacing: 3px; opacity: 0; }', function(opts) {


});

riot.tag('header', '<div class="logo" name="logo"> <span id="logoTxt" class="logoTxt" name="logoTxt"> <a href="#">Black Label Data</a> </span> </div> <div class="email" onclick="{ sendEmail }"> <span class="emailTxt">email us</span> <i class="material-icons">email</i> </div>', 'header , [riot-tag="header"] { height: 182px; width: 100%; position: fixed; left: 0; top: 0; z-index: 999; background-color: #000; } header .logo , [riot-tag="header"] .logo { display: inline-block; font-family: "impactLabel"; font-size: 4rem; text-align: left; width: 80%; height: 8rem; margin-top: 50px; } header .logoTxt , [riot-tag="header"] .logoTxt { background-color: #fff; margin-left: 60px; } header .logoTxt a , [riot-tag="header"] .logoTxt a { color: #000; } header .email , [riot-tag="header"] .email { float: right; width: 20%; color: #fff; background-color: #000; font-family: SansSerifFLF; font-size: 2rem; text-align: center; margin-top: 65px; cursor: pointer; } header .email i , [riot-tag="header"] .email i { font-size: 2rem; margin: 0 60px 0 0; position: relative; top: 5px; left: 5px; } header .emailTxt , [riot-tag="header"] .emailTxt { } }', function(opts) {
  var self = this;


  var logo = this.logo;

  var logoTxt = this.logoTxt;
  var nextTxt = this.nextTxt;
  var email = this.email;
  var mt = '0';

  this.sendEmail = function() {
    var p1 = 'info';
    var p2 = '@';
    var p3 = 'blacklabeldata';
    var p4 = '.io';
    var addr = p1+p2+p3+p4
    var subject = 'Info Request from blacklabeldata.io';
    window.location.href = 'mailto:' + addr + '?subject=' + subject;
  }.bind(this);

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

riot.tag('home', '<div name="content" class="content"> <span class="vision"> You have the <span class="skyblue">vision.</span> </span> <span class="bricks"> We have the <span class="yellow">bricks.</span> </span> <a href="#form"> <button class="hook" type="button" name="button"> Click to start building your <span class="emerald">Wonderland.</span> </button> </a> </div> <form onsubmit="{ contact }" class="form"> <a id="form"></a> <input name="contactName" onkeyup="{ edit }" class="input"> <button __disabled="{ !text }">Add #{ items.length + 1 }</button> </form> ', 'home , [riot-tag="home"] { } home .content , [riot-tag="home"] .content { padding: 60px 0; margin: 180px 0 30px 0; font-size: 3rem; font-family: SansSerifFLF; background-color: #333; color: #ddd; text-align: center; } home .content span , [riot-tag="home"] .content span { width: 50%; padding: 60px 0 80px 0; } home .vision , [riot-tag="home"] .vision { float: left; } home .skyblue , [riot-tag="home"] .skyblue { color: #87CEEB; } home .bricks , [riot-tag="home"] .bricks { float: right; } home .yellow , [riot-tag="home"] .yellow { color: #FFDF00; } home .emerald , [riot-tag="home"] .emerald { color: #55D43F; } home .hook , [riot-tag="home"] .hook { font-size: 3rem; text-align: center; margin-bottom: 60px; background-color: transparent; font-family: SansSerifFLF; color: #ddd; padding: 10px; border: none; } home .hook:hover , [riot-tag="home"] .hook:hover { border-left: 1px solid #666; border-top: 1px solid #666; background-color: #222; cursor: pointer; } home .hook:active , [riot-tag="home"] .hook:active { background-color: #111; border: none; border-bottom: 1px solid #666; border-right: 1px solid #666; } home .form , [riot-tag="home"] .form { height: 700px; } }', function(opts) {

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

    var content = this.content;

  
});

riot.tag('intro', '<div class="intro" name="intro"> <span id="introTxt" class="introTxt" name="introTxt"></span> <span name="nextTxt" class="nextTxt"></span> </div> <div class="email" name="email"> info@blacklabeldata.io </div> <audio autoplay> <source src="./assets/av/typewriter.ogg" type="audio/ogg"> Your browser does not support the audio element. </audio>', 'intro , [riot-tag="intro"] { } intro .intro , [riot-tag="intro"] .intro { font-family: "impactLabel"; font-size: 4rem; width: 100%; text-align: center; } intro .introTxt , [riot-tag="intro"] .introTxt { background-color: #fff; } intro .nextTxt , [riot-tag="intro"] .nextTxt { background-color: #fff; } intro .email , [riot-tag="intro"] .email { font-size: 1.1rem; font-family: monospace; color: #fff; letter-spacing: 3px; opacity: 0; margin-top: -36px; margin-right: 30px; float: right; } }', function(opts) {
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

riot.tag('pitch', '<div name="hook" class="hook"> <p> You\'ve got the vision. </p> <p> We\'ve got the <span>yellow bricks.</span> </p> <p class="mainhook"> Click that link in the upper right,<br> and Let\'s </p> </div> <div name="pitch" class="pitch" id="pitch"> </div>', 'pitch , [riot-tag="pitch"] { } pitch .pitch , [riot-tag="pitch"] .pitch { margin-top: 180px; padding: 10px; font-size: 7rem; font-family: "bricks"; color: #fff; opacity: 0; text-align: left; } pitch .hook , [riot-tag="pitch"] .hook { margin-top: 180px; font-size: 2rem; font-family: timeburner; color: #DDD; } pitch .hook p , [riot-tag="pitch"] .hook p { padding: 60px; } pitch .mainhook , [riot-tag="pitch"] .mainhook { font-size: 3rem; text-align: center; }', function(opts) {

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
      window.scrollTo(0, 0);
      fadeIn(hook);
    }, 20000);

  
});
