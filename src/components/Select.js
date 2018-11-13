import React from 'react';

class Select extends React.Component {
	render() {
		const {members, handleSelect} = this.props;
		return (
			<select name="" id="">
				{
					members.map(member => {
							return	<option key={member.id} value={member.url} onClick={handleSelect}>{member.login}</option>
						})
				}
			</select>
		);
	}
}

export default Select;