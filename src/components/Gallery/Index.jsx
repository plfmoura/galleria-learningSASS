import React from 'react'
import GalleryCard from '../GalleryCard/Index'
import '../../styles/components/gallery.sass'

export default function Gallery() {
  return (
    <main>
        <div className="gallery">
            <GalleryCard title={"Animais"} identificador={1} />
            <GalleryCard title={"Pessoas"} identificador={2}/>
            <GalleryCard title={"Cidades"} identificador={3}/>
            <GalleryCard title={"Arquitetura"} identificador={4}/>
            <GalleryCard title={"Animais"} identificador={5}/>
            <GalleryCard title={"Pessoas"} identificador={6}/>
        </div>
    </main>
  )
}