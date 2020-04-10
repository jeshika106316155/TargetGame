import React from 'react';
import './story-list.page.scss';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Stroyboard } from './story';
import { StoryService, TakeParams } from './story.service';
import { BaseLayout } from '../layouts/base-layout';
import { BaseHeader } from '../layouts/base-header';

export const StoryListPageCmp = () => {
  const storyService = new StoryService();
  const params: any = useParams<TakeParams>();
  new URLSearchParams(useLocation().search)
    .forEach((v, k) => {
      params[k] = v;
    });
  const [list, setList] = React.useState<Stroyboard[]>([]);

  React.useEffect(() => {
    storyService.getStory()
      .then(setList)
      .catch(console.error);
    return () => {
    };
  }, [params, storyService]);

  return (
    <BaseLayout
      header={<BaseHeader></BaseHeader>}
      body={
        <ul className="story-list">
          {list.map((s, i) => (
            <li key={i}>
              <Link to={`/story/${s.storyId}`}>
                <div className="story-card">
                  <div className="stoy-thumb flex align-c-c col-s1 col-1 row-s1 row-2">
                    <img src={s.thumbnail} className="img-response" alt="" />
                  </div>
                  <div className="col-s2 row-s1">
                    <h3>{s.title || 'Untitled'}</h3>
                  </div>
                  <div className="col-s2 row-s2">
                    <p>{s.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    />
  );
}
