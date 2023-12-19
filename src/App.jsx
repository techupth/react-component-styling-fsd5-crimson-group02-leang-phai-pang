/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import alertCircleIcon from "./imgs/alert-circle.png";
import alertTriangleIcon from "./imgs/alert-triangle.png";
import alertCheckCircleIcon from "./imgs/check-circle.png";
import frownIcon from "./imgs/frown.png";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <button
          className="primary-btn"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 171.19px;
            height: 50px;
            border-radius: 4px;
            background: var(--Primary, #074ee8);
            gap: 8px;
            flex-shrink: 0;
            padding: 0px 16px;
            margin-bottom: 10px;
          `}
        >
          Primary Button
        </button>

        <button
          className="secondary-btn"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 171.19px;
            height: 50px;
            padding: 0px 16px;
            gap: 8px;
            flex-shrink: 0;
            border-radius: 4px;
            background: #07a4e8;
            margin-bottom: 20px;
          `}
        >
          Secondary Button
        </button>
      </div>
      <hr />
      <div className="alert-components-section">
        <button
          className="error-alert-box-1"
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 650px;
            height: 76px;
            flex-shrink: 0;
            border-radius: 10px;
            background: #f9c8c8;
            margin-top: 20px;
            margin-bottom: 25px;
          `}
        >
          <img
            src={frownIcon}
            className="error-alert-icon"
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              width: 24px;
              height: 24px;
              flex-shrink: 0;
              margin: 26px 20px;
              color: #14944f;
            `}
          />
          <label
            className="error-alert-text"
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
            This is error alert box
          </label>
        </button>
      </div>

      <button
        className="warning-alert-box-2"
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #f9d9c8;
          margin-bottom: 25px;
        `}
      >
        <img
          src={alertTriangleIcon}
          className="warning-alert-icon"
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin: 26px 20px;
          `}
        />
        <label
          className="warning-alert-text"
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
          `}
        >
          This is warning alert box
        </label>
      </button>
      <button
        className="info-alert-box-3"
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #f9ebc8;
          margin-bottom: 25px;
        `}
      >
        <img
          src={alertCircleIcon}
          className="info-alert-icon"
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin: 26px 20px;
          `}
        />
        <label
          className="info-alert-text"
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
          `}
        >
          This is info alert box
        </label>
      </button>

      <button
        className="success-alert-box-4"
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          border-radius: 10px;
          border-radius: 10px;
          background: #cef7cd;
        `}
      >
        <img
          src={alertCheckCircleIcon}
          className="success-alert-icon"
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin: 26px 20px;
          `}
        />
        <label
          className="success-alert-text"
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
          `}
        >
          This is success alert box
        </label>
      </button>
    </div>
  );
}

export default App;
