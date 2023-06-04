import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from 'components/Loading';
const Layout = lazy(() => import('components/pageComponents/Layout'));
const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));
const NotFoundPage = lazy(() => import('components/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
