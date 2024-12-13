import React from 'react'
import DataPlantilla from './../../../plantilla.json'
import { Card2 } from '../../components/card2/Card2'

export const Equipo = () => {
  const Cards = []

  DataPlantilla.forEach((i) => {
    Cards.push(
      <Card2 nombre={i.nombre} nacionalidad={i.nacionalidad} fechaNacimiento={i.fechaNacimiento} imagen={i.imagen} />
    )
  });

  return (
    <div className='flex flex-wrap justify-between items-center gap-3'>
      {Cards}
    </div>
  )
}
