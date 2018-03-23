import {ExpectedConditions} from "protractor/built/index";

export const clickElement = async selectorName => {
    await ExpectedConditions.elementToBeClickable(selectorName);
    await selectorName.click();
};