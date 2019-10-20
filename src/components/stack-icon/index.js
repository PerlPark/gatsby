import React from "react"
import Style from "./stack-icon.module.css";
import IconHTML5 from "../_svg/stack/html5.svg";
import IconScss from "../_svg/stack/scss.svg";
import IconJs from "../_svg/stack/javascript.svg";
import IconNodejs from "../_svg/stack/nodejs.svg";
import IconExpress from "../_svg/stack/express.svg";
import IconPug from "../_svg/stack/pug.svg";
import IconGatsby from "../_svg/stack/gatsby.svg";
import IconReact from "../_svg/stack/react-logo.svg";
import IconCSS3 from "../_svg/stack/css3.svg";
import IconGraphQL from "../_svg/stack/graphql.svg";
import IconAdobeXD from "../_svg/stack/adobexd.svg";

function stackIcon(props) {
  const icon = {
    height: '28px',
    width: 'auto'
  };
  const icon2 = {
    width: '62px',
    height: 'auto'
  };
  return (
    <li>
      {props.name === "HTML5" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconHTML5 style={icon} />
        </span>
      )}
      {props.name === "SCSS" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconScss style={icon} />
        </span>
      )}
      {props.name === "Javascript" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconJs style={icon} />
        </span>
      )}
      {props.name === "Node.js" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconNodejs style={icon} />
        </span>
      )}
      {props.name === "Express" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconExpress style={icon2} />
        </span>
      )}
      {props.name === "Pug" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconPug style={icon} />
      </span>
      )}
      {props.name === "Gatsby" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconGatsby style={icon} />
      </span>
      )}
      {props.name === "React" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconReact style={icon} />
      </span>
      )}
      {props.name === "CSS3" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconCSS3 style={icon} />
      </span>
      )}
      {props.name === "GraphQL" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconGraphQL style={icon} />
      </span>
      )}
      {props.name === "AdobeXD" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconAdobeXD style={icon} />
      </span>
      )}
    </li>
  )
}
export default stackIcon