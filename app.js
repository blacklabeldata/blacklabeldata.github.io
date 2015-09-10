riot.tag('footer', '<div class="footer"> <span class="info"> info@blacklabeldata.io </span> </div>', 'footer , [riot-tag="footer"] { width: 100%; text-align: center; margin-top: 10%; font-family: monospace; font-size: 1.4rem; color: #fff; } footer .info , [riot-tag="footer"] .info { font-size: 1.2rem; letter-spacing: 3px; }', function(opts) {


});

riot.tag('logo', '<div class="logo" name="logo"> <span class="logoTxt">Black Label Data</span> <div class="ani"> <span>B</span> <span>l</span> <span>a</span> <span>c</span> <span class="eow">k</span> <span>L</span> <span>a</span> <span>b</span> <span>e</span> <span class="eow">l</span> <span>D</span> <span>a</span> <span>t</span> <span>a</span> </div> </div>', 'logo , [riot-tag="logo"] { width: 100%; text-align: center; } logo .logo , [riot-tag="logo"] .logo { font-family: "impactLabel"; font-size: 5rem; margin-left: auto; margin-right: auto; } logo .ani , [riot-tag="logo"] .ani { display: none; } logo .ani span , [riot-tag="logo"] .ani span { background-color: #fff; float:left; } logo .space , [riot-tag="logo"] .space { margin-right: 0; } logo .logoTxt , [riot-tag="logo"] .logoTxt { background-color: #fff; } @media all and (max-width: 634px) { logo body , [riot-tag="logo"] body { background: #ccc; } }', function(opts) {
  var self = this;

  var txt = this.logo







  this.on('update', function() {

    var w = window.innerWidth;
    console.log("w = " + w);



    var h = window.innerHeight;
    console.log("h = " + h);

    if(w >= 610) {
      var mt = h/3;
      txt.style.marginTop = mt + 'px';
    } else {
      var mt = h/5.5;
      txt.style.marginTop = mt + 'px';
    }

    if(w < 811 && h < 456) {
      var mt = h/8;
      txt.style.marginTop = mt + 'px';
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
