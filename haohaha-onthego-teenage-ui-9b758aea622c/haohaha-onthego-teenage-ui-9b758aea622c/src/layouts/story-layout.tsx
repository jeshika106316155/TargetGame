import React from 'react';
import './story-layout.scss';

interface StoryLayoutProps {
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
}

export const StoryLayout = (props: StoryLayoutProps) => {
  const { header, body, footer } = props;
  return (
    <div className="story-layout">
      <div className="story-layout-container">
        <header className="row-s1 row-1 col-s1 col-1">
          {header ? header : null}
        </header>
        <main className="row-s1 row-full col-s1 col-1">
          {body ? body : null}
        </main>
        <footer className="row-end row-1 col-s1 col-1">
          {footer ? footer : null}
        </footer>
      </div>
      <div className="story-layout-bg" />
    </div>
  )
};
