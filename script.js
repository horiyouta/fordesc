const workspace = Blockly.inject(`blocklyDiv`, {
    toolbox: document.getElementById(`toolbox`),
    renderer: `zelos`,
    move: { wheel: true },
    zoom: {
        controls: true,
        startScale: 0.7,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
    },
    grid: {
        spacing: 40,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    trashcan: false,
    ADD_START_HATS: true,
    theme: Blockly.Theme.defineTheme('mmm', {
        'blockStyles': {
            'motion': {
                'colourPrimary': `#5597fc`,
                'colourSecondary': `#3b73ca`
            },
            'looks': {
                'colourPrimary': `#9a65fc`,
                'colourSecondary': `#784cc9`
            },
            'sound': {
                'colourPrimary': `#ce62cd`,
                'colourSecondary': `#bb40bb`
            },
            'events': {
                'colourPrimary': `#fcbf29`,
                'colourSecondary': `#ca991f`
            },
            'control': {
                'colourPrimary': `#fcaa2f`,
                'colourSecondary': `#cd8a27`
            },
            'sensing': {
                'colourPrimary': `#62b1d4`,
                'colourSecondary': `#388eb6`
            },
            'operators': {
                'colourPrimary': `#5dc05d`,
                'colourSecondary': `#3c943c`
            },
            'variables': {
                'colourPrimary': `#fc8b2d`,
                'colourSecondary': `#d86d1b`
            },
            'data': {
                'colourPrimary': `#fb642a`,
                'colourSecondary': `#e34b1a`
            }
        },
        'componentStyles': {
            'workspaceBackgroundColour': `#f9f9f9`,
            'toolboxBackgroundColour': `#ffffff`,
            'toolboxForegroundColour': `6f6f6f`,
            'flyoutBackgroundColour': `#f9f9f9`
        },
        'startHats': true
    })
});