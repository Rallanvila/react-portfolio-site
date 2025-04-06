'use client';
import { motion } from 'framer-motion';
import { Calendar, Code, Lightbulb, Rocket } from 'lucide-react';

type Project = {
  title: string;
  completedDate?: string;
  lessons: string[];
  portfolioVersion: string[];
};

interface ProjectTimelineProps {
  project: Project;
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  // If there's no completed date, we'll just show a placeholder timeline
  const hasDate = Boolean(project.completedDate);

  // For demo purposes, create timeline events
  // In a real implementation, you would have actual milestone data
  const timelineEvents = [
    {
      title: 'Project Started',
      date: hasDate ? getStartDate(project.completedDate) : 'Start Date',
      icon: <Calendar className='h-4 w-4' />,
      color: 'bg-blue-500',
    },
    {
      title: 'Development',
      date: hasDate ? getMidDate(project.completedDate) : 'Development',
      icon: <Code className='h-4 w-4' />,
      color: 'bg-purple-500',
    },
    {
      title: 'Testing & Refinement',
      date: hasDate ? getLateDate(project.completedDate) : 'Testing',
      icon: <Lightbulb className='h-4 w-4' />,
      color: 'bg-amber-500',
    },
    {
      title: 'Project Completed',
      date: project.completedDate || 'Completion Date',
      icon: <Rocket className='h-4 w-4' />,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className='py-4'>
      <h4 className='font-semibold text-lg mb-4'>Project Timeline</h4>

      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-muted' />

        {/* Timeline events */}
        <div className='space-y-8'>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className='relative pl-10'>
              {/* Timeline dot */}
              <div
                className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${event.color}`}>
                {event.icon}
              </div>

              <div>
                <h5 className='font-medium'>{event.title}</h5>
                <p className='text-sm text-muted-foreground'>{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {!hasDate && (
        <p className='text-sm text-muted-foreground mt-4 italic'>
          Note: Add completion dates to your project data to see actual timeline
          dates.
        </p>
      )}
    </div>
  );
}

// Helper functions to generate placeholder dates based on completion date
function getStartDate(completionDate?: string): string {
  if (!completionDate) return 'Start Date';

  try {
    const date = new Date(completionDate);
    date.setMonth(date.getMonth() - 2);
    return formatDate(date);
  } catch (e) {
    return 'Start Date';
  }
}

function getMidDate(completionDate?: string): string {
  if (!completionDate) return 'Development';

  try {
    const date = new Date(completionDate);
    date.setMonth(date.getMonth() - 1);
    date.setDate(date.getDate() - 15);
    return formatDate(date);
  } catch (e) {
    return 'Development';
  }
}

function getLateDate(completionDate?: string): string {
  if (!completionDate) return 'Testing';

  try {
    const date = new Date(completionDate);
    date.setDate(date.getDate() - 7);
    return formatDate(date);
  } catch (e) {
    return 'Testing';
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
