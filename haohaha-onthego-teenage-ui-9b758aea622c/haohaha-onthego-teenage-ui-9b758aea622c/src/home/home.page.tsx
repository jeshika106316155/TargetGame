import React from 'react';
import { Link } from 'react-router-dom';
import { BaseLayout } from '../layouts/base-layout';
import { BaseHeader } from '../layouts/base-header';

export const HomePageCmp = () => {
  return (
    <BaseLayout
      header={<BaseHeader></BaseHeader>}
      body={
        <div>
          <Link to="/story">Story</Link>
          <Link to="/game/condom-teaching">保險套遊戲</Link>
        </div>
      }
    />
  );
}