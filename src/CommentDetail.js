import React from "react";
import faker from "faker";

function CommentDetail() {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={faker.image.avatar()} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">
					Sam
				</a>

				<div className="metadata">
					<span className="date">Today at 6:00pm</span>
				</div>
				<div className="text">nice blog post</div>
			</div>
		</div>
	);
}

export default CommentDetail;
