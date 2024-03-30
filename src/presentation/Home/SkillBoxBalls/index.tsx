// import { useState, useEffect, useRef } from 'react';

// import LayoutDark from '../../UI/Components/LayoutDark';
// import { Engine, Render, Bodies, World } from 'matter-js';

// const Index =()=> {
//   const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });
//   const scene = useRef(null);
//   const engine = useRef(Engine.create());

//   useEffect(() => {
//     const cw = canvasDimensions.width;
//     const ch = canvasDimensions.height;

//     if (!cw || !ch) return; // Ensure dimensions are valid

//     const render = Render.create({
//       element: scene.current || undefined,
//       engine: engine.current,
//       options: {
//         width: cw,
//         height: ch,
//         wireframes: false,
//         background: 'transparent'
//       }
//     });

//     World.add(engine.current.world, [
//       Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
//       Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
//       Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
//       Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
//     ]);

//      // Drop 5 balls when the component loads
//      for (let i = 0; i < 5; i++) {
//       const x = Math.random() * cw;
//       const y = Math.random() * ch;
//       const ball = Bodies.circle(
//         x,
//         y,
//         10 + Math.random() * 30,
//         {
//           mass: 10,
//           restitution: 0.9,
//           friction: 0.005,
//           render: {
//             fillStyle: '#0000ff'
//           }
//         }
//       );
//       World.add(engine.current.world, [ball]);
//     }

//     Engine.run(engine.current);
//     Render.run(render);

//     return () => {
//       Render.stop(render);
//       World.clear(engine.current.world);
//       Engine.clear(engine.current);
//       render.canvas.remove();
//       render.canvas = null;
//       render.context = null;
//       render.textures = {};
//     };
//   }, [canvasDimensions]);

//   const handleResize = () => {
//     const rect = scene.current.getBoundingClientRect();
//     setCanvasDimensions({ width: rect.width, height: rect.height });
//   };

//   useEffect(() => {
//     handleResize(); // Initial resize
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <LayoutDark>
//           <div className='w-full h-[80vh] bg-grayDark relative'>
//             <div
//               className="absolute inset-0"
//               ref={scene}
//             />
//           </div>
//       </LayoutDark>
//     </>
//   );
// };

// export default Index;
