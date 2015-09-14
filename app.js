riot.tag('footer', '<div class="footer"> <span class="info"> info@blacklabeldata.io </span> </div>', 'footer , [riot-tag="footer"] { width: 100%; text-align: center; position: fixed; bottom: 30%; font-family: monospace; font-size: 1.4rem; color: #fff; } footer .info , [riot-tag="footer"] .info { font-size: 1.1rem; letter-spacing: 3px; opacity: 0; }', function(opts) {


});

riot.tag('logo', '<div class="logo" name="logo"> <span id="logoTxt" class="logoTxt" name="logoTxt"></span> <span name="nextTxt" class="nextTxt"></span> </div>', 'logo , [riot-tag="logo"] { width: 100%; text-align: center; } logo .logo , [riot-tag="logo"] .logo { font-family: "impactLabel"; font-size: 5rem; margin-left: auto; margin-right: auto; } logo .logoTxt , [riot-tag="logo"] .logoTxt { background-color: #fff; } logo .nextTxt , [riot-tag="logo"] .nextTxt { background-color: #fff; } }', function(opts) {
  var self = this;


  var logo = this.logo;

  var logoTxt = this.logoTxt;
  var nextTxt = this.nextTxt;















  var fadeIn = function() {
    var j = 0;

    var fi = setInterval( function(){
      var info = document.getElementsByClassName('info');

      if(j >= 1) {
        clearInterval(fi);
      }
      info[0].style.opacity = j;
      j = j+0.01;

    }, 50);
  }

  this.on('mount', function() {

    var str = "Black Label Data";
    var i = 0;

    var inc = setInterval( function() {



      logoTxt.innerHTML += str[i];
      i++;
      if(i === str.length) {
        clearInterval(inc);
        fadeIn();
      }
    }, 160);









  });

  this.on('update', function() {

    var w = window.innerWidth;




    var h = window.innerHeight;


    if(w >= 610) { // Bigger Screen
      var mt = h/3;
      logo.style.marginTop = mt + 'px';
    } else { // Portrait Mode
      var mt = h/5.5;
      logo.style.marginTop = mt + 'px';
    }

    if(w < 811 && h < 456) {
      var mt = h/8;
      logo.style.marginTop = mt + 'px';
    }

  });

  window.onresize = function(event) {
    self.update();
  };

  
});

riot.tag('navbar', '<div class="row"> <div class="nav-bar col-sm-8 col-sm-offset-2"> <a each="{ sections }" href="#{ title }" class="col-xs-3" > <button class="col-xs-12 { active: active }" type="button"> { title } </button> </a> </div> </div>', 'navbar .nav-bar , [riot-tag="navbar"] .nav-bar { margin-top: 20px; margin-bottom: 20px; height: 64px; z-index: 999; display: -ms-flexbox; display: flex; -ms-flex-align: center; align-items: center; -ms-flex-pack: justify; justify-content: center; padding: 0; } navbar .nav-bar a , [riot-tag="navbar"] .nav-bar a { padding: 0; } navbar .nav-bar button , [riot-tag="navbar"] .nav-bar button { height: 60px; background-color: #00ADD8; color: #FFF; border: none; border-right: 1px solid #0185A6; border-left: 1px solid #bbb; } navbar .nav-bar a:first-of-type button , [riot-tag="navbar"] .nav-bar a:first-of-type button { border-left: none; } navbar .nav-bar button:hover , [riot-tag="navbar"] .nav-bar button:hover { background-color: #0185A6; } navbar .nav-bar button.active , [riot-tag="navbar"] .nav-bar button.active { background-color: #0185A6; }', function(opts) {
    this.sections = [
      { title: 'Support', active: false },
      { title: 'RMA', active: false },
      { title: 'FAQ', active: false },
      { title: 'Learn', active: false }
    ];



    self = this;

    function HandleRoute(hash) {

      var match = false;

      self.sections.forEach( function(element) {
        if(element.title == hash) {
          element.active = true;
          match = true;
        } else {
          element.active = false;
        }
      });

      if(match == false) {
        riot.route('#Home');
      }

      self.update();
    }

    riot.route.exec(function(hash) {

      HandleRoute(hash);

    });

    riot.route(function(hash) {

      HandleRoute(hash);

    });

  
});
