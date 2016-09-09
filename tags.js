riot.tag2('blog', '<div href="http://blog.arkham.io"></div>')

riot.tag2('content', '<div id="content" class="flex"><home if="{hash == \'#home\'}"></home><kappa if="{hash == \'#kappa\'}"></kappa><blog if="{hash == \'#blog\'}"></blog></div><footer></footer>', '', '', function(opts) {
var handleHashes, item, j, len, ref, self, setContentHeight;

self = this;

this.menu = opts.menu;

setContentHeight = function() {
  var h, hash, th, wh;
  wh = window.innerHeight;
  th = document.getElementById('top').offsetHeight;
  h = parseInt(wh) - parseInt(th) - 39;
  hash = location.hash;
  if (window.innerWidth > 844 && (hash === '#home' || hash === '#kappa')) {
    self.content.style.height = h + 'px';
  } else {
    self.content.style = '';
  }
  self.content.style.marginTop = th + 'px';
  return self.update();
};

setContentHeight();

window.addEventListener("resize", setContentHeight);

handleHashes = function() {
  var hashFound, i, j, len, ref, tab;
  self.hash = location.hash;
  hashFound = false;
  ref = this.menu;
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    tab = ref[i];
    if ('#' + tab.name === self.hash) {
      hashFound = true;
    }
    if (i === this.menu.length - 1) {
      if (hashFound === false && self.hash !== '#kappa') {
        location.hash = 'home';
      }
    }
  }
  return setContentHeight();
};

handleHashes();

window.addEventListener("hashchange", handleHashes);

ref = this.menu;
for (j = 0, len = ref.length; j < len; j++) {
  item = ref[j];
  item.active = false;
  if (this.hash === '#' + item.hash) {
    item.active = true;
  } else {
    this.menu[0].active = true;
  }
}
});

riot.tag2('footer', '<div id="footer"> &copy;2015 Black Label Data </div>', '', '', function(opts) {
});

riot.tag2('home', '<div class="home-container flex"><a href="https://arkham.io/"><div class="card"><div class="title arkham flex"><div class=""><img src="./assets/img/arkham_icon.png" alt="arkham icon"></div><div class="titleText"> Arkham </div></div></div></a><a href="#kappa"><div class="card"><div class="title kappa flex"><div class="kappaIcon"> K </div><div class="titleText"> Kappa </div></div></div></a></div>', '', '', function(opts) {
});

riot.tag2('kappa', '<div class="content"><h1>Kappa</h1><p> Kappa is a dynamically distributed database platform that has configurable storage engines and leverages a custom, SQL-like query language for data retrieval from its immutable event log backbone. </p><p> Kappa allows embedded capabilities, such as long-running analysis jobs against the database. Data is/are stored in a redundant fashion to protect against loss, while optimizing for speed. </p></div>', '', '', function(opts) {
});

riot.tag2('top', '<div id="top" class="flex"><div class="bld"> Black Label Data </div><div id="hamburger" onclick="{toggleMenu}" if="{showBurger}"><i class="fa fa-bars"></i></div><div id="tabs" class="flex" if="{showTabs}"><div class="tab {active: active}" onclick="{handleTabs}" each="{menu}"> {name} </div><a href="mailto:info@blacklabeldata.io?subject=Contact%20Request"><div class="tab"> contact us </div></a></div></div>', '', '', function(opts) {
var handleHamburger, self;

self = this;

this.menu = opts.menu;

handleHamburger = function() {
  if (window.innerWidth > 714) {
    self.showTabs = true;
    self.showBurger = false;
  } else {
    self.showTabs = false;
    self.showBurger = true;
  }
  return self.update();
};

handleHamburger();

window.addEventListener('resize', handleHamburger);

this.toggleMenu = function(e) {
  return self.showTabs = !self.showTabs;
};

this.handleTabs = function(e) {
  var i, len, ref, tab;
  ref = this.menu;
  for (i = 0, len = ref.length; i < len; i++) {
    tab = ref[i];
    if (tab.name === e.item.name) {
      tab.active = true;
    } else {
      tab.active = false;
    }
  }
  return location.hash = e.item.hash;
};
});
