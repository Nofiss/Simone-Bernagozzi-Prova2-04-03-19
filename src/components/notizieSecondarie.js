import React, { Component } from 'react';

export default class NotizieSecondarie extends Component {
    render() {
        return (
            <div id="notizieSecondarie" className="containerNS">
                {this.props.newsData.map(item => {
                    return (
                        <div id={item.id} className="notizieS">
                            <img src={item.avatar} alt='avatar' className="imageS" />
                            <div className="textS">{item.first_name}</div>
                            <div className="textS">{item.last_name}</div>
                        </div>
                    )
                }
                )
                }
            </div>
        );
    }
}
