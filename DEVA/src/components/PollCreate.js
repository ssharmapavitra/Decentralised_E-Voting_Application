import React, { useState } from "react";

export default function PollCreate() {
	const [values, setValues] = useState({
		question: "",
		image: "",
		op1: "",
		op2: "",
		op3: "",
	});

	const handleQuestionInputChange = (event) => {
		setValues({ ...values, question: event.target.value });
	};
	const handleQuestionImageChange = (event) => {
		setValues({ ...values, image: event.target.value });
	};
	const handleQuestionOp1Change = (event) => {
		setValues({ ...values, op1: event.target.value });
	};
	const handleQuestionOp2Change = (event) => {
		setValues({ ...values, op2: event.target.value });
	};
	const handleQuestionOp3Change = (event) => {
		setValues({ ...values, op3: event.target.value });
	};
	const OnPollSubmit = (event) => {
		event.preventDefault();
		console.log(values);
	};

	return (
		<div>
			<form action="" className="container col-sm-4" onSubmit={OnPollSubmit}>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label col-form-label-sm">
						Question:
					</label>
					<div className="col-sm-8">
						<input
							onChange={handleQuestionInputChange}
							value={values.question}
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
							onChange={handleQuestionImageChange}
							value={values.image}
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
							onChange={handleQuestionOp1Change}
							value={values.op1}
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
							onChange={handleQuestionOp2Change}
							value={values.op2}
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
							onChange={handleQuestionOp3Change}
							value={values.op3}
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
