'use client';

import { GithubIcon, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ProjectTimeline } from './ProjectTimeline';

type Project = {
  title: string;
  image: string;
  type: string;
  link: string;
  github: string;
  description: string;
  lessons: string[];
  portfolioVersion: string[];
  completedDate?: string; // Optional date field
};

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='max-w-3xl w-full max-h-[90vh] overflow-y-auto'>
        <DialogHeader className='flex flex-row items-center justify-between'>
          <DialogTitle className='text-2xl font-bold'>
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 mt-4'>
          <div className='relative aspect-video rounded-lg overflow-hidden'>
            <Image
              src={project.image || '/placeholder.svg?height=400&width=600'}
              alt={project.title}
              fill
              sizes='(max-width: 1200px) 100vw, 1200px'
              className='object-cover'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            <Badge variant='outline' className='capitalize'>
              {project.type}
            </Badge>
            {project.portfolioVersion &&
              project.portfolioVersion.map((version) => (
                <Badge key={version} variant='secondary'>
                  {version}
                </Badge>
              ))}

            {project.completedDate && (
              <Badge
                variant='outline'
                className='ml-auto flex items-center gap-1'>
                <Calendar className='h-3 w-3' />
                {project.completedDate}
              </Badge>
            )}
          </div>

          {project.description ? (
            <p className='text-muted-foreground'>{project.description}</p>
          ) : (
            <p className='text-muted-foreground italic'>
              No description available
            </p>
          )}

          {/* Timeline Component */}
          {/* <ProjectTimeline project={project} /> */}

          {project.lessons && project.lessons.length > 0 && (
            <div>
              <h4 className='font-semibold text-lg mb-2'>Key Learnings</h4>
              <ul className='space-y-2'>
                {project.lessons.map((lesson, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-primary'></span>
                    {lesson}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className='flex gap-4 pt-4'>
            <Button asChild>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <ExternalLink className='mr-2 h-4 w-4' />
                Visit Site
              </a>
            </Button>
            <Button variant='outline' asChild>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'>
                <GithubIcon className='mr-2 h-4 w-4' />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
