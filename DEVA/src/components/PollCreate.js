import React from "react";

export default function PollCreate() {
	return (
		<div>
			<form action="" className="container col-sm-4">
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Question:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							name=""
							id=""
							className="form-control form-control-sm"
							placeholder="Poll Question"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Image:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							name=""
							id=""
							className="form-control form-control-sm"
							placeholder="URL to the Image"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Option:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							name=""
							id=""
							className="form-control form-control-sm"
							placeholder="Option 1"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Option:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							name=""
							id=""
							className="form-control form-control-sm"
							placeholder="Option 2"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Option:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							name=""
							id=""
							className="form-control form-control-sm"
							placeholder="Option 3"
						/>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-sm btn-secondary">
						Submit Poll
					</button>
				</div>
			</form>
		</div>
	);
}
