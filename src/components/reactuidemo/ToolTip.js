import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ColoredTooltip = () => {
    return (
        <div>
            <span style={{ color: 'yellow' }}>Colored Component</span>
        </div>
    )
}
const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

function ToolTip() {
    return (
        <div className='ToolTip'>
            <div style={{ paddingBottom: "20px" }}>
                <Tippy placement='right' arrow={false} delay={1000} content='Basic ToolTip'>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div style={{ paddingBottom: "20px" }}>
                <Tippy content={<span style={{ color: "orange" }}>colored</span>}>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div style={{ paddingBottom: "20px" }}>
                <Tippy content={<ColoredTooltip />}>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div style={{ paddingBottom: "20px" }}>
                <Tippy placement='top-start' content={<ColoredTooltip />}>
                    <CustomChild />
                </Tippy>
            </div>
        </div>
    )
}
export default ToolTip