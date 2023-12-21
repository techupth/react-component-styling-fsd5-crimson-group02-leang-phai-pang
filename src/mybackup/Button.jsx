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
          ${buttonType === "primary" ? "#074ee8" : "#07a4e8"}
        );
      `}
    >
      {props.text}
    </button>
  );
}

// old my version

// export function Button(props) {
//   return (
//     if (props.type === "primary" ){
//         <button
//           className="primary-btn"
//           type="primary"
//           css={css`
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             width: 171.19px;
//             height: 50px;
//             border-radius: 4px;
//             background: var(--Primary, #074ee8);
//             gap: 8px;
//             flex-shrink: 0;
//             padding: 0px 16px;
//             margin-bottom: 10px;
//           `}
//         >
//           {props.text}
//         </button>

//         }else if(props.type === "secondary"){

//         <button
//           className="secondary-btn"
//           type="secondary"
//           css={css`
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             width: 171.19px;
//             height: 50px;
//             padding: 0px 16px;
//             gap: 8px;
//             flex-shrink: 0;
//             border-radius: 4px;
//             background: #07a4e8;
//             margin-bottom: 20px;
//           `}
//         >
//           {props.text}
//         </button>
//         }
//   );
// }
