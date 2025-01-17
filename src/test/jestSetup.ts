export {};
//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

//jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
