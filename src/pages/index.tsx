import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Preston Parris is a <Highlight>Software Engineer</Highlight> with a focus on distributed systems and data pipelines. For fun he rides <Highlight>bicycles</Highlight>, takes <Highlight>photos</Highlight> and creates <Highlight>music</Highlight>. He currently resides in <Highlight>Sunnyvale</Highlight>, CA with his beautiful <Highlight>wife</Highlight> and newborn <Highlight>son</Highlight>.

    </Intro>
  </>
);
