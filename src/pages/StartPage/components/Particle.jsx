import React, { useEffect, useState, useLayoutEffect } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

// TODO: FIX SVG TAGS AND TRY PUTTING THE FOX AS AN OBJECT HERE, NOT JUST LINK
// import {foxS6} from '../../assets/images'

loadPolygonMaskPlugin(tsParticles); // awaitable

const Particle = ({ foxScale, showParticles, setShowParticles }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    showParticles && (
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "rgb(5,3,3)",
            },
            image: "",
            position: "20% 0%",
            repeat: "no-repeat",
            size: "100px",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#000", ////=======================================================================
              },
              opacity: 1,
            },
            enable: false,
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          detectRetina: false,
          duration: 0,
          fpsLimit: 20,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: "connect",
              },
              onDiv: {
                selectors: "#repulse-div",
                enable: false,
                mode: "repulse",
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 70,
                  smooth: 90,
                },
              },
              resize: {
                delay: 0.5,
                enable: true,
              },
            },
            modes: {
              attract: {
                distance: 100,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 40,
                duration: 5,
                mix: false,
                opacity: 8,
                size: 6,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 180,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  blink: true,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 1,
                radius: 0,
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 10,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 100,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 1,
              },
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#fff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
              },
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 11,
              },
              path: {
                clamp: false,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "bounce",
                bottom: "bounce",
                left: "bounce",
                right: "bounce",
                top: "bounce",
              },
              random: false,
              size: false,
              speed: 0.8,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "rgb(5,5,5)",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: false,
                area: 1500,
                factor: 950,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0,
              },
              value: {
                min: 0.05,
                max: 0.4,
              },
              animation: {
                count: 150,
                enable: true,
                speed: 2,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.05,
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 5,
              color: {
                value: "#fff",
              },
              enable: true,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 5, ////=======================================================================
              },
              value: 1,
              animation: {
                count: 0,
                enable: false,
                speed: 40,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.1,
              },
            },
            stroke: {
              width: 1,
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: true,
              color: {
                value: "#fff", ////=======================================================================
              },
              consent: true,
              distance: 30,
              enable: true, ////=======================================================================
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          polygon: {
            draw: {
              enable: true,
              stroke: {
                color: {
                  value: "rgba(255,255,255,0.2)",
                },
                width: 3,
                opacity: 0.2,
              },
            },
            enable: true,
            inline: {
              arrangement: "equidistant",
            },
            move: {
              radius: 7,
              type: "path",
            },
            scale: foxScale,
            type: "inline",
            url: "foxS6.svg",
          },
        }}
      />
    )
  );
};

// const Particle = ({color}) => {

//   const particlesInit = useCallback(async engine => {
//       // console.log(engine);
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       await loadFull(engine);
//   }, [color]);

//   // const particlesLoaded = useCallback(async container => {
//   //     // await console.log(container);
//   // }, []);

//   return (
//     <Particles
//                 id="tsparticles"
//                 init={particlesInit}
//                 // loaded={particlesLoaded}
//                 options={{
//       "autoPlay": true,
//       "background": {
//         "color": {
//           "value": "rgb(5,3,3)"
//         },
//         "image": "",
//         "position": "50% 50%",
//         "repeat": "no-repeat",
//         "size": "cover",
//         "opacity": 1
//       },
//       "backgroundMask": {
//         "composite": "destination-out",
//         "cover": {
//           "color": {
//             "value": "#000" ////=======================================================================
//           },
//           "opacity": 1
//         },
//         "enable": false
//       },
//       "defaultThemes": {},
//       "delay": 0,
//       "fullScreen": {
//         "enable": true,
//         "zIndex": 1
//       },
//       "detectRetina": false,
//       "duration": 0,
//       "fpsLimit": 60,
//       "interactivity": {
//         "detectsOn": "window",
//         "events": {
//           "onClick": {
//             "enable": false,
//             "mode": "push"
//           },
//           "onDiv": {
//             "selectors": "#repulse-div",
//             "enable": false,
//             "mode": "repulse",
//             "type": "circle"
//           },
//           "onHover": {
//             "enable": true,
//             "mode": "bubble",
//             "parallax": {
//               "enable": true,
//               "force": 80,
//               "smooth": 20
//             }
//           },
//           "resize": {
//             "delay": 0.5,
//             "enable": true
//           }
//         },
//         "modes": {
//           "attract": {
//             "distance": 100,
//             "duration": 0.4,
//             "easing": "ease-out-quad",
//             "factor": 1,
//             "maxSpeed": 50,
//             "speed": 1
//           },
//           "bounce": {
//             "distance": 200
//           },
//           "bubble": {
//             "distance": 40,
//             "duration": 5,
//             "mix": false,
//             "opacity": 8,
//             "size": 6,
//             "divs": {
//               "distance": 200,
//               "duration": 0.4,
//               "mix": false,
//               "selectors": []
//             }
//           },
//           "connect": {
//             "distance": 180,
//             "links": {
//               "opacity": 0.5
//             },
//             "radius": 60
//           },
//           "grab": {
//             "distance": 400,
//             "links": {
//               "blink": true,
//               "consent": false,
//               "opacity": 1
//             }
//           },
//           "push": {
//             "default": true,
//             "groups": [],
//             "quantity": 4
//           },
//           "remove": {
//             "quantity": 2
//           },
//           "repulse": {
//             "distance": 200,
//             "duration": 0.4,
//             "factor": 100,
//             "speed": 1,
//             "maxSpeed": 50,
//             "easing": "ease-out-quad",
//             "divs": {
//               "distance": 200,
//               "duration": 0.4,
//               "factor": 100,
//               "speed": 1,
//               "maxSpeed": 50,
//               "easing": "ease-out-quad",
//               "selectors": []
//             }
//           },
//           "slow": {
//             "factor": 1,
//             "radius": 0
//           },
//           "trail": {
//             "delay": 1,
//             "pauseOnStop": false,
//             "quantity": 1
//           },
//           "light": {
//             "area": {
//               "gradient": {
//                 "start": {
//                   "value": "#ffffff"
//                 },
//                 "stop": {
//                   "value": "#000000"
//                 }
//               },
//               "radius": 1000
//             },
//             "shadow": {
//               "color": {
//                 "value": "#000000"
//               },
//               "length": 2000
//             }
//           }
//         }
//       },
//       "manualParticles": [],
//       "particles": {
//         "bounce": {
//           "horizontal": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0.1
//             },
//             "value": 1
//           },
//           "vertical": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0.1
//             },
//             "value": 1
//           }
//         },
//         "collisions": {
//           "absorb": {
//             "speed": 1
//           },
//           "bounce": {
//             "horizontal": {
//               "random": {
//                 "enable": false,
//                 "minimumValue": 0.1
//               },
//               "value": 1
//             },
//             "vertical": {
//               "random": {
//                 "enable": false,
//                 "minimumValue": 0.1
//               },
//               "value": 1
//             }
//           },
//           "enable": false,
//           "mode": "bounce",
//           "overlap": {
//             "enable": true,
//             "retries": 0
//           }
//         },
//         "color": {
//           "value": color,
//           "animation": {
//             "h": {
//               "count": 0,
//               "enable": false,
//               "offset": 0,
//               "speed": 1,
//               "decay": 0,
//               "sync": true
//             },
//             "s": {
//               "count": 0,
//               "enable": false,
//               "offset": 0,
//               "speed": 1,
//               "decay": 0,
//               "sync": true
//             },
//             "l": {
//               "count": 0,
//               "enable": false,
//               "offset": 0,
//               "speed": 1,
//               "decay": 0,
//               "sync": true
//             }
//           }
//         },
//         "groups": {},
//         "move": {
//           "angle": {
//             "offset": 0,
//             "value": 90
//           },
//           "attract": {
//             "distance": 200,
//             "enable": false,
//             "rotate": {
//               "x": 600,
//               "y": 1200
//             }
//           },
//           "center": {
//             "x": 50,
//             "y": 50,
//             "mode": "percent",
//             "radius": 0
//           },
//           "decay": 0,
//           "distance": {},
//           "direction": "none",
//           "drift": 0,
//           "enable": true,
//           "gravity": {
//             "acceleration": 9.81,
//             "enable": false,
//             "inverse": false,
//             "maxSpeed": 11
//           },
//           "path": {
//             "clamp": false,
//             "delay": {
//               "random": {
//                 "enable": false,
//                 "minimumValue": 0
//               },
//               "value": 0
//             },
//             "enable": false,
//             "options": {}
//           },
//           "outModes": {
//             "default": "bounce",
//             "bottom": "bounce",
//             "left": "bounce",
//             "right": "bounce",
//             "top": "bounce"
//           },
//           "random": false,
//           "size": false,
//           "speed": .8,
//           "spin": {
//             "acceleration": 0,
//             "enable": false
//           },
//           "straight": false,
//           "trail": {
//             "enable": false,
//             "length": 10,
//             "fillColor": {
//               "value": "rgb(5,5,5)"
//             }
//           },
//           "vibrate": false,
//           "warp": false
//         },
//         "number": {
//           "density": {
//             "enable": false,
//             "area": 1500,
//             "factor": 950
//           },
//           "limit": 0,
//           "value": 200
//         },
//         "opacity": {
//           "random": {
//             "enable": true,
//             "minimumValue": 0
//           },
//           "value": {
//             "min": 0.05,
//             "max": 0.4
//           },
//           "animation": {
//             "count": 0,
//             "enable": true,
//             "speed": 2,
//             "decay": 0,
//             "sync": false,
//             "destroy": "none",
//             "startValue": "random",
//             "minimumValue": 0.05
//           }
//         },
//         "reduceDuplicates": false,
//         "shadow": {
//           "blur": 0,
//           "color": {
//             "value": "#000"
//           },
//           "enable": true,
//           "offset": {
//             "x": 0,
//             "y": 0
//           }
//         },
//         "shape": {
//           "options": {},
//           "type": "circle"
//         },
//         "size": {
//           "random": {
//             "enable": true,
//             "minimumValue": 5 ////=======================================================================
//           },
//           "value": 1,
//           "animation": {
//             "count": 0,
//             "enable": false,
//             "speed": 40,
//             "decay": 0,
//             "sync": false,
//             "destroy": "none",
//             "startValue": "random",
//             "minimumValue": 0.1
//           }
//         },
//         "stroke": {
//           "width": 1
//         },
//         "zIndex": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 0,
//           "opacityRate": 1,
//           "sizeRate": 1,
//           "velocityRate": 1
//         },
//         "life": {
//           "count": 0,
//           "delay": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0
//             },
//             "value": 0,
//             "sync": false
//           },
//           "duration": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0.0001
//             },
//             "value": 0,
//             "sync": false
//           }
//         },
//         "rotate": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 0,
//           "animation": {
//             "enable": false,
//             "speed": 0,
//             "decay": 0,
//             "sync": false
//           },
//           "direction": "clockwise",
//           "path": false
//         },
//         "destroy": {
//           "bounds": {},
//           "mode": "none",
//           "split": {
//             "count": 1,
//             "factor": {
//               "random": {
//                 "enable": false,
//                 "minimumValue": 0
//               },
//               "value": 3
//             },
//             "rate": {
//               "random": {
//                 "enable": false,
//                 "minimumValue": 0
//               },
//               "value": {
//                 "min": 4,
//                 "max": 9
//               }
//             },
//             "sizeOffset": true,
//             "particles": {}
//           }
//         },
//         "roll": {
//           "darken": {
//             "enable": false,
//             "value": 0
//           },
//           "enable": false,
//           "enlighten": {
//             "enable": false,
//             "value": 0
//           },
//           "mode": "vertical",
//           "speed": 25
//         },
//         "tilt": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 0,
//           "animation": {
//             "enable": false,
//             "speed": 0,
//             "decay": 0,
//             "sync": false
//           },
//           "direction": "clockwise",
//           "enable": false
//         },
//         "twinkle": {
//           "lines": {
//             "enable": false,
//             "frequency": 0.05,
//             "opacity": 1
//           },
//           "particles": {
//             "enable": false,
//             "frequency": 0.05,
//             "opacity": 1
//           }
//         },
//         "wobble": {
//           "distance": 5,
//           "enable": false,
//           "speed": {
//             "angle": 50,
//             "move": 10
//           }
//         },
//         "orbit": {
//           "animation": {
//             "count": 0,
//             "enable": false,
//             "speed": 1,
//             "decay": 0,
//             "sync": false
//           },
//           "enable": false,
//           "opacity": 1,
//           "rotation": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0
//             },
//             "value": 45
//           },
//           "width": 1
//         },
//         "links": {
//           "blink": true,
//           "color": {
//             "value": color ////=======================================================================
//           },
//           "consent": true,
//           "distance": 30,
//           "enable": true,  ////=======================================================================
//           "frequency": 1,
//           "opacity": 0.4,
//           "shadow": {
//             "blur": 5,
//             "color": {
//               "value": "#000"
//             },
//             "enable": false
//           },
//           "triangles": {
//             "enable": false,
//             "frequency": 1
//           },
//           "width": 1,
//           "warp": false
//         },
//         "repulse": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 0,
//           "enabled": false,
//           "distance": 1,
//           "duration": 1,
//           "factor": 1,
//           "speed": 1
//         }
//       },
//       "pauseOnBlur": true,
//       "pauseOnOutsideViewport": true,
//       "responsive": [],
//       "smooth": false,
//       "style": {},
//       "themes": [],
//       "zLayers": 100,
//       "polygon": {
//         "draw": {
//           "enable": true,
//           "stroke": {
//             "color": {
//               "value": "rgba(255,255,255,0.2)"
//             },
//             "width": 0.5,
//             "opacity": 0.4
//           }
//         },
//         "enable": true,
//         "inline": {
//           "arrangement": "equidistant"
//         },
//         "move": {
//           "radius": 10,
//           "type": "path"
//         },
//         "scale": 1.1,
//         "type": "inline",
//         "url": "foxS6.svg"

//       }
//     }}
//             />
//         );
//     }

export default Particle;
