import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed } from '@mui/icons-material';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => (
  <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Feed />}></Route>
            <Route exact path='/video/:id' element={<VideoDetail/>}></Route>
            <Route exact path='/channel/:id' element={<ChannelDetail />}></Route>
            <Route exact path='/search/:searchTerm' element={<SearchFeed />}></Route>
        </Routes>

      </Box>
    </BrowserRouter>
);

export default App
