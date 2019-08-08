import React from 'react';
import './Tooltips.css';


function Tooltips(props) {
  const { text , className, direction, ...rest } = props;

  if (direction === 'top') {
      var arrowDirection= {
        bottom: '100%',
        top: 'auto' 
      }

      var arrowDirectionInner = {
        transform: 'rotate(45deg)',
        transformOrigin: 'left bottom'
      } 
  } else if (direction === 'bottom') {
    var arrowDirection= {
        top: '100%',
      }

      var arrowDirectionInner = {
        transform: 'rotate(315deg)',
        transformOrigin: 'left top'
      } 
  } else if (direction === 'left') {
    var arrowDirection= {
        top: 'var(--position, 10px)',
        right: '100%',
        left: 'auto',
        width: 'var(--triangleHeight, 10px)',
        height: 'calc(var(--triangleHeight, 10px) * 1.41)'
      }

      var arrowDirectionInner = {
        transform: 'rotate(315deg)',
        transformOrigin: 'right top'
      } 
  } else if (direction === 'right') {
    var arrowDirection= {
        top: 'var(--position, 10px)',
        left: '100%',
        width: 'var(--triangleHeight, 10px)',
        height: 'calc(var(--triangleHeight, 10px) * 1.41)'
      }

      var arrowDirectionInner = {
        transform: 'rotate(315deg)',
        transformOrigin: 'left bottom'
      } 
  }
//   console.log(`${varCSS}`)

  return (
    <div className={`tooltips ${className}`} {...rest} data-direction={direction}>
        <div className="tooltips__arrow" style={arrowDirection}>
            <div className="tooltips__arrow--inner" style={arrowDirectionInner}/>
        </div>
        <div className="tooltips-content">{text}</div>
    </div>
  );
}

export default Tooltips;
