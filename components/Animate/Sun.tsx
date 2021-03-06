import * as React from "react";

import styles from "./Sun.module.scss";

interface SunProps {
    size: number;
    stroke: string;
}

const Sun = ({size, stroke} : SunProps) => {
  return (
      <svg
        className={styles.sun}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={640}
        height={640}
        viewBox={`0 0 ${640} ${640}`}
        style={{width: `${size}`, height: `${size}`}}
    >
      <defs>
        <path
          d="M497 320c0 98-79 177-177 177-98 1-177-79-177-177s79-177 177-177 177 79 177 177z"
          id="Sun_svg__a"
        />
        <path d="M320 140V5" id="Sun_svg__b" />
        <path d="M366 147l24-87" id="Sun_svg__c" />
        <path d="M480 44l-71 120" id="Sun_svg__d" />
        <path d="M446 194l64-64" id="Sun_svg__e" />
        <path d="M596 161l-120 70" id="Sun_svg__f" />
        <path d="M580 251l-87 22" id="Sun_svg__g" />
        <path d="M635 320H500" id="Sun_svg__h" />
        <path d="M580 390l-87-23" id="Sun_svg__i" />
        <path d="M596 480l-120-70" id="Sun_svg__j" />
        <path d="M510 511l-64-64" id="Sun_svg__k" />
        <path d="M480 595l-70-120" id="Sun_svg__l" />
        <path d="M390 582l-25-89" id="Sun_svg__m" />
        <path d="M320 635V500" id="Sun_svg__n" />
        <path d="M250 582l23-89" id="Sun_svg__o" />
        <path d="M230 476l-70 120" id="Sun_svg__p" />
        <path d="M127 512l65-65" id="Sun_svg__q" />
        <path d="M163 410L43 480" id="Sun_svg__r" />
        <path d="M145 367l-87 23" id="Sun_svg__s" />
        <path d="M140 320H5" id="Sun_svg__t" />
        <path d="M145 274l-87-24" id="Sun_svg__u" />
        <path d="M163 230L43 160" id="Sun_svg__v" />
        <path d="M191 193l-64-63" id="Sun_svg__w" />
        <path d="M230 164L160 43" id="Sun_svg__x" />
        <path d="M273 147l-23-87" id="Sun_svg__y" />
      </defs>
      <use xlinkHref="#Sun_svg__a" fill="#fff" />
      <use
        xlinkHref="#Sun_svg__a"
        fill="#28517e"
        stroke={`${stroke}`}
        strokeWidth={7}
      />
      <use
        xlinkHref="#Sun_svg__b"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__c"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__d"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__e"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__f"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__g"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__h"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__i"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__j"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__k"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__l"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__m"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__n"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__o"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__p"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__q"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__r"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__s"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__t"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__u"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__v"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__w"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <use
        xlinkHref="#Sun_svg__x"
        fillOpacity={0}
        stroke={`${stroke}`}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <g>
        <use
          xlinkHref="#Sun_svg__y"
          fillOpacity={0}
          stroke={`${stroke}`}
          strokeWidth={9}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Sun;