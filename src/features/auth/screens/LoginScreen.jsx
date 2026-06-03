import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ScrollView
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {COLORS, SPACING, FONT_SIZE} from '../../../shared/constants/theme.js';
import Input from '../../../shared/components/common/Input';
import Button from '../../../shared/components/common/Button';
import kinalSportsLogo from '../../../../assets/kinal_sports.png';
const LoginScreen = ({navigation}) => {

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Image source={kinalSportsLogo} 
                        style={styles.logo}
                        resizeMode="contain"
                         />
                        <Text style={styles.subtitle}>Bienvenido a Kinal Sports</Text>
                    </View>

                    <View style={styles.form}>
                        <Controller
                            control={control}
                            rules ={{required: "El correo es requerido"}}
                            render={({field: { onChange, value}}) => (
                                <Input
                                    label="Email o Usuario"
                                    placeholder="correo@ejemplo.com"
                                    onChangeText={onChange}
                                    value={value}
                                    autoCapitalize="none"
                                    error={errors.emailOrUsername?.message}
                                />
                            )}
                            name="emailOrUsername"
                        />
                        <Controller
                            control={control}
                            rules ={{required: "La contraseña es requerida"}}
                            render={({field: { onChange, value}}) => (
                                <Input
                                    label="Contraseña"
                                    placeholder="Ingresa tu contraseña"
                                    onChangeText={onChange}
                                    value={value}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    error={errors.password?.message}
                                />
                            )}
                            name="password"
                        />

                        <Button
                            title="Iniciar sesión"
                            onPress={handleSubmit(onSubmit)}
                            style={styles.button}
                        />

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
                            <Text 
                            style={styles.link} 
                            onPress={() => navigation.navigate("Register")}>
                                 Regístrate</Text>
                        </View>
                            
                    </View>

                </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: SPACING.xl,
    justifyContent: "center",
    alignItems: 'center',
  },
  header: {
    alignItems: "center",
    marginBottom: SPACING.xxl,
  },
  logo: {
    height: 80,
    width: 200,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.secondary,
    marginTop: SPACING.sm,
  },
  form: {
    width: "100%",
    maxWidth: 480,
    alignSelf: 'center',
  },
  button: {
    marginTop: SPACING.lg,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING.xl,
  },
  footerText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textLight,
  },
  link: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary,
    fontWeight: "700",
  },
});
 


export default LoginScreen;