import { useEffect, useState } from 'react';
import './App.css';
import { FetchUsers } from './FetchUsers';

function App() {
  const {loading, data} = FetchUsers()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(()=>{
    if(loading) return
    setFollowers(data[page])
  },[loading, page])

  return (
   <main>
    <div className='section-title'>
        <h1>{loading ? 'loading...' : 'Profiles'}</h1>
        <div className='underline'></div>
      </div>
   </main>
  )
}

export default App;
