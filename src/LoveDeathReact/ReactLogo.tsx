/* eslint-disable max-len */
import { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Ellipse, Circle } from "react-native-svg";
import { continueRender, delayRender, interpolate } from "remotion";
import { svgPathProperties } from "svg-path-properties";

import { Extrapolate } from "../components/Redash";

interface AnimatedLogoProps {
  progress: number;
  stroke: number;
}

const AnimatedLogo = ({ progress, stroke }: AnimatedLogoProps) => {
  const properties = new svgPathProperties(
    "M178.007 283.429C204.041 328.521 234.394 365.93 262.736 389.882C276.873 401.829 290.94 410.795 304.097 415.48C317.203 420.146 330.756 420.983 342.251 414.347C353.745 407.71 359.797 395.555 362.309 381.871C364.831 368.135 364.099 351.469 360.821 333.252C354.249 296.731 337.028 251.741 310.994 206.649C284.96 161.557 254.608 124.147 226.266 100.195C212.129 88.2486 198.061 79.282 184.905 74.5979C171.798 69.9314 158.245 69.0944 146.751 75.7307C135.256 82.367 129.205 94.5228 126.693 108.207C124.171 121.942 124.903 138.609 128.181 156.825C134.752 193.346 151.974 238.337 178.007 283.429Z"
  );
  const length = properties.getTotalLength();
  const strokeDashoffset = interpolate(
    progress,
    [0, 0.5],
    [length, 0],
    Extrapolate.CLAMP
  );
  const rotate = interpolate(progress, [0.5, 1], [0, 60], Extrapolate.CLAMP);
  return (
    <svg
      width="490"
      height="490"
      viewBox="0 0 490 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M244.5 282.721C265.211 282.721 282 265.708 282 244.721C282 223.734 265.211 206.721 244.5 206.721C223.789 206.721 207 223.734 207 244.721C207 265.708 223.789 282.721 244.5 282.721Z"
        fill="white"
      />
      <path
        d="M244.5 321.818C296.568 321.818 344.141 314.236 379.056 301.667C396.47 295.398 411.269 287.698 421.904 278.647C432.499 269.629 440 258.31 440 245.038C440 231.765 432.499 220.446 421.904 211.429C411.269 202.377 396.47 194.678 379.056 188.408C344.141 175.839 296.568 168.258 244.5 168.258C192.432 168.258 144.859 175.839 109.944 188.408C92.5299 194.678 77.7307 202.377 67.096 211.429C56.5014 220.446 49 231.765 49 245.038C49 258.31 56.5014 269.629 67.096 278.647C77.7307 287.698 92.5299 295.398 109.944 301.667C144.859 314.236 192.432 321.818 244.5 321.818Z"
        stroke="white"
        stroke-width={stroke}
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={`${length} ${length}`}
      />
      <path
        d="M244.5 321.818C296.568 321.818 344.141 314.236 379.056 301.667C396.47 295.398 411.269 287.698 421.904 278.647C432.499 269.629 440 258.31 440 245.038C440 231.765 432.499 220.446 421.904 211.429C411.269 202.377 396.47 194.678 379.056 188.408C344.141 175.839 296.568 168.258 244.5 168.258C192.432 168.258 144.859 175.839 109.944 188.408C92.5299 194.678 77.7307 202.377 67.096 211.429C56.5014 220.446 49 231.765 49 245.038C49 258.31 56.5014 269.629 67.096 278.647C77.7307 287.698 92.5299 295.398 109.944 301.667C144.859 314.236 192.432 321.818 244.5 321.818Z"
        stroke="white"
        stroke-width={stroke}
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={`${length} ${length}`}
        transform={`rotate(${rotate}, ${490 / 2} ${490 / 2})`}
      />
      <path
        d="M244.5 321.818C296.568 321.818 344.141 314.236 379.056 301.667C396.47 295.398 411.269 287.698 421.904 278.647C432.499 269.629 440 258.31 440 245.038C440 231.765 432.499 220.446 421.904 211.429C411.269 202.377 396.47 194.678 379.056 188.408C344.141 175.839 296.568 168.258 244.5 168.258C192.432 168.258 144.859 175.839 109.944 188.408C92.5299 194.678 77.7307 202.377 67.096 211.429C56.5014 220.446 49 231.765 49 245.038C49 258.31 56.5014 269.629 67.096 278.647C77.7307 287.698 92.5299 295.398 109.944 301.667C144.859 314.236 192.432 321.818 244.5 321.818Z"
        stroke="white"
        stroke-width={stroke}
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={`${length} ${length}`}
        transform={`rotate(-${rotate}, ${490 / 2} ${490 / 2})`}
      />
    </svg>
  );
};
export default AnimatedLogo;
