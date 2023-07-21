import { Box, Container, Grid, Typography } from '@mui/material';

//* COMPONENTS
import Navbar from '@/components/Navbar';
import MenuMobile from '@/components/MenuMobile';
import Presentation from '@/components/Presentation';
import Overview from '@/components/Overview';
import Articles from '@/components/Articles';
import PaginationArticles from '@/components/PaginationArticles';
import Subscription from '@/components/Subscription';
import Facts from '@/components/Facts';
import Figures from '@/components/Figures';
import Fixtures from '@/components/Fixtures';
import Feedback from '@/components/Feedback';

//* API
import { getArticles } from '@/api/getArticles';
import { getFixtures } from '@/api/getFixtures';

//* MODELS
import { IArticles } from '@/models/articles';
import { IFixtures } from '@/models/fixtures';

import {
  articlesPerPage,
  currentPage,
  setCurrentPage,
} from '../utils/paginationLogic.ts';

export default async function Home() {
  const { data }: { data: IArticles[] } = await getArticles();
  const fixtures: { data: IFixtures[] } = await getFixtures();

  return (
    <>
      {/* APP BAR */}
      <Navbar />

      {/* APP BAR Mobile Size */}
      <MenuMobile />
      {/* SECTION 1 PRESENTATION */}
      <Presentation />

      {/* SECTION 2 OVERVIEW */}
      <Overview />

      {/* SECTION 3 ARTICLES + PAGINATION */}
      <Articles articles={data} />

      {/* SECTION 4 SUBSCRIPTION */}
      <Subscription />

      {/* SECTION 5 FACTS */}
      <Facts />

      {/* SECTION 6 FIGURES */}
      <Figures />

      {/* FIXTURES */}
      <Fixtures fixtures={fixtures.data} />

      {/* SECTION 8 FEEDBACK */}
      <Feedback />
    </>
  );
}
