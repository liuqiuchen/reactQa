const React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <button onClick={this.props.onToggleForm} id="add-question-btn" className="btn btn-success">添加问题</button>
            </div>
        );
    }
});

















