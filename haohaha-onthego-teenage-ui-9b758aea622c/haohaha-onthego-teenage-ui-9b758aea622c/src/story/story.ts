export interface Stroyboard {
  storyId: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  takes: Take[];
}

export interface Take {
  takeId: string;
  screen: string;
  actions?: TakeAction[];
}

export interface TakeAction {
  to: string;
  label: string;
}
