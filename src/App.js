import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import NewsMu from './components/NewsMu/NewsMu';
import Chart from './components/Chart/Chart';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([])
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-07-24&sortBy=publishedAt&apiKey=ee0b2939e1fe478caa3547201b10cc1e')
  //     .then(res => res.json())
  //     .then(data => setNews(data.articles))
  // }, [])
  useEffect(() => {
    axios('https://newsapi.org/v2/everything?q=tesla&from=2021-07-24&sortBy=publishedAt&apiKey=ee0b2939e1fe478caa3547201b10cc1e')
      .then(data => setNews(data.data.articles))
  }, [])
  return (
    <div>
      <Chart></Chart>
      {
        news.map(allNews => <NewsMu news={allNews}></NewsMu>)
      }

      {
        news.map(news => <News news={news}></News>)
      }

    </div>
  )
}

export default App;
