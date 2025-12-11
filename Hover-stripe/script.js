console.clear();
const make = (name, options = {}) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", name);

    for (const [key, value] of Object.entries(options)) {
        el.setAttribute(key, value);
    }

    return el;
};

let w = 200;
let h = 100;
let stroke = 2.5;
let gap = 2;

const paths = [];

// PATHS WE'RE GOING TO USE TO MASK
for (let y = 0; y < h; y += stroke + gap) {
    let path = make("path", {
        d: `M0,${y} L${w},${y}`
    });
    path.y = y;
    tomask.append(path);
}


// PATHS WE'RE GOING TO WIGGLE
for (let y = 0; y < h + stroke + gap; y += stroke + gap) {
    let path = make("path", {
        d: `
			M0,${y}
			C50,${y},80,${y},100,${y}
			C120,${y},150,${y},${w},${y}
		`
    });
    path.y = y;
    paths.push(path);
    svg.append(path);
}

svg.addEventListener("mousemove", (e) => {
    let el;

    // console.log(e)
    if (e.target.nodeName == "svg") {
        el = e.target
    } else {
        el = e.target.closest("svg")
    }

    let cx = e.clientX;
    let cy = e.clientY;
    let pos = el.getBoundingClientRect();

    let mousex = cx - pos.x;
    let mousey = cy - pos.y;

    let widthEl = pos.width;
    let mousexsvg = (mousex / widthEl) * w;

    let heightEl = pos.height;
    let mouseysvg = (mousey / heightEl) * h;

    paths.forEach((path, i) => {
        const y = path.y;
        let dy = y;
        if (mouseysvg < y) {
            dy = mouseysvg;
        }
        const xdist = 20;
        let xbuffer = xdist;
        let minToEdge = Math.min(mousexsvg, w - mousexsvg);
        if (minToEdge < xbuffer) {
            xbuffer -= xdist - minToEdge
        }
        // if(i == 1) {
        // 	console.log(
        // 		Math.round(y),
        // 		Math.round(dy),
        // 		Math.round(mouseysvg)
        // 	)
        // }


        let d = `
				M0,${y}
			C ${xbuffer},${y},
			  ${mousexsvg - 40},${dy},
			 ${mousexsvg},${dy}
			${mousexsvg + 40},${dy},
			 ${200 - xbuffer},${y},
			${w},${y}
		`;
        path.setAttribute("d", d)
    });
});