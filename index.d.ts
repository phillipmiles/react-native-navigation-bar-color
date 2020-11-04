declare module "react-native-navigation-bar-color" {
    function changeNavigationBarColor(color: string, light: boolean, animated: boolean): void;
    function changeNavigationBarTheme(light: boolean): void;
    function hideNavigationBar(): boolean;
    function showNavigationBar(): boolean;

    export default changeNavigationBarColor;
    export { changeNavigationBarTheme, hideNavigationBar, showNavigationBar };
}
