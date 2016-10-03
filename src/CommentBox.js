import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    loadCommentsFromServer = () => {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    componentDidMount = () => {
        let interval = this.props.pollInterval;
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, interval);
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}