import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // très important pour générer un site statique
  basePath: '/lafermedorthe', // remplace NOM_REPO par le nom de ton repo GitHub
  assetPrefix: '/lafermedorthe/', // pour que les assets (images, CSS, JS) soient corrects sur GitHub Pages
};

export default nextConfig;
