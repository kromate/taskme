import { IonButton, IonContent, IonIcon, IonInput, IonLabel, IonPage, IonText } from '@ionic/vue';

export const registerIonicComponent = (async ({ app }) => {
    app.component('IonPage', IonPage)
    app.component('IonContent', IonContent)
    app.component('IonButton', IonButton)
    app.component('IonInput', IonInput)
    app.component('IonIcon', IonIcon)
    app.component('IonText', IonText)
    app.component('IonLabel', IonLabel)
})

export const registerComponents = async (app: any) => {
    const requireComponent = import.meta.glob('../components/*.vue')

    for (const path in requireComponent) {
        requireComponent[path]().then(async (mod) => {

            const componentName = path.split('/')?.pop()?.replace(/\.\w+$/, '')


            await app.component(
                componentName,
                mod.default || mod
            )

        })
    }

}
