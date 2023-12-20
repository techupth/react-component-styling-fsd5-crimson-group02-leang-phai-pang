/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import errorIcon from '../images/frown.png'
import warningIcon from '../images/alert-triangle.png'
import infoIcon from '../images/alert-circle.png'
import successIcon from '../images/check-circle.png'

function Alert(props) {
   if(props.type === "error"){
    return (
        <div css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: #F9C8C8;
        text-align: left;
        `}>
            <img src={errorIcon} alt="" css={css`
            margin-left: 25px;
            margin-top: 20px
            `} />
            <span css={css`
            padding: 20px;
            font-weight: bold;
            `}>This is {props.text} alert box</span></div>
    )
   } else if(props.type === "warning"){
    return (
        <div css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: #F9D9C8;
        text-align: left;
        `}>
            <img src={warningIcon} alt="" css={css`
            margin-left: 25px;
            margin-top: 20px
            `}/>
            <span css={css`
           padding: 20px;
           font-weight: bold;
            `}>This is {props.text} alert box</span></div>
    )
   } else if(props.type === "info"){
    return (
        <div css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: #F9EBC8;
        text-align: left;
        `}>
            <img src={infoIcon} alt="" css={css`
            margin-left: 25px;
            margin-top: 20px
            `}/>
            <span css={css`
            padding: 25px;
            font-weight: bold;
            `}>This is {props.text} alert box</span></div>
    )
   } else if(props.type === "success"){
    return (
        <div css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: #CEF7CD;
        text-align: left;
        `}>
            <img src={successIcon} alt="" css={css`
            margin-left: 25px;
            margin-top: 20px
            `}/>
            <span css={css`
            padding: 25px;
            text-align: left;
            font-weight: bold;
            `}>This is {props.text} alert box</span></div>
    )
   }
}

export default Alert;