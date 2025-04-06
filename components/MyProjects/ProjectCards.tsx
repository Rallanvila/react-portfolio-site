'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  image: string;
  type: string;
  link: string;
  github: string;
  description: string;
  lessons: string[];
  portfolioVersion: string[];
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='overflow-hidden h-full cursor-pointer group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}>
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={project.image || '/placeholder.svg?height=400&width=600'}
          alt={project.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
          <div className='flex gap-2'>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors'>
              <GithubIcon className='h-5 w-5 text-white' />
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
      <CardContent className='p-4 space-y-3'>
        <div className='flex justify-between items-start'>
          <h3 className='font-bold text-lg line-clamp-1'>{project.title}</h3>
          <Badge variant='outline' className='capitalize'>
            {project.type}
          </Badge>
        </div>
        <p className='text-muted-foreground text-sm line-clamp-2'>
          {project.description || 'No description available'}
        </p>
        <motion.div
          className='flex items-center text-sm text-primary font-medium'
          animate={{ x: isHovered ? 5 : 0 }}>
          View details <ChevronRight className='h-4 w-4 ml-1' />
        </motion.div>
      </CardContent>
    </Card>
  );
}
