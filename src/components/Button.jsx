/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  let buttonType, buttonClass, marginBottom;

  if (props.type === "primary") {
    buttonType = "primary";
    buttonClass = "primary-btn";
    marginBottom = "10px";
  } else if (props.type === "secondary") {
    buttonType = "secondary";
    buttonClass = "secondary-btn";
    marginBottom = "20px";
  }

  return (
    <button
      className={buttonClass}
      type={buttonType}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
        gap: 8px;
        flex-shrink: 0;
        padding: 0px 16px;
        margin-bottom: ${marginBottom};
        background: var(
          --Primary,
          ${buttonType === "primary"
            ? "#074ee8"
            : buttonType === "secondary"
            ? "#07a4e8"
            : "initial"}
        );
      `}
    >
      {props.text}
    </button>
  );
}


