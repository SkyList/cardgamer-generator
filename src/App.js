import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import logo from './images/Xbox_one_logo.svg';
import avatar from './images/default-avatar.jpg';
import './css/card-css.css'
import './css/dados-css.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamertag: 'XBOX_PLAYER',
      name: 'REAL_NAME',
      image: avatar
    }
    this.myRef = React.createRef();
    this.generateImage = this.generateImage.bind(this)
  }

  generateImage() {
    let node = this.myRef.current

    domtoimage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'myCard.png';
        link.href = dataUrl;
        link.click();

      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light header">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="" />
            XBOX GAMERCARD GENERATOR
          </a>
        </nav>

      
      <div className="App">

        <div className='dados'>
          <div className='container'>

            <div className="form-group">
              <input
                onChange={(gamertag) => this.setState({ gamertag: gamertag.target.value })}
                type="text"
                className="form-control"
                placeholder="Enter gamertag" />
            </div>

            <div className="form-group">
              <input
                onChange={(name) => this.setState({ name: name.target.value.toUpperCase() })}
                type="text"
                className="form-control"
                placeholder="Name" />
            </div>

            <div className="form-group">
              <label >Upload your profile image.</label>
              <input
                onChange={(img) => this.setState({ image: URL.createObjectURL(img.target.files.item(0)) })}
                type="file" className="form-control-file" id="exampleFormControlFile" />
            </div>
            <small id="emailHelp" class="form-text text-muted">If you using this app on smartphone, change in landscape mode for best results.</small>
            <button onClick={() => this.generateImage()} type="submit" className="btn btn-primary">{'Download'.toUpperCase()}</button>
          </div>
        </div>
        <div ref={this.myRef}>
          <div className='card-gamertag'>
            <div className='container'>
              <div className='card-top'>
                <img className='logo' src={logo} />
                <h2>
                  <div className='xbox-name'>XBOX <strong>ONE</strong></div>
                  <div className='xbox-player'>PLAYER</div>
                </h2>
              </div>

              <div className='card-content'>
                <img className='avatar' src={this.state.image} />
                <div className='info-player'>

                  <div>
                    <h5>GAMERTAG</h5>
                    <h1>{this.state.gamertag.toUpperCase()}</h1>
                  </div>

                  <div>
                    <h5>NAME</h5>
                    <h2>{this.state.name.toUpperCase()}</h2>
                  </div>

                </div>
              </div>
              <div className='card-footer'>
                <h5>
                  This card is unficial.<br />
                  I'm not affiliated with Microsoft or Xbox
              </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
