import { type FC, type MouseEvent } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import classNames from 'classnames';

interface TimelineProps {
  handleShow: (e: MouseEvent) => void;
  company: {
    avb: string;
    nsi: string;
  };
}

export const MyTimeline: FC<TimelineProps> = (props) => {
  const { handleShow, company } = props;
  const { avb, nsi } = company;

  return (
    <Timeline className='py-0'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='bg-blue-500' />
          <TimelineConnector className='bg-blue-200' />
        </TimelineSeparator>
        <TimelineContent
          onClick={(e) => handleShow(e)}
          className={classNames(
            'cursor-pointer transition-all duration-300 hover:text-blue-600',
            {
              [avb]: 'font-bold text-blue-600',
            }
          )}>
          <div className='text-lg'>2022 - Present</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='bg-blue-500' />
        </TimelineSeparator>
        <TimelineContent
          onClick={(e) => handleShow(e)}
          className={classNames(
            'cursor-pointer transition-all duration-300 hover:text-blue-600',
            {
              [nsi]: 'font-bold text-blue-600',
            }
          )}>
          <div className='text-lg'>2021 - 2022</div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
