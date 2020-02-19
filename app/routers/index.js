import { SwitchNavigator } from 'react-navigation';
import { SplashScreenStack, SignUpStack, SignInStack, HomeStack, SetelanStack, TentangKamiStack, KuisStack, LatihanSoalStack, UjianStack, FinishLatihanSoalStack, FinishUjianStack, PembahasanStack, ListArtikelStack, VideoStack, MateriStack, Bab1Stack, Bab2Stack, Bab3Stack, Bab4Stack, Bab5Stack, Bab6Stack } from './stackNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    SignUp: SignUpStack,
    SignIn: SignInStack,
    Home: HomeStack,
    Setelan: SetelanStack,
    TentangKami: TentangKamiStack,
    ListArtikel: ListArtikelStack,
    Kuis: KuisStack,
    LatihanSoal: LatihanSoalStack,
    UjianSoal: UjianStack,
    FinishLatihanSoal: FinishLatihanSoalStack,
    FinishUjian: FinishUjianStack,
    Pembahasan: PembahasanStack,
    Video: VideoStack,
    Materi: MateriStack,
    Bab1: Bab1Stack,
    Bab2: Bab2Stack,
    Bab3: Bab3Stack,
    Bab4: Bab4Stack,
    Bab5: Bab5Stack,
    Bab6: Bab6Stack
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
