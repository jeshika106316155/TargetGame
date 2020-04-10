import { Stroyboard, Take } from './story';
import a001jpg from '../assets/story/a/001.jpg';
import a002jpg from '../assets/story/a/002.jpg';
import a003jpg from '../assets/story/a/003.jpg';
import a004jpg from '../assets/story/a/004.jpg';
import a005jpg from '../assets/story/a/005.jpg';
import a006jpg from '../assets/story/a/006.jpg';
import a007jpg from '../assets/story/a/007.jpg';
import a008jpg from '../assets/story/a/008.jpg';
import a009jpg from '../assets/story/a/009.jpg';
import a010jpg from '../assets/story/a/010.jpg';
import a011jpg from '../assets/story/a/011.jpg';

export class StoryService {

  private config: Stroyboard[];

  constructor() {
    this.config = STORIES;
  }

  async getOneTake(params: TakeParams): Promise<Take> {
    const story = this.config.find(c => c.storyId === params.storyId);
    const take = story?.takes.find(c => c.takeId === params.takeId)
        || story?.takes[0];
    if (!take) {
      throw new Error(`Not found story "${params.storyId}" take "${params.takeId}".`)
    }
    return take as Take;
  }

  async getStory(): Promise<Stroyboard[]> {
    return this.config;
  }
};

export interface TakeParams {
  storyId?: string;
  takeId?: string;
}

const STORIES: Stroyboard[] = [{
  storyId: 'a',
  thumbnail: a001jpg,
  title: '喵喵蟲咖波 001',
  description: '描述可愛又可怕，像貓又像蟲的謎樣生物咖波，治癒你的心，吃光你的肉。溫馨獵奇的日常故事就此展開！',
  takes: [{
    takeId: '001',
    screen: a001jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=002'
    }]
  }, {
    takeId: '002',
    screen: a002jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=003'
    }],
  }, {
    takeId: '003',
    screen: a003jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=004'
    }],
  }, {
    takeId: '004',
    screen: a004jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=005'
    }],
  }, {
    takeId: '005',
    screen: a005jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=006'
    }],
  }, {
    takeId: '006',
    screen: a006jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=007'
    }],
  }, {
    takeId: '007',
    screen: a007jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=008'
    }],
  }, {
    takeId: '008',
    screen: a008jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=009'
    }],
  }, {
    takeId: '009',
    screen: a009jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=010'
    }],
  }, {
    takeId: '010',
    screen: a010jpg,
    actions: [{
      label: 'next',
      to: '/story/a?takeId=011'
    }],
  }, {
    takeId: '011',
    screen: a011jpg,
    actions: [{
      label: 'restart',
      to: '/story/a'
    }],
  }],
}];
