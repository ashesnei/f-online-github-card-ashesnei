import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataMember: {}
		}
	}

	//No pinta datos cuando se crea, solo cuando actualiza. MEJORAR
	componentDidUpdate() {
		this.memberfetch()
	}

	memberfetch() {
		fetch(this.props.memberSelected)
		.then(response => response.json())
		.then(data => this.setState({dataMember: data}))
	}

	render() {
		const {avatar_url, login, name, location, public_repos, followers, following} = this.state.dataMember;
		return (
			<div className="card">
				<div className="img-member__container"><img src={avatar_url} alt={name}/></div>
				<div className="data-member__container">
					<span>@{login}</span>
					<span>{name}</span>
					<span>{location}</span>
					<div className="numbers-data">
						<div className="respos-container"><span>{public_repos}</span><span>Repos</span></div>
						<div className="followers-container"><span>{followers}</span><span>Followers</span></div>
						<div className="followings-container"><span>{following}</span><span>Followings</span></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;