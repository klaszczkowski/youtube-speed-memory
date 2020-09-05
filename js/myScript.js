chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);

class SpeedSetter {
    constructor() {
        this.usableDomTreeIndicators = {
            classList: {
                name: 'classList',
                querySelectorParts: ['.', '']
            },
            id: {
                name: 'id',
                querySelectorParts: ['#', '']
            },
            role: {
                name: 'role',
                querySelectorParts: ['[role="', '"]']
            },
            // textValue: {
            //     name: 'textValue'
            // }
        };

        this.domTreeElementsIndicators = {
            settingsBtn: {
                classList: ['ytp-settings-button']
            },
            changeSpeedMenuItem: {
                classList: ['ytp-menuitem'],
                role: 'menuitem'
            },
            speedOptionsPannel: {
                classList: ['ytp-panel'],
            },
            speedOption: {
                classList: ['ytp-menuitem'],
            }
        }

        this.channelsInitSettings = [
            {
                channelName: 'codedamn',
                preferredSpeedSetManuallyInPannel: '2',
                latelySetSpeed: '1.25'
            },
            {
                channelName: 'Codevolution',
                preferredSpeedSetManuallyInPannel: '0.5',
                latelySetSpeed: '0.25'
            }
        ];

        this.currentChannel = 'codedamn';
        this.speedToSetOnInit = this.getPreferredSpeed();
    }

    getPreferredSpeed() {
        let preferredSpeed;

        this.channelsInitSettings.forEach((o) => {
            if (o.channelName == this.currentChannel) {
                preferredSpeed = o.preferredSpeedSetManuallyInPannel || o.latelySetSpeed;
            }
        });

        return preferredSpeed;
    }

    getIndicatorWithPrefixAndSuffixForQuerySelector (indicatorName, value) {
        var querySelectorParts = this.usableDomTreeIndicators[indicatorName].querySelectorParts;
        return querySelectorParts[0] + value + querySelectorParts[1];
    }

    getDOMNode(element, context) {
        if (!context) {
            context = document;
        }
        var elementIndicators = this.domTreeElementsIndicators[element];
        var elementIndicatorsArray = Object.keys(elementIndicators);

        var querySelector = '';

        elementIndicatorsArray.forEach(
            (indicator) => {

                if (indicator == this.usableDomTreeIndicators.classList.name) {
                    querySelector += this.getIndicatorWithPrefixAndSuffixForQuerySelector(indicator, this.domTreeElementsIndicators[element].classList);
                } else if (indicator == this.usableDomTreeIndicators.id.name) {
                    querySelector += this.getIndicatorWithPrefixAndSuffixForQuerySelector(indicator, this.domTreeElementsIndicators[element].id);
                } else if (indicator == this.usableDomTreeIndicators.role.name) {
                    querySelector += this.getIndicatorWithPrefixAndSuffixForQuerySelector(indicator, this.domTreeElementsIndicators[element].role);
                }
            }
        );

        console.log(querySelector);

        var elementsMatched = context.querySelectorAll(querySelector);

        return elementsMatched;
    }

    clickSettingsIcon () {
        const settingsBtn = this.getDOMNode('settingsBtn');
        settingsBtn[0].click();

        const changeSpeedMenuItem = this.getDOMNode('changeSpeedMenuItem');
        changeSpeedMenuItem[0].click();

        this.clickSpeedOption();
    }

    getNodeInnerTextMatchValue (nodes) {
        console.log(nodes);
        
        var nodeWithMatchValue = null;

        nodes.forEach((node) => {
            if (node.innerText === this.speedToSetOnInit) {
                nodeWithMatchValue = node;
            }
        });

        return nodeWithMatchValue;
    }

    clickSpeedOption() {
        let speedOptionsPannel = this.getDOMNode('speedOptionsPannel');

        if (speedOptionsPannel.length == 2) {
            speedOptionsPannel = speedOptionsPannel[1];
    
            var items = this.getDOMNode('speedOption', speedOptionsPannel);

            var nodeAssignedToSpeedFromInit = this.getNodeInnerTextMatchValue(items);
    
            nodeAssignedToSpeedFromInit.click();
        }
    }
}

var speedSetter = new SpeedSetter();

speedSetter.clickSettingsIcon();

