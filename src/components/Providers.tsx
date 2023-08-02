import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import ModalProvider from '@/components/ModalProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ModalProvider />
      {children}
    </ClerkProvider>
  );
};

export default Providers;
