import React from 'react';
import { Application, Sprite } from 'pixi.js';
import { Slide, Shap, Size } from './condom-teaching';
import { SLIDE } from './condom-teaching.config';

export const CondomTeachingPageCmp = () => {
  const canvasRef = React.useCallback(node => {
    if (node !== null) {
      console.log('game init');
      makeGame(node as HTMLCanvasElement);
    }
    return () => {
      console.log('game destory');
    };
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  );
}

function makeGame(view: HTMLCanvasElement) {
  // make app
  const app = new Application({
    view,
    width: 414,
    height: 736,
  });

  // add resource
  app.loader.add(SLIDE.map(s => s.bg));
  app.loader.load((loader, resources) => {
    const ctrl: GameCtrl = new GameCtrl(app, SLIDE);
    ctrl.onInit();
  });

}


class GameCtrl {
  currentSlide: Slide = null as any as Slide;

  constructor(
    private app: Application,
    private slides: Slide[],
  ) { }

  onInit() {
    this.currentSlide = this.slides[0];
    this.renderSlide(this.currentSlide);
  }

  go(href: string) {
    const slide = this.slides.find(s => s.id === href) as Slide;
    if (slide === this.currentSlide || !slide) {
      return;
    }
    this.currentSlide = slide;
    this.renderSlide(slide);
  }

  renderSlide(slide: Slide) {
    const texture = this.app.loader.resources[slide.bg].texture;
    const bgSize = scale(texture, this.app.screen);
    const bg = new Sprite(texture);

    bg.anchor.set(0.5);
    bg.x = this.app.screen.width / 2;
    bg.y = this.app.screen.height / 2;
    bg.width = bgSize.width;
    bg.height = bgSize.height;

    this.app.stage.removeChildren();
    this.app.stage.addChild(bg);
    this.renderButton(slide);
  }

  renderButton(slide: Slide) {
    const self = this;
    slide.btn.forEach(b => {
      const shap = b.shap as Shap;
      const btn = new Sprite();
      btn.x = shap?.x || 0;
      btn.y = shap?.y || 0;
      btn.width = shap?.w || this.app.screen.width;
      btn.height = shap?.h || this.app.screen.height;

      // bind btn event
      btn.interactive = true;
      btn.buttonMode = true;
      btn
        .on('pointertap', () => {
          self.go(b.href);
        });

      this.app.stage.addChild(btn);
    });
  }
}

function scale(origin: Size, limit: Size): Size {
  const pScale = limit.width / limit.height;
  const cScale = origin.width / origin.height;
  const resultSize: Size = {
    width: limit.width,
    height: limit.height,
  };
  if (pScale > cScale) {
    resultSize.width = Math.floor(limit.height * cScale);
  } else {
    resultSize.height = Math.floor(limit.width / cScale);
  }
  return resultSize;
};