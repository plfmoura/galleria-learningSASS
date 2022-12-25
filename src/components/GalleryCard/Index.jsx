import React from 'react'
import '../../styles/components/galleryCard.sass'

export default function GalleryCard({ title, identificador }) {

    const passarValor = () => {
        let string = "card-"
        let value = string + (identificador + "")
        return(value)
    }

    passarValor()

  return (
    <>
    <div className="gallery-card" id={passarValor()}>
        <h2 className="gallery-card-title">{ title }</h2>
        <a href="" className="gallery-card-btn">Mais fotos</a>
    </div>
    </>
  )
}
