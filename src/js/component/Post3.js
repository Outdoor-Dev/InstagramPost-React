import React, { useState, useEffect } from "react";

export const Post3 = () => {
	const [heart, setHeart] = useState(false);
	const [brokenheart, setBrokenheart] = useState(false);
	const [clickcount, setClickcount] = useState(0);
	const [bookmark, setBookmark] = useState(false);
	const [color, setColor] = useState("rgb(215,211,205)");
	const [textColor, setTextColor] = useState("black");
	return (
		<div className="post">
			<div className="top2 d-flex justify-content- space-between  ">
				<div className="circle4  p-2 bd-highlight">
					<i className=" tree fas fa-tree d-flex justify-content-center" />
				</div>

				<div className="user p-2 bd-highlight">
					<b>outdoorjunkie</b>

					<p className="location  p-2 bd-highlight">
						{" "}
						Somewhere Outside{" "}
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
				class
				Name="india"
				style={{ width: 318, height: 205 }}
				className="card-video-top rounded-0"
				src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=1200:*"
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
					<strong> 754 Likes</strong>
				</p>
				<p className="card-text text-left ">
					<strong className="bold mr-2"> outdoorjunkie</strong>
					The beauty of nature around me. This beauty allows is what
					allows me to choose places and many destinations for the
					sake of rest, recreation and the best of times. Nature has
					always been the first inspiration for me as an artist...{" "}
					<span className="more"> more </span>
				</p>

				<p className="date"> 40 minutes ago </p>
			</div>
		</div>
	);
};
