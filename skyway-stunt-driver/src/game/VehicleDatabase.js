/**
 * ORIGINAL VEHICLE IP DATABASE
 *
 * All real-world car brand names removed.
 * Fictional original IP manufacturers, vehicles, classes, tiers, performance stats,
 * unlock requirements, and customizable paint & wheel presets.
 */

export const VEHICLE_CLASSES = {
  STREET: { name: 'Street Tuner', color: '#38bdf8' },
  MUSCLE: { name: 'V8 Power', color: '#f59e0b' },
  SUPER: { name: 'Supercar', color: '#ec4899' },
  HYPER: { name: 'Hyper Prototype', color: '#10b981' }
};

export const PAINT_PRESETS = [
  { name: 'Apex Gold', hex: '#f59e0b', metallic: 0.9, roughness: 0.2 },
  { name: 'Cyber Cyan', hex: '#06b6d4', metallic: 0.8, roughness: 0.15 },
  { name: 'Crimson Fury', hex: '#ef4444', metallic: 0.85, roughness: 0.25 },
  { name: 'Midnight Violet', hex: '#8b5cf6', metallic: 0.9, roughness: 0.1 },
  { name: 'Emerald Tech', hex: '#10b981', metallic: 0.95, roughness: 0.15 },
  { name: 'Obsidian Black', hex: '#1e293b', metallic: 0.7, roughness: 0.3 }
];

export const CARS = [
  {
    id: 'nissan_s15',
    name: 'Nissan Silvia S15',
    price: 0,
    owned: true,
    unlocked: true, // STARTER CAR ONLY
    modelPath: '/assets/2009_c-west_gt_nissan_silvia_s15_200sx.glb'
  },
  {
    id: 'mercedes_s65',
    name: 'Mercedes S65 AMG',
    price: 25000,
    owned: false,
    unlocked: false,
    modelPath: '/assets/2015_mercedes-benz_s65_amg_coupe.glb'
  },
  {
    id: 'bentley_gt3',
    name: 'Bentley Continental GT3',
    price: 35000,
    owned: false,
    unlocked: false,
    modelPath: '/assets/bentley_continental_gt3.glb'
  },
  {
    id: 'xiaomi_su7',
    name: 'Xiaomi SU7 Ultra',
    price: 50000,
    owned: false,
    unlocked: false,
    modelPath: '/assets/2025_xiaomi_su7_ultra.glb'
  },
  {
    id: 'lambo_centenario',
    name: 'Lamborghini Centenario',
    price: 75000,
    owned: false,
    unlocked: false,
    modelPath: '/assets/2017_lamborghini_centenario_roadster.glb'
  },
  {
    id: 'pagani_huayra',
    name: 'Pagani Huayra R',
    price: 100000,
    owned: false,
    unlocked: false,
    modelPath: '/assets/2025_pagani_huayra_r_20th_asphalt_anniversary.glb'
  }
];

export const VEHICLE_CATALOG = {
  nissan_s15: {
    id: 'nissan_s15',
    name: 'Nissan Silvia S15',
    manufacturer: 'Takumi Dynamics',
    className: 'STREET',
    tier: 'TIER C',
    path: '/assets/2009_c-west_gt_nissan_silvia_s15_200sx.glb',
    description: 'Ultra-agile track-tuned sports coupe designed for razor-sharp handling and narrow suspended rails.',
    statSpeed: 55, statHandling: 70, statStability: 50,
    topSpeed: 24, nitroSpeed: 36, acceleration: 14, braking: 45, handling: 0.13,
    unlockLevel: 1, unlockCost: 0, price: 0, owned: true,
    primaryColor: '#ef4444',
    rotationY: 0
  },
  mercedes_s65: {
    id: 'mercedes_s65',
    name: 'Mercedes S65 AMG',
    manufacturer: 'Aethelgard Luxury',
    className: 'SUPER',
    tier: 'TIER C',
    path: '/assets/2015_mercedes-benz_s65_amg_coupe.glb',
    description: 'Heavy high-luxury grand tourer with excellent acceleration and hydraulic active body suspension.',
    statSpeed: 76, statHandling: 68, statStability: 72,
    topSpeed: 28, nitroSpeed: 43, acceleration: 18, braking: 50, handling: 0.14,
    unlockLevel: 3, unlockCost: 25000, price: 25000, owned: false,
    primaryColor: '#06b6d4',
    rotationY: 0
  },
  bentley_gt3: {
    id: 'bentley_gt3',
    name: 'Bentley Continental GT3',
    manufacturer: 'Apex Engineering',
    className: 'SUPER',
    tier: 'TIER B',
    path: '/assets/bentley_continental_gt3.glb',
    description: 'Heavy track-focused luxury grand tourer with excellent stability and massive downforce.',
    statSpeed: 68, statHandling: 75, statStability: 65,
    topSpeed: 26, nitroSpeed: 40, acceleration: 16, braking: 48, handling: 0.15,
    unlockLevel: 5, unlockCost: 35000, price: 35000, owned: false,
    primaryColor: '#10b981',
    rotationY: 0
  },
  xiaomi_su7: {
    id: 'xiaomi_su7',
    name: 'Xiaomi SU7 Ultra',
    manufacturer: 'Celestia Tech',
    className: 'HYPER',
    tier: 'TIER A',
    path: '/assets/2025_xiaomi_su7_ultra.glb',
    description: 'All-electric hyper sedan prototype with triple electric motors and torque vectoring.',
    statSpeed: 85, statHandling: 82, statStability: 80,
    topSpeed: 30, nitroSpeed: 46, acceleration: 20, braking: 53, handling: 0.17,
    unlockLevel: 8, unlockCost: 50000, price: 50000, owned: false,
    primaryColor: '#e11d48',
    rotationY: 0
  },
  lambo_centenario: {
    id: 'lambo_centenario',
    name: 'Lamborghini Centenario',
    manufacturer: 'Velocita Supercars',
    className: 'HYPER',
    tier: 'TIER HYPER',
    path: '/assets/2017_lamborghini_centenario_roadster.glb',
    description: 'Carbon fiber hypercar prototype featuring active rear steering and maximum aerodynamic downforce.',
    statSpeed: 92, statHandling: 88, statStability: 90,
    topSpeed: 32, nitroSpeed: 49, acceleration: 22, braking: 56, handling: 0.18,
    unlockLevel: 12, unlockCost: 75000, price: 75000, owned: false,
    primaryColor: '#f59e0b',
    rotationY: 0
  },
  pagani_huayra: {
    id: 'pagani_huayra',
    name: 'Pagani Huayra R',
    manufacturer: 'Horacio Masterpieces',
    className: 'HYPER',
    tier: 'TIER S+',
    path: '/assets/2025_pagani_huayra_r_20th_asphalt_anniversary.glb',
    description: 'Track-only hypercar powered by a naturally aspirated V12 engine and active aerodynamics.',
    statSpeed: 98, statHandling: 95, statStability: 98,
    topSpeed: 34, nitroSpeed: 52, acceleration: 24, braking: 59, handling: 0.20,
    unlockLevel: 15, unlockCost: 100000, price: 100000, owned: false,
    primaryColor: '#8b5cf6',
    rotationY: 0
  }
};
