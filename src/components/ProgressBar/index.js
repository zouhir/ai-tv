import style from "./index.css";
import Hero from "@components/Hero";
import Video from "@components/Video";

export default function({duration, currentTime}) {
  return (
    <div class={style.progressbar}>
      <progress class={style.progress} max={duration} value={currentTime} />
      <button class={style.knob}></button>
    </div>
  );
}
