pipeline {

    agent { label 'Localhost'}

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                checkout([$class: 'GitSCM', branches: [[name: 'sauce-labs_jenkins']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/victor-fpereira/EBAC-MobileTest/']]])              
            }
            
        }

        stage('Build and Test') {
            steps {
                npm test
            }
        }
    }    
}
