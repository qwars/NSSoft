import React from "react";

import styles from "./styles.module.css";

class Splashboard extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {}
  }

  renderArtworksList() {
    return this.props.artworks.map(art => (
      <div
        key={art._id}
        className={ [ styles['art-row'], this.state.art && this.state.art._id === art._id && styles['active-art-row'] ].join(' ') }
        onClick={ () => this.setState({ art: art }) }
        >
        <div
          className={styles['art-avatar']}
          style={{
            backgroundImage: `url(imgs/artworks/${art._id}.jpg)`
          }}
        />
        <span>{ art.title }</span>
      </div>
    ));
  }

  renderSpot() {
    return (
      <div className={styles['spot']}>
        <div
          className={styles['spot-img']}
          style={{
            backgroundImage: `url(imgs/artworks/${this.state.art._id}.jpg)`
          }}
        />
        <div className={styles['spot-label']}>{this.state.art.title}</div>
     </div>
    );
  }

  render() {
    return (
      <div className={styles['splashboard']}>
        <div>
          <h3 className={styles['header']}>Artworks</h3>
          {this.renderArtworksList()}
        </div>
        { this.state.art && this.renderSpot() }
      </div>
    );
  }

}

export default Splashboard
