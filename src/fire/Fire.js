class sigleFire {
  constructor(options) {
    if (!options) { options = {}; }
    this.ctx = options.ctx;
  }
};

class Fire {
  constructor(options) {
    if (!options) { options = {}; }
    this.width = options.width || 233;
    this.height = options.height || 233;
    let dom = document.createElement('canvas');
    dom.setAttribute('width', this.width);
    dom.setAttribute('height', this.width);
    this.ctx = dom.getContext('2d');
    this.dom = dom;
    this.init();
  }

  init() { }
};

export default Fire;
