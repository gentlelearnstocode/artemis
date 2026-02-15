import React from 'react';
import { VideoPreview, ViralSegments } from '@/components/dashboard';

const DashboardPage = () => {
  return (
    <div className='flex h-full gap-8 max-w-[1400px] mx-auto'>
      <VideoPreview />
      <ViralSegments />
    </div>
  );
};

export default DashboardPage;
