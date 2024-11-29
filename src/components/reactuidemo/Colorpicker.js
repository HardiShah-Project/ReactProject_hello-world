import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
function Colorpicker() {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    return (
        <div className='Colorpicker'>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color Picker' : 'Pick a Color'}</button>
            {showColorPicker && (
                <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
            )}
            <h2>You Picked {color}</h2>
        </div>
    )
}
export default Colorpicker