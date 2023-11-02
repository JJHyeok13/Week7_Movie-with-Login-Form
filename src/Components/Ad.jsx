import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Advertisment from "../img/Advertisement.svg";

export default class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAd: true,
        };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({
            showAd: !prevState.showAd,
        }));
    }

    render() {
        return (
            <div>
                {this.state.showAd && (<Link to="/adpage">
                    <img src={Advertisment} alt="Advertisement" />
                </Link>
                )}
                {
                    <button onClick={this.handleToggleClick}>
                        {this.state.showAd ? '광고 숨기기' : '광고 보기'}

                    </button>
                }
            </div>
        );
    }
}
