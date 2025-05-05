import React from 'react';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ActivityIndicator } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useCachedResources from './src/hooks/useCachedResources';
import { Routes } from './src/routes';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  const { userStorageLoading } = useAuth();

  if (!isLoading || userStorageLoading) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
