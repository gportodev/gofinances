import React, { useState } from 'react';

import { Alert, ActivityIndicator, View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import styles from './styles';

import { GoogleIcon, LogoIcon } from '../../assets/icons/Loader';
import colors from '../../constants/colors';

function SignIn(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar a conta Google');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <LogoIcon width={120} height={68} />

          <Text style={styles.title}>
            Controle suas {'\n'} finanças de forma {'\n'} muito simples
          </Text>
        </View>

        <Text style={styles.signInTitle}>
          Faça seu login com {'\n'} uma das contas abaixo
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerWrapper}>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleIcon}
            onPress={handleSignInWithGoogle}
          />
        </View>

        {isLoading && (
          <ActivityIndicator color={colors.shape} style={{ marginTop: 18 }} />
        )}
      </View>
    </View>
  );
}

export { SignIn };
