import { Route, Routes } from 'react-router-dom';

import Layout from 'components/pageComponents/Layout';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
