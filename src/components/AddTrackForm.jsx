import React, { useState } from 'react'

function AddTrackForm({ tracks, updateTracks }) {
  const [newTrack, setNewTrack] = useState({
    "title" : "",
    "artist" : "",
    "BPM" : "",
    "image": "",
  })

  function handleChange(e){
    if(e.target.name === "image") {setNewTrack({...newTrack, image: e.target.value})}
    if(e.target.name === "title") {setNewTrack({...newTrack, title: e.target.value})}
    if(e.target.name === "artist") {setNewTrack({...newTrack, artist: e.target.value})}
    if(e.target.name === "BPM") {setNewTrack({...newTrack, BPM: parseInt(e.target.value)})}
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(newTrack)
    })
      .then(resp => resp.json())
      .then(data => updateTracks([...tracks, data]))
    
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input value={newTrack.image} type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
          <input value={newTrack.title} type="text" name="title" placeholder="title" onChange={handleChange}/>
          <input value={newTrack.artist} type="text" name="artist" placeholder="Artist" onChange={handleChange}/>
          <input value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={handleChange}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm