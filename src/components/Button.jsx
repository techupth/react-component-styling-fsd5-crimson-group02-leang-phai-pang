// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if (props.type === 'primary') {
        return(
            <div>
            <button css={css`
              width: 171.19px;
              height: 50px;
              border-radius: 4px;
              padding: 0px, 16px;
              background-color: #074EE8;
              color: white;

            `}
            >
             {props.text}
            </button>
            </div>
        )
    } else if (props.type === 'secondary') {
        return(
            <button css={css`
              width: 171.19px;
              height: 50px;
              border-radius: 4px;
              padding: 0px, 16px;
              background-color: #07A4E8;
              color: white;
              margin-top: 20px;
            `}
            >
             {props.text}
            </button>
        )
    }
    
}

export default Button