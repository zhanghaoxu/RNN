import React from "react";
import ImageType from "./ugcType/image";
import VideoType from "./ugcType/video";
import TextType from "./ugcType/text";
export default class UgcItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ugc } = this.props;
    let type = ugc.dakaRule;
    let src;
    switch (type) {
      case "image":
        src = JSON.parse(ugc.content)[0].url;
        return <ImageType src={src} />;
      case "video":
        src = ugc.content;
        return <VideoType src={src + "?vframe"} />;
      default:
        return <TextType content={ugc.content} />;
    }
  }
}
