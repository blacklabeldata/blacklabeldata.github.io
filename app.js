riot.tag('footer', '<div class="footer"> <span class="info"> info@blacklabeldata.io </span> </div>', 'footer , [riot-tag="footer"] { width: 100%; text-align: center; position: fixed; bottom: 30%; font-family: monospace; font-size: 1.4rem; color: #fff; } footer .info , [riot-tag="footer"] .info { font-size: 1.1rem; letter-spacing: 3px; opacity: 0; }', function(opts) {


});

riot.tag('header', '<div class="logo" name="logo"> <span id="logoTxt" class="logoTxt" name="logoTxt"> <a href="#">Black Label Data</a> </span> </div> <div class="email" onclick="{ sendEmail }"> <span class="emailTxt">email us</span> <i class="material-icons">email</i> </div>', 'header , [riot-tag="header"] { height: 182px; width: 100%; position: fixed; left: 0; top: 0; z-index: 999; background-color: #000; } header .logo , [riot-tag="header"] .logo { display: inline-block; font-family: "impactLabel"; font-size: 4rem; text-align: left; width: 80%; height: 8rem; margin-top: 50px; } header .logoTxt , [riot-tag="header"] .logoTxt { background-color: #fff; margin-left: 60px; } header .logoTxt a , [riot-tag="header"] .logoTxt a { color: #000; } header .email , [riot-tag="header"] .email { float: right; width: 20%; color: #fff; background-color: #000; font-family: SansSerifFLF; font-size: 2rem; text-align: center; margin-top: 65px; cursor: pointer; } header .email i , [riot-tag="header"] .email i { font-size: 2rem; margin: 0 60px 0 0; position: relative; top: 5px; left: 5px; } @media screen and (max-width: 1181px) { header .emailTxt , [riot-tag="header"] .emailTxt { display: none; } } @media screen and (max-width: 831px) { header .logoTxt , [riot-tag="header"] .logoTxt { font-size: 3rem; } } @media screen and (max-width: 692px) { header , [riot-tag="header"] { height: 80px; } header .logo , [riot-tag="header"] .logo { height: 0; margin-top: 0; } header .logoTxt , [riot-tag="header"] .logoTxt { font-size: 2rem; } header .email , [riot-tag="header"] .email { height: 0; margin-top: 25px; } header .email i , [riot-tag="header"] .email i { font-size: 2rem; } } @media screen and (max-width: 499px) { header .logo , [riot-tag="header"] .logo { height: 0; margin-top: 0; } header .logoTxt , [riot-tag="header"] .logoTxt { font-size: 1.5rem; } header .email , [riot-tag="header"] .email { height: 0; margin-top: 25px; } header .email i , [riot-tag="header"] .email i { font-size: 1.5rem; } } @media screen and (max-width: 405px) { header .logo , [riot-tag="header"] .logo { height: 0; margin-top: 0; } header .logoTxt , [riot-tag="header"] .logoTxt { font-size: 1.2rem; margin-left: 30px; } header .email , [riot-tag="header"] .email { height: 0; margin-top: 25px; } header .email i , [riot-tag="header"] .email i { font-size: 1.2rem; } } }', function(opts) {
  var self = this;


  var logo = this.logo;

  var logoTxt = this.logoTxt;


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



















  });

  window.onresize = function(event) {
    self.update();
  };

  
});

riot.tag('home', '<div name="content" class="content"> <div class="products"> <h1>Products</h1> </div> <hr> <div class="manifesto"> <h1>Kappa DB</h1> <p> Our flagship product, KappaDB, is a dynamically distributed database platform that has configurable storage engines and leverages a custom, SQL-like query language for data retrieval from its immutable event log backbone. KappaDB allows embedded capabilities such as long running analysis jobs against the database and data is stored in a redundant fashion to protect against data loss while optimizing for speed. </p> <div class="tri"> <div class="triTop"> <span class="tritle"> Simple </span> <div class="ill"> <i class="material-icons">thumb_up</i> </div> </div> <ul> <li>Architecture</li> <li>Query Language</li> <li>Replication Built-in</li> </ul> </div> <div class="tri middle"> <div class="triTop"> <span class="tritle"> Fast </span> <div class="ill"> <i class="material-icons">schedule</i> </div> </div> <ul> <li>Linear Scalability</li> <li>Gentle Learning Curve</li> <li>Binary Protocol</li> </ul> </div> <div class="tri"> <div class="triTop"> <span class="tritle"> Intuitive </span> <div class="ill"> <i class="material-icons">accessibility</i> </div> </div> <ul> <li>UI/UX</li> <li>SQL-like Commands</li> <li>Unidirectional Data Flow</li> </ul> </div> </div> <a id="form"> <hr> </a> <form onsubmit="{ contact }" class="form"> <h1>Contact Us</h1> <div class="formGroup"> <label for="name">Name</label> <input id="name" name="name" required placeholder="Your Name"> </div> <div class="formGroup"> <label for="org">Org</label> <input id="org" name="org" placeholder="Your Organization (optional)"> </div> <div class="formGroup"> <label for="email">Email</label> <input id="email" name="email" type="email" required placeholder="Your Email Address"> </div> <div class="formGroup"> <label id="msgLabel" for="msg">Msg</label> <textarea id="msg" name="msg" required placeholder="Your message..."></textarea> </div> <div class="formGroup"> <button class="btn"> <span class="formBtnTxt">Send</span> <i class="material-icons">send</i> </button> </div> </form> ', 'home , [riot-tag="home"] { } home .content , [riot-tag="home"] .content { padding: 60px 0; margin-top: 180px; font-size: 3rem; font-family: SansSerifFLF; background-color: white; color: black; text-align: center; } home .content div , [riot-tag="home"] .content div { padding: 30px 0; } home .vision , [riot-tag="home"] .vision { text-align: left; width: 90%; margin-left: 60px; } home .blue , [riot-tag="home"] .blue { color: #7AACF3; font-weight: bold; } home .bricks , [riot-tag="home"] .bricks { width: 100%; text-align: center; } home .yellow , [riot-tag="home"] .yellow { color: #F3AC3E; font-weight: bold; } home .emerald , [riot-tag="home"] .emerald { color: #42BF26; font-weight: bold; } home .hookWrapper , [riot-tag="home"] .hookWrapper { width: 95%; margin-right: 5%; text-align: right; } home .hook , [riot-tag="home"] .hook { font-size: 3rem; text-align: right; font-family: SansSerifFLF; padding: 10px; } home .manifesto , [riot-tag="home"] .manifesto { margin-top: 60px; margin-left: auto; margin-right: auto; background-color: #fff; font-family: SansSerifFLF; } home .manifesto h1 , [riot-tag="home"] .manifesto h1 { padding: 15px 0; text-align: center; background-color: white; font-family: Quango; } home .manifesto p , [riot-tag="home"] .manifesto p { width: 80%; margin-left: 10%; font-size: 1.4rem; } home .tri , [riot-tag="home"] .tri { width: 33%; display: inline-block; background-color: white; color: black; margin: 60px 0; font-family: SansSerifFLF; font-size: 2rem; text-align: center; } home .middle , [riot-tag="home"] .middle { width: 31%; border-left: 1px solid #eee; border-right: 1px solid #eee; } home .tritle , [riot-tag="home"] .tritle { border-bottom: 1px solid gray; padding-bottom: 10px; margin-bottom: 60px; font-family: Quango; } home .ill , [riot-tag="home"] .ill { margin: 30px 0; font-size: 4rem; } home .ill i , [riot-tag="home"] .ill i { font-size: 4rem; } home .tri ul , [riot-tag="home"] .tri ul { text-align: left; list-style-type: none; margin-left: auto; margin-right: auto; } home .tri li , [riot-tag="home"] .tri li { margin-bottom: 20px; } home .form , [riot-tag="home"] .form { padding: 30px; background-color: white; color: black; text-align: center; font-family: SansSerifFLF; } home .form h1 , [riot-tag="home"] .form h1 { margin-top: 30px; margin-bottom: 30px; } home .formGroup , [riot-tag="home"] .formGroup { width: 100%; min-height: 50px; margin: 20px 0; } home label , [riot-tag="home"] label { display: inline-block; width: 10%; height: 30px; text-align: right; margin-right: 10px; position: relative; bottom: 5px; } home #msgLabel , [riot-tag="home"] #msgLabel { bottom: 42px; } home input , [riot-tag="home"] input { display: inline; width: 60%; height: 50px; font-family: SansSerifFLF; font-size: 2rem; line-height: 2.2rem; border: 1px solid gray; } home textarea , [riot-tag="home"] textarea { display: inline; width: 60%; height: 90px; font-family: SansSerifFLF; font-size: 2rem; line-height: 2.2rem; } home .btn , [riot-tag="home"] .btn { background-color: #f9f9f9; color: #333; border-top: 1px solid #eee; border-left: 1px solid #eee; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; } home .btn:active , [riot-tag="home"] .btn:active { background-color: #f1f1f1; border-top: 1px solid #ccc; border-left: 1px solid #ccc; border-right: 1px solid #eee; border-bottom: 1px solid #eee; } home .form i , [riot-tag="home"] .form i { position: relative; top: 7px; left: 5px; } home .form button , [riot-tag="home"] .form button { padding-bottom: 10px; margin-right: 14%; float: right; } @media screen and (max-width: 1165px) { home li , [riot-tag="home"] li { font-size: 1.5rem; } } @media screen and (max-width: 820px) { home li , [riot-tag="home"] li { font-size: 1rem; } } @media screen and (max-width: 692px) { home .content , [riot-tag="home"] .content { margin-top: 60px; } home .vision , [riot-tag="home"] .vision { width: 100%; margin-left: 0; text-align: center; } home .hookWrapper , [riot-tag="home"] .hookWrapper { width: 100%; margin-right: 0; text-align: center; } home .hook , [riot-tag="home"] .hook { text-align: center; } home .tri , [riot-tag="home"] .tri { width: 100%; } home .triTop , [riot-tag="home"] .triTop { width: 50%; float: left; margin-top: 36px; } home li , [riot-tag="home"] li { font-size: 1.8rem; } } @media screen and (max-width: 597px) { home .triTop , [riot-tag="home"] .triTop { width: 100%; float: none; margin-top: 0; } home .tri ul , [riot-tag="home"] .tri ul { padding: 0; text-align: center; } home input, [riot-tag="home"] input,home textarea , [riot-tag="home"] textarea { font-size: 1.2rem; } } }', function(opts) {

  this.contact = function() {
    var p1 = 'info';
    var p2 = '@';
    var p3 = 'blacklabeldata';
    var p4 = '.io';
    var addr = p1+p2+p3+p4

    var name = this.name;
    var org = this.org;
    var email = this.email;
    var msg = this.msg;

    var subject = 'Contact Request from ' + name + ' @ ' + 'org';


    name = '';
    org = '';
    email = '';
    msg = '';
  }.bind(this);

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
