pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat'set'
retry(3) {
                    sh './flakey-deploy.sh'
                }

                timeout(time: 3, unit: 'MINUTES') {
                    sh './health-check.sh'
                }
            }
        }
    }
}