riot.tag2('blog', '<div a href="http://blog.arkham.io"></div>')

riot.tag2('content', '<div id="content" class="flex"><home if="{hash == \'#home\'}"></home><kappa if="{hash == \'#kappa\'}"></kappa></div><footer></footer>', '', '', function(opts) {
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

riot.tag2('post1', '<div class="content"><div class="date">May 5, 2016</div><h1>Treatise on Digital Privacy - Part 1</h1><div class="quote"> I started with this idea in my head, “There’s two things I’ve got a right to… death or liberty.” </div><div class="attribution"> - Harriet Tubman </div><p> Arkham Storage was conceived with the purpose of enhancing digital privacy and therefore liberty. Harriet Tubman said that she started with the right to two things, death or liberty. One rarely thinks of liberty until it is threatened. At Black Label Data, we think about liberty every day. The right to digital privacy is a huge part of liberty, as more and more of our lives are digitized and stored. To this end, we are designing a simple, easy to use, secure, zero-knowledge file store. It is our passion and effort that is bringing this to you. </p><div class="quote"> Civilization is the progress toward a society of privacy. The savage’s whole existence is public, ruled by the laws of his tribe. Civilization is the process of setting man free from men. </div><div class="attribution"> - Ayn Rand, The Fountainhead (1943) </div><p> The relationship between privacy and liberty is innate. We are trying to keep humanity’s personal information safe from prying, digital eyes. Privacy, in fact, enhances liberty in innumerable ways. Personal health records, financial information, surgery photos, unpopular or secret writings, intimate correspondence, legal documents, DNA sequences, and more should be concealed with certainty, and only to be shared selectively. Confidence of privacy enables us to make more choices while protecting us from risk. Voting by the secret ballot is one example where privacy enables a person to assert their human rights without fear of repercussions. In other applications, such as the keeping of trade secrets, privacy can be essential to one’s livelihood. </p><div class="quote"> We are all controlled by the world in which we live, and part of that world has been and will be constructed by men. The question is this: are we to be controlled by accident, by tyrants, or by ourselves in effective cultural design? </div><div class="attribution"> - B. F. Skinner </div><p> If the right to digital privacy is important to you, then it is important to exercise it. As B. F. Skinner said, “we are all controlled by the world in which we live, and part of that world has been and will be constructed by men.” This means that YOU also can construct the world around you. This is how culture is defined. A culture that values privacy will suffer fewer harrassments, injustices, and financial losses. </p><p> There are enemies of privacy, and many are nefarious actors. Their goals are personal gain, political gain or the ruination of others. The consequences of these nefarious actors are a loss of privacy and therefore of liberty, and lead to a gap in what society can achieve. </p><div class="quote"> We only want that which is given naturally to all peoples of the world, to be masters of our own fate, only of our fate, not of others, and in cooperation of others. </div><div class="attribution"> - Golda Meir </div><p> Technology can provide privacy and liberty, and we’ve made it our job to bring this offering to you, the consumer. Digital privacy is guaranteed only to those who choose to exercise their rights. We are building a digital solution to enable this for all. Freedom, however, comes with a price. We have server bills to pay. We want to make enough money to launch other projects that empower our digital lives. We want to use our livelihood to empower the digital masses. That is what Arkham is all about. </p><p> Stay tuned for Part 2 of Arkham Storage’s Treatise on Digital Privacy. </p></div>', '', '', function(opts) {
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
