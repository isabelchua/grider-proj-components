import React from "react";
import faker from "faker";

import "./App.css";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				<p>Are you sure?</p>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="sam"
					timeAgo="Today at 6:00pm"
					comment="Hello"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="alex"
					timeAgo="Yesterday at 3:00pm"
					comment="Hiiii"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="jane"
					timeAgo="Yesterday at 4:00pm"
					comment="Hey"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
}

export default App;
