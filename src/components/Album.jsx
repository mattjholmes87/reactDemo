import React, { Component } from "react";
import AlbumItem from "./AlnumItem";

class Album extends Component {
  render() {
    return this.props.album.map((item) => {
      return (
        <AlbumItem
          {...item}
          onDeleteItem={this.props.onDeleteItem}
          index={this.props.index}
        />
      );
    });
  }
}

export default Album;
