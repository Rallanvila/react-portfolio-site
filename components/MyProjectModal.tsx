import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MyProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    type: string;
    image: string;
    github: string;
    demo: string;
    keyLearnings: string[];
  };
}

export default function MyProjectModal({
  isOpen,
  onClose,
  project,
}: MyProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className='relative w-full max-w-3xl overflow-hidden rounded-lg bg-white'>
        <div className='flex flex-col'>
          <div className='relative'>
            <img
              src={project.image}
              alt={project.title}
              className='h-64 w-full object-cover'
            />
            <button
              onClick={onClose}
              className='absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70'>
              <ChevronRight className='h-6 w-6' />
            </button>
          </div>

          <div className='p-6'>
            <div className='mb-4 flex items-center justify-between border-b pb-4'>
              <h2 className='text-2xl font-bold'>{project.title}</h2>
              <div className='flex gap-4'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200'>
                  <Github className='h-5 w-5' />
                </a>
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200'>
                  <ExternalLink className='h-5 w-5' />
                </a>
              </div>
            </div>

            <Badge variant='secondary' className='mb-4'>
              {project.type}
            </Badge>

            <Card className='mb-6'>
              <CardContent className='p-4'>
                <h3 className='mb-2 text-lg font-semibold'>Description</h3>
                <p className='text-gray-600'>{project.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-4'>
                <h3 className='mb-2 text-lg font-semibold'>Key Learnings</h3>
                <ul className='list-inside list-disc space-y-2 text-gray-600'>
                  {project.keyLearnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
