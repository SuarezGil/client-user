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
const RegisterScreen = ({navigation}) => {
     const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name:"",
            lastname:"",
            username: "",
            phone: "",
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>Crea tu cuenta en Kinal Sports</Text>
                </View>
                <View style={styles.form}>
                    <Controller
                        control={control}
                        rules={{ required: "El nombre es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre"
                                placeholder="Ingresa tu nombre"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                error={errors.name?.message}
                            />
                        )}
                        name="name"
                    />
                    <Controller
                        control={control}
                        rules={{ required: "El apellido es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Apellido"
                                placeholder="Ingresa tu apellido"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                error={errors.lastname?.message}
                            />
                        )}
                        name="lastname"
                    />
                    <Controller
                        control={control}
                        rules={{ required: "El nombre de usuario es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre de usuario"
                                placeholder="Ingresa tu nombre de usuario"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                error={errors.username?.message}
                            />
                        )}
                        name="username"
                    />
                    <Controller
                        control={control}
                        rules={{ required: "El teléfono es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Teléfono"
                                placeholder="Ingresa tu número de teléfono"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                keyboardType="phone-pad"
                                error={errors.phone?.message}
                            />
                        )}
                        name="phone"
                    />
                    <Controller
                        control={control}
                        rules={{ required: "El correo es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Email"
                                placeholder="Ingresa tu email"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{ required: "La contraseña es requerida" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="Ingresa tu contraseña"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                secureTextEntry
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />
                  

                    <Button
                        title="Registrarse"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>¿Ya tienes una cuenta?</Text>
                            <Text 
                            style={styles.link} 
                            onPress={() => navigation.navigate("Login")}>
                                 Inicia sesión</Text>
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
    paddingVertical: SPACING.xxl,
  },
  header: {
    alignItems: "center",
    marginBottom: SPACING.xl,
    marginTop: SPACING.lg,
  },
  logo: {
    height: 60,
    width: 180,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.secondary,
    marginTop: SPACING.sm,
  },
  form: {
    width: "100%",
  },
  button: {
    marginTop: SPACING.lg,
    
    borderRadius: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING.xl,
    paddingBottom: SPACING.xxl,
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
 
export default RegisterScreen;
