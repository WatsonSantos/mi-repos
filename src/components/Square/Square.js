export function Square({ wid, hei, bg_color, bottom, left }) {
  return (
    <div
      className={`h-${hei} w-${wid} bg-${bg_color} bottom-${bottom} left-${left}`}
    ></div>
  );
}
