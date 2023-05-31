import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import classNames from 'classnames';

export const MyTimeline = (props) => {
	const { handleShow, company } = props;
	const { avb, nsi } = company;
	return (
		<Timeline>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent
					onClick={(e) => handleShow(e)}
					className={classNames('hover:cursor-pointer', {
						[avb]: 'font-bold',
					})}>
					2022 - Present
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent
					onClick={(e) => handleShow(e)}
					className={classNames('hover:cursor-pointer', {
						[nsi]: 'font-bold',
					})}>
					2021 - 2022
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};
