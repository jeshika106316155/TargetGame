import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { StoryLayout } from '../layouts/story-layout';
import { StoryService, TakeParams } from './story.service';
import { Take } from './story';

export const StoryPageCmp = () => {
  const storyService = new StoryService();
  const params: any = useParams<TakeParams>();
  new URLSearchParams(useLocation().search)
    .forEach((v, k) => {
      params[k] = v;
    });
  const [take, setTake] = React.useState<Take>({ takeId: '', screen: '' });

  React.useEffect(() => {
    storyService.getOneTake(params)
      .then(setTake)
      .catch(console.error);
    return () => {
    };
  }, [params, storyService]);

  return (
    <StoryLayout
      header={
        <Link to="/story">close</Link>
      }
      body={
        <div className="take-screen">
          {
            (take.actions?.length === 1)
              ? <Link to={take.actions[0].to} className="take-action">
                <img className="img-response" src={take.screen} alt="" />
              </Link>
              : <img className="img-response" src={take.screen} alt="" />
          }
        </div>
      }
      footer={
        <div className="take-action-bar">
          {
            take.actions?.map((a, i) => (
              <Link key={i} to={a.to} className="take-action">
                {a.label}
              </Link>
            ))
          }
        </div>
      }
    />
  );
};
