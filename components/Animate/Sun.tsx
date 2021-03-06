import * as React from "react";

import styles from "./Sun.module.scss";

interface SunProps {
    size: number;
    stroke: string;
}

const Sun = ({ size, stroke }: SunProps) => {
  const padding = 5;
  const radius = 175;
  const rayLength = 140;
  const view = (padding*2) + (radius*2) + (rayLength*2); // 640
  const center = view / 2;
  // Svg borders
  const topEdge = padding;
  const bottomEdge = view - padding;
  const leftEdge = padding;
  const rightEdge = view - padding;
  // Sun borders
  const topSun = rayLength;
  const bottomSun = view - rayLength;
  const leftSun = rayLength;
  const rightSun = view - rayLength;
  // Sun
  const sun45Length = view / 10;
  const rayWidth = 9;
  const rayPadding = rayWidth / 3;

  const getTopLeft = (pt: { x: number, y: number }) => `${leftEdge + pt.x} ${topEdge + pt.y}`
  const getTopRight = (pt: { x: number, y: number }) => `${rightEdge - pt.x} ${topEdge + pt.y}`
  const getBottomLeft = (pt: { x: number, y: number }) => `${leftEdge + pt.x} ${bottomEdge - pt.y}`
  const getBottomRight = (pt: { x: number, y: number }) => `${rightEdge - pt.x} ${bottomEdge - pt.y}`

  const start1 = 265;
  const start2 = 222;
  const start3 = 185;
  const start4 = 156;
  const start5 = 140;

  const rayLength1 = 24;
  const rayLength2 = 70;
  const rayLength3 = 64;
  const rayLength4 = 120;
  const rayLength5 = 88;

  const point = (degree: number) => {
    switch (degree) {
      case 15:
        return { x: start1 + rayPadding, y: start5 + rayPadding }
      case 30:
        return { x: start2 + rayPadding, y: start4 + rayPadding }
      case 45:
        return { x: start3 + rayPadding, y: start3 + rayPadding }
      case 60:
        return { x: start4 + rayPadding, y: start2 + rayPadding }
      case 75:
        return { x: start5 + rayPadding, y: start1 + rayPadding }
      default:
        return { x: 0, y: 0 };
    }
  }
  // console.log(
  //   `M${center} ${topSun}V${topEdge}
  //       M${getTopRight(point(15))}l${rayLength1}-${rayLength5}
  //       M${getTopRight(point(30))}l${rayLength2}-${rayLength4}
  //       M${getTopRight(point(45))}l${rayLength3}-${rayLength3}
  //       M${getTopRight(point(60))}l${rayLength4}-${rayLength2}
  //       M${getTopRight(point(75))}l${rayLength5}-${rayLength1}
  //       M${rightSun} ${center}H${rightEdge}
  //       M${getBottomRight(point(75))}l${rayLength5} ${rayLength1}
  //       M${getBottomRight(point(60))}l${rayLength4} ${rayLength2}
  //       M${getBottomRight(point(45))}l${rayLength3} ${rayLength3}
  //       M${getBottomRight(point(30))}l${rayLength2} ${rayLength4}
  //       M${getBottomRight(point(15))}l${rayLength1} ${rayLength5}
  //       M${center} ${bottomSun}V${bottomEdge}
  //       M${getBottomLeft(point(15))}l-${rayLength1} ${rayLength5}
  //       M${getBottomLeft(point(30))}l-${rayLength2} ${rayLength4}
  //       M${getBottomLeft(point(45))}l-${rayLength3} ${rayLength3}
  //       M${getBottomLeft(point(60))}l-${rayLength4} ${rayLength2}
  //       M${getBottomLeft(point(75))}l-${rayLength5} ${rayLength1}
  //       M${leftSun} ${center}H${leftEdge}
  //       M${getTopLeft(point(75))}l-${rayLength5}-${rayLength1}
  //       M${getTopLeft(point(60))}l-${rayLength4}-${rayLength2}
  //       M${getTopLeft(point(45))}l-${rayLength3}-${rayLength3}
  //       M${getTopLeft(point(30))}l-${rayLength2}-${rayLength4}
  //       M${getTopLeft(point(15))}l-${rayLength1}-${rayLength5}`
  // );

  return (
      <svg
        className={styles.sun}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={view}
        height={view}
        viewBox={`0 0 ${view} ${view}`}
        style={{width: `${size}`, height: `${size}`}}
    >
      <defs>
        <circle cx={center} cy={center} r={radius} id="Sun_circle"/>
        <path d={`M${center} ${topSun}V${topEdge}`} id="Sun_0" className={styles.ray0} />
        <path d={`M${getTopRight(point(15))}l${rayLength1}-${rayLength5}`} id="Sun_15" className={styles.ray15} />
        <path d={`M${getTopRight(point(30))}l${rayLength2}-${rayLength4}`} id="Sun_30" className={styles.ray30} />
        <path d={`M${getTopRight(point(45))}l${rayLength3}-${rayLength3}`} id="Sun_45" className={styles.ray45} />
        <path d={`M${getTopRight(point(60))}l${rayLength4}-${rayLength2}`} id="Sun_60" className={styles.ray60} />
        <path d={`M${getTopRight(point(75))}l${rayLength5}-${rayLength1}`} id="Sun_75" className={styles.ray75} />
        <path d={`M${rightSun} ${center}H${rightEdge}`} id="Sun_90" className={styles.ray90} />
        <path d={`M${getBottomRight(point(75))}l${rayLength5} ${rayLength1}`} id="Sun_105" className={styles.ray105} />
        <path d={`M${getBottomRight(point(60))}l${rayLength4} ${rayLength2}`} id="Sun_120" className={styles.ray120} />
        <path d={`M${getBottomRight(point(45))}l${rayLength3} ${rayLength3}`} id="Sun_135" className={styles.ray135} />
        <path d={`M${getBottomRight(point(30))}l${rayLength2} ${rayLength4}`} id="Sun_150" className={styles.ray150} />
        <path d={`M${getBottomRight(point(15))}l${rayLength1} ${rayLength5}`} id="Sun_165" className={styles.ray165} />
        <path d={`M${center} ${bottomSun}V${bottomEdge}`} id="Sun_180" className={styles.ray180} />
        <path d={`M${getBottomLeft(point(15))}l-${rayLength1} ${rayLength5}`} id="Sun_195" className={styles.ray195} />
        <path d={`M${getBottomLeft(point(30))}l-${rayLength2} ${rayLength4}`} id="Sun_210" className={styles.ray210} />
        <path d={`M${getBottomLeft(point(45))}l-${rayLength3} ${rayLength3}`} id="Sun_225" className={styles.ray225} />
        <path d={`M${getBottomLeft(point(60))}l-${rayLength4} ${rayLength2}`} id="Sun_240" className={styles.ray240} />
        <path d={`M${getBottomLeft(point(75))}l-${rayLength5} ${rayLength1}`} id="Sun_255" className={styles.ray255} />
        <path d={`M${leftSun} ${center}H${leftEdge}`} id="Sun_270" className={styles.ray270} />
        <path d={`M${getTopLeft(point(75))}l-${rayLength5}-${rayLength1}`} id="Sun_285" className={styles.ray285} />
        <path d={`M${getTopLeft(point(60))}l-${rayLength4}-${rayLength2}`} id="Sun_300" className={styles.ray300} />
        <path d={`M${getTopLeft(point(45))}l-${rayLength3}-${rayLength3}`} id="Sun_315" className={styles.ray315} />
        <path d={`M${getTopLeft(point(30))}l-${rayLength2}-${rayLength4}`} id="Sun_330" className={styles.ray330} />
        <path d={`M${getTopLeft(point(15))}l-${rayLength1}-${rayLength5}`} id="Sun_345" className={styles.ray345} />
      </defs>
      <use
        xlinkHref="#Sun_circle"
        fill="#28517e"
        stroke={`${stroke}`}
        strokeWidth={9}
      />
      <use
        xlinkHref="#Sun_0"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
        pathLength={1}
      />
      <use
        xlinkHref="#Sun_15"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_30"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_45"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_60"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_75"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_90"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_105"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_120"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_135"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_150"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_165"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_180"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_195"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_210"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_225"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_240"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_255"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_270"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_285"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_300"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_315"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_330"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={rayWidth}
        strokeLinecap="round"
      />
      <g>
        <use
          xlinkHref="#Sun_345"
          fillOpacity={0}
          stroke={`${stroke}`}
          strokeWidth={rayWidth}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Sun;