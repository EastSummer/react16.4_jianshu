import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <h3 className={this.state.show ? 'show': 'hide'}>hello</h3>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='blue'}}
                    appear={true}
                >
                    <h3>CSSTransition Hello</h3>
                </CSSTransition>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames="fade"
                                unmountOnExit
                                onEntered={(el)=>{el.style.color='blue'}}
                                appear={true}
                                key={index}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleToggle}>toggle</button>
                <button onClick={this.handleAddItem}>AddItem</button>
            </Fragment>
        )
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;