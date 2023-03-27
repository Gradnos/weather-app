const nightIconsContext = require.context('./icons/night', true, /svg$/);

export const night = nightIconsContext.keys().reduce( (night, file) => {
	const SVG = nightIconsContext(file);
	const label = file.slice(2, -4); // strip './' and '.svg'
	night[label] = SVG;
        return night;
}, {});

const dayIconsContext = require.context('./icons/day', true, /svg$/);
 
export const day = dayIconsContext.keys().reduce( (day, file) => {
	const SVG = dayIconsContext(file);
	const label = file.slice(2, -4); // strip './' and '.svg'
	day[label] = SVG;
        return day;
}, {});
