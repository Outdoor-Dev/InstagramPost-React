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
				<div className="background-image" style={{ height: 1000 }}>
					<div
						className="card  rounded-top "
						style={{
							width: 315,
							height: 522
							//	backgroundColor: color
						}}>
						<div
							className="card-header d-flex justify-content-space-between"
							style={{ height: 30 }}>
							<div
								className="camera-icon d-flex justify-content-start  "
								style={{
									width: "50%"
								}}>
								{" "}
								<i className="fas fa-camera" />
								<div>
									<p className="name-title  ">
										<strong>Instagram</strong>
									</p>
								</div>
								<i
									className="plane far fa-paper-plane d-flex justify-content-end "
									style={{
										width: "100%"
									}}
								/>
							</div>
						</div>

						<div className="circle ">
							<i className=" fish fas fa-fish" />
							<p className="user">
								<b>saltairpix</b>
							</p>
							<p className="location"> Miami,Fl</p>
							<div
								className="ellipsis "
								style={{
									width: "100%"
								}}>
								<div className="dropdown">
									<i
										className="ellipsis fas fa-ellipsis-h  d-flex justify-content-end 
									dropdown"
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
										<a className="dropdown-item">
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
							style={{ width: 316, height: 210 }}
							className="card-video-top rounded-0"
							src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/48byXia/videoblocks-relaxing-and-mesmerizing-jelly-fish-swimming-in-water-4k_b2gec_joje__b068a0e54aec5207dfed3ef4311e238e__P360.mp4"
							autoPlay="play"
							loop="loop"
							type="video/mp4">
							Your browser does not support the video tag.
						</video>

						<div className="four-icons d-flex bd-highlight mb-3 ">
							<div
								className="icons-left ml-2 pl-1 bd-highlight  d-flex justify-content-start mt-2"
								style={{ width: "50%" }}>
								<i
									className={
										heart && brokenheart
											? "far fa-thumbs-down pr-2 text-dark"
											: "far fa-heart pr-2"
									}
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
								className="icon-bookmark mr-2 mt-2 mr-3 pr-1 bd-highlight d-flex justify-content-end"
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
								The Pacific sea nettle is carnivorous and eats
								simple and easy-to-catch animals: zooplankton,
								larval fishes, crustaceans, eggs, and sometimes
								other jellies. But without a mouth, how do these
								jellies eat? Not by filtration like you might
								expect, but more actively through a process
								that’s a little like that of a venus flytrap.
								With a single opening that allows food to enter
								and waste to exit the body, the Pacific sea
								nettle’s thin ...{" "}
								<span className="more"> more </span>
							</p>
							<p className="date"> 5 days ago </p>
							<span className="fa-stack fa-2x">
								<i className="comment fas fa-comment-alt text-danger fa-stack-2x" />
								<i className=" person fas fa-user-alt fa-stack-1x fa-inverse" />
							</span>

							<p className="number text-white "> 2 </p>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};
