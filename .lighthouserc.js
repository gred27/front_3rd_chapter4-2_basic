module.exports = {
	ci: {
		collect: {
			// staticDistDir: './build',
			startServerCommand: 'pnpm start', // 서버를 키는 명령어를 통해서도 실행 가능
			url: ['http://localhost:8080'],
			numberOfRuns: 2,
		},
		upload: {
			target: 'filesystem',
			outputDir: './lhci_reports',
			reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
		},
	},
};
