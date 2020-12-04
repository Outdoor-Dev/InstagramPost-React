import React, { useState } from "react";
import PropTypes from "prop-types";

export const Post = ({ color, setColor, textColor, setTextColor }) => {
	const [heart, setHeart] = useState(false);
	const [brokenheart, setBrokenheart] = useState(false);
	const [clickcount, setClickcount] = useState(0);
	const [bookmark, setBookmark] = useState(false);

	return (
		<div className="post">
			<div className="top d-flex justify-content- space-between ">
				<div className="circle2  p-2 bd-highlight">
					<i className=" earth fas fa-globe-americas  d-flex justify-content-center" />
				</div>

				<div className="user p-2 bd-highlight">
					<b>amazingsights</b>

					<p className="location  p-2 bd-highlight">Agra,India</p>
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
						<a className="dropdown-item pointer">Go to post</a>
						<hr />
						<a className="dropdown-item pointer">Share to...</a>
						<hr />
						<a className="dropdown-item pointer">Copy Link</a>
						<hr />
						<a className="dropdown-item pointer">Embed</a>
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

			<img
				style={{ width: 318, height: 205 }}
				className="india card-video-top rounded-0"
				src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80"
			/>

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
							color: heart ? "rgb(185, 19, 19)" : textColor
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
					Liked by <strong> 6,000 Likes </strong>
				</p>
				<p className="card-text text-left ">
					<strong className="bold mr-2"> amazingsights</strong>
					So grateful I got to visit the Taj Mahal this summer with my
					man <strong>@amazingman</strong>. Backpacking through India
					was an amazing experience and very humbling.{" "}
				</p>
				<p className="date"> 5 minutes ago </p>
			</div>
		</div>
	);
};

Post.propTypes = {
	color: PropTypes.string,
	setColor: PropTypes.func,
	textColor: PropTypes.string,
	setTextColor: PropTypes.func
};
