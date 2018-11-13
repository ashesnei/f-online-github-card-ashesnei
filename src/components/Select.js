import React from 'react';

class Select extends React.Component {
	render() {
		const {members, handleSelect} = this.props;
		return (
			<select name="" id="">
				{
					members ? 
						members.map(member => {
							return	<option value={member.url} onClick={handleSelect}>{member.login}</option>
						})
					:
					<option value="member1">Cargando</option>
				}
			</select>
		);
	}
}

export default Select;