node {

    agent any

    stage('Checkout') {
        // Checkout your source code from a version control system (e.g., Git)
        git 'https://github.com/victor-fpereira/EBAC-MobileTest/tree/sauce-labs_jenkins.git'
    }

    stage('Install Node.js') {
        // Install Node.js using nvm (Node Version Manager)
        sh '''
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
            source ~/.nvm/nvm.sh
            nvm install 18.16.0   # Specify the Node.js version you need
            nvm use 18.16.0
        '''
    }

    stage('npm install') {
        // Run the 'npm install' command
        sh 'npm install'
    }

    stage('Build and Test') {
        npm test
    }
}
