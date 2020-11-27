import React from "react";

export const IgPost = () => {
	return (
		<>
			<div
				className="card text-center "
				style={{ width: 428, height: 595 }}>
				<div className="card-header d-flex bd-highlight mb-3">
					<div
						className="html-icon d-flex justify-content-start "
						style={{
							width: "50%"
						}}>
						(html icon)
					</div>
					<div className="title-left d-flex justify-content-start ">
						<p>HTML</p>

						<p>Rigoberto</p>
					</div>
					<div
						className="ellipsis ml-auto p-2 bd-highlight d-flex justify-content-end "
						style={{
							width: "100%"
						}}>
						(ellipsis icon)
					</div>
				</div>
				<img
					style={{ width: 430 }}
					className="card-img-top "
					src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80"
					alt="Card image cap"
				/>
				<div className="four-icons d-flex bd-highlight mb-3">
					<div
						className="icons-left p-2 bd-highlight  d-flex justify-content-start"
						style={{ width: "50%" }}>
						(three icons-left)
					</div>
					<div
						className="icon-right ml-auto p-2 bd-highlight d-flex justify-content-end"
						style={{ width: "50%" }}>
						(save icon-right)
					</div>
				</div>

				<div className="card-body ">
					<p className="card-caption text-left">
						Liked by <strong> 4GeeksAcademy, html5, Web </strong>
						and <strong> 100,000 others</strong>
					</p>
					<p className="card-text text-left ">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries.
					</p>
				</div>
			</div>
		</>
	);
};
