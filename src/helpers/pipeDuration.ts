type DurationTransformFn = (data: string) => string;

export const durationTransform: DurationTransformFn = (duration) => {
	const hours = Math.floor(Number(duration) / 60);
	const minutes = Number(duration) - 60 * hours;

	const hoursStr = hours > 9 ? hours : `0${hours}`;
	const minutesStr = minutes > 9 ? minutes : `0${minutes}`;

	return `${hoursStr}:${minutesStr}`;
};
