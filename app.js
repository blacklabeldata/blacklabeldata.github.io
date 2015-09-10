riot.tag('faq', '<div class="text-center col-xs-12" if="{ loc == \'FAQ\' }"> <h1>loc = { loc }</h1> </div>', 'faq , [riot-tag="faq"] { color: #FFF; }', function(opts) {

  var self = this;

  riot.route.exec(function(hash) {

    self.loc = hash;
    self.update();

  });

  riot.route(function(hash) {

    self.loc = hash;
    self.update();

  })

  
});


riot.tag('logo', '<div id="logoTxt" name="logoTxt">  <span>B</span> <span>l</span> <span>a</span> <span>c</span> <span>k</span> <span class="space"></span> <span>L</span> <span>a</span> <span>b</span> <span>e</span> <span>l</span> <span class="space"> </span> <span>D</span> <span>a</span> <span>t</span> <span>a</span> </div>', 'logo , [riot-tag="logo"] { width: 100%; text-align: center; background-color: pink; } logo #logoTxt span , [riot-tag="logo"] #logoTxt span { font-family: "impactLabel"; font-size: 5rem; float: left; } logo .space , [riot-tag="logo"] .space { margin-right: 20px; }', function(opts) {
  var self = this;

  var txt = this.logoTxt

  this.on('mount', function() {
    var h = window.innerHeight;
    console.log(h) // Succeeds, fires once (per mount)

  });

  this.on('update', function() {

    var w = window.innerWidth;
    var ml = w/2 - 375;
    txt.style.marginLeft = ml + 'px';

    var h = window.innerHeight;
    var mt = h/2 - 50;
    txt.style.marginTop = mt + 'px';

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

riot.tag('page-header', '<div class="row"> <div class="header-wrapper col-sm-8 col-sm-offset-2"> <a href="#" class="pull-left"> <img class="seys-logo img-responsive" src="assets/img/logo extend your senses_white.svg" alt="Synapse extend your senses logo and back-to-homepage link"> </a> <button if="{ !auth }" type="button" class="pull-right col-sm-2" onclick="{ login }" >Sign In</button> <button if="{ auth }" type="button" class="pull-right col-sm-2" onclick="{ logout }" >Sign Out</button> </div> </div>', 'page-header .header-wrapper , [riot-tag="page-header"] .header-wrapper { height: 100px; margin-top: 40px; margin-bottom: 20px; } page-header .seys-logo , [riot-tag="page-header"] .seys-logo { height: 100px; } page-header button , [riot-tag="page-header"] button { width: 100%; height: 60px; color: #FFF; border: none; padding: 15px; margin-top: 20px; background-color: #00ADD8; position:relative; left: 15px; } page-header button:active , [riot-tag="page-header"] button:active { background-color: #0185A6; }', function(opts) {
    this.login = function() {
      this.auth = true;
    }.bind(this);

    this.logout = function() {
      this.auth = false;
    }.bind(this);
  
});

riot.tag('rma', '<div class="text-center col-xs-12" if="{ loc == \'RMA\' }"> <h1>loc = { loc }</h1> </div>', 'rma , [riot-tag="rma"] { color: #FFF; }', function(opts) {

  var self = this;

  riot.route.exec(function(hash) {

    self.loc = hash;
    self.update();

  });

  riot.route(function(hash) {

    self.loc = hash;
    self.update();

  })

  
});

riot.tag('support', '<div class="row" if="{ loc == \'Support\' }"> <div id="help" class="col-sm-8 col-sm-offset-2"> <button type="button" class="pull-left" onclick="{ hideHelp }"> <i class="material-icons">close</i> </button> <h1 class="text-center">Help Title</h1> <div class="row"> <p class="col-sm-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est. </p> <div class="text-center col-sm-6"> <img src="assets/img/dim10-100.png" alt=""> </div> </div> <div class="row"> <div class="text-center col-sm-6"> <img src="assets/img/dim10-150.png" alt=""> </div> <p class="col-sm-6"> Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui. </p> </div> <div class="row"> <p class="col-sm-6"> Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna. </p> <div class="text-center col-sm-6"> <img src="assets/img/dim10-250.png" alt=""> </div> </div> <p class="col-sm-6"> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel. </p> <p class="col-sm-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est. </p> <pclass="col-sm-6"> Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui. </p> <p> Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna. </p> <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel. </p> </div> <div class="prog"> <div class="prog-wrap col-sm-offset-2 col-sm-8"> <div id="progressBar"></div> </div> <div class="prog-wrap col-sm-offset-2 col-sm-8"> <div id="pbLabel1" class="pb-label text-right"> <i class="material-icons pb-dot">lens</i> <span>Step 1</span> </div> <div id="pbLabel2" class="pb-label text-right"> <i class="material-icons pb-dot">lens</i> <span>Step 2</span> </div> <div id="pbLabel3" class="pb-label text-right"> <i class="material-icons pb-dot">lens</i> <span>Step 3</span> </div> </div> </div> <div class="content-wrapper col-sm-8 col-sm-offset-2"> <h1 id="prompt1" class="col-sm-10 col-sm-offset-2"> What Can We Help You With? </h1> <h1 id="prompt2" class="text-center prompt col-sm-10 col-sm-offset-2"> Do any of these help? </h1> <h1 id="prompt3" class="prompt col-sm-10 col-sm-offset-2"> How can we reproduce the problem? </h1> <h1 id="prompt4" class="prompt col-sm-10 col-sm-offset-2"> We\'re creating a help ticket... </h1> <form class="form-horizontal col-xs-12" onsubmit="{ handleSubmit }"> <div class="form-group form-group-lg col-sm-12"> <label for="env" class="col-sm-2 control-label"> Product </label> <div class="col-sm-4"> <select class="form-control input-lg" id="env" onchange="{ step1 }"> <option>Choose...</option> <option each="{ products }" value="{ name }" >{ name }</option> </select> </div> </div> <div id="step3Form"> <div class="form-group form-group-lg col-sm-12"> <label for="description" class="col-sm-2 control-label"> Description </label> <div class="col-sm-10"> <textarea class="form-control ta" id="description" placeholder="Steps to reproduce the problem..."></textarea> </div> </div> <div class="form-group form-group-lg col-sm-12"> <label for="inputFile" class="col-sm-2 control-label">Upload</label> <div class="col-sm-10"> <input type="file" id="inputFile"> </div> </div> <div class="form-group form-group-lg col-sm-12"> <div class="bottom-buttons col-sm-offset-2 col-sm-10"> <button type="submit" class="pull-right col-xs-2" > Submit </button> <button type="button" class="cancel-button pull-right col-xs-2" > Cancel </button> </div> </div> </div> </form> <div class="col-sm-offset-6 col-sm-6"> <div id="helps" class="col-xs-12"> <button each="{ helpList }" type="button" onclick="{ parent.showHelp }" class="text-center col-xs-10 col-xs-offset-1" > { name } </button> <button type="button" id="nope" onclick="{ step2 }" class="text-center col-xs-10 col-xs-offset-1" > None of these help... </button> </div> </div> <div id="uploading" class="text-center col-xs-12"> <i class="material-icons">cloud_upload</i> </div> </div> </div>', 'support , [riot-tag="support"] { color: #FFF; } support .content-wrapper , [riot-tag="support"] .content-wrapper { background-color: rgba(1, 133, 166, 0.75); color: #FFF; padding: 30px 30px 0 30px; text-shadow:0 2px 2px rgba(0,0,0,0.5); } support .prompt , [riot-tag="support"] .prompt { margin-bottom: 40px; opacity: 0; display: none; letter-spacing: 0.1em; } support .content-wrapper form , [riot-tag="support"] .content-wrapper form { padding: 20px; } support #description , [riot-tag="support"] #description { height: 200px; } support .form-group-lg .form-control , [riot-tag="support"] .form-group-lg .form-control { border-radius: 0; } support button , [riot-tag="support"] button { height: 60px; background-color: #00ADD8; color: #FFF; border: none; } support button:active , [riot-tag="support"] button:active { background-color: #0185A6; } support .cancel-button , [riot-tag="support"] .cancel-button { background-color: #FF8A65; margin-right: 30px; } support #helps , [riot-tag="support"] #helps { position: relative; top: -102px; margin-bottom: -80px; font-size: 24px; line-height: 2em; padding: 10px; height: 0; display: none; opacity: 0; } support #helps a , [riot-tag="support"] #helps a { color: white; } support #helps button , [riot-tag="support"] #helps button { margin: 10px; } support #nope , [riot-tag="support"] #nope { background-color: #FF8A65; } support #inputFile , [riot-tag="support"] #inputFile { height: 47px; } support .prog , [riot-tag="support"] .prog { height: 40px; margin: 20px 0; padding: 0; } support .prog-wrap , [riot-tag="support"] .prog-wrap { padding: 0; height: 24px; } support #progressBar , [riot-tag="support"] #progressBar { background-color: #FFF; height: 5px; margin-bottom: 23px; border-radius: none; width: 0; } support .pb-label , [riot-tag="support"] .pb-label { padding: 0; opacity: 0; width: 0; float: left; } support .pb-label span , [riot-tag="support"] .pb-label span { position: relative; top: -15px; left: 20px; } support .pb-dot , [riot-tag="support"] .pb-dot { position: relative; top: -33px; left: 55px; } support #help , [riot-tag="support"] #help { background-color: #ddd; color: #333; position: absolute; right: -50%; top: 0; z-index: 999; box-shadow: 0 3px 10px 6px #ddd; width: 50%; height: 100%; padding: 30px; overflow-y: scroll; overflow-x: hidden; display: none; opacity: 0; } support #help p , [riot-tag="support"] #help p { margin: 30px 0; } support #help button , [riot-tag="support"] #help button { padding: 0 20px; position: relative; left: -30px; top: -30px; } support #step3Form , [riot-tag="support"] #step3Form { margin-top: 20px; display: none; opacity: 0; } support #uploading , [riot-tag="support"] #uploading { display: none; opacity: 0; } support .hide , [riot-tag="support"] .hide { display: none; opacity: 0; }', function(opts) {

  var self = this;

  riot.route.exec(function(hash) {

    self.loc = hash;
    self.env.value = 'Choose...';
    self.update();

  });

  riot.route(function(hash) {

    self.loc = hash;
    self.env.value = 'Choose...';
    self.update();

  });

  this.products = [
    { name: "DIM10-100"},
    { name: "DIM10-150"},
    { name: "DIM10-250"},
    { name: "LP400"},
    { name: "SS420"},
    { name: "LP420"},
    { name: "E15"},
    { name: "E20"},
    { name: "DK200"},
    { name: "SM/RF200"},
    { name: "SM/RF220"},

    { name: "SNAP-OS"},
    { name: "PORTAL"}
  ];

  this.helpList = [
    {
      name: "Quick Start Guide",
      link: "#"
    },
    {
      name: "Most Common Issue",
      link: "#"
    },
    {
      name: "Second Most Common Issue",
      link: "#"
    },
    {
      name: "Third Most Common Issue",
      link: "#"
    }

  ]

  this.step1 = function(e) {
    this.prompt1.classList.add('hide');

    TweenMax.to('#progressBar', 0.5, {css:{width: '25%', opacity: 1}});


    TweenMax.to('#pbLabel1', 0.5, {css:{width: '25%', opacity: 1}});

    TweenMax.to('#prompt2', 1, {css:{height: 'auto', display:'inline',opacity:1}});

    TweenMax.to('#helps', 1, {css:{height: 'auto', display:'inline',opacity:1}});

  }.bind(this);

  this.showHelp = function(e) {
    console.log('SHOW');

    TweenMax.to('#help', 0.5, {css:{display:'inline',opacity:1, right:0}});
  }.bind(this);

  this.hideHelp = function(e) {
    console.log('HIDE');

    TweenMax.to('#help', 0.5, {css:{right:'-50%', opacity:0, display:'none'}});
  }.bind(this);

  this.step2 = function(e) {
    this.prompt2.classList.add('hide');

    TweenMax.to('#progressBar', 0.5, {css: {width: '50%', opacity: 1}});

    TweenMax.to('#pbLabel2', 0.5, {css: {width: '25%', opacity: 1}});

    TweenMax.to('#prompt3', 0.2, {css:{display:'inline',opacity:1}});

    TweenMax.to('#helps', 0.2, {css:{display:'none',opacity:0}});

    TweenMax.to('#step3Form', 0.5, {css:{display:'inline',opacity:1}});

  }.bind(this);

  this.CreateJIRAticket = function() {

    TweenMax.to('.content-wrapper', 0.5, {css:{height:500}})
    TweenMax.to('#uploading', 0, {css:{display:'inline',opacity:1}});

    var k = 25;

    setInterval(function () {

      TweenMax.to('#uploading i', 0.2, {css:{fontSize: k+'em'}});

      k = k - 10;

      if(k < 5) {

        k = 25;
      }

    }, 800);

  }.bind(this);

  this.handleSubmit = function(e) {
    this.prompt3.classList.add('hide');

    TweenMax.to('#progressBar', 0.5, {css: {width: '75%', opacity: 1}});

    TweenMax.to('#pbLabel3', 0.5, {css: {width: '25%', opacity: 1}});

    TweenMax.to('form', 0.5, {css:{display:'none',opacity:0}});

    TweenMax.to('#prompt4', 0.2, {css:{display:'inline',opacity:1}});

    this.CreateJIRAticket();

  }.bind(this);



  
});
