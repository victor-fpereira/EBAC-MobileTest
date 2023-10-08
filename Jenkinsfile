pipeline {

    agent { label 'Localhost'}

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                git branch: 'sauce-labs_jenkins', url: 'https://github.com/victor-fpereira/EBAC-MobileTest'
            }
            
        }

        stage('Build and Test') {
            steps {
                npm test
            }
        }
    }    
}
