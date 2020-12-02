import React, { useState, useEffect } from "react";

export const DropDown = () => {
    return (
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
                <a className="dropdown-item text-danger pointer">Report</a>
                <hr />
                <a className="dropdown-item text-danger pointer">Unfollow</a>
                <hr />
                <a className="dropdown-item pointer">Go to post</a>
                <hr />
                <a className="dropdown-item pointer">Share to...</a>
                <hr />
                <a className="dropdown-item pointer">Copy Link</a>
                <hr />
                <a className="dropdown-item pointer">Embed</a>
                <hr />
            </div>
        </div>
    );
};
