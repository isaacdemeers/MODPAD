const ModPadConfig = require('./modpad-conf');

/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
    appId: ModPadConfig.build.appId,
    productName: ModPadConfig.build.productName,
    artifactName: ModPadConfig.build.artifactName,
    copyright: ModPadConfig.build.copyright,
    asar: true,
    compression: 'maximum',
    files: [
        '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.nvmrc,.eslintrc.json}'
    ],
    extraResources: [
        'libraries'
    ],
    win: {
        target: ModPadConfig.build.win.target
    },
    nsis: {
        oneClick: false,
        perMachine: false,
        allowElevation: true,
        allowToChangeInstallationDirectory: true
    },
    mac: {
        target: ModPadConfig.build.mac.target,
        artifactName: '${productName}-setup-${version}-${arch}.${ext}',
        category: ModPadConfig.build.mac.category
    },
    linux: {
        target: ModPadConfig.build.linux.target,
        maintainer: ModPadConfig.build.linux.maintainer,
        vendor: ModPadConfig.build.linux.vendor,
        synopsis: ModPadConfig.build.linux.synopsis,
        description: ModPadConfig.build.linux.description,
        category: ModPadConfig.build.linux.category
    },
    directories: {
        buildResources: ModPadConfig.build.directories.buildResources,
        output: ModPadConfig.build.directories.output
    }
};

module.exports = config; 