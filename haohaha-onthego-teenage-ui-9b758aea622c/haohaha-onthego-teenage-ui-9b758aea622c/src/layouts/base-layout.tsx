import React from 'react';
import './base-layout.scss';

interface BaseLayoutProps {
  aside?: JSX.Element;
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const { aside, header, body, footer } = props;

  return (
    <div className="base-layout">
      <div className="base-layout-container">
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
      <aside>
        {aside ? aside : null}
      </aside>
    </div>
  )
};
