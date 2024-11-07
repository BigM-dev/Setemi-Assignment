
// function positionAt(anchor, position, elem) {
//     const anchorCoords = anchor.getBoundingClientRect();
  
//     switch (position) {
//       case 'top':
//         elem.style.left = `${anchorCoords.left + anchorCoords.width / 2 - elem.offsetWidth / 2}px`;
//         elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
//         break;
//       case 'right':
//         elem.style.left = `${anchorCoords.right}px`;
//         elem.style.top = `${anchorCoords.top + anchorCoords.height / 2 - elem.offsetHeight / 2}px`;
//         break;
//       case 'bottom':
//         elem.style.left = `${anchorCoords.left + anchorCoords.width / 2 - elem.offsetWidth / 2}px`;
//         elem.style.top = `${anchorCoords.bottom}px`;
//         break;
//     }
//   }
  
// //   // Example usage
//   const container = document.querySelector('.container');
//   const tooltipTop = document.querySelector('.tooltip-top');
//   const tooltipRight = document.querySelector('.tooltip-right');
//   const tooltipBottom = document.querySelector('.tooltip-bottom');
  
//   positionAt(container, 'top', tooltipTop);
//   positionAt(container, 'right', tooltipRight);
//   positionAt(container, 'bottom', tooltipBottom);


// function positionAt (anchor, position, elem){
//     const anchorCoords= anchor.getBoundingClientRec(); 
//     switch (position) {
//         case 'top':
//             elem.classList.add('tooltip-top')
//             break;
//         case 'right':
//             elem.classList.add('tooltip-right')
//             break;
//         case 'left':
//             elem.classList.add('tooltip-left')
//             break;
//     }
// }
