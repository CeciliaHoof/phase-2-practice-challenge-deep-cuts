import React,{ useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [trackList, setTrackList] = useState([])
  const [searchBy, setSearchBy] = useState('')

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
      .then(resp => resp.json())
      .then(data => setTrackList(data))
  }, [])
  
  const filteredTracks = trackList.filter(track => (
    track.artist.toLowerCase().includes(searchBy) || track.title.toLowerCase().includes(searchBy)
  ))

  return (
    <div>
      <Search tracks={trackList} setSearchBy={setSearchBy}/>
      <AddTrackForm tracks={trackList} updateTracks={setTrackList}/>
      <TracksList tracks={filteredTracks}/>
    </div>
  )
}

export default TracksPage