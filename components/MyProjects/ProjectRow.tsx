'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  image: string;
  type: string;
  link: string;
  github: string;
  description: string;
  lessons: string[];
  portfolioVersion: string[];
  completedDate?: string;
};

interface ProjectRowProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectRow({ project, index, onClick }: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  // For even rows, image on left, content on right
  // For odd rows, content on left, image on right
  const imageOrder = isEven ? 'md:order-1' : 'md:order-2';
  const contentOrder = isEven ? 'md:order-2' : 'md:order-1';

  return (
    <div
      className='group cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}>
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
        {/* Image Section */}
        <div className={`w-full md:w-1/2 ${imageOrder}`}>
          <div className='relative aspect-video overflow-hidden rounded-xl border shadow-md'>
            <Image
              src={project.image || '/placeholder.svg?height=400&width=600'}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
              <div className='flex gap-2'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                  className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors'>
                  <Github className='h-5 w-5 text-white' />
                </a>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                  className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors'>
                  <ExternalLink className='h-5 w-5 text-white' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`w-full md:w-1/2 ${contentOrder}`}>
          <div className='space-y-4'>
            <div className='flex items-start justify-between'>
              <h3 className='text-2xl font-bold'>{project.title}</h3>
              <Badge variant='outline' className='capitalize'>
                {project.type}
              </Badge>
            </div>

            {project.description && (
              <p className='text-muted-foreground line-clamp-3'>
                {project.description}
              </p>
            )}

            <div className='flex flex-wrap gap-2 pt-2'>
              {project.lessons.slice(0, 3).map((lesson, i) => (
                <Badge key={i} variant='secondary'>
                  {lesson}
                </Badge>
              ))}
              {project.lessons.length > 3 && (
                <Badge variant='secondary'>
                  +{project.lessons.length - 3} more
                </Badge>
              )}
            </div>

            <motion.div
              className='flex items-center text-primary font-medium pt-2'
              animate={{ x: isHovered ? 5 : 0 }}>
              <Button variant='ghost' className='p-0 hover:bg-transparent'>
                View project details <ArrowRight className='h-4 w-4 ml-1' />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-px bg-border w-full mt-12'></div>
    </div>
  );
}
