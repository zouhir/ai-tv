import style from './index.css';
import Hero from "@components/Hero";
import Video from "@components/Video";

export default function (props) {
	return (
		<div class={ style.app }>
			<Hero />
			<Video />
		</div>
	);
}
