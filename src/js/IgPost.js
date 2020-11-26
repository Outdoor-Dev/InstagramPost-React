import React from "react";

export const IgPost = () => {
	return (
		<>
			<div
				className="card text-center "
				style={{width: 24.8 rem ; height:34 rem}}>
				<div className="card-header">
					<div className="html-icon">(html icon)</div>
					<div className="title-left">
						<p>HTML</p>
						<p>Rigoberto</p>
					</div>
					<div className="ellipsis">(ellipsis icon)</div>
				</div>
				<img
					style="width:24.8rem; "
					className="card-img-top "
					src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80"
					alt="Card image cap"
				/>
				<div className="four-icons">
					<div className="icons-left">(three icons-left)</div>
					<div className="icon-right">(save icon-right)</div>
				</div>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
		</>
	);
};
