export const skills = [
  { name: 'Astro', category: 'Frontend', level: 'Advanced' },
  { name: 'React', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Language', level: 'Advanced' },
  { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
  { name: 'PostgreSQL', category: 'Database', level: 'Intermediate' },
  { name: 'Tailwind CSS', category: 'Styling', level: 'Advanced' },
  { name: 'Git', category: 'Tools', level: 'Advanced' },
  { name: 'Docker', category: 'DevOps', level: 'Beginner' },
];

export const skillCategories = [...new Set(skills.map(s => s.category))];