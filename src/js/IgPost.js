import React, { useState, useEffect } from "react";

export const IgPost = () => {
	const [heart, setHeart] = useState(false);
	const [brokenheart, setBrokenheart] = useState(false);
	const [clickcount, setClickcount] = useState(0);
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
							style={{ height: 40 }}>
							<div
								className="camera-icon d-flex justify-content-start  "
								style={{
									width: "50%"
								}}>
								{" "}
								<i class="fas fa-camera" />
								<div>
									<p className="name-title  ">
										<strong>Instagram</strong>
									</p>
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
						<video
							style={{ width: 352, height: 200 }}
							className="card-video-top rounded-0 "
							src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/48byXia/videoblocks-relaxing-and-mesmerizing-jelly-fish-swimming-in-water-4k_b2gec_joje__b068a0e54aec5207dfed3ef4311e238e__P360.mp4"
							autoPlay="autoplay"
							loop="loop"
							type="video/mp4">
							Your browser does not support the video tag.
						</video>

						<div className="four-icons d-flex bd-highlight mb-3 ">
							<div
								className="icons-left ml-2 pl-1 bd-highlight  d-flex justify-content-start mt-3"
								style={{ width: "50%" }}>
								<i
									className="far fa-heart pr-2 "
									onClick={() => {
										heart && brokenheart
											? "far fa-comment pr-2"
											: "far fa-heart pr-2 ";
									}}
									style={{
										fontWeight: heart ? "bold" : "",
										color: heart
											? "rgb(185, 19, 19)"
											: "black"
									}}
									onClick={() => {
										if (clickcount === 0) {
											setHeart(!heart);
											setClickcount(1);
										} else {
											setBrokenheart(!brokenheart);
										}
									}}
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
								<strong className="bold mr-2">
									{" "}
									saltairpix
								</strong>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry standard dummy text ever since the
								1wn printer took a galley type and scrambled it
								to make a type consequat.
							</p>
							<p className="date"> 5 days ago </p>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};
