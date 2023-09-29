Lista de programas necessários para a execução de scripts no Android mobile

1 - App demo
2 - Android Studio
3 - Android Inspector
4 - Appium Server
5 - Appium - npm i --location=global appiuma
5 - JDK - Java Development Kit - Não tem uma versão específica, mas aqui será usado a versão 18
6 - Node.js - Não tem uma versão específica, mas aqui será usado a versão 18
7 - VScode
8 - Git
9 - Git Bash

Comando para ver os logs do webdriver io:
* adb logcat | grep wdio

Como iniciar o teste:

Cada comando deve ser executado em um terminal diferente

1 - Certifique-se que o emulador esteja ligado, caso não tenha configurado seu código para fazer isso automaticamente
2 - Execute o servidor appium, com o comando: appium --base-path /wd/hub
3 - Execute os testes com o comando: npm test

