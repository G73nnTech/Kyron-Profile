export enum ToolType {
  PHOTOSHOP = 'Photoshop',
  BLENDER = 'Blender',
  SUBSTANCE_PAINTER = 'Substance Painter',
  MARVELOUS_DESIGNER = 'Marvelous Designer',
  ZBRUSH = 'ZBrush',
  MAYA = 'Maya',
}

export interface Project {
  id: string;
  title: string;
  category: 'Concept Art' | '3D Modeling';
  description: string;
  tools: ToolType[];
  imageUrl: string;
  objectPosition?: string;
  subText?: string;
  link?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  altEmail: string;
}