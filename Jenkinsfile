pipeline {

    agent { label 'Localhost'}

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                git 'https://github.com/victor-fpereira/EBAC-MobileTest/'
                git checkout 'sauce-labs_jenkins'
            }
            
        }

        stage('Build and Test') {
            steps {
                npm test
            }
        }
    }    
}
