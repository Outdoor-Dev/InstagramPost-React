import React, { useState, useEffect } from "react";
//import { MyModal } from "./component/modal";
import { Post } from "./component/Post";
import { Post2 } from "./component/Post2";

export const IgPost = () => {
	const [heart, setHeart] = useState(false);
	const [brokenheart, setBrokenheart] = useState(false);
	const [clickcount, setClickcount] = useState(0);
	const [bookmark, setBookmark] = useState(false);
	const [color, setColor] = useState("rgb(215,211,205)");
	const [textColor, setTextColor] = useState("black");
	//const randomColors = () => {
	// Math.floor(Math.random() * 16777215).toString(16);

	//};
	return (
		<>
			{" "}
			<div className="background-image" style={{ height: 1000 }}>
				<div
					className="card  rounded-top "
					style={{
						width: 316,
						height: 574,

						background: color,
						color: textColor
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

					<div className="post-container">
						<div className="top d-flex justify-content- space-between ">
							<div className="circle  p-2 bd-highlight">
								<i className=" fish fas fa-fish  d-flex justify-content-center" />
							</div>

							<div className="user p-2 bd-highlight">
								<b>saltairpix</b>

								<p className="location  p-2 bd-highlight">
									{" "}
									Miami,Fl
								</p>
							</div>
							<div className="dropdown ml-auto p-2 bd-highlight">
								<i
									className="ellipsis fas fa-ellipsis-h  
                                    dropdown pointer"
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
									<a className="dropdown-item text-danger pointer">
										Report
									</a>
									<hr />
									<a className="dropdown-item text-danger pointer">
										Unfollow
									</a>
									<hr />
									<a className="dropdown-item pointer">
										Go to post
									</a>
									<hr />
									<a className="dropdown-item pointer">
										Share to...
									</a>
									<hr />
									<a className="dropdown-item pointer">
										Copy Link
									</a>
									<hr />
									<a className="dropdown-item pointer">
										Embed
									</a>
									<hr />
									<a
										className="dropdown-item pointer"
										onClick={() => {
											if (color === "rgb(215,211,205)") {
												setColor("black");
												setTextColor("rgb(215,211,205");
											} else {
												setColor("rgb(215,211,205)");
												setTextColor("black");
											}
										}}>
										Change Background Color
									</a>
									<hr />
									<a className="dropdown-item" href="#">
										Cancel
									</a>
								</div>
							</div>
						</div>

						<video
							style={{ width: 318, height: 190 }}
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
											? "fas fa-thumbs-down pr-2  pointer " +
											  (textColor === "black"
													? "text-dark"
													: "text-white")
											: "far fa-heart pr-2 pointer"
									}
									style={{
										fontWeight: heart ? "bold" : "",
										color: heart
											? "rgb(185, 19, 19)"
											: textColor
									}}
									onClick={() => {
										if (clickcount === 0) {
											setHeart(true);
											setClickcount(1);
										} else if (clickcount === 1) {
											setBrokenheart(true);
											setClickcount(2);
										} else {
											setHeart(false);
											setBrokenheart(false);
											setClickcount(0);
										}
									}}
								/>

								<i className="far fa-comment pointer" />
								<i className="far fa-paper-plane pl-2 pointer" />
							</div>
							<div
								className="icon-bookmark mr-2 mt-2 mr-3 pr-1 bd-highlight d-flex justify-content-end "
								style={{ width: "50%" }}>
								<i
									className="far fa-bookmark pointer"
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
								With a single ...{" "}
								<span className="more"> more </span>
							</p>
							<p className="date"> 5 days ago </p>
						</div>
						<Post />
						<Post2 />
					</div>

					<hr />
					<div className="bottom-icons">
						<footer className="footer d-flex justify-content-between ">
							<i className="home fas fa-home" />
							<i className=" search fas fa-search" />
							<i className="square far fa-plus-square" />
							<i className=" heart far fa-heart" />

							<div className="bottom-user">
								<p className="second-circle ">
									<i className="dog fas fa-paw" />
								</p>
							</div>
							<p className="dot"> . </p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};
