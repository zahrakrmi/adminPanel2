'use client';
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useRouter } from 'next/navigation';
import Checkbox from '@mui/material/Checkbox';

const providers = [{ id: 'credentials', name: 'Email and Password' }];
export default function CredentialsSignInPage() {
  const router = useRouter();
  const handleSignIn = (provider, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    alert(`Welcome, ${email}`);
    router.push('/dashboard');
  };
  return (
    <AppProvider>
      <SignInPage
        signIn={handleSignIn}
        slotProps={{
          emailField: { variant: 'standard', autoFocus: false },
          passwordField: { variant: 'standard' },
          submitButton: { variant: 'outlined' },
          rememberMe: {
            control: (
              <Checkbox
                name="tandc"
                value="true"
                color="primary"
                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            ),
            color: 'textSecondary',
            label: 'Remember me',
          },
         }}
         providers={providers}
      />
    </AppProvider>
  );
}
