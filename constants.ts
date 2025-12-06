import { Project, ToolType, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: '(+63) 969 136 6033',
  email: 'kyron_evangelista@dlsu.edu.ph',
  altEmail: 'dddesuu@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/kyron-evangelista', // Assumed structure based on name
};

// Using a placeholder image that matches the description "Young man with glasses"
export const PROFILE_IMAGE_URL = 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=400&auto=format&fit=crop&q=60';

export const PROJECTS: Project[] = [
  // 2D Section
  {
    id: 'concept-duck',
    title: 'Art Collaboration: Duck & Rebel',
    category: 'Concept Art',
    description: 'Concept art drawn for an art collaboration. Models sourced from Sketchfab.',
    tools: [ToolType.PHOTOSHOP, ToolType.BLENDER],
    imageUrl: '/image1.png',
    objectPosition: 'center',
  },
  {
    id: 'concept-drill',
    title: 'Art Collaboration: Driller Girl',
    category: 'Concept Art',
    description: 'Concept art drawn for an art collaboration featuring industrial aesthetics.',
    tools: [ToolType.PHOTOSHOP],
    imageUrl: '/image2.png',
    objectPosition: 'top',
  },
  {
    id: 'concept-scifi',
    title: 'Personal Project: Sci-Fi Warrior',
    category: 'Concept Art',
    description: 'Concept art drawn for a personal project exploring sci-fi armor designs.',
    tools: [ToolType.PHOTOSHOP],
    imageUrl: '/image3.png', // Portrait
    objectPosition: 'top',
  },
  {
    id: 'concept-various',
    title: 'Original Concept Art Collection',
    category: 'Concept Art',
    description: 'Various original concept art pieces exploring themes of "Gold and Blood" and character design sheets.',
    tools: [ToolType.PHOTOSHOP],
    imageUrl: '/image4.png',
  },
  {
    id: 'fan-art',
    title: 'Stylized Fan Art',
    category: 'Concept Art',
    description: 'Exploration of different art styles through fan art creation.',
    tools: [ToolType.PHOTOSHOP],
    imageUrl: '/image5.png',
  },

  // 3D Section
  {
    id: '3d-maid',
    title: 'Original Character: Maid',
    category: '3D Modeling',
    description: 'Original character design and modeling for a personal project. Includes Full Quality and Toon Shaded renders.',
    tools: [ToolType.BLENDER, ToolType.MARVELOUS_DESIGNER, ToolType.PHOTOSHOP, ToolType.SUBSTANCE_PAINTER],
    imageUrl: '/image6.png',
    objectPosition: 'top',
  },
  {
    id: '3d-creature',
    title: 'Original Creature: Lizard Gentleman',
    category: '3D Modeling',
    description: 'Original character and design for a personal project featuring organic and hard surface modeling.',
    tools: [ToolType.BLENDER, ToolType.SUBSTANCE_PAINTER, ToolType.PHOTOSHOP],
    imageUrl: '/image7.png',
  },
  {
    id: '3d-diorama',
    title: 'Diorama Scene',
    category: '3D Modeling',
    description: 'A complete scene composition featuring previous character assets.',
    tools: [ToolType.BLENDER],
    imageUrl: '/image13.png',
  },
  {
    id: '3d-megacat',
    title: 'Character Modeling for Mega Cat Studios',
    category: '3D Modeling',
    description: 'Professional character modeling work commissioned for Mega Cat Studios.',
    tools: [ToolType.ZBRUSH, ToolType.SUBSTANCE_PAINTER, ToolType.BLENDER, ToolType.MARVELOUS_DESIGNER],
    imageUrl: '/image8.png', // Portrait
    objectPosition: 'top',
  },
  {
    id: '3d-prop',
    title: 'Prop Study: Azur Lane Weapon',
    category: '3D Modeling',
    description: 'Detailed prop study referenced from the game Azur Lane. Focus on texturing and hard surface.',
    tools: [ToolType.BLENDER, ToolType.SUBSTANCE_PAINTER],
    imageUrl: '/image9.png',
  },
  {
    id: '3d-weapon',
    title: 'Weapon Study: Beretta 92FS',
    category: '3D Modeling',
    description: 'High fidelity weapon topology study.',
    tools: [ToolType.BLENDER],
    imageUrl: '/image10.png',
  },
  {
    id: '3d-arch',
    title: 'Architecture Study',
    category: '3D Modeling',
    description: 'Stylized architecture study based on reference by @baishaoxia on ArtStation.',
    tools: [ToolType.BLENDER],
    imageUrl: '/image11.png',
  },
  {
    id: '3d-concept',
    title: 'Concept Modeling',
    category: '3D Modeling',
    description: 'Quick concept modeling for environments and props (Arcade, Cars, Cat Tower).',
    tools: [ToolType.MAYA],
    imageUrl: '/image12.png',
  }
];