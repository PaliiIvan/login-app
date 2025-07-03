const en_translations = {
  translation: {
    login_title: "Hello!",
    login_description:
      "To log in to your account, enter your address and password.",
    email: "Email",
    password: "Password",
    login: "Login",
    logout: "Logout",
    home: "Home",
    dashboard: "Dashboard",
    settings: "Settings",
    help: "Help",
    forgot_password: "Forgot password?",
    forgot_password_description:
      "It's a joke — you can't forget the password; it doesn't even exist!",
    request_help_title: "If you need help, please contact us.",
    dashboard_description: "One day, something will be here too.",
    error_email: "Invalid email address",
    error_password:
      "Password must be at least 8 characters long and contain at least one number and one special character",
  },
};

type Translations = typeof en_translations;

const fr_translations: Translations = {
  translation: {
    login_title: "Bonjour!",
    login_description:
      "Pour VOUS connecter a votre compte, renseignez votre adress ainsi que votre mot de passe",
    email: "Email",
    password: "Mot de passe",
    login: "Login",
    logout: "Logout",
    home: "Home",
    dashboard: "Tableau de bord",
    settings: "Paramètres",
    help: "Aide",
    forgot_password: "Mot de passe oublié?",
    request_help_title: "Si vous avez besoin d'aide, veuillez nous contacter.",
    dashboard_description: "Un jour, quelque chose sera ici aussi.",
    forgot_password_description:
      "C'est un jeu — vous ne pouvez pas oublier le mot de passe; il n'existe même pas!",
    error_email: "Adresse email invalide",
    error_password:
      "Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial",
  },
};

const de_translations: Translations = {
  translation: {
    login_title: "Hallo!",
    login_description:
      "Um sich mit Ihrem Konto anzumelden, geben Sie Ihre Adresse und Ihr Passwort ein.",
    email: "Email",
    password: "Password",
    login: "Login",
    logout: "Logout",
    home: "Home",
    dashboard: "Dashboard",
    settings: "Einstellungen",
    help: "Hilfe",
    forgot_password: "Passwort vergessen?",
    request_help_title: "Wenn Sie Hilfe benötigen, kontaktieren Sie uns bitte.",
    dashboard_description: "Eines Tages wird auch hier etwas sein.",
    forgot_password_description:
      "Das ist ein Witz — Sie können das Passwort nicht vergessen; es existiert gar nicht!",
    error_email: "Ungültige E-Mail-Adresse",
    error_password:
      "Das Passwort muss mindestens 8 Zeichen lang sein und mindestens eine Zahl und ein Sonderzeichen enthalten",
  },
};

export const translations = {
  en: en_translations,
  fr: fr_translations,
  de: de_translations,
};
