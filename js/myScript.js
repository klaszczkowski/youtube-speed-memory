chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);


class SpeedSetter {
    constructor() {
        this.player;
        this.buttons;
        this.settingsBtn;
        this.changeSpeedBtn;
        this.speedOptions;

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
            }
        };

        this.domTreeElementsIndicators = {
            settingsBtn: {
                classList: ['ytp-settings-button']
            },
            changeSpeedMenuItem: {
                classList: ['ytp-menuitem'],
                role: 'menuitem'
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

        return document.querySelector(querySelector);
    }

    checkIfStringValueInIterableObject(value, object) {
        var i;

        for (i = 0; i < object.length; i++) {
            if (value == object[i]) return true;
        }

        return false;
    }


    clickSettingsIcon () {
        const btn = this.getDOMNode('settingsBtn');
        btn.click();

        setTimeout(() => {
            
        }, 3000)

        this.changeSpeedBtn = this.getDOMNode('changeSpeedMenuItem');
            this.changeSpeedBtn.click();
    }

    choose150() {
        this.speedOptions = document.querySelectorAll('.ytp-panel');
        if (this.speedOptions.length == 2) {
            if (this.speedOptions) this.speedOptions = this.speedOptions[1];
    
            var items = this.speedOptions.querySelectorAll('.ytp-menuitem');
    
            var random = Math.floor(Math.random() * 8);
    
            items[random].click();
    
        } 
    }
}

var speedSetter = new SpeedSetter();


speedSetter.clickSettingsIcon();