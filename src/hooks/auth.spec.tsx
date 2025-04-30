import { renderHook, act } from '@testing-library/react-hooks';
import { logInAsync } from 'expo-google-app-auth';
import { mocked } from 'ts-jest/utils';
import { AuthProvider, useAuth } from './auth';

jest.mock('expo-google-app-auth');

describe('Auth Hook', () => {
  it('should be able to sign in with Google', async () => {
    const googleMocked = mocked(logInAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      user: {
        id: 'any_id',
        email: 'gportodev@gmail.com',
        name: 'Gabriel',
        photo: 'any_photo.png',
      },
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe('gportodev@gmail.com');
  });

  it('user should not connect if cancel auth with Google', async () => {
    const googleMocked = mocked(logInAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'cancel',
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty('id');
  });

  it('should not be able to sign-in with Google if return null', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    try {
      await act(() => result.current.signInWithGoogle());
    } catch (error) {
      expect(result.current.user).toEqual({});
    }
  });
});
