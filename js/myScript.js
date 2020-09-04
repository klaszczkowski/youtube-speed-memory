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
            }
        }

        this.initSettings = [
            {
                channelName: 'codedamn',
                preferredSpeedSetManuallyInPannel: '1.5',
                latelySetSpeed: '1.25'
            },
            {
                channelName: 'Codevolution',
                preferredSpeedSetManuallyInPannel: '0.5',
                latelySetSpeed: '0.25'
            }
        ];
    }

    getIndicatorWithPrefixAndSuffixForQuerySelector (indicatorName, value) {
        var querySelectorParts = this.usableDomTreeIndicators[indicatorName].querySelectorParts;
        return querySelectorParts[0] + value + querySelectorParts[1];
    }

    getDOMNode(element) {
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

        var elementsMatched = document.querySelectorAll(querySelector);

        return elementsMatched;
    }

    clickSettingsIcon () {
        const settingsBtn = this.getDOMNode('settingsBtn');
        settingsBtn[0].click();

        const changeSpeedMenuItem = this.getDOMNode('changeSpeedMenuItem');
        changeSpeedMenuItem[0].click();

        this.choose150();
    }

    choose150() {
        let speedOptionsPannel = this.getDOMNode('speedOptionsPannel');

        if (speedOptionsPannel.length == 2) {
            speedOptionsPannel = speedOptionsPannel[1];
    
            var items = speedOptionsPannel.querySelectorAll('.ytp-menuitem');
    
            var random = Math.floor(Math.random() * 8);
    
            items[random].click();
    
        }
    }
}

var speedSetter = new SpeedSetter();


speedSetter.clickSettingsIcon();