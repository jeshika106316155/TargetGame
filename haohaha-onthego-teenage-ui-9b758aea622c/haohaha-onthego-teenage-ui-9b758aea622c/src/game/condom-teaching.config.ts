import { Slide } from './condom-teaching';

export const SLIDE: Slide[] = [{
  id: 'pregame',
  bg: '/game/1/pregame.png',
  btn: [{
    href: '1-1-1',
  }]
}, {
  id: '1-1-1',
  bg: '/game/1/1-1-1.png',
  btn: [{
    href: '1-1-2',
    shap: {
      x: 129,
      y: 157,
      w: 164,
      h: 164,
    },
  }, {
    href: '1-1-3',
    shap: {
      x: 133,
      y: 398,
      w: 164,
      h: 164,
    },
  }],
}, {
  id: '1-1-2',
  bg: '/game/1/1-1-2.png',
  btn: [{
    href: '1-2-1'
  }],
}, {
  id: '1-1-3',
  bg: '/game/1/1-1-3.png',
  btn: [{
    href: '1-1-1'
  }],
}, {
  id: '1-2-1',
  bg: '/game/1/1-2-1.png',
  btn: [{
    href: '1-2-2',
    shap: {
      x: 54,
      y: 267,
      w: 149,
      h: 54,
    },
  }, {
    href: '1-2-3',
    shap: {
      x: 54,
      y: 447,
      w: 149,
      h: 54,
    },
  }],
}, {
  id: '1-2-2',
  bg: '/game/1/1-2-2.png',
  btn: [{
    href: '1-3-1',
  }],
}, {
  id: '1-2-3',
  bg: '/game/1/1-2-3.png',
  btn: [{
    href: '1-2-1'
  }],
}, {
  id: '1-3-1',
  bg: '/game/1/1-3-1.png',
  btn: [{
    href: '1-3-2',
    shap: {
      x: 124,
      y: 216,
      w: 158,
      h: 207
    }
  }],
}, {
  id: '1-3-2',
  bg: '/game/1/1-3-2.png',
  btn: [{
    href: '1-3-3',
    shap: {
      x: 124,
      y: 216,
      w: 158,
      h: 207
    }
  }],
}, {
  id: '1-3-3',
  bg: '/game/1/1-3-3.png',
  btn: [{
    href: '1-3-4',
    shap: {
      x: 124,
      y: 216,
      w: 158,
      h: 207
    }
  }],
}, {
  id: '1-3-4',
  bg: '/game/1/1-3-4.png',
  btn: [{
    href: '1-4-1',
    shap: {
      x: 124,
      y: 216,
      w: 158,
      h: 207
    }
  }],
}];
