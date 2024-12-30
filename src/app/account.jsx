import * as React from 'react';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import { useRouter } from 'next/navigation';

const demoSession = {
  user: {
    name: 'Zahra Karami',
    email: 'zkrmy23@gmail.com',
    image: 'https://avatars.githubusercontent.com/u/69428157?v=4',
  },
};

export default function AccountDemoSignedIn() {
    const router =useRouter()
  const [session, setSession] = React.useState(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
        router.push('/')
      },
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        {/* preview-start */}
        <Account />
        {/* preview-end */}
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
