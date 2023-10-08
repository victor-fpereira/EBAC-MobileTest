pipeline {

    agent { label 'Localhost'}

    stages {

        stage('Install Node.js') {
            steps {
                // Install Node.js using nvm (Node Version Manager)
                bat '''
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
                    source ~/.nvm/nvm.sh
                    nvm install 18.16.0   # Specify the Node.js version you need
                    nvm use 18.16.0
                '''
            }
        }

        sa

        stage('Checkout') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                git branch: 'sauce-labs_jenkins', url: 'https://github.com/victor-fpereira/EBAC-MobileTest'
            }
            
        }

        stage('Install dependencies') {
            steps {
                // Checkout your source code from a version control system (e.g., Git)
                bat 'npm install'
            }
            
        }

        stage('Build and Test') {
            steps {
                bat 'npm test'
            }
        }
    }    
}
