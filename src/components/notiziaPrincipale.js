import React, { Component } from 'react';

export default class NotiziaPrincipale extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            notizia: [{
                id: 1,
                image: 'https://picsum.photos/1200/500/?random',
                description: 'Aenean est dui, ultricies id ullamcorper non, feugiat a felis. Quisque aliquet quam',
                description2: 'ut mi vestibulum rhoncus. Ut lacus nibh, ultricies dignissim volupat eget, gravida eget ex.',
            }],
            dot: '...',
            active: true
        }
        this.showMore = this.showMore.bind(this)
    }

    showMore = () => {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {
        let hide = 'hidden'
        let hideDot = ''
        let buttonName = 'More'
        this.state.active ? hide = 'hidden' : hide = 'display'
        this.state.active ? hideDot = 'display' : hideDot = 'hidden'
        this.state.active ? buttonName = 'more' : buttonName = 'less'
        return (
            <div id={this.state.notizia[0].id} className="NotiziaP">
                <img src={this.state.notizia[0].image} alt='immagine' className="imageP"/>
                <div className="containerP">
                    <div className="NotiziaPText">
                        <div className="TextP">
                            <p>{this.state.notizia[0].description}</p>
                            <span className={hideDot}>{this.state.dot}</span>
                            <p className={hide}>{this.state.notizia[0].description2}</p>
                        </div>
                        <button onClick={this.showMore} style={{ fontSize: '20px' }}>Show {buttonName}</button></div>
                </div>
            </div>
        );
    }
}
