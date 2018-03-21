import {ExpectedConditions} from "protractor/built/index";
import logger from 'log4js-protractor-appender';


export const clickElement = async selectorName => {
    await ExpectedConditions.elementToBeClickable(selectorName);
    await selectorName.click();

    await logger.appender(selectorName + 'is clicked Successfully');
};