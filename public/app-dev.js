/**
 * Created by sergeyzubov on 09/02/16.
 */
//var Bootstrap = require('bootstrap');
var React = require('react');
var ReactDOM = require('react-dom');

var CommentList = React.createClass({
    getInitialState: function () {
        return {
            comments: null,
            user_comment: ""
        };
    },
    componentDidMount: function () {
        //$.get("/comments", function(data) {
        //    console.log(data);
        //});
        this.setState({
            comments: [
                {text: "Тестовый текст"},
                {text: "Текстовый текст 2"}
            ]
        });
    },
    handleChange: function (event) {
        this.setState({user_comment: event.target.value});
        console.log(event);
    },
    sendComment: function (event) {
        console.log('test');
        $.post("http://localhost:3000/api/addComment", {text: this.state.user_comment}).done(function (data) {
            console.log(data);
        });
    },
    render: function () {
        var comments = "";
        if (this.state.comments)
            comments = this.state.comments.map(function (comment, i) {
                return
                <
                Comment
                key = {i}
                text = {comment} > < / Comment >
            });
        return (
            < div >
            {comments}
            < div >
            < input
        type = "text"
        value = {this.state.user_comment
    }
        onChange = {this.handleChange
    }/>
        <
        button
        onClick = {this.sendComment
    }>
        Отправить < / button >
        < / div >
        < / div >
        )
        ;
    }
})
var Comment = React.createClass({
    render: function () {
        return (
            < div >
            {this.props.text.text
    }
        </
        div >
        )
        ;
    }
});
var App = React.createClass({
    render: function () {
        return (
            < div >
            < CommentList > < / CommentList >
            < / div >
        )
        ;
    }
});
ReactDOM.render(
< App > < / App >,
    document.getElementById('app')
)
;