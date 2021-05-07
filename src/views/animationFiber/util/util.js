function SierpinskiTriangle({ x, y, s, children }) {
  if (s <= targetSize) {
    return (
      <Dot
        x={x - targetSize / 2}
        y={y - targetSize / 2}
        size={targetSize}
        text={children}
      />
    );
    return r;
  }
  var newSize = s / 2;
  var slowDown = true;
  if (slowDown) {
    var e = performance.now() + 0.8;
    while (performance.now() < e) {
      // Artificially long execution time.
    }
  }

  s /= 2;

  return [
    <SierpinskiTriangle x={x} y={y - s / 2} s={s}>
      {children}
    </SierpinskiTriangle>,
    <SierpinskiTriangle x={x - s} y={y + s / 2} s={s}>
      {children}
    </SierpinskiTriangle>,
    <SierpinskiTriangle x={x + s} y={y + s / 2} s={s}>
      {children}
    </SierpinskiTriangle>,
  ];
}
