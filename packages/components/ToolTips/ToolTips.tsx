import React, { PropsWithChildren } from 'react';
import { useFloating } from '@floating-ui/react-dom';

export interface ToolTipsProps {
  tips: string
  className:any
}

const ToolTips: React.FC<PropsWithChildren<ToolTipsProps>> = ({ children, ...props }) => {
  const { tips, className } = props
  const {x ,y, reference, floating, strategy} = useFloating({
    placement: 'top'
  })
  return (
    <button {...props} className={className} >
      <div className="peer" ref={reference}>
        {children}
      </div>
      <div
        ref={floating}
        style = {
          {
            position: strategy, 
            top: y!-10 ?? 0, 
            left: x ?? 0, 
            width: 'max-content'
          }
        }
        className='  
          border
          invisible
          m-auto       
          before:content-[""]  
          before:absolute 
          before:m-auto
          before:-bottom-4
          before:border-r-8 before:border-r-transparent
          before:border-l-8 before:border-l-transparent
          before:border-t-8 before:border-t-gray-400
          before:border-b-8 before:border-b-transparent
          peer-hover:visible
          p-1
          z-10 
          flex
          justify-center
          items-center
          rounded
          bg-gray-400
        '>
        {tips}
      </div>

    </button >
  )
}

export default ToolTips;
