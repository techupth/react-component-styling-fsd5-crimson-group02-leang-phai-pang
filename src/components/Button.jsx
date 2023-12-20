/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if(props.type === "primary") {
        return (
            <button css={css`
            width: 330px;
            height: 50px;
            border-radius: 4px;
            background-color: #074EE8;
            `}> {props.text} </button>
        )
    } else if(props.type === "secondary"){
        return (
            <button css={css`
            width: 330px;
            height: 50px;
            border-radius: 4px;
            background-color: #07A4E8;
            `}>{props.text}</button>
        )
    } else {
        return (
            <button css={css`
            color: green;
            `}>Hello!</button>
        )
    }
}

export default Button;