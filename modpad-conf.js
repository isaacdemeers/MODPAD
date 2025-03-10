/**
 * ModPad Launcher Configuration
 * 
 * This file centralizes all configurable variables for the launcher.
 * Modify these values to customize your launcher instance.
 */

// Basic Information
const config = {
    // Launcher Information
    launcher: {
        title: 'ModPad Launcher',
        icon: 'SealCircle', // Icon filename without extension
        gameDirectory: '.Modpad', // Default game directory name in user's app data
        discordRPC: {
            clientId: '1ce6e35a-126f-48fd-97fb-54d143ac6d45', // Discord application ID
            enabled: true
        },
        autoUpdater: {
            enabled: true, // Enable auto-updates
            checkInterval: 30, // Check for updates every 30 minutes
            allowPrerelease: false // Allow prerelease versions by default
        }
    },

    // Main Window Configuration
    mainWindow: {
        width: 1080,
        height: 600,
        frame: true,
        backgroundColor: '#171614',
        title: 'ModPad Launcher', // Window title
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    },

    // Microsoft Auth Window Configuration
    authWindow: {
        width: 520,
        height: 600,
        frame: true,
        backgroundColor: '#222222'
    },

    // Distribution
    distribution: {
        url: 'https://helios-files.geekcorner.eu.org/distribution.json', // URL to your distribution.json file
        rss: null, // URL to your RSS feed for news
        mainServer: 'ModPad', // ID of the main server in your distribution
    },

    // Microsoft Authentication
    microsoft: {
        clientId: '1ce6e35a-126f-48fd-97fb-54d143ac6d45', // Microsoft Azure application ID
    },

    // Default Settings
    settings: {
        java: {
            minRam: '3G', // Default minimum RAM
            maxRam: '4G', // Default maximum RAM
            executable: null, // Default Java executable path (null = auto-detect)
            jvmOptions: [
                '-XX:+UseConcMarkSweepGC',
                '-XX:+CMSIncrementalMode',
                '-XX:-UseAdaptiveSizePolicy',
                '-Xmn128M'
            ], // Default JVM options for Java 8
            jvmOptions17: [
                '-XX:+UnlockExperimentalVMOptions',
                '-XX:+UseG1GC',
                '-XX:G1NewSizePercent=20',
                '-XX:G1ReservePercent=20',
                '-XX:MaxGCPauseMillis=50',
                '-XX:G1HeapRegionSize=32M'
            ] // Default JVM options for Java 17+
        },
        game: {
            width: 1280, // Default game window width
            height: 720, // Default game window height
            fullscreen: false, // Launch in fullscreen mode
            autoConnect: true, // Auto-connect to server
            launchDetached: true // Launch as detached process
        },
        launcher: {
            allowPrerelease: false, // Allow prerelease versions
            dataDirectory: null, // Custom data directory (null = default location)
            commonDirectory: 'common', // Common directory name for shared game files
            instanceDirectory: 'instances', // Instance directory name for per-server game files
            tempNativeFolder: 'WCNatives', // Temp folder name for native libraries
            showConsoleOnLaunch: false // Show game console window on launch
        }
    },

    // UI Customization
    ui: {
        background: {
            useRandomBackground: true, // Use random background from backgrounds folder
            defaultBackground: 0, // Default background ID if not random
            backgroundsDirectory: 'backgrounds' // Directory name for background images
        },
        newsPanel: {
            enabled: true, // Show news panel
            maxArticles: 10 // Maximum number of news articles to display
        },
        loginScreen: {
            forgotPasswordLink: 'https://www.minecraft.net/password/forgot',
            needAccountLink: 'https://www.minecraft.net/store/minecraft-java-edition',
            defaultRememberAccount: true // Default state of "Remember Me" checkbox
        },
        mediaLinks: {
            github: 'https://github.com/dscalzi/HeliosLauncher',
            twitter: 'https://twitter.com/dscalzi',
            instagram: 'https://www.instagram.com/dscalzi',
            youtube: 'https://www.youtube.com/user/dscalzi',
            discord: 'https://discord.gg/zNWUXdt'
        },
        supportLink: 'https://github.com/dscalzi/HeliosLauncher/issues',
        sourceLink: 'https://github.com/dscalzi/HeliosLauncher',
        branding: {
            footerText: 'Powered by Helios Launcher',
            showFooter: true,
            splashImages: {
                loadingLogo: 'LoadingSeal.png',
                loadingSpinner: 'LoadingText.png'
            }
        }
    },

    // Server Status
    serverStatus: {
        checkInterval: 300000, // Check server status every 5 minutes (in milliseconds)
        timeout: 2500 // Timeout for server status check (in milliseconds)
    },

    // Build Configuration
    build: {
        appId: 'MODPAD',
        productName: 'MODPAD',
        copyright: 'Copyright © 2018-2024 Daniel Scalzi',
        artifactName: '${productName}-setup-${version}.${ext}',
        directories: {
            buildResources: 'build',
            output: 'dist'
        },
        win: {
            target: [
                {
                    target: 'nsis',
                    arch: 'x64'
                }
            ]
        },
        mac: {
            target: [
                {
                    target: 'dmg',
                    arch: [
                        'x64',
                        'arm64'
                    ]
                }
            ],
            category: 'public.app-category.games'
        },
        linux: {
            target: 'AppImage',
            maintainer: 'Daniel Scalzi',
            vendor: 'Daniel Scalzi',
            synopsis: 'Modded Minecraft Launcher',
            description: 'Custom launcher which allows users to join modded servers. All mods, configurations, and updates are handled automatically.',
            category: 'Game'
        }
    }
}

module.exports = config 