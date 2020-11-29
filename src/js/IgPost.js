import React, { useState, useEffect } from "react";

export const IgPost = () => {
	const [heart, setHeart] = useState(false);
	//const [brokenheart, setBrokenheart] = useState(false);
	//const [clickcount, setClickcount] = useState(0);
	const [bookmark, setBookmark] = useState(false);
	//const [color, setColor] = useState("");
	//const randomColors = () => {
	// Math.floor(Math.random() * 16777215).toString(16);

	//};
	return (
		<>
			{" "}
			<body>
				<div className="background-image">
					<div
						className="card  rounded-top "
						style={{
							width: 350,
							height: 588
							//	backgroundColor: color
						}}>
						<div
							className="card-header d-flex "
							style={{ height: 55 }}>
							<div
								className="html-icon d-flex justify-content-start   "
								style={{
									width: "50%"
								}}>
								{" "}
								<i className="fab fa-html5 " />
								<div className="title-left d-flex justify-content-start flex-column ml-2 ">
									<p className="html-title mb-0 ">
										<strong>HTML5</strong>
									</p>

									<p className="name-title ">Rigoberto</p>
								</div>
							</div>

							<div
								className="ellipsis ml-auto  bd-highlight d-flex justify-content-end "
								style={{
									width: "100%"
								}}>
								<div className="dropdown">
									<i
										className="fas fa-ellipsis-v dropdown"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									/>
									<div
										className="dropdown-menu text-center"
										aria-labelledby="dropdownMenuLink">
										<a
											className="dropdown-item text-danger"
											href="#">
											Report
										</a>
										<hr />
										<a
											className="dropdown-item text-danger"
											href="#">
											Unfollow
										</a>
										<hr />
										<a className="dropdown-item" href="#">
											Go to post
										</a>
										<hr />
										<a className="dropdown-item" href="#">
											Share to...
										</a>
										<hr />
										<a className="dropdown-item" href="#">
											Copy Link
										</a>
										<hr />
										<a className="dropdown-item" href="#">
											Embed
										</a>
										<hr />
										<a
											className="dropdown-item"
											//	onClick={() => {
											//	setColor(!color);
											//	}}>
										>
											Change Background Color
										</a>

										<hr />
										<a className="dropdown-item" href="#">
											Cancel
										</a>
									</div>
								</div>
							</div>
						</div>

						<img
							style={{ width: 352, height: 320 }}
							className="card-img-top rounded-0"
							src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80"
							alt="Card image cap"
						/>
						<div className="four-icons d-flex bd-highlight mb-3 ">
							<div
								className="icons-left ml-2 pl-1 bd-highlight  d-flex justify-content-start mt-3"
								style={{ width: "50%" }}>
								<i
									className="far fa-heart pr-2 "
									// {
									//	heart && brokenheart
									//	? "fas fa-heart-broken pr-2"
									//	: "far fa-heart pr-2 "
									//}
									style={{
										fontWeight: heart ? "bold" : "",
										color: heart
											? "rgb(185, 19, 19)"
											: "black"
									}}
									onClick={
										() =>
											//{
											//	if (clickcount === 0) {
											setHeart(!heart)
										//	setClickcount(1);
										//	} else {
										//	setBrokenheart(!brokenheart);
										//	}
									} //}
								/>

								<i className="far fa-comment" />
								<i className="far fa-paper-plane pl-2" />
							</div>
							<div
								className="icon-bookmark mr-2 mt-3  mr-3 pr-1 bd-highlight d-flex justify-content-end"
								style={{ width: "50%" }}>
								<i
									className="far fa-bookmark"
									style={{
										fontWeight: bookmark ? "bold" : ""
									}}
									onClick={() => setBookmark(!bookmark)}
								/>
							</div>
						</div>

						<div className="card-body ">
							<p className="card-caption text-left">
								Liked by{" "}
								<strong> 4GeeksAcademy, html5, Web </strong>
								and <strong> 100,000 others</strong>
							</p>
							<p className="card-text text-left ">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry standard dummy text ever since the
								1500s, when an unknown printer took a galley of
								type and scrambled it to make a type consequat.
							</p>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};
