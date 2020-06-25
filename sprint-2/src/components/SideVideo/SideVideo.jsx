import React from 'react'
import './SideVideo.scss'

function SideVideo({sideData}){
    return (
      <div className="up-next">
        <h5 className="up-next__header">NEXT VIDEO</h5>
        {sideData.map(item =>{
          return (
            <div key={item.id} className="up-next__card">
              <div className="up-next__img-container">
                <img src={process.env.PUBLIC_URL + item.image} alt="" className="up-next__img"/>
              </div>
              <div className="up-next__text">
              <h3 className="up-next__text-title">{item.title}</h3>
              <p>{item.channel}</p>
              </div>
            </div>
            )
        })}
      </div>
    )
}

export default SideVideo