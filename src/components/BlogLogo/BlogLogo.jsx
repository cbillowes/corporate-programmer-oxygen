import React, { Component } from "react";
import Link from "gatsby-link";
import "./BlogLogo.css";

class BlogLogo extends Component {
  render() {
    const { url, title } = this.props;
    if (title) {
      return (
        <Link className="blog-logo" to={url || "/"}>
          {title}
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
