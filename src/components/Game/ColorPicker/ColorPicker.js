import React from 'react'
import './ColorPicker.css'

function ColorPicker() {
  return (
    <div className='colorpicker'>
        <button className='colorpicker__red' />
        <button className='colorpicker__orange' />
        <button className='colorpicker__yellow' />
        <button className='colorpicker__green' />
        <button className='colorpicker__cyan' />
        <button className='colorpicker__blue' />
        <button className='colorpicker__purple' />
    </div>
  )
}

export default ColorPicker