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

  // Sun
  const rayWidth = 9;

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
        <path d="M320 140V5" id="Sun_0" className={styles.ray0} />
        <path d="M367 148l24-88" id="Sun_15" className={styles.ray15} />
        <path d="M410 164l70-120" id="Sun_30" className={styles.ray30} />
        <path d="M447 193l64-64" id="Sun_45" className={styles.ray45} />
        <path d="M476 230l120-70" id="Sun_60" className={styles.ray60} />
        <path d="M492 273l88-24" id="Sun_75" className={styles.ray75} />
        <path d="M500 320H635" id="Sun_90" className={styles.ray90} />
        <path d="M492 367l88 24" id="Sun_105" className={styles.ray105} />
        <path d="M476 410l120 70" id="Sun_120" className={styles.ray120} />
        <path d="M447 447l64 64" id="Sun_135" className={styles.ray135} />
        <path d="M410 476l70 120" id="Sun_150" className={styles.ray150} />
        <path d="M367 492l24 88" id="Sun_165" className={styles.ray165} />
        <path d="M320 500V635" id="Sun_180" className={styles.ray180} />
        <path d="M273 492l-24 88" id="Sun_195" className={styles.ray195} />
        <path d="M230 476l-70 120" id="Sun_210" className={styles.ray210} />
        <path d="M193 447l-64 64" id="Sun_225" className={styles.ray225} />
        <path d="M164 410l-120 70" id="Sun_240" className={styles.ray240} />
        <path d="M148 367l-88 24" id="Sun_255" className={styles.ray255} />
        <path d="M140 320H5" id="Sun_270" className={styles.ray270} />
        <path d="M148 273l-88-24" id="Sun_285" className={styles.ray285} />
        <path d="M164 230l-120-70" id="Sun_300" className={styles.ray300} />
        <path d="M193 193l-64-64" id="Sun_315" className={styles.ray315} />
        <path d="M230 164l-70-120" id="Sun_330" className={styles.ray330} />
        <path d="M273 148l-24-88" id="Sun_345" className={styles.ray345} />
      </defs>
      <use
        xlinkHref="#Sun_circle"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={15}
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