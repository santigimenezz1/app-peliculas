import YouTube from "react-youtube";
import CloseIcon from '@mui/icons-material/Close';

const Video = ( {openVideo, closeVideo, showVideo, setShowVideo, videoId, estadoBotonCerrar, setEstadoBotonCerrar} )=>{
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const cerrarVideo = ()=>{
   setEstadoBotonCerrar(false)
   closeVideo()
  }
    return (
        <div style={{ position:"relative"}}>
          {
          estadoBotonCerrar && (
            
          <div onClick={()=>cerrarVideo()} style={{position:"absolute", right:"0%", top:"0%", width:"30px", height:"30px", border:"4px solid red", cursor:"pointer", backgroundColor:"white", fontWeight:"bold", borderRadius:"4px" }}>
            <CloseIcon />
          </div>

          )
          }
            {
                showVideo && (
                <div className='videoYoutube'>
                  <YouTube videoId={videoId} opts={opts} onEnd={closeVideo} />
                </div>
              )}
        </div>
    )
}

export default Video