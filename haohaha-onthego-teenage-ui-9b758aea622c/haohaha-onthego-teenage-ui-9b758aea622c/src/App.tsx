import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoryListPageCmp } from './story/story-list.page';
import { StoryPageCmp } from './story/story.page';
import { HomePageCmp } from './home/home.page';
import { CondomTeachingPageCmp } from './game/condom-teaching.page';

interface RouteConfig {
  path: string;
  alias?: string;
  exact?: boolean;
  component: () => JSX.Element;
}

const ROUTE_CONFIG: RouteConfig[] = [{
  path: '/',
  exact: true,
  component: HomePageCmp,
}, {
  path: '/story',
  exact: true,
  component: StoryListPageCmp,
}, {
  path: '/story/:storyId',
  component: StoryPageCmp,
}, {
  path: '/game/condom-teaching',
  component: CondomTeachingPageCmp,
}];

const App = () => {
  return (
    <Router>
      <Switch>
        {
          ROUTE_CONFIG.map((r, i) => (
            <Route key={i} exact={r.exact} path={r.path} children={<r.component />} />
          ))
        }
      </Switch>
    </Router>
  );
};

export default App;