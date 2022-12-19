import "../css/video.css";


function Video({videos}){
    let playVideo=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="24px" width="24px" fill="#fff"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
     return(
        <div className="videomain">
          {
            videos.map((item,index)=>{ 
                return(
                    <div  className="videoimage" style={{backgroundImage:`url(${item.image})`}}>
                      <a href="/">{playVideo}</a>
                        <p>{item.name}</p>
                    </div>
                )
          })
          }
        </div>
     )
}
export default Video