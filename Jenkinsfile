pipeline {
    agent { label 'Localhost'}

    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/victor-fpereira/EBAC-MobileTest'
                // Execute tests
                bat "npm test"
            }
        }
    }
}
