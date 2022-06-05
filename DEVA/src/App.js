import "./App.css";
function App() {
	return (
		<>
			<nav className="navbar navbar-light bg-light">
				<a href="/" className="navbar-brand mr-auto">
					BlockChain Polls
				</a>
				<button type="button" className="btn btn-secondary">
					Create Poll
				</button>
			</nav>
			<section className="jumpotron bg-light text-center">
				<h1>Polls Rethinked</h1>
				<p className="lead text-muted">Powered by Blockchain</p>
			</section>
			<div className="d-flex">
				<div className="container poll-list">List</div>
				<div className="container poll-detail">Detail</div>
			</div>
		</>
	);
}

export default App;
