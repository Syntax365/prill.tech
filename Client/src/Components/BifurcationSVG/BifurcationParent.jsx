import BifurcationSVG from "./BifurcationSVG";
import React from "react";

// function debounce(fn, ms) {
//   let timer;
//   return (_) => {
//     clearTimeout(timer);
//     timer = setTimeout((_) => {
//       timer = null;
//       fn.apply(this, arguments);
//     }, ms);
//   };
// }

// export default (props) => {
//   const [dimensions, setDimensions] = React.useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });
//   React.useEffect(() => {
//     const debouncedHandleResize = debounce(function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth,
//       });
//       return;
//     }, 100);

//     window.addEventListener("resize", debouncedHandleResize);

//     return (_) => {
//       window.removeEventListener("resize", debouncedHandleResize);
//     };
//   });
//   return (
//     <div>
//       <BifurcationSVG width={dimensions.width} height={700} />
//     </div>
//   );
// };

export default (props) => {
  return (
    <div>
      <BifurcationSVG width={window.innerWidth} height={700} />
    </div>
  );
};

// function BifurcationParent() {
//   React.useEffect(() => {
//     function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth,
//       });
//     }

//     const [dimensions, setDimensions] = React.useState({
//       height: window.innerHeight,
//       width: window.innerWidth,
//     });

//     return (
//         <div>
//           <BifurcationSVG width={window.innerWidth} height={700} />
//         </div>
//       );

// }
