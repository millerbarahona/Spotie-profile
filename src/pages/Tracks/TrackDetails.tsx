import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Track } from "../../models"
import { userStore } from "../../state"
import { getTrack } from "../../utilities"
import {Helmet} from "react-helmet"

interface Props {
  trackId: string
}

function TrackDetails() {
  const userState = userStore()
  const { idTrack } = useParams()
  const [track, setTrack] = useState<Track | undefined>()

  useEffect(() => {
    getTrack({id: idTrack!, code: userState.actualUser.access_token}).then((track) => setTrack(track))
  }, [])
  console.log(track?.preview_url)
  
  return (
    <div>
      <Helmet>
        {
          track ? 
          <title>{track?.name} - {track?.artists[0].name}</title>
          :
          <title>Spotify Profile</title>
        } 
      </Helmet>
      
      <h1>{track?.name} - {track?.artists[0].name}</h1>
      <h3>{track?.album.name}</h3>
      <img src={track?.album.images[1].url} alt="" />
      <div>
      {
        track ? (
          <audio controls>
            <source src={track?.preview_url} type='audio/mp3' />
          </audio>
        ): null
      }
      </div>
      <a href={track?.external_urls.spotify} target='_blanck'><button >Play on Spotify</button></a>

    </div>
  )
}

export default TrackDetails