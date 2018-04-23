import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SocialMediaIcons.css";

class SocialMediaIcons extends React.Component {
  render() {
    const { entries, color } = this.props;
    if (entries && entries.length > 0) {
      return (
        <div className="social-media-icons">
          {entries.map(entry => (
            <SocialIcon
              key={entry.url}
              className={"social-media-icon " + entry.type}
              url={entry.url}
              style={{ height: null, width: null }}
              color={color}
            />
          ))}
        </div>
      );
    }
    return null;
  }
}

export default SocialMediaIcons;
