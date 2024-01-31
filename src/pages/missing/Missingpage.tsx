import React from 'react';
import DefaultLayout from '../../layouts/default/DefaultLayout';
import './Missingpage.scss';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Missingpage: React.FC = () => {
	return (
		<DefaultLayout className="missingPage">
			<div className="absolute-centered">
				<Result
					status="404"
					title="404"
					subTitle="Sorry, the page you visited does not exist."
					extra={
						<Link to="/">
							<Button type="primary">Back Home</Button>
						</Link>
					}
				/>
			</div>
		</DefaultLayout>
	);
};

export default Missingpage;
