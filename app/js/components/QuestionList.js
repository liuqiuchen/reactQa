const React = require('react');
const QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
    render: function () {
        let questions = this.props.questions;
        //console.log(Array.isArray(questions));
        if(!Array.isArray(questions))  throw new Error('this.props.questions问题必须是数组');
        let questionComps = questions.map(function (qst) {
            return <QuestionItem key={qst.key}
                          title={qst.title}
                          description={qst.description}
                          voteCount={qst.voteCount}
                    />;
        });

        return (
            <div>
                <div id="questions" className="">
                    {questionComps}
                </div>
            </div>
        );
    }
});









