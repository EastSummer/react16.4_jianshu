import React, {Component} from 'react';
// 脚手架工具自带prop-types包
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content
    }

    render() {
        const { content, test } = this.props
        // JSX -> React.createElement -> virtualDOM(JS对象) -> 真实的DOM
        return (
            <div onClick={this.handleClick}>
                {test} - {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,   // isRequired必须传递
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // number or nuber
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
// 默认值
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem