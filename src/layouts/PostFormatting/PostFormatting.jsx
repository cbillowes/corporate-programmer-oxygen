import React from "react";
import "./PostFormatting.css";

class PostFormatting extends React.Component {
  render() {
    const { children, className, cover } = this.props;
    const style = cover ? { backgroundImage: `url(${cover})` } : {};

    return <article className={className} style={style}>{children}</article>;
  }
}

export default PostFormatting;
