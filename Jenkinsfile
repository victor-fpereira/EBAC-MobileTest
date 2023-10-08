pipeline {

    agent { label 'Localhost'}

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                git 'https://github.com/victor-fpereira/EBAC-MobileTest/tree/sauce-labs_jenkins.git'
            }
            
        }

        stage('Build and Test') {
            steps {
                npm test
            }
        }
    }    
}
