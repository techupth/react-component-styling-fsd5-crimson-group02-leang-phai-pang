/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import alertCircleIcon from "../imgs/alert-circle.png";
import alertTriangleIcon from "../imgs/alert-triangle.png";
import alertCheckCircleIcon from "../imgs/check-circle.png";
import frownIcon from "../imgs/frown.png";

export function Alert(props) {
  let alertType, alertClass, alertBackground;
  const marginBottom = "25px"; // Set your margin value here
  const marginTB = "26px"; // Set your top and bottom margin value here
  const marginLR = "20px"; // Set your left and right margin value here

  if (props.type === "Alert1") {
    alertType = "Alert1";
    alertClass = "alert-box-1";
    alertBackground = "#f9c8c8";
  } else if (props.type === "Alert2") {
    alertType = "Alert2";
    alertClass = "alert-box-2";
    alertBackground = "#f9d9c8";
  } else if (props.type === "Alert3") {
    alertType = "Alert3";
    alertClass = "alert-box-3";
    alertBackground = "#f9ebc8";
  } else if (props.type === "Alert4") {
    alertType = "Alert4";
    alertClass = "alert-box-4";
    alertBackground = "#cef7cd";
  }

  const iconMap = {
    Alert1: alertCircleIcon,
    Alert2: alertTriangleIcon,
    Alert3: alertCheckCircleIcon,
    Alert4: frownIcon,
  };

  const selectedIcon = iconMap[alertType];

  return (
    <>
      <button
        className={alertClass}
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          border-radius: 10px;
          background: ${alertBackground};
          margin-top: 20px;
          margin-bottom: ${marginBottom};
        `}
      >
        <img
          src={selectedIcon}
          className={`${alertClass}-icon`}
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin: ${marginTB} ${marginLR};
          `}
        />
        <label
          className={`${alertClass}-text`}
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 545px;
            height: 33px;
            flex-shrink: 0;
            color: #444;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-left: 2px;
          `}
        >
          {props.text}
        </label>
      </button>
    </>
  );
}
